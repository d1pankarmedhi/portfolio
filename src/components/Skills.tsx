import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Badge {
  image: string;
  alt: string;
  link?: string;
  description?: string;
  issuer?: string;
  issuedDate?: string;
}

interface SkillsProps {
  skills: string[];
  badges?: Badge[];
}

const Skills: React.FC<SkillsProps> = ({ skills, badges }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      {badges && badges.length > 0 && (
        <div className="flex justify-center gap-4 mt-8 mb-6">
          <TooltipProvider delayDuration={0}>
            {badges.map((badge, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="relative group">
                    {badge.link ? (
                      <a
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          src={badge.image}
                          alt={badge.alt}
                          className="w-24 h-24 rounded-full object-contain p-1 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-gray-200"
                        />
                      </a>
                    ) : (
                      <img
                        src={badge.image}
                        alt={badge.alt}
                        className="w-24 h-24 rounded-full object-contain p-1 border border-gray-100 bg-white shadow-sm"
                      />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-[200px] text-center">
                  <p className="font-medium">{badge.alt}</p>
                  {badge.description && (
                    <p className="text-sm text-gray-500 mt-1">
                      {badge.description}
                    </p>
                  )}
                  {(badge.issuer || badge.issuedDate) && (
                    <div className="text-xs text-gray-400 mt-1">
                      {badge.issuer && <p>{badge.issuer}</p>}
                      {badge.issuedDate && <p>Issued: {badge.issuedDate}</p>}
                    </div>
                  )}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      )}
    </section>
  );
};

export default Skills;
