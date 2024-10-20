import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import ContactSection from '../Components/ContactSection'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Heroimg2 heading = "CONTACT" para = "Let's have a chat!"/>
       <ContactSection/>
     
     <Footer/>
    </div>
  )
}

export default Contact
