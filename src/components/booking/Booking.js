import React,{useState} from 'react'
import './booking.css'
import Aside from '../asidenav/Aside'
import { Link } from 'react-router-dom'

const Booking = () => {
  const [inputs, setInputs] = useState({
    sender:'',
    email:'',
    phone:'',
    event:'',
    message:''
  })
  const [res, setRes] = useState('');

  const handleChange = (e)=>{
    var {name, value} = e.target;
    setInputs({...inputs , [name]:value})
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    setRes('thank you for choosing 24kpixels')
    setInputs({
      sender:'',
      email:'',
      phone:'',
      event:'',
      message:''
  })

  }; 
  return (
    <>
      <div className='layout'>
      <div className='layout-aside'>
        <Aside/>
      </div>
      <div className='layout-data relative-position'>
        <div className='booking'>
          <h3>Book your photo | video shoot</h3>
          <form  onSubmit={handleSubmit}>
            <input type="text" name='sender' value={inputs.sender} onChange={handleChange} placeholder='Enter name' />
            <input type="email" name="email" value={inputs.email} onChange={handleChange} id="" placeholder='email@domain.ext'/>
            <input type="text" name='phone' value={inputs.phone} onChange={handleChange} placeholder='Phone' />
            <input type="text" name='event' value={inputs.event} onChange={handleChange} placeholder='Event event type' />
            <textarea name="message" id="" cols="30" rows="10" value={inputs.message} onChange={handleChange} placeholder='Type here ...'></textarea>
    
            <button type="submit">SUBMIT</button>
          </form>
          {res &&
            <p className='res'>
              <span>
              {res}
              </span>
              <Link to={'/'} className ='return-home'>Go back to home</Link>
             </p>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Booking