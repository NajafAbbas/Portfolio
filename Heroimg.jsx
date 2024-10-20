import React from 'react'
import './Heroimg.css'
import bgHero from '../assets/bg-hero.jpg';
import { Link } from 'react-router-dom';


const Heroimg = () => {
  return (
    <>
    <div className='hero'>
      <div className="mask">
        <img src={bgHero} alt="into-img" className="img-into" />
      </div>
      <div className="content">
        <p>HI! I AM A COMPUTER ENGINEER</p>
        <h1>REACT DEVELOPER</h1>
        <div className='button'>
          <Link to={'/projects'} className='btn'>PROJECTS</Link>
          <Link to={'/contact'} className='btn-light'>Contact</Link>

        </div>
      </div>
    </div>
   
    </>
  )
}

export default Heroimg
