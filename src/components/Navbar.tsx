import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact', isCta: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 sm:py-5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand: PRACHI. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#F5F3FF] group-hover:text-brand-lavender transition-colors">
            PRACHI
          </span>
          <span className="w-2 h-2 rounded-full bg-brand-violet inline-block group-hover:scale-150 transition-transform"></span>
        </a>

        {/* Desktop Navigation Container: Modern Capsule */}
        <nav
          className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#140D22]/85 backdrop-blur-xl border-purple-500/25 shadow-[0_8px_32px_rgba(124,58,237,0.18)]'
              : 'bg-[#140D22]/60 backdrop-blur-lg border-purple-500/15'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            if (link.isCta) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="ml-2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-medium font-sans shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all hover:scale-105 active:scale-95"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-soft animate-pulse"></span>
                  <span>{link.name}</span>
                </a>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-500/20 text-brand-lavender font-semibold shadow-sm'
                    : 'text-ink-secondary hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-2xl bg-[#140D22]/80 border border-purple-500/20 text-[#F5F3FF] hover:text-brand-lavender focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-[#140D22]/95 backdrop-blur-2xl border border-purple-500/25 rounded-3xl p-5 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-600/20 text-brand-lavender font-semibold'
                      : 'text-ink-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
