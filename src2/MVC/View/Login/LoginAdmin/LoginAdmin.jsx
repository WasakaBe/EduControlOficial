import React from 'react'
import './LoginAdmin.css'
import {Navbar,Footer} from '../../../../Components/Public'
import { back } from '../../../../Image'
export default function LoginAdmin() {
  return (
    <div>
    <Navbar/>
      <div className='container-loginAlumn'>
        <div className='container-info-loginAlumn'>
          <div className='welcome-login'>     
            <h2>Bienvenido de vuelta!</h2>
            <div className='linea'></div>
            <p className='login-text'>
            Nos emociona tenerte de regreso en nuestra plataforma educativa. Prepárate para sumergirte en un mundo de aprendizaje interactivo y descubrimiento continuo. Entra para explorar recursos actualizados, conectar con compañeros de clase y acceder a contenido educativo exclusivo.
            </p>
            <img src={back} alt='img2'/>
          </div>
          <div className='form-login'>
            <h2>Iniciar Sesion</h2>
            <div className='linea'></div>
            <form>
              <label>Correo Electronico</label>
              <input type='text' placeholder='ingrese su correo electronico' />
              <label>Matricula o Folio</label>
              <input type='text' placeholder='ingrese su matricula o folio' />
              <label>Contrasena </label>
              <input type='password' placeholder='ingrese su contrasena' />
              <button>Iniciar</button>
              <a className='olv' href='/'>Olvidaste tu contrasena?</a>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
</div>
  )
}
