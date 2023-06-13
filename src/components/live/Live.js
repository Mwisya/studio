import React from 'react'
import Recent from '../recentposts/Recent'
import {MdOutlineLiveTv} from 'react-icons/md'

import livestream1 from '../../assets/livestream1.jpg'
import Explore from '../explore/Explore'


const Live = () => {
  return (
    <>
    <div className='layout'>
      <div className='layout-aside'>
        <Explore/>
      </div>
      <div className='layout-data'>
        <div className='photography'>
            <div className="photography-header">
                <h2> <i><MdOutlineLiveTv/></i> LIVE STREAMING</h2>
                <p>
                Video is one of the most compelling ways to tell your story. From attracting new customers to converting viewers into customers the power of video is unmatched. Why? Because people love videos. Your customers would much rather watch a video than read a wall of text.We have over 15 years of experience producing high quality, targeted videos including TV commercials, corporate and product videos, training videos, motion graphics animations and more… Our experienced staff will walk you through the entire process from scripting to brand cohesion to optimizing for delivery. So, what are you waiting for? Contact us today for a free consultation.
                </p>
                <img src={livestream1} alt="" className='transition' />
            </div>
            <Recent className='transition'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Live