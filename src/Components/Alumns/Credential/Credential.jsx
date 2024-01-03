import React from 'react'
import './Credential.css'
export default function Credential() {
  const alumns = 'https://i.pinimg.com/564x/04/69/a8/0469a8862b6e1071e2ba423afc63ea25.jpg'
  return (
    <div className='container-credential'>
        <div className='credentials'>
          <div className='section-foto'>
              <img src={alumns} alt='alumn'/>
              <p className='status'>Estatus: <span>Activo</span> </p>
          </div>
          <div className='section-dates'>
              <div className='dates'>
                  <h2>Nombre:</h2>
                  <span>Gabriela</span>
              </div>
              <div className='dates'>
                  <h2>Apellido Paterno:</h2>
                  <span>Gómez</span>
              </div>
              <div className='dates'>
                  <h2>Apellido Materno:</h2>
                  <span>Pérez</span>
              </div>
              <div className='dates'>
                  <h2>Edad:</h2>
                  <span>16</span>
              </div>
              <div className='dates'>
                  <h2>Sexo:</h2>
                  <span>Femenino</span>
              </div>
              <div className='dates'>
                  <h2>Carrera:</h2>
                  <span>Técnico en Programación</span>
              </div>
              <div className='dates'>
                  <h2>Grado:</h2>
                  <span>5</span>
              </div>
              <div className='dates'>
                  <h2>Grupo:</h2>
                  <span>B</span>
              </div>
              <div className='dates'>
                  <h2>Tutor:</h2>
                  <span>MVZ. Juan Osorio De la Cruz Hernández</span>
              </div>
              <div className='dates'>
                  <h2>Origen:</h2>
                  <span>San Felipe</span>
              </div>
          </div>      
        </div>        
    </div>
  )
}
