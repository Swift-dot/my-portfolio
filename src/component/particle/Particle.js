import React, { useMemo } from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; 
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
const Particle = () => {

    const options = useMemo(()=>{
        return{};
    }, [])

    const particlesInit = useCallback((engine) =>{
        loadFull(engine)
        loadSlim(engine)
    }, [])

  return (
    <div>
        <Particles id="tsparticles"  init={particlesInit} options={options} />
    </div>
  )
}

export default Particle