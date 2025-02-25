import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Flexday AI",
    role: "AI/ML Engineer",
    location: "Remote, India",
    timeline: "Nov 2022 - Present",
    responsibilities: [
      "Developed Conversational Data Analytics platform, powered by Generative Models, serving 10k + daily users",
      "Led the optimization of the retrieval and re-ranking pipeline, reducing latency by 56%",
      "Researched and implemented Vision Language Models for visual question answering, improving overall response accuracy.",
    ],
  },
  {
    company: "Leokraft Technologies",
    role: "Machine Learning Engineer",
    location: "Remote, India",
    timeline: "Aug 2022 - Oct 2022",
    responsibilities: [
      "Developed classification pipeline using sentiment analysis with transformer models for categorization of social media posts",
      "Created thorough technical documentation and high-level workflow diagrams to streamline the development process",
      "Debugged and resolved CI/CD issues and containerized ML services using Docker, ensuring continuous deployment of ML services. ",
    ],
  },
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
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
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
