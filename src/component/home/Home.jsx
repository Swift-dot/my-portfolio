import React from 'react'
import img1 from "../../assets/swift-2.jpg"
import img2 from "../../assets/swift-2-1.jpg"
import { useState, useEffect } from 'react'
import "./home.scss"
import Typed from 'typed.js';
import {BsGithub} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"
import {RiAttachment2} from "react-icons/ri"
import {AiOutlineGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {animate, motion} from "framer-motion"
import resume from "../../assets/LAWAL A..pdf"
const Home = () => {

  const textVariants ={
    initial:{
      opacity: 0,
      x: -1000
    },
    animate:{
      opacity: 1,
      x: 0,

    transition:{
      duration: 2,
      stiffness: 40,
      type: "string",
      staggerChildren: 0.1,
    }
    },

    

  }
  const slideVariants ={
    initial:{
     
      x: 0
    },
    animate:{
     
      x: "-220%",

    transition:{
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",

    }
    },
  }
    const [count, setCount] = useState(0)
    const images = [img1, img2];

    useEffect(() =>{
        const timerId = setInterval(()=>{
            setCount((count)=> count + 1)
        }, 8000)
       return () => clearInterval(timerId)
    }, []);

    const image = images[count % images.length]


    
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Web Developer', 'Graphic Designer'],
        typeSpeed: 90,
        loop: true,
        
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
   
  return (
    <div className='hero'>
      <div className="heroContainer" >
      <div className="hero__left">
            
            <motion.div className="main" animate="animate" initial="initial" variants={textVariants}>
                 <motion.h1 variants={textVariants} >I'm Lawal A.</motion.h1>
                 <motion.span variants={textVariants}>A <span ref={el} ></span></motion.span>
            </motion.div>
             <p className='brief'>Ever wondered what happens when passion meets pixels? 
             Welcome to my digital realm, where creativity dances with code, and innovation is the heartbeat of every project.
            </p>
             
            <div className="div">
                 <a href={resume} target='_blank'><button className='btn btn-outline'>Resume <RiAttachment2 /></button></a>
                 <a href='#contact'><button className='btn'>Hire Me <BiUserCircle /></button></a>
            </div>

           
          
        </div>
        <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
          Web Developer
        </motion.div>
        <div className="hero__right">
            <div className="image__container">
            <motion.img src={image} alt="" whileHover={{scale: 1.03}} transition={{duration: 1}} />
              
               
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Home