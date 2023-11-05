import React from 'react'
import "./test.scss"
import { motion } from "framer-motion"
const Test = () => {
  return (
    <div className='course'>
        <motion.div className="box" 
        initial={{opacity:0.5, scale: 0.5}}
        transition={{duration:2}}
        whileInView={{scale: 2, opacity: 1}}>

        </motion.div>
    </div>
  )
}

export default Test