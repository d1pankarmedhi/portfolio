import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management system that uses machine learning to prioritize and categorize tasks automatically.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://demo-task-manager.com",
    githubLink: "https://github.com/johndoe/task-manager",
    technologies: ["React", "Python", "TensorFlow", "FastAPI"]
  },
  {
    title: "Real-time Collaboration Platform",
    description: "A WebSocket-based platform enabling real-time document editing and team collaboration.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://collab-platform.com",
    githubLink: "https://github.com/johndoe/collab-platform",
    technologies: ["Next.js", "Socket.io", "MongoDB", "Docker"]
  },
  {
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on Ethereum blockchain.",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://blockchain-vote.com",
    githubLink: "https://github.com/johndoe/blockchain-vote",
    technologies: ["Solidity", "Web3.js", "React", "Node.js"]
  },
  {
    title: "Smart Home Automation",
    description: "IoT-based home automation system with mobile app control and energy monitoring.",
    image: "https://images.unsplash.com/photo-1558002038-876f1d0aa8d6?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://smart-home-demo.com",
    githubLink: "https://github.com/johndoe/smart-home",
    technologies: ["React Native", "Node.js", "MQTT", "PostgreSQL"]
  },
  {
    title: "AI Image Generator",
    description: "A deep learning-based image generation tool using GANs.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://ai-image-gen.com",
    githubLink: "https://github.com/johndoe/ai-image-gen",
    technologies: ["Python", "PyTorch", "FastAPI", "React"]
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {showAll ? 'Show Less' : 'More Projects'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
