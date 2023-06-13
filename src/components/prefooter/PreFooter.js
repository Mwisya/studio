import React from 'react'
import './preFooter.css'
import { ArrowForward,PhoneAndroid } from '@material-ui/icons'

import {GoLocation} from 'react-icons/go'
import {AiOutlineMail} from 'react-icons/ai'
import gmap from '../../assets/gmap.jpg'
import {IoCallOutline} from 'react-icons/io5'


const PreFooter = () => {
  return (
    <div className='prefooter'id='prefooter'>
        <div className="transition prefooter-wrapper">
            <div className="quicklinks">
                <h4>Quick Links</h4>
                <p><ArrowForward/> <a href="http://" target="_blank" rel="noopener noreferrer">Photography session</a></p>
                <p><ArrowForward/> <a href="http://" target="_blank" rel="noopener noreferrer">Video shoot</a></p>
                <p><ArrowForward/> <a href="http://smsportal.naske.co.ke" className='bulksms'>Bulksms</a></p>
                <p><ArrowForward/> <a href="mailto:info@naske.co.ke">Website desing</a></p>
                <p><ArrowForward/> <a href="mailto:info@naske.co.ke">Website develpment</a></p>
  
            </div>
            <div className="map">
              <img className='map-img' src={gmap} alt={gmap} />
            </div>
            <div className="contact-address">    
                <h4>Contact Us</h4> 
                <p className='contact-item'> <IoCallOutline/> <a href="tel:+254723341899">+(254) 07233 341 899</a> </p>
                <p className='contact-item'> <PhoneAndroid/> <a href="tel:+254723341899">+(254) 07233 341 899</a> </p>
                <p className='contact-item'><AiOutlineMail/> <a href="mailto:info@naske.co.ke">info@24Kpixels.co.ke</a> </p>
                <p className='contact-item'><GoLocation/>Mombasa, Airport Rd </p>
            </div>
        </div>
    </div>
  )
}

export default PreFooter