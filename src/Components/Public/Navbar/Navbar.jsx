import React, { useState } from 'react'
import './Navbar.css'
import { logoCbta } from '../../../Image';
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='container-navbar'>
      <div className='navbar'>
          <div className='navbar-list'>
            <img src={logoCbta} alt='logo'/>
            <span>EduControl</span>
          </div>
          <div className='navbar-list'>
            <ul>
              <li>
                <a href='/'>Inicio</a>
              </li>
              <li>
                <a href='/'>Acerca</a>
              </li>
              <li>
                <a href='/'>Servicios <ion-icon name="caret-down-outline"></ion-icon></a>
                <ul className='list-li3'>
                        <li>
                          <a href='/'>Escolares</a>
                        </li>
                        <li>
                          <a href='/'>Becas</a>
                        </li>
                        <li>
                          <a href='/'>Trámites<ion-icon name="caret-forward-outline"></ion-icon></a>
                                  <ul className='list-li4'>
                                <li>
                                  <a href='/'>Reinscripción</a>
                                </li>
                                <li>
                                  <a href='/'>Inscripción</a>
                                </li>
                              </ul>
                        </li>
                    
                      </ul>
              </li>
              <li>
                <a href='/'>Contactos</a>
              </li>
            </ul>
          </div>
          <div className='navbar-list'>
            <ul className='navbar-sign'>
               <li className='list-signup'>
                 <a href='/' ><ion-icon name="person-circle-outline"></ion-icon>
                 </a>
                
                      <ul className='list-li'>
                        <li>
                          <a href='/'>Docente</a>
                        </li>
                        <li>
                          <a href='/'>Docente CE</a>
                        </li>
                        <li>
                          <a href='/'>Alumno</a>
                        </li>
                        <li>
                          <a href='/'>Padre de Familia</a>
                        </li>
                        <li>
                          <a href='/'>Administrador</a>
                        </li>
                      </ul>

               </li>
                   <span>|</span>

               <li className='list-signup'>
                  <a href='/'><ion-icon name="person-add-outline"></ion-icon>
                  </a>
                  <ul className='list-li2'>
                        <li>
                          <a href='/'>Docente</a>
                        </li>
                        <li>
                          <a href='/'>Docente CE</a>
                        </li>
                        <li>
                          <a href='/'>Alumno</a>
                        </li>
                        <li>
                          <a href='/'>Padre de Familia</a>
                        </li>
                        <li>
                          <a href='/'>Administrador</a>
                        </li>
                      </ul>
               </li>
            </ul>
          </div>
      </div>

      {/*BOTON DE MENU DE HAMBURGESA */}
        
         <div className='menuHamburguesa' onClick={toggleMenu}>
          <ion-icon name={isMenuOpen ? 'close' : 'menu'}></ion-icon>
        </div>
          {/* Menú desplegable */}
          {isMenuOpen && (
          <div className='mobile-menu'>
            <ul>
              <li>
                <a href='/'>Inicio</a>
              </li>
              <li>
                <a href='/'>Acerca</a>
              </li>
              <li>
                <a href='/'><ion-icon name="caret-down-outline"></ion-icon>Servicios</a>
                <ul className='list-li3'>
                  <li>
                    <a href='/'>Escolares</a>
                  </li>
                  <li>
                    <a href='/'>Becas</a>
                  </li>
                  <li>
                    <a href='/'><ion-icon name="caret-back-outline"></ion-icon>Trámites</a>
                    <ul className='list-li4'>
                      <li>
                        <a href='/'>Reinscripción</a>
                      </li>
                      <li>
                        <a href='/'>Inscripción</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/'>Contactos</a>
              </li>
              {/* Otros elementos del menú */}

            </ul>

            <div className='menu-navbar-list'>
            <ul className='navbar-sign'>
               <li className='list-signup'>
                 <a href='/' ><ion-icon name="person-circle-outline"></ion-icon>
                 </a>
                
                      <ul className='list-li-menu'>
                        <li>
                          <a href='/'>Docente</a>
                        </li>
                        <li>
                          <a href='/'>Docente CE</a>
                        </li>
                        <li>
                          <a href='/'>Alumno</a>
                        </li>
                        <li>
                          <a href='/'>Padre de Familia</a>
                        </li>
                        <li>
                          <a href='/'>Administrador</a>
                        </li>
                      </ul>

               </li>
                   <span>|</span>

               <li className='list-signup'>
                  <a href='/'><ion-icon name="person-add-outline"></ion-icon>
                  </a>
                  <ul className='list-li2-menu'>
                        <li>
                          <a href='/'>Docente</a>
                        </li>
                        <li>
                          <a href='/'>Docente CE</a>
                        </li>
                        <li>
                          <a href='/'>Alumno</a>
                        </li>
                        <li>
                          <a href='/'>Padre de Familia</a>
                        </li>
                        <li>
                          <a href='/'>Administrador</a>
                        </li>
                      </ul>
               </li>
            </ul>
          </div>

          </div>
    
        )}
    </div>
  )
}
