import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  Github as Git,
  Monitor,
  Layout,
  Cpu,
} from "lucide-react";

const skills = {
  Languages: {
    icon: <Code2 className="w-6 h-6 mb-2" />,
    skills: ["Python", "C++", "Rust", "Javascript"],
  },
  Frameworks: {
    icon: <Layout className="w-6 h-6 mb-2" />,
    skills: [
      "FastAPI",
      "Flask",
      "ReactJs",
      "PyTorch",
      "Tensorflow",
      "Scikit-learn",
      "Asyncio",
    ],
  },
  Databases: {
    icon: <Database className="w-6 h-6 mb-2" />,
    skills: ["PostgreSQL", "MongoDB", "Elasticsearch", "Pinecone", "Qdrant"],
  },
  Tools: {
    icon: <Terminal className="w-6 h-6 mb-2" />,
    skills: ["Git", "Github-actions", "Docker", "Kafka", "RabbitMQ"],
  },
  "CI/CD": {
    icon: <Git className="w-6 h-6 mb-2" />,
    skills: ["Github-actions", "SonarQube", "JFrog", "Octopus"],
  },
  Cloud: {
    icon: <Cloud className="w-6 h-6 mb-2" />,
    skills: ["Azure", "AWS"],
  },
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
              Passionate about creating innovative solutions with modern SOTA AI
              technologies. I'm a Data & Machine Learning Engineer with a strong
              focus on building robust and scalable systems that solve
              real-world problems. My expertise lies in leveraging cutting-edge
              AI technologies to drive innovation and deliver exceptional user
              experiences.
            </p>
            <p>
              Beyound my technical expertise, I'm a hardworking individual who
              thrives on challenges. I'm always eager to learn and stay
              up-to-date with the latest advancements in the field. I'm a team
              player who thrives in collaborative environments and a problem
              solver at heart.
            </p>
            <p>
              I'm deeply interested in AI/ML and its potential to revolutionize
              industries. I love to share my knowledge and experiences with
              others in the community. I write blog posts on various topics and
              share my insights on social media platforms.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Skills & Technologies
            </h3>
            <div
              className="grid gap-4 auto-rows-[minmax(100px,auto)]"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              }}
            >
              {Object.entries(skills).map(([category, { icon, skills }]) => (
                <div
                  key={category}
                  className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col"
                >
                  <div className="flex flex-col items-center mb-4">
                    {icon}
                    <h4 className="text-lg font-semibold text-gray-900">
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2">
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

          <div className="flex justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1V7ENLgkUKWvZ2Ij7O96KZ7N2TfNyWl4e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
