import React from 'react';
import { Mail, Linkedin, Github, Twitter, Globe } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  username: string;
}

const SocialButton = ({ name, icon, url, username }: SocialLink) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
    aria-label={`Visit ${name} profile`}
  >
    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-white/90 font-medium">{name}</span>
      <span className="text-blue-200/60 text-sm">{username}</span>
    </div>
  </a>
);

export default function Contact() {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} className="text-blue-400" />,
      url: 'https://www.linkedin.com/in/dipankarmedhi',
      username: '/in/dipankarmedhi'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} className="text-blue-400" />,
      url: 'https://github.com/d1pankarmedhi',
      username: '@d1pankarmedhi'
    },
    // {
    //   name: 'Twitter',
    //   icon: <Twitter size={24} className="text-blue-400" />,
    //   url: 'https://twitter.com/your-handle',
    //   username: '@your-handle'
    // },
    // {
    //   name: 'Portfolio',
    //   icon: <Globe size={24} className="text-blue-400" />,
    //   url: 'https://your-portfolio.com',
    //   username: 'your-portfolio.com'
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="Contact" Icon={Mail} className="text-white" />

        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-blue-100/80 text-center mb-12">
            Let's connect! Feel free to reach out for collaborations or just a friendly chat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:dipankarmedhi11@gmail.com"
              className="col-span-full flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-lg transition-all duration-300 group mb-8"
            >
              <Mail size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-lg text-white">dipankarmedhi11@gmail.com</span>
            </a>

            {socialLinks.map((link, index) => (
              <SocialButton key={index} {...link} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-blue-100/60">
              Based in India
              <br />
              Available for remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}