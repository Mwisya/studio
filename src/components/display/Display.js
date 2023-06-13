import React from 'react'
import {Link} from 'react-router-dom'
import './display.css'
import cameraimage from '../../assets/cameraimage.jpg'

const Display = () => {
  return (
    <section className='display'>
      <div className='transition display-wrapper'>
        <img src={cameraimage} alt="" />
        <div className='display-info'>
          <h3 className='display-info-h'>DOCUMENTING YOUR MEMORY LANE</h3>
          <p className='display-info-p'>Say <span >Cheese</span> and let us take the picture</p>
          <Link to={'/booking'} className='display-btn'>Book Shoot</Link>
        </div>
      </div>
    </section>
  )
}

export default Display