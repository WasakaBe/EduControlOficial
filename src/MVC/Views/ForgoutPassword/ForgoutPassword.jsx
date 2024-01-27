import React, { useState } from 'react';
import { Footer, Navbar } from '../../../Components/Public';
import { useNavigate } from 'react-router-dom';
import './ForgoutPassword.css';
import { Breadcrumbs,Api } from '../../../Constants';
export default function ForgoutPassword() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [correoValido, setCorreoValido] = useState(true);
  const [correoEncontrado, setCorreoEncontrado] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleVerifyCorreo = async () => {
    if (correoValido) {
      try {
        const response = await fetch(`${Api}check-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ correo_users: correo }),
        });

        if (response.ok) {
          const data = await response.json();

          if (data.exists) {
            setCorreoEncontrado(true);
            
            const tokenResponse = await fetch(`${Api}get-token`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ correo_users: correo }),
            });

            if (tokenResponse.ok) {
              const tokenData = await tokenResponse.json();
              setToken(tokenData.token_users);
            } else {
              setError('Error al obtener el token. Inténtelo nuevamente.');
            }
          } else {
            setError('Correo no encontrado. Intente con otro correo.');
          }
        } else {
          setError('Error al verificar el correo. Inténtelo nuevamente.');
        }
      } catch (error) {
        setError('Error al conectar con la API. Inténtelo nuevamente.');
      }
    }
  };

  const handleReturnToLogin = () => {
    navigate(`/ForgoutToken/${correo}`);
  };

  return (
    <div>
      <Navbar />
      <div className='flex container mx-auto justify-center'>
        <Breadcrumbs path={'Recuperar Contrasena'} />
      </div>
      <div className='container-forgout'>
        <div className='forgout-form'>
          <h2>Recuperar Contraseña</h2>

          {correoEncontrado ? (
            <>
              <p>Correo Encontrado :</p>
              <p>{correo}</p>
              <p>Copie el TOKEN: {token}</p>
              <button onClick={handleReturnToLogin}>Siguiente</button>
            </>
          ) : null}

          {!correoEncontrado && (
            <>
              <label>Correo Electrónico:</label>
              <input
                type='email'
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                onBlur={() => setCorreoValido(/^\S+@\S+\.\S+$/.test(correo))}
                style={{ border: correoValido ? '1px solid white' : '1px solid red' }}
              />
              {!correoValido && <p>Ingrese correctamente el correo.</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button onClick={handleVerifyCorreo}>Verificar Correo</button>
            </>
          )}
        </div>
      </div>
 
      <Footer />
    </div>
  );
}
