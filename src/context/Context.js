import {createContext, useContext, useState} from "react";
import pg1 from '../assets/pg1.webp'
import masai from '../assets/masai.webp'
import portrait4 from '../assets/portrait4.jpg'
import burger from '../assets/burger.jpeg'
import creative from '../assets/creative.jpeg'
import creativebg from '../assets/creativebg.jpeg'



const wedding = [
    {wed1:'wedding'}
]
const creativeimages = [{
    creativebg:creativebg,
    }
]
const homeimages = [
    {
        pg1:pg1, 
        masai:masai, 
        portrait4:portrait4, 
        burger:burger, 
        creative:creative
    }
]












// CONTEXT DECLARATION
const StateContext = createContext();

export const ContextProvider =({children})=>{
    const[home, setHome]=useState(homeimages)
  
    return(
        <StateContext.Provider value={{home}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)