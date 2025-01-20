import React from 'react';
import { Terminal } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useMarkdownContent } from '../hooks/useMarkdownContent';

export default function Hero() {
  const { content, isLoading } = useMarkdownContent('/src/content/hero.md');

  if (isLoading) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center space-y-12">
          <Terminal size={64} className="text-white animate-pulse" />
          <div className="prose prose-invert max-w-3xl">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white via-blue-200 to-white text-transparent bg-clip-text">
                    {children}
                  </h1>
                ),
                p: ({ children }) => (
                  <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                    {children}
                  </p>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          {/* <a
            href="#experience"
            className="border-2 border-white/20 bg-white/5 px-8 py-3 text-lg text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg backdrop-blur-sm"
          >
            View My Work
          </a> */}
        </div>
      </div>
    </section>
  );
}