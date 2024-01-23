import React from 'react'
import './SchoolActivities.css'
import { logofutbol, logobasketball,logodance, logovoleibol, logomusical, logocorrer, logodibujo, logoajedres } from '../../../Image'
export default function SchoolActivities() {
  return (
    <div className='container-school'>
      <div className='special-ctn-school'>
            <div className='circle-special-school'>
                <h3>Actividades</h3>
                <h2>Culturales</h2>
                <p>La institución educativa ofrece las siguientes Actividades Culturales</p>
            </div>
           <div className='logo-special-school'>
           <div className='logo-futbol'>
                 <img src={logofutbol} alt='Futbol'/>
                  <div className='dates-futbol'>
                      <h2>FUTBOL</h2>
                      <button>Ver más</button>
                  </div>
                  <div className='logo-basketball'>
                 <img src={logobasketball} alt='Basketball'/>
                 <div className='dates-basketball'>
                      <h2>BASKETBALL</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-dance'>
                 <img src={logodance} alt='Dance'/>
                 <div className='dates-dance'>
                      <h2> DANZA</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-voleibol'>
                 <img src={logovoleibol} alt='Voleibol'/>
                 <div className='dates-voleibol'>
                      <h2>VOLEIBOL</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-canto'>
                 <img src={logomusical} alt='Canto'/>
                 <div className='dates-canto'>
                      <h2>CANTO</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-atletismo'>
                 <img src={logocorrer} alt='Atletismo'/>
                 <div className='dates-atletismo'>
                      <h2>ATLETISMO</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-arte'>
                 <img src={logodibujo} alt='Arte'/>
                 <div className='dates-arte'>
                      <h2>ARTE</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-ajedres'>
                 <img src={logoajedres} alt='Ajedrez'/>
                 <div className='dates-ajedres'>
                      <h2>AJEDREZ</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              </div>
           </div>
              
            </div>
            
    </div>
     
    
  )
}
