import React from 'react';
import { personalInfo, highlightStats } from '../data/portfolioData';
import { Layers, Smartphone, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const capabilities = [
    {
      title: 'FULL-STACK',
      detail: 'Web applications + REST APIs',
      tools: 'React • Node.js • FastAPI • PostgreSQL',
      icon: Layers,
    },
    {
      title: 'MOBILE',
      detail: 'Flutter + React Native',
      tools: 'Cross-platform • Firebase • Supabase',
      icon: Smartphone,
    },
    {
      title: 'AI / ML',
      detail: 'Computer vision + intelligent systems',
      tools: 'YOLOv8 • Gemini AI • Isolation Forest',
      icon: Sparkles,
    },
    {
      title: 'PROBLEM SOLVING',
      detail: '200+ LeetCode problems',
      tools: 'DSA • Algorithmic Optimization',
      icon: Code2,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative scroll-mt-20">
      
      {/* Background soft ambient bloom */}
      <div className="glow-orb w-[500px] h-[500px] top-1/2 -left-40 bg-brand-purple/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-lavender"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-lavender font-semibold">
            About & Capabilities
          </span>
        </div>

        {/* Two-Column Asymmetric Statement Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F5F3FF] leading-[1.12]">
              I like building things <br />
              <span className="text-gradient-purple">that actually work.</span>
            </h2>
            <div className="mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"></div>
          </div>

          {/* Right Column: Professional Description */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-lg sm:text-xl text-ink-primary font-normal leading-relaxed">
              I’m a Computer Engineering graduate with hands-on experience building full-stack web applications, mobile applications, backend systems, and AI/ML-powered products.
            </p>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              My engineering approach prioritizes clean architecture, practical utility, and scalable delivery. Whether designing high-throughput Redis event pipelines, training YOLOv8 computer vision models, or crafting smooth Flutter interfaces, I build with curiosity and engineering rigor.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-brand-lavender hover:text-white transition-colors"
              >
                <span>Verify LeetCode Activity (200+ Solved)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Interactive Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-6 rounded-3xl bg-[#140D22]/80 border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#1A122B]/90 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-brand-lavender mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono text-xs font-bold text-brand-lavender uppercase tracking-wider mb-1">
                    {cap.title}
                  </h3>
                  <p className="font-display font-semibold text-base text-[#F5F3FF] mb-2">
                    {cap.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-purple-500/10 text-[11px] font-mono text-ink-muted">
                  {cap.tools}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights / A Few Numbers Section (Playful arrangement) */}
        <div className="p-8 sm:p-10 rounded-4xl bg-gradient-to-br from-[#170E2B]/90 via-[#140D22]/80 to-[#10091D]/90 border border-purple-500/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-500/15">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-brand-lavender block">
                Highlights at a glance
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F3FF]">
                A few numbers that define my work
              </h3>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              Computer Engineering • 2026
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlightStats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-gradient-vibrant tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 font-display font-semibold text-sm sm:text-base text-ink-primary">
                  {stat.label}
                </div>
                <div className="text-xs text-ink-muted mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
