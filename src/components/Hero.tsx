import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowDown, ArrowUpRight, Code2, 
  Terminal, Sparkles, Smartphone, Layers, CheckCircle 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const domainKeywords = [
    { label: 'FULL-STACK', highlight: true },
    { label: 'MOBILE', highlight: true },
    { label: 'AI / ML', highlight: true },
    { label: 'PYTHON', highlight: false },
    { label: 'REACT', highlight: false },
    { label: 'FLUTTER', highlight: false },
    { label: 'FASTAPI', highlight: false },
    { label: 'POSTGRESQL', highlight: false },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] -top-32 -left-32 bg-emerald-500/10"></div>
      <div className="ambient-glow w-[600px] h-[600px] top-1/4 -right-40 bg-teal-500/10"></div>
      <div className="ambient-glow w-[400px] h-[400px] bottom-0 left-1/3 bg-indigo-500/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Computer Engineering Graduate • Available for Roles</span>
            </div>

            {/* Name & Primary Role */}
            <div>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 block mb-2">
                {personalInfo.name} — SOFTWARE DEVELOPER
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Building products across <br />
                <span className="text-gradient-emerald">Web • Mobile • AI</span>
              </h1>
            </div>

            {/* Supporting statement */}
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
              {personalInfo.heroStatement}
            </p>

            {/* Domain Keywords Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {domainKeywords.map((tag) => (
                <span
                  key={tag.label}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                    tag.highlight
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 font-semibold'
                      : 'bg-white/[0.03] text-zinc-400 border border-white/[0.06]'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('work')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-white/5 hover:shadow-emerald-500/20"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10 text-sm font-medium transition-all duration-200"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
              <span className="text-xs font-mono text-zinc-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-400 border border-white/5 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-amber-500/20 text-zinc-400 hover:text-amber-400 border border-white/5 transition-colors"
                  title="LeetCode Profile (200+ Solved)"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Graphic: Engineering Ecosystem Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0d0f17]/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-zinc-400">prachi-raut.config.ts</span>
                </div>
                <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready to Ship
                </span>
              </div>

              {/* Code-style Content */}
              <div className="font-mono text-xs space-y-3 leading-relaxed text-zinc-300">
                <div className="text-zinc-500">// Engineering Profile Matrix</div>
                <div>
                  <span className="text-emerald-400">const</span>{' '}
                  <span className="text-zinc-100">engineer</span> = &#123;
                </div>
                
                <div className="pl-4 space-y-1 text-zinc-400">
                  <div>
                    <span className="text-zinc-500">name:</span>{' '}
                    <span className="text-emerald-300">"Prachi Raut"</span>,
                  </div>
                  <div>
                    <span className="text-zinc-500">education:</span>{' '}
                    <span className="text-zinc-200">"B.E. Computer Engineering (8.66 CGPA)"</span>,
                  </div>
                  <div>
                    <span className="text-zinc-500">coreFocus:</span> [
                    <span className="text-cyan-300">"Full-Stack"</span>,{' '}
                    <span className="text-indigo-300">"Mobile"</span>,{' '}
                    <span className="text-emerald-300">"AI/ML"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-zinc-500">dsaProblemsSolved:</span>{' '}
                    <span className="text-amber-300">200+</span>,
                  </div>
                  <div>
                    <span className="text-zinc-500">verifiedProjects:</span>{' '}
                    <span className="text-emerald-400">9</span>,
                  </div>
                  <div>
                    <span className="text-zinc-500">activeStack:</span> &#123;
                  </div>
                  <div className="pl-4 text-zinc-400">
                    <div>web: <span className="text-zinc-200">"React, Node.js, FastAPI"</span>,</div>
                    <div>mobile: <span className="text-zinc-200">"Flutter, React Native"</span>,</div>
                    <div>intelligence: <span className="text-zinc-200">"Gemini AI, YOLOv8, DuckDB"</span></div>
                  </div>
                  <div>&#125;</div>
                </div>

                <div>&#125;;</div>

                {/* Live execution simulated output */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>status: 0 errors, ready for production</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">build passing ?</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
