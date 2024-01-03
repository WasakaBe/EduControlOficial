/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './Contact.css'

export default function Contact() {
 const MAPURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.098299591696!2d-98.4068462247401!3d21.148485980530932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d726fcf9f14585%3A0x897e90570d60ad67!2sCBTa%20No.%205!5e0!3m2!1ses!2smx!4v1704246777334!5m2!1ses!2smx";

  return (
     <div className='container-contatc' id='Contact'>
       <h1 className='contact-title'>Contactanos</h1>
       <div className='dates-contacts'>
         <iframe src={MAPURL}/>
       <form className='contact-form'>
         <div className='input-container'>
           <input className='contact-input' type='text' placeholder=' ' required />
           <label className='contact-label'>Nombre</label>
         </div>
         <div className='input-container'>
           <input className='contact-input' type='email' placeholder=' ' required />
           <label className='contact-label'>Correo</label>
         </div>
         <div className='input-container'>
           <textarea className='contact-input' rows='5' placeholder=' ' required />
           <label className='contact-label'>Mensaje</label>
         </div>
         <button className='contact-btn' type='submit'>Enviar</button>
       </form>
       </div>
      
     </div>
  )
 }