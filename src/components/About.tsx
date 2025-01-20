import React from 'react';
import { Brain, Code, BookOpen, Briefcase } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import SectionTitle from './SectionTitle';

const TimelineItem = ({ 
  title, 
  company, 
  period, 
  isLast 
}: { 
  title: string; 
  company: string; 
  period: string; 
  isLast: boolean;
}) => (
  <div className="relative">
    {!isLast && (
      <div className="absolute top-5 left-5 h-full w-0.5 bg-gray-200" />
    )}
    <div className="relative flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border-2 border-gray-200 z-10 group-hover:border-black transition-colors">
        <Briefcase size={20} className="text-white" />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md flex-grow group-hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-gray-500 text-sm">{period}</p>
      </div>
    </div>
  </div>
);

export default function About() {
  const { content, isLoading } = useMarkdownContent('/src/content/about.md');

  if (isLoading) return null;

  const icons = {
    'AI Researcher': Brain,
    'Engineer': Code,
    'Lifelong Learner': BookOpen
  };

  const parseTimeline = (content: string) => {
    const timeline = [];
    const lines = content.split('\n');
    let currentItem: any = {};

    for (const line of lines) {
      if (line.startsWith('### ') && line.includes('Engineer') || line.includes('Intern')) {
        if (Object.keys(currentItem).length > 0) {
          timeline.push(currentItem);
        }
        currentItem = { title: line.slice(4) };
      } else if (line.startsWith('#### ')) {
        currentItem.company = line.slice(5);
      } else if (line.startsWith('##### ')) {
        currentItem.period = line.slice(6);
      }
    }
    if (Object.keys(currentItem).length > 0) {
      timeline.push(currentItem);
    }
    return timeline;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ReactMarkdown
            components={{
              h1: () => null,
              h2: ({ children }) => {
                const title = children[0] as string;
                const Icon = icons[title as keyof typeof icons];
                if (!Icon || title === 'Experience Timeline') return null;
                return (
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      {Icon && <Icon size={32} className="text-black" />}
                      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    </div>
                    <div className="prose prose-sm">
                      {content.split('\n').find(line => 
                        line.startsWith(title) && 
                        content.split('\n')[content.split('\n').indexOf(line) + 1]
                      )?.split('\n')[1]}
                    </div>
                  </div>
                );
              },
              p: () => null
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase size={28} />
            Experience Timeline
          </h2>
          <div className="space-y-8">
            {parseTimeline(content).map((item, index, array) => (
              <TimelineItem
                key={index}
                title={item.title}
                company={item.company}
                period={item.period}
                isLast={index === array.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}