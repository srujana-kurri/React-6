import React from 'react';
import './ContactMe.css'; 
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; 

const ContactMe = () => {
  return (
    <section id="contact">
    <div className="contact-me-box">
      
      <h2 className="contact-me-heading">Contact Me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/srujana-kurri-31169824b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/srujana-kurri" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
      <p>srujanakurri273@gmail.com</p>
      {/* Add more contact information as needed */}
     
    </div>
    </section>

  );
};

export default ContactMe;