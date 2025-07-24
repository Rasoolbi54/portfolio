// App.js
import React from 'react';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Experience from './components/Experience';
import Navbar from './components/header/Navbar';




function App() {
  return (
   <div >
    <Navbar />
    <Home/>
    <About/>
    <Experience />
    <Projects/>
    <Contact/>
   </div>
  )
}

export default App;
