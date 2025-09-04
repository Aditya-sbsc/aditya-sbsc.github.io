
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
          Aditya Yadav
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          AI & Ads Specialist | Automating Workflows & Crafting High-Impact Advertising
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};