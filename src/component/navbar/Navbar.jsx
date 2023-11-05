import React from 'react'
import "./navbar.scss"
import { BsFacebook } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {motion} from "framer-motion"
import SideBar from '../sidebar/SideBar'
import { useState } from 'react'
const Navbar = () => {

const [isLightMode, setIsLightMode] = useState(false)

  const handleMode = () =>{
    setIsLightMode((prev) => !prev)
  }
  return (
    <div className='navbar'>
        <SideBar />
        <div className="navbar__container">
             
             <motion.span
             initial={{opacity:0, scale: 0.5}}
             animate={{opacity: 1, scale: 1}}
             transition={{duration: 2}}>
                Swift Media
            </motion.span>
            
            <motion.div className="socials"
            initial={{opacity:0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 2}}>
              {/* <BsFillMoonStarsFill onClick={handleMode} isLightMode={isLightMode}/> */}
               <a href='#'><BsFacebook /></a>
               <a href='#'><RiWhatsappFill /></a>
               <a href='#'><BsTwitter /></a>
               <a href='#'><BsInstagram /></a>

            </motion.div>
       
        </div>
        

    </div>
  )
}

export default Navbar