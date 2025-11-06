import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/custom-carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectLink {
  icon: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  period: string;
  image: string;
  links: ProjectLink[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const truncateText = (text: string, maxLength: number = 80) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <section className="mb-12 relative">
      <h2 className="text-xl font-bold mb-6">Featured</h2>

      <div className="relative w-full">
        <Carousel>
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 pl-4"
              >
                <div className="relative group">
                  <a
                    href={project.links[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block sm:pointer-events-none"
                  >
                    <Card className="h-[400px] flex flex-col bg-gradient-to-r from-yellow-100/20 to-amber-100/30 dark:from-yellow-50/10 dark:to-yellow-100/10 border border-amber-200/30 dark:border-yellow-200/20 hover:bg-amber-100/40 dark:hover:bg-yellow-100/5 transition-all duration-200 shadow-sm">
                      <div className="h-48 shrink-0 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col flex-1">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {project.period}
                        </p>
                        <p className="text-sm mb-4 flex-1">
                          {truncateText(project.description)}
                        </p>
                        <div className="flex gap-2 sm:relative sm:z-10">
                          <TooltipProvider delayDuration={0}>
                            {project.links.map((link, linkIndex) => (
                              <Tooltip key={linkIndex}>
                                <TooltipTrigger asChild>
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sm:pointer-events-auto"
                                  >
                                    <img
                                      src={link.icon}
                                      alt="Link"
                                      className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>See project</p>
                                </TooltipContent>
                              </Tooltip>
                            ))}
                          </TooltipProvider>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-10">
            <CarouselNavigation
              className="static w-auto justify-center gap-4"
              classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
