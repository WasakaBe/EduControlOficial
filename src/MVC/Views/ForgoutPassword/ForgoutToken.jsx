import React, { useState } from 'react';
import { Footer, Navbar } from '../../../Components/Public';
import { useNavigate ,useParams} from 'react-router-dom';

export default function ForgoutToken() {
  const { correo } = useParams();
  const navigate = useNavigate();
  const [tokenIngresado, setTokenIngresado] = useState('');
  const [error, setError] = useState('');
  const [mensajeValidacion, setMensajeValidacion] = useState('');

  const handleTokenChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[A-Z0-9]*$/;

    if (regex.test(inputValue)) {
      setTokenIngresado(inputValue);
      setError('');
    } else {
      setTokenIngresado('');
      setError('Ingrese solo caracteres alfanuméricos en mayúsculas.');
    }
  };

  const handleConfirmToken = async () => {
    try {
      const response = await fetch(`http://192.168.1.24:40009/verify-token/${tokenIngresado}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMensajeValidacion(data.message);
      } else {
        setMensajeValidacion('Token inválido');
      }
    } catch (error) {
      setMensajeValidacion('Error al verificar el token. Inténtelo nuevamente.');
    }
  };

  const handleSiguiente = () => {
    navigate(`/ForgoutUpdate/${correo}`);
  };

  return (
    <div>
      <Navbar />
      <div className='container-forgout'>
        <div className='forgout-form'>
          <label>Correo Electrónico:</label>
          <p>{correo}</p>
          <br></br>
          <label>Ingrese el TOKEN:</label>
          <input
            type='text'
            value={tokenIngresado}
            onChange={handleTokenChange}
            style={{ border: error ? '2px solid red' : '2px solid green' }}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button onClick={handleConfirmToken}>Confirmar Token</button>
          <br></br>
          <br></br>
          {mensajeValidacion && (
            <>
           
              <p>{mensajeValidacion}</p>
              <button onClick={handleSiguiente}>Siguiente</button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
