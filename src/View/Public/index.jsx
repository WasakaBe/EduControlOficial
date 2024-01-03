import React from 'react'
import {Navbar,Carrusel,Welcome,Inscription,Activities,Special,Footer, AcercaPublic,SchoolActivities, Contact} from '../../Components/Public'
import { TextActivities } from '../../Constants'
export default function Index() {
  return (
    <div>
      <Navbar/>
      <Carrusel/>
      <Welcome/> 
      <TextActivities/>
      <Activities/>
      <Inscription/>
      <SchoolActivities/>
      <AcercaPublic/>
      <Special/>
      <Contact/>
      <Footer/>
    </div>
  )
}
