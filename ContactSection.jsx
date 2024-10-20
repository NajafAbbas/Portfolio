import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am Najaf Abbas, a Computer Engineer and Frontend Web Developer. I love creating user-friendly web applications with clean and modern designs. With experience in technologies like HTML, CSS, JavaScript, and React, I focus on building responsive and interactive websites.
        </p>
      </div>

      <div className="contact-form">
        <h3>Contact Me</h3>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </section>
  );
};

export default ContactSection;
