import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once user scrolls beyond hero section
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 transform ${
        visible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToContact}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0d1017]/90 hover:bg-emerald-500/10 text-zinc-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 backdrop-blur-md shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105 active:scale-95"
        aria-label="Scroll to Let's Talk contact section"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-mono font-medium tracking-wide">
          Let's Talk
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </button>
    </div>
  );
};
