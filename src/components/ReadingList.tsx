import React from 'react';
import { BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import SectionTitle from './SectionTitle';

export default function ReadingList() {
  const { content, isLoading } = useMarkdownContent('/src/content/reading.md');

  if (isLoading) return null;

  return (
    <section id="reading" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Reading List" Icon={BookOpen} className="text-white" />
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: () => null,
              h2: ({ children }) => (
                <p className="text-sm text-gray-400 mb-2">{children}</p>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-400 mb-8">{children}</p>
              )
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}