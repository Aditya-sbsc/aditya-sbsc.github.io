
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { AdMockups } from './components/AdMockups';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Add ScrollReveal to the window type for TypeScript
declare global {
  interface Window {
    ScrollReveal?: any;
  }
}


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark' || (!storedTheme && userPrefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Scroll Reveal Effect
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ScrollReveal) {
      const sr = window.ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      });

      // Apply animations
      sr.reveal('#home h1, #home p, #home a');
      sr.reveal('h2', { delay: 100 });
      sr.reveal('#about .grid > div', { interval: 150 });
      sr.reveal('#portfolio .grid > div', { interval: 150, origin: 'left' });
      sr.reveal('#ad-mockups .grid > div', { interval: 100, scale: 0.95 });
      sr.reveal('#tools .relative');
      sr.reveal('#contact > div', { origin: 'top' });
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <AdMockups />
        <Tools />
        <Contact />
      </main>
      <Footer />

      {/* 
        ============================================================
        AI CHATBOT WIDGET PLACEHOLDER
        ============================================================
        To add a chatbot (e.g., from a service like Tidio, Crisp, or a custom one),
        you would typically paste their script tag here, right before 
        the closing </body> tag.

        Example:
        <script src="//code.tidio.co/your_unique_code.js" async></script>
        ============================================================
      */}
    </div>
  );
}

export default App;