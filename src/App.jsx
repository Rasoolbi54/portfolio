// App.js
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

function App() {
  return (
   <div>
    <Header />
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
   </div>
  )
}

export default App;
