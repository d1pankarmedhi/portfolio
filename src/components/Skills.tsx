import React from 'react';
import { Code2, Database, Server, Brain, Container, Github, Library, Cpu, Workflow, Terminal } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const SkillCard = ({ name, icon, items }: Skill) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white/90">{name}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-white/5 text-blue-100/70 rounded-full border border-white/10 hover:border-blue-500/30 transition-colors"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skills: Skill[] = [
    {
      name: 'Languages',
      icon: <Code2 size={24} className="text-blue-400" />,
      items: ['Python', 'C++', 'Rust', 'SQL']
    },
    {
      name: 'ML/DL Frameworks',
      icon: <Brain size={24} className="text-blue-400" />,
      items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'MLflow']
    },
    {
      name: 'Data Science',
      icon: <Database size={24} className="text-blue-400" />,
      items: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Seaborn', 'Plotly']
    },
    // {
    //   name: 'Big Data',
    //   icon: <Server size={24} className="text-blue-400" />,
    //   items: ['Spark', 'Hadoop', 'Kafka', 'Airflow', 'Databricks']
    // },
    {
      name: 'DevOps',
      icon: <Container size={24} className="text-blue-400" />,
      items: ['Docker', 'Github Actions', 'Octopus', 'Azure DevOps']
    },
    {
      name: 'Cloud',
      icon: <Server size={24} className="text-blue-400" />,
      items: ['AWS', 'GCP', 'Azure']
    },
    {
      name: 'Version Control',
      icon: <Github size={24} className="text-blue-400" />,
      items: ['Git', 'GitHub']
    },
    {
      name: 'Web Development',
      icon: <Library size={24} className="text-blue-400" />,
      items: ['FastAPI', 'Flask', 'React']
    },
    // {
    //   name: 'Hardware',
    //   icon: <Cpu size={24} className="text-blue-400" />,
    //   items: ['CUDA', 'OpenCL', 'Verilog', 'ARM', 'x86']
    // },
    // {
    //   name: 'MLOps',
    //   icon: <Workflow size={24} className="text-blue-400" />,
    //   items: ['MLflow', 'DVC', 'Weights & Biases', 'Kubeflow', 'Seldon']
    // },
    {
      name: 'Tools',
      icon: <Terminal size={24} className="text-blue-400" />,
      items: ['Linux', 'Bash', 'VS Code', 'Jupyter', 'LaTeX']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills" Icon={Code2} className="text-white" />

        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-blue-100/80 text-center mb-12">
            A comprehensive toolkit for building intelligent systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}