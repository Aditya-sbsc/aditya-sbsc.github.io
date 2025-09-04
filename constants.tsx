
import React from 'react';
import type { PortfolioItem, AdMockup, Tool, SocialLink } from './types';

export const NAV_LINKS = ['Home', 'About', 'Portfolio', 'Ad Mockups', 'Tools', 'Contact'];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: 'Automated Lead Qualification',
    description: 'Developed an AI-powered system that automatically qualifies inbound leads, saving 20+ hours per week for the sales team.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['AI', 'n8n', 'CRM Integration'],
  },
  {
    title: 'Dynamic Ad Creative Generation',
    description: 'Built a workflow that generates hundreds of ad creative variations from a single template, personalized for different audiences.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Automation', 'Zapier', 'Ad Tech'],
  },
  {
    title: 'Customer Support Chatbot',
    description: 'Implemented a sophisticated chatbot that handles 70% of common customer queries, improving response time and satisfaction.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Chatbot', 'AI', 'Customer Experience'],
  },
  {
    title: 'Social Media Content Scheduler',
    description: 'Created an automated pipeline to schedule and post content across multiple social media platforms from a centralized dashboard.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Social Media', 'Automation', 'API'],
  },
];

export const AD_MOCKUPS: AdMockup[] = [
  {
    caption: 'Sleek & Modern - Tech Gadget Launch',
    imageUrl: 'https://picsum.photos/seed/ad1/500/700',
  },
  {
    caption: 'Vibrant & Fresh - Healthy Drink Campaign',
    imageUrl: 'https://picsum.photos/seed/ad2/500/700',
  },
  {
    caption: 'Luxury & Elegance - Fashion Brand Ad',
    imageUrl: 'https://picsum.photos/seed/ad3/500/700',
  },
  {
    caption: 'Action-Packed - Sports Apparel Promotion',
    imageUrl: 'https://picsum.photos/seed/ad4/500/700',
  },
];

export const TOOLS: Tool[] = [
  {
    name: 'n8n',
    logoUrl: 'https://raw.githubusercontent.com/n8n-io/n8n-docs/main/archive/static/n8n-logo-grey.svg',
    colorLogoUrl: 'https://raw.githubusercontent.com/n8n-io/n8n-docs/main/archive/static/n8n-logo.svg',
  },
  {
    name: 'Zapier',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/zapier-2.svg',
    colorLogoUrl: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
  },
  {
    name: 'Google Ads',
    logoUrl: 'https://www.gstatic.com/images/branding/product/2x/ads_96dp.png',
    colorLogoUrl: 'https://www.gstatic.com/images/branding/product/2x/ads_96dp.png',
  },
  {
    name: 'Make',
    logoUrl: 'https://static-cdn.make.com/img/logo/make-logo-mono-dark.svg',
    colorLogoUrl: 'https://static-cdn.make.com/img/logo/make-logo.svg'
  },
  {
    name: 'Google Analytics',
    logoUrl: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
    colorLogoUrl: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    ),
  },
  {
    name: 'Twitter',
    url: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.336.216-2.029.177.608 1.926 2.373 3.252 4.49 3.29-1.711 1.33-3.845 2.068-6.141 2.068-.4 0-.8-.023-1.18-.067 2.15 1.386 4.697 2.15 7.44 2.15 9.117 0 14.29-7.56 14.04-14.513 1.018-.73 1.836-1.636 2.463-2.68z"/></svg>
    ),
  },
  {
    name: 'GitHub',
    url: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
  },
];