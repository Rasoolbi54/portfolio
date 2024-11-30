import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
    
      <div>
        <h2>Rasool Bi Shaik.</h2>
      </div>
      <nav>
        <ul>
          <li><Link  
               to="home"
              smooth={true}
              duration={400}>Home</Link></li>
          <li><Link  
               to="about"
              smooth={true}
              duration={500}>About</Link></li>
          <li><Link  
               to="projects"
              smooth={true}
              duration={500}>Projects</Link></li>
          <li><Link  
               to="contact"
              smooth={true}
              duration={500}>Contact</Link></li>
         
        </ul>
      </nav>
      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
     
     
    </div>
  );
}

export default Header;
