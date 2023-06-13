import React from 'react'
import {Link} from 'react-router-dom'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdCall} from 'react-icons/md'

const Contact = () => {
    return (
        <div className='contact-us'>

            <div className="logo"></div>

            <div className='contact-bg'>
                <div className='contact-info'>
                    <p>say cheese and let us take the picture</p>
                    <h2>Let's document your moments</h2>
                    <Link to={'/packages'}
                        className='packages-btn'>browse packages</Link>
                </div>
            </div>

            <div className='questions-wrapper'>
                <div>
                    <h2>24Kpixels Studios</h2>
                    <p>Contact us we plan your photography or videography shoot, choose the package you want and book your session with with us now</p>
                </div>

                <div className="questions">

                    <h2>questions?</h2>
                    <div className='email-bg'>
                        <a href="mailto:firstlevelstudios@gmail.com" className='email-btn'>Email Us</a>
                    </div>

                    <a href="mailto:firstlevelstudios@gmail.com" className='email-link'>
                        <i><MdOutlineEmail/></i>firstlevelstudios@gmail.com</a>

                </div>
            </div>


            {/* CALL US */}
            <div className='call-us'>
                <p className='call-p'>
                    <i className='call-svg'><MdCall/></i>
                    Call our Office</p>
                <div className='phone-numbers'>
                    <a href="tel:+255629125977">+(255) 62-912 5977</a>
                    <a href="tel:+255626845154">+(255) 62-684 5154</a>
                    <a href="tel:+255626815154">+(255) 62-681 5154</a>
                </div>
            </div>

            {/* <div className='map'>map</div> */}

        </div>
    )
}

export default Contact
