import React from 'react'
import './aboutinfo.css'
import  s1 from '../../../assets/s1.jpg'

const AboutInfo = () => {
  return (
    <div  className='about-info'>
        <div className='about-header'>
            <h2><i>i</i> ABOUT US</h2>
            <p>
            From local productions to internation, 24Kpixels is the number one videography and photography studio fortified with live streaming, audio engineering and desing.
            24Kpixels is a Photography and Video Production Company based in Mombasa with professional ties in both Kenya.
             We are fully charged with the responsibility of developing Quality, Affordable, Effective, and Efficient content to our ever growing wide category of clients.We are constantly inspired by nature and the simple beauty in our everyday lives.
            </p>
            <div className='mission'>
              <h5>Mission</h5>
              <p>To provide lasting archived memories with the finest quality of photos and videos that moves the hearts /cherished by our clients for generations to come</p>
            </div>
            <div className='vision'>
              <h5>Vision</h5>
              <p>To be the choice photography and video Production company in Kenya and across East & Central Africa region through the provision of affordable, efficient and effective services.</p>
            </div>
        </div>
        <img src={s1} alt="" />
    </div>
  )
}

export default AboutInfo