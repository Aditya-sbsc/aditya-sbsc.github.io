
import React from 'react';
import { Section } from './Section';
import { TOOLS } from '../constants';

export const Tools: React.FC = () => {
  const extendedTools = [...TOOLS, ...TOOLS]; // Duplicate for seamless loop

  return (
    <Section id="tools" title="Tools I Use">
      <div className="relative w-full overflow-hidden">
        <div className="flex will-change-transform animate-marquee">
          {extendedTools.map((tool, index) => (
            <div key={`${tool.name}-${index}`} className="flex-shrink-0 w-48 mx-8 flex justify-center items-center group">
              <img
                src={tool.colorLogoUrl}
                alt={tool.name}
                className="h-16 object-contain filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />
      </div>
    </Section>
  );
};