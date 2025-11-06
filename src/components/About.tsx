
import React from 'react';

interface AboutProps {
  content: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4">About</h2>
      <div className="text-base p-6 rounded-lg bg-gradient-to-r from-yellow-100/20 to-amber-100/30 dark:from-yellow-50/10 dark:to-yellow-100/10 border border-amber-200/30 dark:border-yellow-200/20 shadow-sm">
        {content}
      </div>
    </section>
  );
};

export default About;
