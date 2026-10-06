import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Code2, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/15 bg-[#090510] py-16 text-ink-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-purple-500/10">
          <div>
            <div className="font-display font-extrabold text-2xl tracking-tight text-[#F5F3FF] flex items-center gap-1.5">
              <span>PRACHI</span>
              <span className="w-2 h-2 rounded-full bg-brand-violet inline-block"></span>
            </div>
            <p className="text-xs sm:text-sm text-ink-secondary mt-1 font-mono">
              Software Developer • Web • Mobile • AI
            </p>
          </div>

          {/* Social and Contact Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-lavender transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4 text-brand-lavender" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>LeetCode</span>
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-brand-soft transition-colors flex items-center gap-1.5 text-brand-lavender"
            >
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-3 rounded-full bg-white/[0.04] hover:bg-purple-500/20 text-ink-secondary hover:text-white border border-purple-500/15 transition-all self-end md:self-auto hover:scale-105"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <p>© 2026 Prachi Raut. Built with curiosity and code.</p>
          <p>Pune, India • Purple Digital Studio</p>
        </div>

      </div>
    </footer>
  );
};
