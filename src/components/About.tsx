import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code2, Server, Database, Cloud, Terminal, Github as Git, Monitor, Layout, Cpu } from 'lucide-react';

const skills = {
  'Frontend Development': {
    icon: <Layout className="w-6 h-6 mb-2" />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS']
  },
  'Backend Development': {
    icon: <Server className="w-6 h-6 mb-2" />,
    skills: ['Node.js', 'Python', 'GraphQL', 'RESTful APIs']
  },
  'Database & Cloud': {
    icon: <Cloud className="w-6 h-6 mb-2" />,
    skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker']
  },
  'Tools & Technologies': {
    icon: <Terminal className="w-6 h-6 mb-2" />,
    skills: ['Git', 'CI/CD', 'Jest', 'Webpack']
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              I am a passionate software engineer with a Master's degree in Computer Science from Stanford University. 
              My academic journey began with a Bachelor's in Computer Engineering from MIT, where I developed a strong 
              foundation in algorithms, distributed systems, and machine learning.
            </p>
            <p>
              Beyond coding, I'm an avid rock climber and have been practicing this sport for over 5 years. 
              I find that climbing challenges me both physically and mentally, much like solving complex 
              programming problems. I'm also a photography enthusiast, particularly interested in landscape 
              and astrophotography. These hobbies help me maintain a creative perspective that I bring to 
              my technical work.
            </p>
            <p>
              I'm deeply interested in open-source development and regularly contribute to various projects. 
              In my free time, I enjoy writing technical blog posts, mentoring junior developers, and 
              participating in local tech meetups. I'm particularly passionate about developer tooling and 
              automation, always looking for ways to improve development workflows.
            </p>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, { icon, skills }]) => (
                <div key={category} className="bg-gray-50 rounded-xl p-6 shadow-md">
                  <div className="flex flex-col items-center mb-4">
                    {icon}
                    <h4 className="text-lg font-semibold text-gray-900">{category}</h4>
                  </div>
                  <div className="space-y-2">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-white rounded-lg px-4 py-2 text-center text-gray-800 shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Download size={20} className="mr-2" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
