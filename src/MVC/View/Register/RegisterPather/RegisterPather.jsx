import React from 'react'
import { Footer, Navbar } from '../../../../Components/Public'
export default function RegisterPather() {
  return (
    <div>
        <Navbar/>
          <div className='container-register-alumn'>
              <h2>Registro del Padre de Familia </h2>
              <div className='register-form'>
                  <form>
                    <label>Nombre</label>
                    <input placeholder='ingrese su nombre completo' type='text'/>
                    <label>Apellido Paterno</label>
                    <input placeholder='ingrese su Apellido paterno' type='text'/>
                    <label>Apellido Materno</label>
                    <input placeholder='ingrese su Apellido materno' type='text'/>
                    <label>Número de Folio del Alumno</label>
                    <input placeholder='ingrese su número de folio' type='text'/>
                    <label>Relacion del Alumno</label>
                    <select>
                      <option>Padre</option>
                      <option>Madre</option>
                      <option>Padrastro</option>
                      <option>Madratras</option>
                      <option>Abuelo</option>
                      <option>Abuela</option>
                    </select>
                    <label>Correo Electronico</label>
                    <input placeholder='ingrese su correo escolar' type='text'/>
                    <label>Contraseña</label>
                    <input placeholder='ingrese su contraseña' type='password'/>
                    <label>Telefono</label>
                    <input placeholder='ingrese su numero telefonico' type='text'/>
                    <label>Seleccione su sexo</label>
                    <select>
                      <option>Masculino</option>
                      <option>Femenino</option>
                    </select>
                    <label>Acepta Terminos y Condicionea</label>
                    <input type="checkbox"/> 
                  </form>
                      <button className='register-btn'>Registrarse</button>
              </div>
          </div>
        <Footer/>
    </div>
  )
}
