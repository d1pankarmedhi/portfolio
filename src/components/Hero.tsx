import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Full Stack Developer & Software Engineer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Building innovative solutions with modern technologies. Passionate about creating
            impactful applications that solve real-world problems.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;