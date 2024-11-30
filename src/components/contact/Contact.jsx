import React, { useState } from "react";
import './Contact.css'

const ContactSection = () => {
  

  return (
   <div>
     <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p className="slogon">
        I'm always excited to collaborate on innovative projects. Feel free to
        reach out!
      </p>

     
      <div className="contact-info">
        <p className="mail">
         
          <a href="mailto:smbrasoolbi138@gmail.com">  <strong>Email Me </strong>  <span className="bi bi-envelope-at"></span></a>
        </p>


        <p className="linkedin">
        
        <a href="https://www.linkedin.com/in/shaik-rasool-bi/" target="_blank" rel="noopener noreferrer">
        <strong>Linkedin</strong>
          <span className="bi bi-linkedin linkedin-btn"> </span>
        </a>
        </p>
      </div>

       <diV>
          <p> &copy; All rights Reserved | Rasool Bi</p>
        </diV>
    </div>
   

   </div>
  );
};

export default ContactSection;
