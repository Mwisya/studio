import React from 'react'
import { NavLink } from 'react-router-dom'
import './topnav.css'


const TopNav = () => {
  return (
      <nav className='top-navbar'>
        <NavLink to='/' className='navlink'>home</NavLink>
        <div className='dropdown'>
            Services
            <div className='dropdown-content'>
              <div className='transparent'></div>
              <NavLink to='/photography' className='dropdown-link'>photography</NavLink>
              <NavLink to='/videography' className='dropdown-link'>videography</NavLink>
              <NavLink to='/live-stream' className='dropdown-link'>live streaming</NavLink>
              <NavLink to='/audio' className='dropdown-link'>Audio Production</NavLink>
            </div>
          </div>
        <NavLink to='/about' className='navlink'>About us</NavLink>
        <NavLink to='/studio' className='navlink'>studio</NavLink> 
        <NavLink to='/contact' className='navlink'>contact</NavLink>
        <NavLink to='/booking' className='booking-link'>Booking</NavLink>
      </nav>
  )
}

export default TopNav