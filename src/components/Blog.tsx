import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Building Scalable Microservices with Node.js",
    description: "A comprehensive guide to designing and implementing microservices architecture using Node.js and Docker.",
    date: "2024-02-15",
    readTime: "12 min",
    link: "https://blog.example.com/microservices-nodejs",
    category: "Backend"
  },
  {
    title: "Advanced React Patterns for Production Applications",
    description: "Deep dive into advanced React patterns and best practices for building maintainable applications.",
    date: "2024-01-28",
    readTime: "15 min",
    link: "https://blog.example.com/react-patterns",
    category: "Frontend"
  },
  {
    title: "Implementing Authentication with JWT and OAuth2",
    description: "Step-by-step guide to implementing secure authentication in web applications.",
    date: "2024-01-10",
    readTime: "10 min",
    link: "https://blog.example.com/auth-guide",
    category: "Security"
  },
  {
    title: "Machine Learning in Production: Best Practices",
    description: "Learn how to deploy and maintain machine learning models in production environments.",
    date: "2023-12-20",
    readTime: "18 min",
    link: "https://blog.example.com/ml-production",
    category: "Machine Learning"
  },
  {
    title: "Optimizing React Performance",
    description: "Advanced techniques for improving React application performance and user experience.",
    date: "2023-12-05",
    readTime: "14 min",
    link: "https://blog.example.com/react-performance",
    category: "Frontend"
  }
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
                  <span className="px-3 py-1 bg-gray-100 rounded-full">{post.category}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
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
                {showAll ? 'Show Less' : 'More Posts'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;