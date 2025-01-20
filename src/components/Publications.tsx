import React from 'react';
import { BookText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import SectionTitle from './SectionTitle';

const PublicationCard = ({ title, conference, description }: {
  title: string;
  conference: string;
  description: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
    <h3 className="text-xl font-bold text-white/90 mb-2">{title}</h3>
    <p className="text-blue-200/60 text-sm mb-4">{conference}</p>
    <p className="text-blue-100/70 leading-relaxed">{description}</p>
  </div>
);

export default function Publications() {
  const { content, isLoading } = useMarkdownContent('/src/content/publications.md');

  if (isLoading) return null;

  const parsePublications = (content: string) => {
    const publications = [];
    const lines = content.split('\n');
    let currentPub: any = {};

    for (const line of lines) {
      if (line.startsWith('## ')) {
        if (Object.keys(currentPub).length > 0) {
          publications.push(currentPub);
        }
        currentPub = { title: line.slice(3) };
      } else if (line.startsWith('### ')) {
        currentPub.conference = line.slice(4);
      } else if (line.length > 0 && !line.startsWith('#')) {
        currentPub.description = line;
      }
    }
    if (Object.keys(currentPub).length > 0) {
      publications.push(currentPub);
    }
    return publications;
  };

  const publications = parsePublications(content);

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Publications" Icon={BookText} className="text-white" />
        
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-blue-100/80 text-center mb-12">
            Research contributions to the field of artificial intelligence and machine learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <PublicationCard
                key={index}
                title={pub.title}
                conference={pub.conference}
                description={pub.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}