import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Details from './components/Details';
import Faculty from './components/Faculty';
import Syllabus from './components/Syllabus';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Syllabus />
      <Faculty />
      <Details />
      <Contact />
    </div>
  );
}

export default App;