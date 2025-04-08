import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 mb-8">
      <Separator className="mb-6" />
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <div>© {currentYear} Dipankar Medhi. All rights reserved.</div>
        <div className="mt-3 sm:mt-0"></div>
      </div>
    </footer>
  );
};

export default Footer;
