import { BsMic } from 'react-icons/bs'
import React from 'react'
import Recent from '../recentposts/Recent'
import s2 from '../../assets/s2.webp'
import Explore from '../explore/Explore'

const Audio = () => {
    return (
        <>
        <div className='layout'>
          <div className='layout-aside'>
            <Explore/>
          </div>
          <div className='layout-data'>
            <div className='photography'>
                <div className="photography-header">
                    <h2> <i><BsMic/> </i> AUDIO PRODUCTION</h2>
                    <p>
                    As an artist good music comes from quality production and eloquent sound engineering. We are the leading sound engineers working with both local and interntaional artists. From attracting new customers to converting viewers into customers the power of video is unmatched. Why? Because people love videos. Your customers would much rather watch a video than read a wall of text.We have over 15 years of experience producing high quality, targeted videos including TV commercials, corporate and product videos, training videos, motion graphics animations and more… Our experienced staff will walk you through the entire process from scripting to brand cohesion to optimizing for delivery. So, what are you waiting for? Contact us today for a free consultation.
                    </p>
                    <img src={s2} alt="" className='transition' />
                </div>
                <Recent className='transition'/>
            </div>
          </div>
        </div>
        </>
    )
}

export default Audio
