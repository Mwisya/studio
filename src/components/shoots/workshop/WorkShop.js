import React,{useState} from 'react'
import BookingBtn from '../../bookingbtn/BookingBtn'
import Explore from '../../explore/Explore'
import '../shoots.css'

import liquor from '../../../assets/liquor.webp'
import shoes from '../../../assets/shoes.jpg'
import burger from '../../../assets/burger.jpeg'
import product4 from '../../../assets/product4.jpg'
import productshoes from '../../../assets/productshoes.webp'



const WorkShop = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const workshop = [
    {img:burger},
    {img:shoes},
    {img:product4},
    {img:productshoes}
  ]
  
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
        <Explore className='sidenav-height'/>
      </div>
     <div className='layout-data'>
     <h3 style={{padding:'5px'}}>WORKSHOP</h3>

        <div className='service'>
        {
          workshop.map((item,index)=>{
            return(
            <div className={modal? 'modal open' : 'modal'} key={index} >
              <i className="close" onClick={closemodal}>&times;</i>
              <img src={modalImage} alt={modalImage} />
            </div>

            )
          })
        }
        
        <div className='service-left'>
        <img src={liquor} alt="" className='service-items' onClick={()=> getimage()} />
            
        </div>
        <div className='service-right'>
        {
          workshop.map((item,index)=>{
            return(
              <div className='service-images' key={index}>
              <img src={item.img}  alt={item.img}  onClick={()=> getimage(item)} />
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

export default WorkShop