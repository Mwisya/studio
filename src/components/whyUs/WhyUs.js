import { HighQualityOutlined, MoreOutlined, PaymentOutlined } from '@material-ui/icons'
import React from 'react'
import './whyUs.css'

const WhyUs = () => {
  return (
    <div className='whyUs'>
      <h5>Why Choose Us</h5>
     <div className='whyUs-wrapper'>
        <div className='whyUs-wrapper-item'>
          <HighQualityOutlined className='whyUs-svg'/>
          <h4>High Quality exports</h4>
          <p>24Kpixels deals in authentic,latest and trending media devices from all over the word. To ensure that every shot is of hight quality and utterly satisfying.</p>
        </div>
        <div className='whyUs-wrapper-item'>
          <MoreOutlined className='whyUs-svg'/>
          <h4>Multiple Choices</h4>
          <p>To ensure our clients enjoy diverse and unique shoot sessions, we provide client guidlines on how to strike the perfect pose and also recommend on help when needed.</p>
        </div>
        <div className='whyUs-wrapper-item'>
          <PaymentOutlined className='whyUs-svg'/>
          <h4>Client Engagement</h4>
          <p>To obtain desired results and satisfy our clients we walk with our clients from the start and also provide after services hwere required/</p>
        </div>
     </div>
    </div>
  )
}

export default WhyUs