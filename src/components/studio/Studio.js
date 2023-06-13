import React,{useState} from 'react'
import './studio.css'
import portrait4 from '../../assets/portrait4.jpg'
import beauty1 from '../../assets/beauty1.jpeg'
import masai from '../../assets/masai.webp'
import cake1 from '../../assets/cake1.jpg'
import creative from '../../assets/creative.jpeg'
import africana from '../../assets/africana.jpeg'
import india from '../../assets/india.jpeg'

import { IoImagesOutline } from 'react-icons/io5'



const Studio = () => {
  // const [firstBox, setFirstBox] = useState(false)
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  
  const images = [
    {img:portrait4},
    {img:masai},
    {img:cake1},
    {img:africana},
    {img:india},
    {img:beauty1},
    {img:creative}
  ]
  
        const getimage = (item)=>{
          setModalImage(item.img);
          setModal(true);
        }
        // useEffect(() => {
        //   setFirstBox(true)
        // }, [])
    
        const closemodal = ()=>{
          setModal(false) 
        }
  return (
    <div className='studio'>
        <h3>
         <IoImagesOutline/>
          STUDIO  
        </h3>
        <div className='studio-wrapper'>

          {/* IMAGE MODAL DIV */}
        {
          images.map((item,index)=>{
            return(
            <div className={modal? 'modal open' : 'modal'}>
              <i className="close" onClick={closemodal}>&times;</i>
              <img src={modalImage} alt={modalImage} />
            </div>

            )
          })
        }
        
        {
          images.map((item,index)=>{
            return(
              <div className='studio-img-container'>
              <img src={item.img} className='studio-img' alt={item.img} key={index} onClick={()=> getimage(item)} />
              </div>
            )
          })
        }
        

        </div>
    </div>
  )
}

export default Studio