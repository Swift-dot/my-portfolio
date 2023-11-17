// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss"
import Home from "./component/home/Home";
import About from "./component/about/About";
import Navbar from "./component/navbar/Navbar";
import Test from "./component/Test";
import Services from "./component/services/Services";
import Contact from "./component/contact/Contact";
import Portfolio from "./component/portfolio/Portfolio";
import Cursor from "./component/cursor/Cursor";
import Particle from "./component/particle/Particle";
import GraphicCard from "./component/graphic/GraphicCard";
import Attention from "./component/attention/Attention";
import { useState } from "react";



function App() {
 

 
  return (
    <div className="App">
      <Cursor />
      <section id="Home">
      <Navbar />
      <Home />
      </section>         
      <section id="About">
        <About />

      
      </section>
      
    
      <section id="Portfolio" >
        <Portfolio />
      </section>
     
        <div>
          <GraphicCard />
        </div>

      <section id="Contact">
       <Contact />
      </section>

   
    </div>
    
  );
}

export default App;
