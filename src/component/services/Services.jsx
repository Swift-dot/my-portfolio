import React from 'react'
import "./services.scss"
import img1 from "../../assets/—Pngtree—web development illustration modern_4461017.png"
import {motion} from "framer-motion"
const Services = () => {

    const data = [
        {
            id: 1,
            url: img1,
            title: "Web Development",
            disc: "Lorem ipsum dolor sit  ducimus qui incidunt esse alias ab eius voluptate dolor molestiae, quam accusamus ullam"
        },
        {
            id: 2,
            url: img1,
            title: "Graphic Design",
            disc: "Lorem ipsum dolor sit  ducimus qui incidunt esse alias ab eius voluptate dolor molestiae, quam accusamus ullam"
        },
        {
            id: 3,
            url: img1,
            title: "Digital Marketing",
            disc: "Lorem ipsum dolor sit  ducimus qui incidunt esse alias ab eius voluptate dolor molestiae, quam accusamus ullam"
        },
    ]
    
  return (
    <div className='services'>
        <h1 className='heading'>Services</h1>
        <p>What I Offer </p>
        <div className="services__container">
            
        {data.map(item =>{
            return (
                <motion.div className='services__wrapper' whileHover={{scale:1.1}}>
                    <motion.div className="image" >
                    <img src={item.url} alt=''/>
                    </motion.div>
                   
                    <h1>{item.title}</h1>
                    <p>{item.disc}</p>
                </motion.div>
            )
        })}
        </div>
        
    </div>
  )
}

export default Services