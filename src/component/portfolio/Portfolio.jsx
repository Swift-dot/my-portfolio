import React, { useRef } from 'react'
import img1 from "../../assets/project1.png"
import img2 from "../../assets/project2.png"
import img3 from "../../assets/project3.png"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import {BsBoxArrowUpRight} from "react-icons/bs"
import GraphicCard from '../graphic/GraphicCard'

const items = [
    {
        id: 1,
        title: "GoldMat Construction",
        img: img1,
        desc: "A building construction and architectural landing web application. Stack/Tools : HTML, CSS, bootstrap, GitHub, Git, Netlify.",
        url: "https://goldmat.netlify.app/"
    },
    {
        id: 2,
        title: "Olebe Travels & Tour",
        img: img2,
        desc: "A Travels and Tour landing web application. Stack/Tools : HTML, CSS, AOS.js, Animate.js, GitHub, Git, Netlify.",
        url: "https://olebetravelsandtour.netlify.app/"

    },
    {
        id: 3,
        title: "PizzaDay",
        img: img3,
        desc: "A food Restaurant landing web application. Stack/Tools : HTML, CSS, GitHub, Git, Netlify.",
        url: "https://pizzadayrestaurant.netlify.app/"

    },
    
]

const Single = ({item}) =>{
    const ref = useRef()
    
    const {scrollYProgress} = useScroll({target: ref});
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                     <motion.img src={item.img} alt='' whileHover={{scale:1.05}} transition={{duration: 1}} />
                    </div>
                

                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.url} target='_blank'><BsBoxArrowUpRight /></a>
                        
                    </motion.div>
                </div>
                
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
  
    <div className='portfolio' ref={ref}>

           
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        <p className='attention'>Embark on a visual odyssey through some of my proudest creations.
             Each project is a testament to the seamless fusion of design and technology, a canvas where innovation meets aesthetics.</p>
            
        
       {items.map(item =>{
        return(
            <Single item={item} key={item.id}/>
        )
       })}
    </div>

    
  
  )
}

export default Portfolio