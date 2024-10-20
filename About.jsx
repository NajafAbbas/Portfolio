import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import AboutSection from '../Components/AboutSection';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "About" para = "I am friendly Frontend developer" />
      <AboutSection/>
      <Footer />
    </div>
  );
}

export default About;
