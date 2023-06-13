import React from 'react'
import { Facebook, Instagram,} from '@material-ui/icons'
import './explore.css'
import { NavLink } from 'react-router-dom'
import { VscDeviceCameraVideo,VscDeviceCamera } from 'react-icons/vsc'
import { MdOutlineLiveTv } from 'react-icons/md'
import { BsMic } from 'react-icons/bs'



const icons = {
  camera: <VscDeviceCamera/>,
  video:  <VscDeviceCameraVideo/>,
  live: <MdOutlineLiveTv/>,
  audio:<BsMic/>
}

const Explore = () => {
  return (
    <div className='explore sidenav-height'>
      {/* <div className='explore-wrapper'></div> */}
      <div role='navigation' className='align-items photograpy-type' >
        <h5 className='services-heading'>EXPLORE</h5>
          <NavLink to='/photography' className='links'>{icons.camera}photography</NavLink>
          <NavLink to='/videography' className='links'>{icons.video}videography</NavLink>
          <NavLink to='/audio' className='links'>{icons.audio}Audio production</NavLink>
          <NavLink to='/live-stream' className='links'>{icons.live}Live Stream</NavLink>
        <div role='navigation' className=' align-items exclusive' >
          <h5 >SERVICES</h5>
            <NavLink to='/family' className='links'>  family</NavLink>
            <NavLink to='/wedding' className='links'> wedding</NavLink>
            <NavLink to='/office' className='links'> Work Shop</NavLink>
            <NavLink to='/creative' className='links'> Creative</NavLink>
            <NavLink to='/booking' className='links'> Book Shoot</NavLink>
          <ul>
            <li>
              <a href="#prefooter"><Facebook/></a>
            </li>
            <li>  
            <a href="#prefooter"><Instagram/></a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Explore