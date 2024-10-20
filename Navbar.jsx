import React, { useState, useEffect } from 'react';
import './Navbar.style.css';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  // Function to handle navbar background change on scroll
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // UseEffect hook to add the scroll listener once
  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor); // Clean up the listener on component unmount
    };
  }, []);

  return (
    <div className={color ? 'header bg-header' : 'header'}>
      <Link to={'/'}>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/projects'}>Projects</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
      <div className="humburger" onClick={handleClick}>
        {click ? (
          <MdClose style={{ fontSize: '24px', color: 'white', cursor: 'pointer' }} />
        ) : (
          <IoMdMenu style={{ fontSize: '24px', color: 'white', cursor: 'pointer' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
