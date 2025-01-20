import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  Icon?: LucideIcon;
  className?: string;
}

export default function SectionTitle({ title, Icon, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center gap-4 mb-16 ${className}`}>
      {Icon && <Icon size={40} />}
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter m-0">
        {title}
      </h1>
    </div>
  );
}