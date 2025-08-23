import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface HeaderProps {
  name: string;
  title: string;
  twitter?: string;
}

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
      <Button
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
      </Button>
    </div>
  );
};

export default Header;
