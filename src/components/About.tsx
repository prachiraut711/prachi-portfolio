import React from 'react';
import { personalInfo, highlightStats } from '../data/portfolioData';
import { Code2, GraduationCap, Briefcase, Sparkles, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            02 / About & Philosophy
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bridging engineering rigor with real-world product delivery.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              {personalInfo.aboutIntro}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {personalInfo.aboutDetailed}
            </p>

            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] flex items-start gap-3.5">
              <Code2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-zinc-200 block mb-1">
                  Algorithmic Problem Solving
                </span>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {personalInfo.aboutDsa}
                </p>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 mt-2 transition-colors"
                >
                  <span>Verify LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Core Domain Badges */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                Core Domains of Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Web Systems',
                  'Cross-Platform Mobile (Flutter & React Native)',
                  'Applied AI & Machine Learning',
                  'Backend Architecture & REST APIs',
                  'Data Structures & Algorithms'
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {highlightStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0e1118]/90 border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight group-hover:text-emerald-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="mt-4">
                    <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5 leading-snug">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">Open to Software Engineering Opportunities</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400/80">2026 Batch</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
