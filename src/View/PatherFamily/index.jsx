import React from 'react'
import { HeaderFamily, NavbarFamily } from '../../Components/PatherFamily'
import {Footer} from '../../Components/Public'
import Breadcrumb from '../../Constants/Breadcrumbs/Breadcrumbs'
export default function IndexFamily() {
  return (
    <div>
      <NavbarFamily/>
      <div className='flex container mx-auto justify-center'>
        <Breadcrumb
          path={'Inicio'}
        />
      </div>
      <HeaderFamily/>

      <Footer/>
    </div>
  )
}
