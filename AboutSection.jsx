import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Who I am</h2>
        <p>
          I am Najaf Abbas, a Computer Engineer and Frontend Web Developer with a passion for creating dynamic and responsive web applications. I specialize in HTML, CSS, JavaScript, and frameworks like React to build modern user interfaces.
        </p>
      </div>
      <div className="contact-form">
        <form>
          <h3>Contact Me</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default AboutSection;
