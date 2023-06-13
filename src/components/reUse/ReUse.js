import React from 'react'
import { useNavigate } from 'react-router-dom'
import './reUse.css'
import { Link } from 'react-router-dom'
import pg1 from '../../assets/pg1.webp'
import weddingflowers from '../../assets/weddingflowers.jpeg'
import masai from '../../assets/masai.webp'
import portrait4 from '../../assets/portrait4.jpg'
import burger from '../../assets/burger.jpeg'
import creative2 from '../../assets/creative2.jpeg'


const ReUse = ({name}) => {
  const navigate = useNavigate()
  return (
    <div className='re-use'>
      <div className='re-use-wrapper'>
        {/* IMAGES LIST HEADER */}
        <h3>{name}</h3>
        <div className='re-use-items'>
          <div className='re-use-item'>
            <img src={weddingflowers} alt=""/>
            <button className='re-use-btn'onClick={()=> navigate('/weddings')} >weddings</button>
          </div>
          <div className='re-use-item'>
            <img src={creative2} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/creative')}>Class</button>
          </div>
          <div className='re-use-item'>
            <img src={pg1} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/studio')}>Pregnancy</button>
          </div>
          <div className='re-use-item'>
            <img src={masai} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/studio')}>Outdoor</button>
          </div>
          <div className='re-use-item'>
            <img src={portrait4} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/studio')}>Portraits</button>
          </div>
          <div className='re-use-item'>
            <img src={burger} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/office')}>Product</button>
          </div>
          <span className='last-item'>
            <Link to={'/studio'} className='last-item-link'>Explore</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ReUse