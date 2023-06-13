import React from 'react'
import './promoted.css'
import {Facebook,Instagram} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import india from '../../assets/india.jpeg'
import masai from '../../assets/masai.webp'

const Promoted = () => {
  return (
    <div className='promoted'>
      <figure>
          <h3>Featured</h3>
        
          <div className='featured-image'>
            <div className='image-container'>
              <img src={india} alt="" />
            </div>
            <div  className='image-container'>
              <img src={masai} alt="" />
            </div>
          </div>

          <figcaption>
            <span>Follow Us</span>
            <div className='promoted-links'>
              <div className='side-socials'>
                <i> <Facebook/></i>
                <i> <Instagram/></i>
              </div>
              <Link to={'/book'} className='promoted-booking'>BOOK SHOOT</Link>
            </div>
          </figcaption>
      </figure>
    </div>
  )
}

export default Promoted