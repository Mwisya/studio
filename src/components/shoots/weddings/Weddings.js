import React,{useState} from 'react'
import BookingBtn from '../../bookingbtn/BookingBtn'
import weddingreception from '../../../assets/weddingreception.jpg'
import weddingrings from '../../../assets/weddingrings.jpg'
import wedding3 from '../../../assets/wedding3.jpg'
import wedding5 from '../../../assets/wedding5.webp'
import cake1 from '../../../assets/cake1.jpg'
import Explore from '../../explore/Explore'
import '../shoots.css'



const Weddings = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const wedding = [
    {img:weddingrings},
    {img:wedding3},
    {img:wedding5},
    {img:cake1},
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
      <h3 style={{padding:'5px'}}>WEDDING SHOOT</h3>

        <div className='service'>
        {
          wedding.map((item,index)=>{
            return(
            <div className={modal? 'modal open' : 'modal'}  key={index} >
              <i className="close" onClick={closemodal}>&times;</i>
              <img src={modalImage} alt={modalImage} />
            </div>

            )
          })
        }
        
          <div className='service-left'>
              <img src={weddingreception} alt="" className='service-items' onClick={()=> getimage()} />
          </div>
          <div className='service-right'>
          {
          wedding.map((item,index)=>{
            return(
              <div className='service-images' key={index}>
              <img src={item.img} className='service-items' alt={item.img}  onClick={()=> getimage(item)} />
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

export default Weddings