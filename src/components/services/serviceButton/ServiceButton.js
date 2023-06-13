import React from 'react'
import './serviceButton.css'
import {Link} from 'react-router-dom'

const ServiceButton = () => {
  return (
    <div className='service-btn'>
        <Link to={'/booking'}>Book your shoot</Link>
    </div>
  )
}

export default ServiceButton