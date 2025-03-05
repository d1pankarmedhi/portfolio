import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title:
      "Fine-tune Quantized Language model using LoRA with peft & transformers on T4 GPU",
    description:
      "Fine-tuning T5 quantized model for English to French translation on a T4 colab GPU and push to HuggingFace Hub.",
    date: "2023-12-21",
    readTime: "9 min",
    link: "https://towardsdev.com/fine-tune-quantized-language-model-using-lora-with-peft-transformers-on-t4-gpu-287da2d5d7f1",
    category: "Fine-tuning",
  },
  {
    title: "Deploying VLMs & LLMs on Azure Machine Learning Studio Endpoints",
    description:
      "A brief step-by-step discussion on deploying VLM/LLM on Azure ML Studio.",
    date: "2024-06-10",
    readTime: "8 min",
    link: "https://dipankarmedh1.medium.com/deploying-vision-language-models-vlms-and-large-language-models-llms-on-azure-machine-learning-a30b51b9260c",
    category: "MLOps",
  },
  {
    title:
      "RAG and OpenAI’s Function-Calling for Question-Answering with Langchain",
    description:
      "Streamlining Q&A Process with RAG and OpenAI’s Latest function-calling method.",
    date: "2023-07-16",
    readTime: "7 min",
    link: "https://dipankarmedh1.medium.com/exploring-the-power-of-rag-and-openais-function-calling-for-question-answering-d512c45c56b5",
    category: "RAG",
  },
  {
    title:
      "Real-time Object Detection with YOLO and Webcam: Enhancing Your Computer Vision Skills",
    description:
      "Learn How to Build Your Own Object Detection System with YOLO and Webcam Integration for Real-time Monitoring and Analysis.",
    date: "2023-03-27",
    readTime: "5 min",
    link: "https://dipankarmedh1.medium.com/real-time-object-detection-with-yolo-and-webcam-enhancing-your-computer-vision-skills-861b97c78993",
    category: "Computer Vision",
  },
];

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {post.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.article>
            ))}
          </div>
          {blogPosts.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {showAll ? "Show Less" : "More Posts"}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
