import React from 'react'
import {motion} from "framer-motion"
import scroll from "../../assets/scroll.png"
import "./about.scss"
const About = () => {

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

  return (
    <div className='about'>
      <div className="scroll">
      <motion.img src={scroll} alt='' width={60} 
            variants={textVariants} 
            animate={{ opacity:0, y: 10,}}
            transition={{
                duration: 2,
                repeat: Infinity,
              }} className='updown'/>
      </div>
     
      <div className="aboutWrapper">
        <div className="aboutleft">
          <h1>About Me</h1>
        </div>
        <div className="aboutright">
          <p>I am Lawal A., a fervent Web Developer and Graphic Designer with a mission to turn ideas into immersive digital experiences. 
            Beyond the lines of code and pixels, I am a storyteller weaving narratives through design and functionality.
            <br />
            <br />
            I'm passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got 
            an opening that I might like, let's connect 🔗


            <br /><br />Languages: Html, Css, Sass, Javascript, Typescript.
            <br />Technologies: React.js, Next.js, Bootstrap, Tailwind, Firebase, Mongo DB, Git, Netlify, Vercel.
            <br/> Tools: Adobe Photoshop, Adobe Illustrator, CorelDraw, Figma
             
                        
          </p>

        </div>
       
      </div>
       
    </div>
  )
}

export default About