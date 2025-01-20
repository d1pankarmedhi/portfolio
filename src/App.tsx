import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;