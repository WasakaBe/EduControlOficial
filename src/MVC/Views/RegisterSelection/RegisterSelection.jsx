import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../../../Components/Public';
import './RegisterSelection.css'
export default function RegisterSelection() {
  const history = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };
  const handleNextButtonClick = () => {
    // Redirige a la ruta correspondiente según la opción seleccionada
    switch (selectedUserType) {
      case 'admin':
        history('/RegisterAdmin');
        break;
      case 'alumno':
        history('/RegisterAlumn');
        break;
      case 'docente':
        history('/RegisterDocent');
        break;
      case 'docenteCE':
        history('/RegisterDocentCE');
        break;
      case 'familiar':
        history('/RegisterFamily');
        break;
      default:
        history('/RegisterSelection');
        break;
    }
  };
  return (
    <div>
      <Navbar />
      <div className='container-register-selection'>
        <div className='register-title'>Seleccione el tipo de usuario con el que se va a registrar</div>
        <div className='register-subtitle'>Solo puede elegir una opción</div>
        <div className='checkbox-container'>
          <label className='checkbox-label'>
            <input
              type='radio'
              name='userType'
              value='admin'
              checked={selectedUserType === 'admin'}
              onChange={handleUserTypeChange}
            /> Administrador
          </label>
          <label className='checkbox-label'>
            <input
              type='radio'
              name='userType'
              value='alumno'
              checked={selectedUserType === 'alumno'}
              onChange={handleUserTypeChange}
            /> Alumno
          </label>
          <label className='checkbox-label'>
            <input
              type='radio'
              name='userType'
              value='docente'
              checked={selectedUserType === 'docente'}
              onChange={handleUserTypeChange}
            /> Docente
          </label>
          <label className='checkbox-label'>
            <input
              type='radio'
              name='userType'
              value='docenteCE'
              checked={selectedUserType === 'docenteCE'}
              onChange={handleUserTypeChange}
            /> Docente CE
          </label>
          <label className='checkbox-label'>
            <input
              type='radio'
              name='userType'
              value='familiar'
              checked={selectedUserType === 'familiar'}
              onChange={handleUserTypeChange}
            /> Familiar
          </label>
        </div>
        <button className='next-button'onClick={handleNextButtonClick}>Siguiente</button>
      </div>
      <Footer />
    </div>
  );
}
