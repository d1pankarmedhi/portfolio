import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, BookText } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/d1pankarmedhi",
    icon: <Github className="w-4 h-4" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dipankarmedhi",
    icon: <Linkedin className="w-4 h-4" />,
  },
  //   {
  //     name: "Twitter",
  //     url: "https://twitter.com/d1pankarmedhi",
  //     icon: <Twitter className="w-4 h-4" />,
  //   },
  {
    name: "Blog",
    url: "https://dipankarmedh1.medium.com/",
    icon: <BookText className="w-4 h-4" />,
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center gap-3 mb-16">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          className="rounded-full hover:scale-110 transition-transform duration-200"
          asChild
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
