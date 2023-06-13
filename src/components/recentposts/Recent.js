import React from 'react'
import './recent.css'
import { Link } from 'react-router-dom'



const Recent = () => {
  return (
    <div className='recent'>
        <p>recent shoots</p>
        <div className='recent-posts-wrapper'>
        <div className='recent-post'> 
            <Link to={'/office'} className='recent-post-link'> Product photography</Link> 
        </div>
        <div className='recent-post'> 
            <Link to={'/creative'} className='recent-post-link'>Fashion model photography</Link> 
        </div>
        <div className='recent-post'> 
            <Link to={'/studio'} className='recent-post-link'>Portrait photography</Link> 
        </div>
        <div className='recent-post'> 
            <Link to={'/studio'} className='recent-post-link'> Client Choice</Link> 
       </div>     
        <div className='recent-post'> 
            <Link to={'/wedding'} className='recent-post-link'> Wedding photography</Link> 
        </div>
        </div>
    </div>
  )
}

export default Recent