import React from 'react'
import { EmailOutlined, Twitter, WhatsApp } from '@material-ui/icons' 
import  './footer.css'

const Footer = () => {
  return (
    <footer>

       <div className='follow-us'>
        <a href="http://api.whatsapp.com/send?phone=+254723341899"><WhatsApp/></a>
        <a href="mailto:info@naske.co.ke"> <EmailOutlined/></a>
        <a href="http://"><Twitter/></a>
      </div>
      <p>Copyright 2022</p>
      <p>All Rights Reserved.</p>
    </footer>
  )
}

export default Footer