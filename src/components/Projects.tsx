import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "InsightFlow",
    description:
      "A Generative AI powered Question-Answering, Data Analytics system that allows users to upload structured data like CSV, Excel files and query data interactively.",
    image:
      "https://github.com/user-attachments/assets/7cb98fe4-0cc0-4fdc-86d9-75c4cd1befe9",
    githubLink: "https://github.com/d1pankarmedhi/InsightFlow",
    technologies: ["Python", "LLM", "NLP", "Code-generation"],
  },
  {
    title: "Legal Summarizer",
    description:
      "Summarizing legal documents made easy using Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs).",
    image:
      "https://github.com/d1pankarmedhi/legal_summarizer/assets/136924835/4968735b-b3a8-4633-8edd-6b8bed7ba558",
    // demoLink: "https://collab-platform.com",
    githubLink: "https://github.com/d1pankarmedhi/legal_summarizer",
    technologies: ["Weaviate", "Pinecone", "Langchain"],
  },
  {
    title: "Pruning Networks",
    description:
      "Fine-grained pruning for a ResNet like architecture in PyTorch.",
    image:
      "https://github.com/user-attachments/assets/63a5043a-33bf-40ab-8f71-663bedbe371e",
    // demoLink: "https://blockchain-vote.com",
    githubLink: "https://github.com/d1pankarmedhi/fine-grained-pruning",
    technologies: ["PyTorch", "Pruning", "Fine-grained", "Deep Learning"],
  },
  {
    title: "Image Search Engine",
    description:
      "A vector-based image search engine, leveraging Vision Transformer (CLIP).",
    image:
      "https://github.com/d1pankarmedhi/image-search-engine/assets/136924835/19637f25-bc5f-4a90-982e-24efe6109a22",
    demoLink: "https://huggingface.co/spaces/dmedhi/image-search-engine",
    githubLink: "https://github.com/d1pankarmedhi/image-search-engine",
    technologies: ["VLM", "CLIP", "Vision Transformer", "Computer Vision"],
  },
  {
    title: "Rag with Phi-3",
    description:
      "A lightweight conversational RAG pipeline for your private documents utilizing Phi-3-mini.",
    image:
      "https://github.com/user-attachments/assets/ddfe0cc3-bf7b-4df9-92c8-b62de167c939",
    demoLink: "https://huggingface.co/spaces/dmedhi/phi-3-RAG",
    githubLink: "https://github.com/d1pankarmedhi/private-RAG-lite",
    technologies: ["Python", "PyTorch", "FastAPI", "Hugging Face"],
  },
  {
    title: "Phi-3 Rust",
    description:
      "Phi-3 inference engine using Rust, Actix-web and Candle for fast and efficient inference.",
    image:
      "https://github.com/user-attachments/assets/ba83d47e-0649-4e7f-8373-850469440b11",
    // demoLink: "https://blockchain-vote.com",
    githubLink: "https://github.com/d1pankarmedhi/Phi3-rust",
    technologies: ["Rust", "Phi3", "Actix-web", "Candle"],
  },
  {
    title: "Document Parsing",
    description:
      "Collection of document parsing techniques, methods and tools.",
    image:
      "https://github.com/user-attachments/assets/71851efd-28ac-456c-b459-c4030a8ec84a",
    // demoLink: "https://blockchain-vote.com",
    githubLink: "https://github.com/d1pankarmedhi/document_parsing",
    technologies: ["Python", "NLP", "Document Parsing"],
  },
  {
    title: "Ping Pong C++",
    description:
      "A Ping Pong game with SFML and C++ using Axis Aligned Bounding Box collision technique.",
    image:
      "https://github.com/user-attachments/assets/383ee662-2b31-4fba-a5fc-38fc19d2ecd4",
    // demoLink: "https://blockchain-vote.com",
    githubLink: "https://github.com/d1pankarmedhi/PingPong",
    technologies: ["C++", "SFML", "Game Development"],
  },
  {
    title: "Human Face Generation using GANs",
    description:
      "A Generative Adversarial Network (GAN) based model to generate human faces.",
    image:
      "https://github.com/user-attachments/assets/db31db02-fc16-46e8-9e6f-85923137f2f7",
    // demoLink: "https://blockchain-vote.com",
    githubLink: "https://github.com/d1pankarmedhi/face-generation-GAN",
    technologies: ["GAN", "PyTorch", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Chunkr",
    description: "A Rust based document chunking library.",
    image:
      "https://github.com/user-attachments/assets/dbf62a46-299c-493a-a410-b53427715390",
    demoLink: "https://crates.io/crates/chunkr",
    githubLink: "https://github.com/d1pankarmedhi/chunkr",
    technologies: ["Rust", "NLP", "Document Chunking"],
  },
  {
    title: "Vehicle Detection",
    description:
      "A vehicle detection and tracking system using YOLOv8 and OpenCV.",
    image:
      "https://github.com/d1pankarmedhi/vehicle-detection/blob/main/demo.gif?raw=true",
    // demoLink: "https://crates.io/crates/chunkr",
    githubLink: "https://github.com/d1pankarmedhi/vehicle-detection",
    technologies: ["YOLOv8", "OpenCV", "Computer Vision"],
  },
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
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
                {showAll ? "Show Less" : "More Projects"}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
