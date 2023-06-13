import React from 'react'
import Recent from '../recentposts/Recent'
import {GrVideo} from 'react-icons/gr'
import v from '../../assets/v.webp'
import Explore from '../explore/Explore'

const VideoGraphy = () => {
  return (
    <>
    <div className='layout'>
      <div className='layout-aside'>
        <Explore/>
      </div>
      <div className='layout-data'>
        <div className='photography'>
            <div className="photography-header">
                <h2> <i> <GrVideo/> </i> VIDEOGRAPY</h2>
                <p>
                Video is one of the most compelling ways to tell your story. From attracting new customers to converting viewers into customers the power of video is unmatched. Why? Because people love videos. Your customers would much rather watch a video than read a wall of text.We have over 15 years of experience producing high quality, targeted videos including TV commercials, corporate and product videos, training videos, motion graphics animations and more… Our experienced staff will walk you through the entire process from scripting to brand cohesion to optimizing for delivery. So, what are you waiting for? Contact us today for a free consultation.
                </p>
                <img src={v} alt="" className='transition'/>
            </div>
            <Recent className='transition'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default VideoGraphy