// App.js
import React from 'react';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import Experience from './components/Experience';



function App() {
  return (
   <div >
    <Header />
    <Home/>
    <About/>
    <Experience />
    <Projects/>
    <Contact/>
   </div>
  )
}

export default App;
