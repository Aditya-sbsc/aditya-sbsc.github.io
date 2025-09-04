
import React from 'react';
import { Section } from './Section';

const ServiceCard: React.FC<{ title: string; description: string; icon: JSX.Element }> = ({ title, description, icon }) => (
  <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/20 dark:border-gray-700/30">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-400">{description}</p>
  </div>
);

export const About: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Chatbots',
      description: 'I design and deploy intelligent chatbots that handle customer inquiries, qualify leads, and provide 24/7 support, enhancing user experience and efficiency.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    },
    {
      title: 'Workflow Automation',
      description: 'I build custom automation pipelines that eliminate repetitive tasks, connect your apps, and streamline your business processes using tools like n8n and Zapier.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    },
    {
      title: 'Creative Ad Mockups',
      description: 'I craft visually compelling and strategically sound ad mockups for social media and digital platforms that capture attention and drive conversions.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
  ];

  return (
    <Section id="about" title="What I Do">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
};