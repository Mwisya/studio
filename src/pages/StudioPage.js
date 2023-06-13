import React from 'react'
import Studio from '../components/studio/Studio'
import ReUse from '../components/reUse/ReUse'
import SlideOne from '../components/another/SlideOne'
import NewsLetter from '../components/newsletter/NewsLetter'
import { BookingBtn } from '../components'

const StudioPage = () => {
  return (
    <div>
      <Studio/>
      <ReUse name='Feel the mood'/>
      <SlideOne name='Inspire your next shoot'/>
      <BookingBtn/>
      <NewsLetter/>
    </div>
  )
}

export default StudioPage