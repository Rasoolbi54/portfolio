import React from 'react';
import './Detail.css'; // Import your external CSS file here

function Detail() {
  return (
    <div>
        <div className="detail-container">
      <div className="detail-text">
        
        <h1>UI Full Stack Developer.</h1>
        <h2>I Create Seamless Web Experience. Front to Back</h2>
        <p className='info-text'>Bassed in Hyderabad,India.📍 
            i enjoy working on Every Aspect of web Development, from the user interface to the server logic.</p>

        <button className='bi bi-cloud-arrow-down-fill'> Resume</button>

        <div className='links'>
        <a  href='https://www.linkedin.com/in/shaik-rasool-bi/'><span className='bi bi-linkedin'></span></a>
        <a href='https://github.com/Rasoolbi54'><span className='bi bi-github'></span></a>
       </div>
      </div>
      <div className="detail-image">
        <img src='https://png.pngtree.com/png-clipart/20230913/original/pngtree-code-clipart-illustration-of-a-girl-using-her-computer-cartoon-vector-png-image_11076382.png' alt='Slider' />
      </div>

      
    </div>
    <div>
        <img className='slider-img' src='https://mattfarley.ca/img/hero-devices.svg' height={300}/>
    </div>

    
    </div>
  );
}

export default Detail;