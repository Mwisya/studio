import React from 'react'
import {Link} from 'react-router-dom'
import './servicesList.css'
import cameravideo from  '../../../assets/cameravideo.webp'
import livestream2 from  '../../../assets/livestream2.jpg'
import photography from  '../../../assets/photography.webp'
import mic from  '../../../assets/mic.jpg'

const ServicesList = () => {
  return (
    <>
    <div className='service-item'>
        <img src={photography} alt="" />
        <div className='service-item-info'>
            <h2>photography</h2>
            <p>Diverse professional photography</p>
            <article>
            We are synonymous with High-Resolution professional Corporate Photography in Nairobi, Kisumu, Mombasa, Nakuru and other towns in Kenya.
            </article>
            <Link style={{color:'white', backgroundColor:'crimson',padding:'5px 7px'}} to={'/photography'}>See more</Link>
        </div>
    </div>
    <div className='service-item'>
        <img src={cameravideo} alt="" />
        <div className='service-item-info'>
            <h2>videography</h2>
            <p>Diverse professional photography</p>
            <article>
            One billion hours of video are watched on YouTube every single day. Video has revolutionized the modern world.Get in touch with us today for your corporate video.
            </article>
            <Link style={{color:'white', backgroundColor:'crimson',padding:'4px 7px'}} to={'/videography'}>See more...</Link>
        </div>
    </div>
    <div className='service-item'>
        <img src={livestream2} alt="" />
        <div className='service-item-info'>
            <h2>Live Stream</h2>
            <p>Diverse professional photography</p>
            <article>
            24Kpixels can produce any event, at any scale, anywhere in the world. Video production for live streaming requires specialized knowledge and capabilities.
            </article>
            <Link style={{color:'white', backgroundColor:'crimson',padding:'4px 7px'}} to={'/live-stream'}> See more</Link>
        </div>
    </div>
    <div className='service-item'>
        <img src={mic} alt="" />
        <div className='service-item-info'>
            <h2>Audio production</h2>
            <p>Professional sound engineering</p>
            <article>
            We offer professional sound production for radio commercials, political campaigns and voice overs.
            </article>
            <Link style={{color:'white', backgroundColor:'crimson',padding:'4px 7px'}} to={'/audio'}> See more...</Link>
        </div>
    </div>
    </>
  )
}

export default ServicesList