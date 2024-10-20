import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import PricingCard from '../Components/PricingCard'

const Projects = () => {
  return (
    <>
      <Navbar/>
     <Heroimg2 heading = "Projects" para = "Some of my most recent works "/>
     <PricingCard/>
      <Footer/>
      </>
  )
}

export default Projects
