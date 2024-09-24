import React from 'react';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StarsCanvas from './components/StarsCanvas'; // Star background
import './App.css';

function App() {
  return (
    <div className="main">
    <div className="bg-loopgroup relative h-full w-full" >
      {/* Starry background overlay */}
      <StarsCanvas />
      
      {/* Main content */}
      <div className="relative z-[2]"> {/* Ensures the content appears over the starry background */}
          <LandingPage />
          <Skills />
          <Projects />
          <Contact />
      </div>
    </div>
    </div>
  );
}

export default App;
