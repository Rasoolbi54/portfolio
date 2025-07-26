import React from 'react';
import Home from './components/Home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Projects from './components/projects/Projects.jsx';
import Experience from './components/Experience.jsx';
import Navbar from './components/Navbar.jsx';

function App() {


  return (
  <div>
    <Navbar />
     <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
  );
}

export default App;

