import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Google",
    role: "Senior Software Engineer",
    location: "Mountain View, CA",
    timeline: "Jan 2020 - Present",
    responsibilities: [
      "Led the development of a microservices architecture that improved system scalability by 300%",
      "Mentored a team of 5 junior engineers and implemented best practices that reduced bug reports by 45%",
      "Architected and deployed cloud-native solutions using Google Cloud Platform, serving 1M+ daily users"
    ]
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    location: "Seattle, WA",
    timeline: "Jun 2017 - Dec 2019",
    responsibilities: [
      "Developed and maintained core features for Azure DevOps, focusing on CI/CD pipeline improvements",
      "Implemented real-time collaboration features using WebSocket, improving team productivity by 30%",
      "Led the migration of legacy systems to modern React-based architecture"
    ]
  },
  {
    company: "Amazon",
    role: "Software Development Engineer",
    location: "Seattle, WA",
    timeline: "Jul 2015 - May 2017",
    responsibilities: [
      "Built and optimized RESTful APIs for the Amazon Marketplace, handling 50K+ requests per second",
      "Implemented automated testing frameworks that reduced deployment time by 40%",
      "Designed and developed inventory management systems using microservices architecture"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Building2 size={18} className="mr-2" />
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-gray-600">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.timeline}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;