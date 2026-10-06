import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal floating pill after initial hero scroll
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Detect if a modal has locked body scrolling
    const observer = new MutationObserver(() => {
      const modalOpen = document.body.style.overflow === 'hidden';
      setIsModalOpen(modalOpen);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:left-6 z-40 transition-all duration-300 transform ${
        visible && !isModalOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToContact}
        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#180E2E]/90 hover:bg-[#221340] text-brand-lavender hover:text-white border border-purple-500/30 hover:border-brand-lavender backdrop-blur-xl shadow-[0_8px_30px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Let's Talk - Contact Section"
      >
        <span className="text-brand-lavender text-xs">✦</span>
        <span className="text-xs font-mono font-medium tracking-wide">
          Let's Talk
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-brand-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
