import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'stack', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0917] text-[#F5F3FF] overflow-x-hidden selection:bg-purple-600/30 selection:text-purple-200 font-sans">
      
      {/* Background Layered Organic Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="glow-orb w-[700px] h-[700px] -top-40 -left-40 bg-brand-purple/10"></div>
        <div className="glow-orb w-[800px] h-[800px] top-1/3 -right-60 bg-brand-violet/08"></div>
        <div className="glow-orb w-[600px] h-[600px] bottom-10 left-1/4 bg-brand-lavender/08"></div>
      </div>

      {/* Sticky Capsule Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA in Lower-Left Corner */}
      <FloatingCTA />

    </div>
  );
};

export default App;
