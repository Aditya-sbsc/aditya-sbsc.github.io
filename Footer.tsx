
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Aditya Yadav</a>

          <div className="flex mt-4">
            {SOCIAL_LINKS.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="mx-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Aditya Yadav. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};