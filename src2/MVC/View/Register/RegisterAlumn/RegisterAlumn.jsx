import React from 'react'
import './RegisterAlumn.css'
import { Footer, Navbar } from '../../../../Components/Public'
export default function RegisterAlumn() {
  return (
    <div>
        <Navbar/>
          <div className='container-register-alumn'>
              <h2>Registro del Alumno</h2>
              <div className='register-form'>
                  <form>
                    <label>Nombre del Alumno</label>
                    <input placeholder='ingrese su nombre completo' type='text'/>
                    <label>Apellido Paterno del Alumno</label>
                    <input placeholder='ingrese su Apellido paterno' type='text'/>
                    <label>Apellido Materno del Alumno</label>
                    <input placeholder='ingrese su Apellido materno' type='text'/>
                    <label>Número de Folio</label>
                    <input placeholder='ingrese su número de folio' type='text'/>
                    <label>Correo Electronico Escolar</label>
                    <input placeholder='ingrese su correo escolar' type='text'/>
                    <label>Contraseña del Alumno</label>
                    <input placeholder='ingrese su contraseña' type='password'/>
                    <label>Seleccione su sexo</label>
                    <select>
                      <option>Masculino</option>
                      <option>Femenino</option>
                    </select>
                    <label>Acepta Terminos y Condicionea</label>
                    <input type="checkbox" className='check'/> 
                  </form>
                      <button className='register-btn'>Registrarse</button>
              </div>
          </div>
        <Footer/>
    </div>
  )
}
