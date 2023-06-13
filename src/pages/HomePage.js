import React from 'react'
import { BookingBtn,  Display, Promoted, ReUse, WhyUs } from '../components'
import AllServices from  '../components/allServices/AllServices'
import Intro from '../components/intro/Intro'
import NewsLetter from '../components/newsletter/NewsLetter'


const HomePage = () => {
  

  return (
    <div style={{height:'100%'}}>
      <Display/>
      <Intro/>
      <AllServices/>
      <ReUse name='Services Gallery'/>
      <Promoted/>
      <WhyUs/>
      <BookingBtn/>
      <NewsLetter/>
    </div>
  )
}

export default HomePage