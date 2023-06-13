import React from 'react'
import Aside from '../asidenav/Aside'
import './services.css'
import ServicesButton from './serviceButton/ServiceButton'

const Services = () => {
  return (
    <div className='layout'>
    <div className='layout-aside'>
      <Aside/>
    </div>
    <div className='layout-data'>
        <ServicesButton/>
    </div>
  </div>
  )
}

export default Services