import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useMarkdownContent } from '../hooks/useMarkdownContent';
import SectionTitle from './SectionTitle';

const ProjectCard = ({ title, description, link, imageUrl }: {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}) => (
  <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
    <div className="aspect-video overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white/90 group-hover:text-white">
        {title}
      </h3>
      <p className="text-blue-100/70 mb-4 line-clamp-2">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        <Github size={20} />
        <span>View Project</span>
        <ExternalLink size={16} />
      </a>
    </div>
  </div>
);

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { content, isLoading } = useMarkdownContent('/src/content/projects.md');

  if (isLoading) return null;

  const parseProjects = (content: string) => {
    const projects = [];
    const lines = content.split('\n');
    let currentProject: any = {};

    for (const line of lines) {
      if (line.startsWith('## ')) {
        if (Object.keys(currentProject).length > 0) {
          projects.push(currentProject);
        }
        currentProject = { title: line.slice(3) };
      } else if (line.startsWith('### ')) {
        if (!currentProject.description) {
          currentProject.description = line.slice(4);
        } else if (!currentProject.link) {
          currentProject.link = line.slice(4);
        } else if (!currentProject.imageUrl) {
          currentProject.imageUrl = line.slice(4);
        }
      }
    }
    if (Object.keys(currentProject).length > 0) {
      projects.push(currentProject);
    }
    return projects;
  };

  const projects = parseProjects(content);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" Icon={Github} className="text-white" />
        
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-blue-100/80 text-center mb-12">
            A collection of my work in AI, machine learning, and software development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

          {projects.length > 6 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-300 text-white group"
              >
                <span>{showAll ? 'Show Less' : 'View More Projects'}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  size={20} 
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}