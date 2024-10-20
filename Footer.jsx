import React from 'react';
import './Footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="left">
          <div className="location">
            <FaLocationDot style={{ fontSize: '20px', color: 'white', cursor: 'pointer' }} />
            <div>
              <p>Akbar Town Colony, Kamra</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone style={{ fontSize: '20px', color: 'white', cursor: 'pointer' }} />
            <div>
              <p>03414770445</p>
            </div>
          </div>

          <div className="email">
            <MdEmail style={{ fontSize: '20px', color: 'white', cursor: 'pointer' }} />
            <div>
              <p>mrnajafabbas396@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          <h4>About Me</h4>
          <p>I am Najaf Abbas Jafree, a Computer Engineering graduate and a skilled <br /> Front-End Developer. I have a strong foundation in HTML, CSS, JavaScript, <br /> and modern frameworks like React.</p>
        </div>
        
        {/* Social Icons */}
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaWhatsapp className="icon" />
        </div>

      </div>
    </div>
  );
};

export default Footer;
