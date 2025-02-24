import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Publications from './components/Publications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Publications />
      <Footer />
    </div>
  );
}

export default App;
