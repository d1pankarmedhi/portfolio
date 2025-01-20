import React from 'react';
import { Briefcase } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import SectionTitle from './SectionTitle';

const TimelineItem = ({
  role,
  company,
  period,
  description,
  isLast
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  isLast: boolean;
}) => (
  <div className="relative group">
    {!isLast && (
      <div className="absolute top-5 left-5 h-full w-0.5 bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors" />
    )}
    <div className="relative flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center z-10 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all mt-1">
        <Briefcase size={20} className="text-blue-500/70 group-hover:text-blue-500" />
      </div>
      <div className="flex-grow bg-white/5 border border-blue-500/10 rounded-lg p-6 group-hover:bg-white/10 group-hover:border-blue-500/20 transition-all">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-bold text-white/90 group-hover:text-white">
            {role}
          </h3>
          <span className="text-blue-200/60 text-sm md:text-base">
            {period}
          </span>
        </div>
        <p className="text-blue-100/70 text-lg mb-2">{company}</p>
        <p className="text-blue-100/60 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default function Experience() {
  const { content, isLoading } = useMarkdownContent('/src/content/experience.md');

  if (isLoading) return null;

  const experiences = [
    {
      role: "AI/ML Engineer",
      company: "Flexday.ai",
      period: "Nov 2022 - Present",
      description: "AI development and research, including Machine Learning, ML Infrastructure and Operations, System Optimization."
    },
    {
      role: "ML Engineer Intern",
      company: "Leokraft Technologies",
      period: "Aug 2022 - Oct 2022",
      description: "Research and Development of Transformer models for near real time sentiment analysis of social media contents."
    },

  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="Work Experience" Icon={Briefcase} className="text-white" />

        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-blue-100/80 text-center mb-12">
            Building and deploying AI solutions that make a difference.
          </p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}