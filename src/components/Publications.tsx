import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Calendar } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Publications</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Efficient Deep Learning for Real-time Object Detection in Edge Devices
              </h3>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center">
                  <Users size={18} className="mr-2" />
                  <span>John Doe, Jane Smith, Robert Johnson</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>2024</span>
                </div>
              </div>
              <p className="text-gray-700">
                A novel approach to optimizing deep learning models for resource-constrained edge devices,
                achieving state-of-the-art performance while maintaining low latency and power consumption.
              </p>
              <div className="flex items-center">
                <a
                  href="https://arxiv.org/abs/2401.12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FileText size={18} className="mr-2" />
                  Read on arXiv
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;