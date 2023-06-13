import React from 'react'
import ServicesList from '../services/servicesList/ServicesList'
import './allServices.css'

const AllServices = () => {
  return (
    <div className='all-services'>
        <div>
          <h3>OUR SERVICES </h3>
        </div>
        <div className='all-services-wrapper'>
          <ServicesList/>
        </div>
    </div>
  )
}

export default AllServices