import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Trophy, Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HeaderProps {
  name: string;
  title: string;
  twitter?: string;
}

const Featured = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-full max-w-3xl p-6 bg-gradient-to-r from-yellow-50/10 to-yellow-100/10 border border-yellow-200/20 cursor-pointer hover:bg-yellow-100/5 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-yellow-100/20">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Hackathon Winner 🎉</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Built a marketing and outreach agent for automated client acquisition
              </p>
            </div>
            <Button variant="ghost" size="sm" className="hover:bg-yellow-100/20">
              →
            </Button>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Trophy className="w-8 h-8 text-yellow-500" /> 
            Hackathon Champion 2025
          </DialogTitle>
          <DialogDescription>
            Flexday Innovathon • October 2025
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="mt-4 pr-4">
          <div className="space-y-6">
            {/* Project Images */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/achievements/trophy.jpg" 
                alt="Hackathon Trophy" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="/achievements/certificate.jpg" 
                alt="Achievement Certificate" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About the Project</h3>
              <p className="text-muted-foreground">
                An AI marketing and outreach platform that automates the entire customer lifecycle, 
                from acquisition to engagement. It uses multimodal LLMs to perform deep research, 
                generate insights, craft personalized emails, and create automated one-pager solution proposals.
              </p>

              {/* <div className="space-y-2">
                <h4 className="font-medium">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>First Place among 100+ participating teams</li>
                  <li>Best Technical Innovation Award</li>
                  <li>Featured in [relevant publication/platform]</li>
                </ul>
              </div> */}

              {/* <div className="space-y-2">
                <h4 className="font-medium">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "OpenAI", "LangChain", "Vector DB", "React"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Call to Action
            <div className="flex gap-4 pt-4">
              <Button className="flex items-center gap-2">
                View Demo <ExternalLink className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                View Code <ExternalLink className="w-4 h-4" />
              </Button>
            </div> */}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

const Header: React.FC<HeaderProps> = ({ name, title, twitter }) => {
  return (
    <div className="flex flex-col items-center text-center gap-6 mb-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          Hi, I&apos;m {name} <span className="wave">👋</span>
        </h1>
        <p className="text-lg mt-4 mx-auto">
          {title}
          {twitter && <span></span>}
        </p>
      </div>
      <Featured />
      {/* <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
      >
        <Download size={16} />
        <a
          href="https://drive.google.com/file/d/1V7ENLgkUKWvZ2Ij7O96KZ7N2TfNyWl4e/view?usp=sharing"
          download
        >
          Resume
        </a>
      </Button> */}
    </div>
  );
};

export default Header;
