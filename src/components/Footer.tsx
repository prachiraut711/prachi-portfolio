import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080b] py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.05]">
          <div>
            <div className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              {personalInfo.name}
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
              Software Developer • Full-Stack • Mobile • AI/ML
            </p>
          </div>

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
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4 text-emerald-400" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>LeetCode</span>
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400"
            >
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-all self-end md:self-auto"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 Prachi Raut. Built with curiosity and code.</p>
          <p>Pune, India • Designed for technical excellence</p>
        </div>

      </div>
    </footer>
  );
};
