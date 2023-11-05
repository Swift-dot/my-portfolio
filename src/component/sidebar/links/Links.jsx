import React from 'react'
import {motion} from "framer-motion"


const Links = () => {

    const variants ={
        open:{
            transition:{
                staggerChildren: 0.1
            }
        },
        close:{
            transition:{
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }
    
    const itemVariants = {
        open:{
            y:0,
            opacity: 1
        },
        close:{
            y:50,
            opacity: 0
        }
    }
    const items = [
        "Home",
        "About",
        "Services",
        "Portfolio",
        "Contact"
    ]
  return (
    <motion className='links' variants={variants}>
        {items.map(item =>{
            return <motion.a href={`#${item}`} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>{item}</motion.a>
        })}
    </motion>
  )
}

export default Links