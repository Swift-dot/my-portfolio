import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./sideBar.scss"
import Links from './links/Links'
import ToggleButton from './toggleButtons/ToggleButton'
import "./sideBar.scss"
const SideBar = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type: "string",
                stiffness: 20
            }
        },
        close: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                stiffness: 400,
                type: "string",
                damping: 40
            }

        }
    }

  return (
    <motion.div className='sidebar' animate={open ? "open" : "close"}>
        <motion.div className='bg' variants={variants}>
           <Links />
        </motion.div>
           <ToggleButton setOpen={setOpen} open={open}/>
    </motion.div>
  )
}

export default SideBar