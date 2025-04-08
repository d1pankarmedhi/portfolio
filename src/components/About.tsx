
import React from 'react';

interface AboutProps {
  content: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4">About</h2>
      <div className="text-base">
        {content}
      </div>
    </section>
  );
};

export default About;
