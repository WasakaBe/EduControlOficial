import React, { useState } from 'react';
import './HeaderFamily.css';
import { Link } from 'react-router-dom';
import { exampleG2 } from '../../../Image';
export default function HeaderFamily() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='container'>
      <button className='add-student-button'>Agregar Nuevo Alumno</button>
      <div className='carousel-container'>
        <div className='image-container'>
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
              src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <Link to='/DatesAlumn'>
         <button className='view-more-button'>Ver más</button>
              </Link>
              </div>
            </div>
            
          </div>
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
              src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <Link to='/IndexAlumn'>
         <button className='view-more-button'>Ver más</button>
              </Link>
              </div>
            </div>
            
          </div>
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
              src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <button className='view-more-button'>Ver más</button>
              </div>
            </div>
            
          </div>
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
           src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <Link to='/IndexAlumn'>
         <button className='view-more-button'>Ver más</button>
              </Link>
               
              </div>
            </div>
            
          </div>

          {/* Agrega más imágenes aquí con la misma estructura */}
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
              src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <button className='view-more-button'>Ver más</button>
              </div>
            </div>
            
          </div>
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
             src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <button className='view-more-button'>Ver más</button>
              </div>
            </div>
            
          </div>
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
            src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <button className='view-more-button'>Ver más</button>
              </div>
            </div>
            
          </div>
          <div
            className='family-img'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <img
             src={exampleG2}
              alt='imagen'
            />
            <div className={`image-details ${showDetails ? 'visible' : ''}`}>
              <div className='details-content'>
                <h3>Nombre:</h3>
                <span>Alejandra Monserrat</span>
                <h3>Apellidos:</h3>
                <span>Juarez Espinoza</span>
                <button className='view-more-button'>Ver más</button>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
