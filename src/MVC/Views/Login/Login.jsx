// eslint-disable-next-line 
import React, { useState } from 'react';
import './Login.css';
import { Footer, Navbar } from '../../../Components/Public';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [loadingEmail, setLoadingEmail] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [loginError, setLoginError] = useState('');

  const history = useNavigate();

  const handlePwd = () => {
    history('/ForgoutPassword');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    setValidEmail(isValid);
  };

  const handleNextClick = () => {
    if (email.trim() === '' || !validEmail) {
      alert('Llene el campo requerido de manera correcta.');
    } else {
      setLoadingEmail(true);

      // Verifica primero si el correo está disponible (registrado)
      axios.post('http://192.168.1.24:40009/check-email', {
        correo_users: email,
      })
        .then(response => {
          setLoadingEmail(false);
          if (response.data.exists) {
            // Si el correo existe, muestra el mensaje y activa el formulario de contraseña
            alert('Correo disponible. Puede continuar con el proceso de inicio de sesión.');
            setShowPasswordForm(true);
          } else {
            // Si el correo no existe, muestra un mensaje indicándolo
            alert('El correo proporcionado no está registrado. Por favor, regístrese primero.');
          }
        })
        .catch(error => {
          setLoadingEmail(false);
          if (error.response) {
            // Si hay una respuesta del servidor, pero no es 200, mostramos el mensaje de error del servidor
            alert(`Error en la verificación de correo. ${error.response.data.error}`);
          } else if (error.request) {
            // Si no se pudo realizar la solicitud, mostramos un mensaje de error genérico
            alert('Error al intentar verificar el correo. Inténtelo de nuevo.');
          } else {
            // Si ocurrió un error durante la configuración de la solicitud, mostramos el mensaje de error del error
            alert(`Error en la configuración de la solicitud. ${error.message}`);
          }
          console.error('Error en la verificación de correo:', error);
        });
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
      // Realiza la solicitud de inicio de sesión a la API
      setLoadingPassword(true);
      axios.post('http://192.168.1.24:40009/login', {
        correo_users: email,
        pwd_users: password,
      })
        .then(response => {
          setLoadingPassword(false);
          alert('Inicio de sesión exitoso. ¡Bienvenido!');
          history('/IndexAlumn');
        })
        .catch(error => {
          setLoadingPassword(false);
          setLoginAttempts(loginAttempts + 1);

          if (loginAttempts >= 3) {
            setLoginError('Ha excedido el límite de intentos. Haga clic en "Olvidaste tu contraseña".');
          } else {
            setLoginError('Credenciales incorrectas. Inténtelo de nuevo.');
          }

          console.error('Error en la solicitud de inicio de sesión:', error);
        });
    } else {
      alert('Llene el campo de contraseña correctamente.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container-login'>
        {loadingEmail ? (
          <div className='loading-container'>
            <div className='loading-text'>Cargando....</div>
            <div className='loading-bar-container'>
              <div className='loading-bar'></div>
            </div>
          </div>
        ) : (
          <div className='form-container'>
            <div className='form-title'>Iniciar Sesión</div>
            {showPasswordForm ? (
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
                    <div className='error-message'>
                      La contraseña debe contener al menos 8 caracteres
                    </div>
                  )}
                </div>
                <button className='button3' style={{ marginRight: '20px' }} onClick={handlePwd}>
                  Olvidaste tu contraseña
                </button>
                <button className='button3' onClick={handleSignInClick}>
                  Iniciar Sesión
                </button>
              </>
            ) : (
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
            {loginError && <div className='error-message'>{loginError}</div>}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
