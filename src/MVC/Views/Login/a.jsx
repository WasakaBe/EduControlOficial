import React, { useState } from 'react';
import './Login.css';
import { Footer, Navbar } from '../../../Components/Public';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const history = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    setValidEmail(isValid);
  };

  const handleNextClick = async () => {
    if (email.trim() === '' || !validEmail) {
      alert('Llene el campo requerido de manera correcta.');
    } else {
      try {
        setLoading(true);

        const response = await axios.post('http://192.168.1.24:40009/login', {
          correo_users: email,
          pwd_users: password,
        });

        setLoading(false);

        if (response.status === 200) {
          // La solicitud fue exitosa, puedes manejar la respuesta aquí
          console.log(response.data);
          // Redireccionar o hacer lo que necesites con la respuesta
          setShowPasswordForm(true);
        } else {
          // Manejar otros casos de respuesta si es necesario
          console.error('Error en la respuesta:', response);

          if (response.status === 401) {
            // Si el código de estado es 401, el correo no existe
            alert('Correo electrónico no válido');
          }
        }
      } catch (error) {
        // Manejar errores de la solicitud
        console.error('Error al iniciar sesión:', error);
        setLoading(false);
      }
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const isValidPassword = /^(?=.*[A-Za-z0-9\d@$!%*?&]).{8,}$/.test(event.target.value);
    setValidPassword(isValidPassword);
  };

  const handleSignInClick = () => {
    if (password.trim() === '') {
      alert('Por favor, rellene el campo de contraseña correctamente.');
    } else if (validPassword) {
      alert('Inicio de sesión exitoso. ¡Bienvenido!');
      history('/IndexAlumn');
    } else {
      alert('Llene el campo de contraseña correctamente.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container-login'>
        <div className='form-container'>
          <div className='form-title'>Iniciar Sesión</div>
          {loading && (
            <div className='loading-container'>
              <div className='loading-text'>Cargando....</div>
              <div className='loading-bar-container'>
                <div className='loading-bar'></div>
              </div>
            </div>
          )}
          {!showPasswordForm && !loading && (
            <div className={`input-container ${validEmail ? '' : 'invalid'}`}>
              <label className='input-label'>Ingrese su correo electrónico</label>
              <input
                type='text'
                className={`input-field ${validEmail ? 'valid' : 'invalid'}`}
                value={email}
                onChange={handleEmailChange}
              />
              {!validEmail && (
                <div className='error-message'>Por favor, ingrese un correo electrónico válido.</div>
              )}
              <button className='button3' onClick={handleNextClick}>
                Siguiente
              </button>
            </div>
          )}
          {showPasswordForm && (
            <>
              <div className={`input-container ${validPassword ? '' : 'invalid'}`}>
                <label className='input-label'>Ingrese su contraseña</label>
                <input
                  type='password'
                  className={`input-field ${validPassword ? 'valid' : 'invalid'}`}
                  value={password}
                  onChange={handlePasswordChange}
                />
                {!validPassword && (
                  <div className='error-message'>La contraseña debe contener al menos 8 caracteres</div>
                )}
              </div>
              <button className='button3' onClick={handleSignInClick}>
                Iniciar Sesión
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
