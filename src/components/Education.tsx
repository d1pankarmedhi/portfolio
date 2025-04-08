
import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  logo: string;
}

interface EducationProps {
  items: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">Education</h2>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center shadow-sm">
              <img src={item.logo} alt={item.institution} className="w-12 h-12 object-contain" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
              <div>
                <div className="font-medium">{item.institution}</div>
                <div className="text-sm text-gray-600">{item.degree}</div>
              </div>
              <div className="text-sm text-gray-600 mt-1 sm:mt-0">
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
