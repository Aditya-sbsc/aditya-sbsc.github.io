
import React from 'react';
import { Section } from './Section';
import { PORTFOLIO_ITEMS } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" title="Automation Portfolio">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="group rounded-xl overflow-hidden bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};