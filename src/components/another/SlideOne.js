import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import burger from '../../assets/burger.jpeg'
import beanoggy from '../../assets/beanoggy.jpeg'
import beauty1 from '../../assets/beauty1.jpeg'
import masai from '../../assets/masai.webp'
import pg2 from '../../assets/pg2.webp'
import officephoto from '../../assets/officephoto.webp'


const SlideOne = ({name}) => {
  const navigate = useNavigate()

    return (
        <div className='re-use'>
        <div className='re-use-wrapper'>
          <h3>{name}</h3>
          <div className='re-use-items'>
            <div className='re-use-item'>
              <img src={beanoggy} alt="" />
              <button className='re-use-btn' onClick={()=> navigate('/creative')}>Creative</button>
            </div>
            <div className='re-use-item'>
              <img src={officephoto} alt="" />
              <button className='re-use-btn' onClick={()=> navigate('/studio')}>Office</button>
            </div>
            <div className='re-use-item'>
              <img src={pg2} alt="" />
              <button className='re-use-btn' onClick={()=> navigate('/studio')}>Pregnancy</button>
            </div>
            <div className='re-use-item'>
              <img src={masai} alt="" />
              <button className='re-use-btn' onClick={()=> navigate('/studio')}>Outdoor</button>
            </div>
            <div className='re-use-item'>
              <img src={beauty1} alt="" />
              <button className='re-use-btn' onClick={()=> navigate('/creative')}>Beauty</button>
            </div>
            <div className='re-use-item'>
              <img src={burger} alt="" />
              <button className='re-use-btn' onClick={()=> navigate('/office')}>Product</button>
            </div>
            <span className='last-item'>
              <Link to={'/'} className='last-item-link'>Explore</Link>
            </span>
          </div>
        </div>
      </div>
    )
}

export default SlideOne
