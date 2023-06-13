import React,{useState} from 'react'
import BookingBtn from '../../bookingbtn/BookingBtn'
import fatherdaughter from '../../../assets/fatherdaughter.jpeg'
import couple1 from '../../../assets/couple1.jpeg'
import couple2 from '../../../assets/couple2.jpeg'
import africana from '../../../assets/africana.jpeg'
import music from '../../../assets/music.jpeg'
import Explore from '../../explore/Explore'
import '../shoots.css'


const Family = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const family = [
    {img:fatherdaughter},
    {img:couple1},
    {img:couple2},
    {img:music},
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
        {
          family.map((item,index)=>{
            return(
            <div className={modal? 'modal open' : 'modal'}  key={index} >
              <i className="close" onClick={closemodal}>&times;</i>
              <img src={modalImage} alt={modalImage} />
            </div>

            )
          })
        }
        
      <div className='layout-aside'>
        <Explore className='sidenav-height'/>
      </div>

      <div className='layout-data'>
        <h3 style={{padding:'5px'}}>FAMILY</h3>
        <div className='service'>
          <div className='service-left'>
            <img src={africana} alt="" onClick={()=> getimage()} />
          </div>
          <div className='service-right'>
       {
          family.map((item,index)=>{
            return(
              <div className='service-images' key={index} >
                <img src={item.img} alt={item.img}onClick={()=> getimage(item)} />
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

export default Family