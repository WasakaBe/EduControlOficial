import React from 'react'
import './SectCredencial.css'
import { exampleG2 } from '../../../Image'
export default function SectCredencial() {
  return (
    <div className='container-sect-credential'>
      {/*seccion de credenciales creadas */}
        <div className='sect-credential'>
            <div className='card-sect-credential'>
                <div className='sect-logo-credential'>
                  <h2>SEP</h2>
                </div>
                <img src={exampleG2} alt='imagen alumno'/>
                <div className='dates-alumn-sect'>
                  <h2>Alumno:</h2>
                  <span>Jose Jose Jose Jose</span>                
                </div>
                <div className='dates-alumn-sect'>
                  <h2>Grado y Grupo:</h2>
                  <span>5B</span>                
                </div>
                <div className='dates-alumn-sect'>
                  <h2>Carrera:</h2>
                  <span>Tecnico en Ofimatic</span>                
                </div>
                <div className='dates-alumn-sect'>
                  <h2>Num Folio:</h2>
                  <span>159875326429048</span>                
                </div>

            </div>

            <div className='card-sect-credential'>
                <div className='sect-logo-credential'>
                  <h2>SEP</h2>
                </div>
                <img src={exampleG2} alt='imagen alumno'/>
                <div className='dates-alumn-sect'>
                  <h2>Alumno:</h2>
                  <span>Maria Guadalupe Hernandez Monserrat</span>                
                </div>
                <div className='dates-alumn-sect'>
                  <h2>Grado y Grupo:</h2>
                  <span>5B</span>                
                </div>
                <div className='dates-alumn-sect'>
                  <h2>Carrera:</h2>
                  <span>Tecnico en Ofimatic</span>                
                </div>
                <div className='dates-alumn-sect'>
                  <h2>Num Folio:</h2>
                  <span>159875326429048</span>                
                </div>

            </div>
        </div>
    </div>
  )
}
