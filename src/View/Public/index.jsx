import React from 'react'
import {Navbar,Carrusel,Welcome,Inscription,Activities,Special,Footer} from '../../Components/Public'
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
      <Special/>
      <Footer/>
    </div>
  )
}
