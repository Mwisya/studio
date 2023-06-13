import React from 'react'
import Aside from '../asidenav/Aside'
import AboutInfo from './aboutInfo/AboutInfo'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className='layout'>
      <div className='layout-aside'>
        <Aside/>
      </div>
      <div className='layout-data'>
        <AboutInfo/>
      </div>
    </div>
  )
}

export default AboutUs