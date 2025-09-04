
import React from 'react';
import { Section } from './Section';
import { AD_MOCKUPS } from '../constants';

export const AdMockups: React.FC = () => {
  return (
    <Section id="ad-mockups" title="Ad Mockups">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {AD_MOCKUPS.map((mockup, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg shadow-purple-500/10 dark:shadow-purple-400/10 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20 transition-all duration-300">
            <img src={mockup.imageUrl} alt={mockup.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <p className="text-white font-semibold">{mockup.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};