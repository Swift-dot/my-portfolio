import React from 'react'
import { useState } from 'react'
import {motion} from "framer-motion"
import iconMenu from "../../../assets/icon-menu.svg"
import iconClose from "../../../assets/icon-close.svg"
const ToggleButton = ({setOpen}) => {
    const [show, setShow] = useState(false)
  return (
    <button onClick={() => setOpen(prev => !prev)}>
       

            <img src={iconMenu} alt="" />
            

       
        
    </button>
  )
}

export default ToggleButton