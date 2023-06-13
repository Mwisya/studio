import React from 'react'
import {NavLink} from 'react-router-dom'
import './sidenav.css'
import { VscDeviceCameraVideo,VscDeviceCamera } from 'react-icons/vsc'

import {MdOutlineLiveTv} from 'react-icons/md'
import { CameraOutlined, Facebook, HomeOutlined, Instagram,} from '@material-ui/icons'
import { BsMic } from 'react-icons/bs'
import { IoImagesOutline, IoCallOutline } from 'react-icons/io5'
import { MdPayment } from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'


const icons = {
  camera: <VscDeviceCamera/>,
  video:  <VscDeviceCameraVideo/>,
  live: <MdOutlineLiveTv/>,
  audio:<BsMic/>,
  home:<HomeOutlined/>,
  studio:<IoImagesOutline/>,
  contact:<IoCallOutline/>,
  pay:<MdPayment/>,
  about:<AiOutlineInfoCircle/>,
  camera2:<CameraOutlined/>
}

const SideNav = ({onClick}) => {
 
  return (
    <div className='sidenav'>
     <div role='navigation' className='align-items sidenav-menu'>
          <h5 className='services-heading'>EXPLORE</h5>
          <NavLink to='/' onClick={onClick} className='side-links'>{icons.home}home</NavLink>
          <NavLink to='/photography' onClick={onClick} className='side-links'>{icons.camera}photography</NavLink>
          <NavLink to='/videography' onClick={onClick} className='side-links'>{icons.video}videography</NavLink>
          <NavLink to='/audio' onClick={onClick} className='side-links'>{icons.audio}Audio production</NavLink>
          <NavLink to='/live-stream' onClick={onClick} className='side-links'>{icons.live}Live Stream</NavLink>
          <NavLink to='/studio' onClick={onClick} className='side-links'>{icons.studio}studio</NavLink>
          <NavLink to='/about' onClick={onClick} className='side-links'>{icons.about}About us</NavLink>
          <NavLink to='/contact' onClick={onClick} className='side-links'>{icons.contact}Contact</NavLink>
          <NavLink to='/booking' onClick={onClick} className='side-links'>{icons.camera2}book shoot</NavLink>
         
        <div role='navigation' className=' align-items exclusive'>
          <h5>SERVICES</h5>
            <NavLink to='/family' onClick={onClick} className='side-links'>  family</NavLink>
            <NavLink to='/wedding' onClick={onClick} className='side-links'> wedding</NavLink>
            <NavLink to='/office' onClick={onClick} className='side-links'> Work Shop</NavLink>
            <NavLink to='/creative' onClick={onClick} className='side-links'> Creative</NavLink>
          <ul className='sidenav-ul'>
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

export default SideNav