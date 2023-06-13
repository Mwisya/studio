// import {  Notifications } from '@material-ui/icons';
import React,{useState} from 'react'
// import axios from 'axios';
import './newsletter.css'

const NewsLetter = () => {
    const [email, setEmail]= useState('');
    const [response, setResponse]= useState('');

    const handleChange = (e)=> {
        setEmail(e.target.value)
    };

    const handleSubmit = async (e)=> {
         e.preventDefault()
        //  let res = await axios.post('http://localhost:5000/newsletter',{email})    
        //   console.log(res.data)
        setResponse('subscription is succesfull')   
        setEmail('')
        
      };
    
  return (
    <section className='newsletter-container'>
        <h4>Subscribe to get instant alerts</h4>
        <span className=' newsletter-response'>{response}</span>

        <form onSubmit={handleSubmit} className='newsletter'>
            <input type="email" placeholder='email@gmail.com' value={email} onChange={handleChange} name="email" className ="newsletter-email" />
            <button type='submit'  className='flc transition newsletter-btn'>Submit</button>
        </form>

        <p>To get real time notifications on not limited to</p>
        
        <ul className='newsletter-ul'>
            <li>Events</li>
            <li>Photo shoot</li>
            <li>Discounts</li>
            <li>Feature</li>
            <li>Fom zikitoe</li>
        </ul>
    </section>
  )
}

export default NewsLetter