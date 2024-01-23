import React, { useState ,useEffect} from 'react';
import { Footer, Navbar } from '../../../../Components/Public';

function RegisterFamily() {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [telefono, setTelefono] = useState('');
  const [seguroSocial, setSeguroSocial] = useState('');
  const [curp, setCurp] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [nombreValido, setNombreValido] = useState(true);
  const [apellidoPaternoValido, setApellidoPaternoValido] = useState(true);
  const [apellidoMaternoValido, setApellidoMaternoValido] = useState(true);
  const [edadValida, setEdadValida] = useState(true);
  const [correoValido, setCorreoValido] = useState(true);
  const [contrasenaValida, setContrasenaValida] = useState(true);
  const [telefonoValido, setTelefonoValido] = useState(true);
  const [seguroSocialValido, setSeguroSocialValido] = useState(true);
  const [curpValido, setCurpValido] = useState(true);
  const [sexos, setSexos] = useState([]);
  const [sexo, setSexo] = useState('');

  const handleNombreChange = (event) => {
    const regex = /^[a-zA-Z\sáéíóúÁÉÍÓÚ]*$/;
    const esValido = regex.test(event.target.value) || event.target.value === '';
    setNombre(event.target.value);
    setNombreValido(esValido);
  };
  const handleApellidoPaternoChange = (event) => {
    const regex = /^[a-zA-Z\sáéíóúÁÉÍÓÚ]*$/;
    const esValido = regex.test(event.target.value) || event.target.value === '';
    setApellidoPaterno(event.target.value);
    setApellidoPaternoValido(esValido);
  };
  const handleApellidoMaternoChange = (event) => {
    const regex = /^[a-zA-Z\sáéíóúÁÉÍÓÚ]*$/;
    const esValido = regex.test(event.target.value) || event.target.value === '';
    setApellidoMaterno(event.target.value);
    setApellidoMaternoValido(esValido);
  };
  const handleEdadChange = (event) => {
    const edadIngresada = parseInt(event.target.value, 10);
    const esValida = !isNaN(edadIngresada) && edadIngresada >= 15 && edadIngresada <= 80;
    setEdad(event.target.value);
    setEdadValida(esValida);
  };
  const handleCorreoChange = (event) => {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const esValido = regexCorreo.test(event.target.value) || event.target.value === '';
    setCorreo(event.target.value);
    setCorreoValido(esValido);
  };
  const handleContrasenaChange = (event) => {
    const regexMayuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    const esValida =
      event.target.value.length >= 8 &&
      regexMayuscula.test(event.target.value) &&
      regexMinuscula.test(event.target.value) &&
      regexNumero.test(event.target.value) &&
      regexEspecial.test(event.target.value);
    setContrasena(event.target.value);
    setContrasenaValida(esValida);
  };
  const handleTelefonoChange = (event) => {
    const regexTelefono = /^\+\d{10,12}$/;
    const esValido = regexTelefono.test(event.target.value) || event.target.value === '';
    setTelefono(event.target.value);
    setTelefonoValido(esValido);
  };
  const handleSeguroSocialChange = (event) => {
    const regexSeguroSocial = /^\d{11}$/;
    const esValido = regexSeguroSocial.test(event.target.value) || event.target.value === '';
    setSeguroSocial(event.target.value);
    setSeguroSocialValido(esValido);
  };
  const handleCurpChange = (event) => {
    const regexCurp = /^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{6}[0-9]{1}$/;
    const esValido = regexCurp.test(event.target.value) || event.target.value === '';
    setCurp(event.target.value);
    setCurpValido(esValido);
  };
  const handleAceptaTerminosChange = (event) => {
    setAceptaTerminos(event.target.checked);
  };
  useEffect(() => {
    fetch('http://192.168.0.105:40009/sexs')
      .then(response => response.json())
      .then(data => {
        setSexos(data.sexs);
        if (data.sexs.length > 0) {
          setSexo(data.sexs[0].id_sexs.toString());
        }
      })
      .catch(error => console.error('Error fetching sexs:', error));
  }, []);
  const handleRegistro = async () => {
    if (
      nombreValido && apellidoPaternoValido && apellidoMaternoValido && edadValida &&
      correoValido && contrasenaValida  && telefonoValido &&
      seguroSocialValido && curpValido && aceptaTerminos
    ) {
      const datosRegistro = {
        name_users: nombre,
        app_users: apellidoPaterno,
        apm_users: apellidoMaterno,
        age_users: edad,
        correo_users: correo,
        pwd_users: contrasena,
        no_control_users: 'null',
        phone_users: telefono,
        seguro_social_users: seguroSocial,
        curp_users: curp,
        idRol: 5,
        idSexo: parseInt(sexo),
        idParental:15,
      };

      try {
        const response = await fetch('http://192.168.0.105:40009/users/insert', {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(datosRegistro), });
        if (response.ok) {
          alert('Registro exitoso');
        } else { alert('No se pudo completar el registro. Inténtelo nuevamente.');}
      } catch (error) {alert('Error al conectar con la API. Inténtelo nuevamente.');}
    } else {  alert('No puede registrarse. Responda correctamente todos los campos.');}};

  return (
    <div>
      <Navbar />
      <div className="container-registers">
        <h2>Registro de Familiar</h2>
        <h6>Por favor rellene los campos necesarios</h6>
        <div className='form-register'>
          <form >
            <label>Nombre</label>
            <input
              type='text'
              placeholder='Ingrese su nombre'
              value={nombre}
              onChange={handleNombreChange}
              style={{ borderColor: nombreValido ? 'green' : 'red' }}
            />
            {!nombreValido && (
              <p style={{ color: 'red' }}>Solo se aceptan caracteres de texto (áéíóú).</p>
            )}

            <label> Apellido Paterno</label>
            <input
              type='text'
              placeholder='Ingrese su Apellido Paterno'
              value={apellidoPaterno}
              onChange={handleApellidoPaternoChange}
              style={{ borderColor: apellidoPaternoValido ? 'green' : 'red' }}
            />
            {!apellidoPaternoValido && (
              <p style={{ color: 'red' }}>Solo se aceptan caracteres de texto (áéíóú).</p>
            )}

            <label>Apellido Materno</label>
            <input
              type='text'
              placeholder='Ingrese su Apellido Materno'
              value={apellidoMaterno}
              onChange={handleApellidoMaternoChange}
              style={{ borderColor: apellidoMaternoValido ? 'green' : 'red' }}
            />
            {!apellidoMaternoValido && (
              <p style={{ color: 'red' }}>Solo se aceptan caracteres de texto (áéíóú).</p>
            )}

            <label>Edad</label>
            <input
              type='text'
              placeholder=''
              value={edad}
              onChange={handleEdadChange}
              style={{ borderColor: edadValida ? 'green' : 'red' }}
            />
            {!edadValida && (
              <p style={{ color: 'red' }}>La edad debe estar entre 15 y 80 años.</p>
            )}

            <label>Correo</label>
            <input type='email' placeholder='Ingrese su correo electronico' value={correo}
      onChange={handleCorreoChange}
      style={{ borderColor: correoValido ? 'green' : 'red' }} />
       {!correoValido && (
      <p style={{ color: 'red' }}>Ingrese una dirección de correo electrónico válida.</p>
    )}
            <label>Contrasena</label>
            <input type='password' placeholder='Ingrese su contrasena' value={contrasena}
      onChange={handleContrasenaChange}
      style={{ borderColor: contrasenaValida ? 'green' : 'red' }} />
       {!contrasenaValida && (
      <p style={{ color: 'red' }}>
        La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial.
      </p>
    )}
            <label>Telefono</label>
            <input type='text' placeholder='Ingrese su telefono' value={telefono}
      onChange={handleTelefonoChange}
      style={{ borderColor: telefonoValido ? 'green' : 'red' }}/>
       {!telefonoValido && (
      <p style={{ color: 'red' }}>Ingrese un número de teléfono válido en el formato +123456789012.</p>
    )}
            <label>Seguro Social</label>
            <input type='text' placeholder='Ingrese su seguro social'  value={seguroSocial}
      onChange={handleSeguroSocialChange}
      style={{ borderColor: seguroSocialValido ? 'green' : 'red' }}/>
       {!seguroSocialValido && (
      <p style={{ color: 'red' }}>Ingrese un número de seguro social válido con exactamente 11 dígitos.</p>
    )}
            <label>CURP</label>
            <input type='text' placeholder='Ingrese su curp'   value={curp}
      onChange={handleCurpChange}
      style={{ borderColor: curpValido ? 'green' : 'red' }} />
{!curpValido && (
      <p style={{ color: 'red' }}>Ingrese un CURP válido con exactamente 18 caracteres y que cumpla con las reglas específicas.</p>
    )}
     <label>Sexo</label>
            <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              {sexos.map(sex => (
                <option key={sex.id_sexs} value={sex.id_sexs.toString()}>
                  {sex.name_sexs}
                </option>
              ))}
            </select>


            <div className="terms-checkbox">
              <label> Aceptas Terminos y Condiciones
                <input type='checkbox' checked={aceptaTerminos}
          onChange={handleAceptaTerminosChange} />
              </label>
            </div>
            {!aceptaTerminos && (
      <p style={{ color: 'red',margin:'10px' }}>Debes aceptar los términos y condiciones para continuar.</p>
    )}
            <button type="submit" onClick={handleRegistro}>Registrarse</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default RegisterFamily;