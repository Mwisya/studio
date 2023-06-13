import React,{useState} from 'react'
import BookingBtn from '../../bookingbtn/BookingBtn'

import creativebg from '../../../assets/creativebg.jpeg'
import beanoggy from '../../../assets/beanoggy.jpeg'
import bean from '../../../assets/bean.jpeg'
import couple from '../../../assets/couple.jpeg'
import Explore from '../../explore/Explore'
import '../shoots.css'

const creative =[
  {img:creativebg},
  {img:beanoggy},
  {img:bean},
  {img:couple}
]
const Creative = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  
      const getimage = (item)=>{
        setModalImage(item.img);
        setModal(true);
      }
    
      const closemodal = ()=>{
        setModal(false) 
      } 
  return (
    <>
     <div className='layout'>
      <div className='layout-aside'>
        <Explore/>
      </div>
      <div className='layout-data'>
      <h3 style={{padding:'5px'}}>CREATIVE</h3>

        <div className='service'>
        {
          creative.map((item,index)=>{
            return(
            <div className={modal? 'modal open' : 'modal'} key={index} >
              <i className="close" onClick={closemodal}>&times;</i>
              <img src={modalImage} alt={modalImage} />
            </div>

            )
          })
        }
        <div className='service-left'>
            <img src={couple} alt="" className='service-items' onClick={()=> getimage()} />
        </div>
          <div className='service-right'> 
          {
          creative.map((item,index)=>{
            return(
              <div className='service-images' key={index}>
              <img src={item.img}  alt={item.img} onClick={()=> getimage(item)} />
              </div>

            )
          })
        }
          </div>
        </div>
        <BookingBtn/>
      </div>
    </div>
    </>
  )
}

export default Creative