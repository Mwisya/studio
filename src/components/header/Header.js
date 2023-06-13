import React,{useState} from 'react'

import TopNav from '../topnav/TopNav'
import './header.css'
import SideNav from '../sidenav/SideNav'
import { Menu } from '@material-ui/icons'

const Header = () => {
  const [toggle, setToggle]= useState(false);
    function open (){
      setToggle(true)
    };
    function close (){
      setToggle(false);
    }

  return (
    <header>
      <div className='logo-section'>
        <h2>24K<span style={{color:'crimson', fontSize:'17px'}}>pixels</span></h2>
      </div>
      <div className='topnav-section'>
        <TopNav/> 
      </div>
        <Menu onClick={open} className='visibility'/>
        {toggle && <SideNav onClick={close}/> }
    </header>
  )
}

export default Header