import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowDownRight, ArrowRight, Code2, Sparkles, Layers, Cpu, Smartphone, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingBadges = [
    { name: 'React', icon: Globe, pos: '-top-3 left-4', anim: 'animate-float-slow', delay: '0s' },
    { name: 'Python', icon: Cpu, pos: 'top-8 -right-4', anim: 'animate-float-reverse', delay: '1s' },
    { name: 'Flutter', icon: Smartphone, pos: 'bottom-10 -right-6', anim: 'animate-float-slow', delay: '2s' },
    { name: 'FastAPI', icon: Layers, pos: '-bottom-4 left-10', anim: 'animate-float-reverse', delay: '1.5s' },
    { name: 'TypeScript', icon: Code2, pos: 'top-1/2 -left-8', anim: 'animate-float-slow', delay: '0.8s' },
    { name: 'AI / ML', icon: Sparkles, pos: 'bottom-24 left-1/3', anim: 'animate-float-slow', delay: '2.5s' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Background Soft Ambient Light Blobs */}
      <div className="glow-orb w-[550px] h-[550px] -top-24 -left-20 bg-brand-purple/15"></div>
      <div className="glow-orb w-[650px] h-[650px] top-1/3 -right-32 bg-brand-violet/12"></div>
      <div className="glow-orb w-[450px] h-[450px] -bottom-20 left-1/4 bg-brand-lavender/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Small status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-brand-lavender text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse"></span>
              <span>Available for Software Engineering Roles • 2026 Grad</span>
            </div>

            {/* Oversized Expressive Heading */}
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-ink-secondary mb-1">
                Hi, I'm Prachi.
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#F5F3FF] leading-[1.08]">
                Software Developer <br />
                <span className="text-gradient-purple">building across</span> <br />
                <span className="text-gradient-vibrant">Web, Mobile & AI.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl font-normal">
              Computer Engineering graduate crafting scalable full-stack applications, mobile experiences, and applied AI systems with engineering precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('work')}
                className="btn-studio-primary px-7 py-3.5 text-sm flex items-center gap-2.5 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-studio-secondary px-7 py-3.5 text-sm flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowDownRight className="w-4 h-4 text-brand-lavender" />
              </button>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-4 pt-4 border-t border-purple-500/15">
              <span className="text-xs font-mono text-ink-muted">Find me on:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#140D22] border border-purple-500/20 text-ink-secondary hover:text-white hover:border-purple-400/50 transition-all hover:scale-110"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#140D22] border border-purple-500/20 text-ink-secondary hover:text-brand-lavender hover:border-purple-400/50 transition-all hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#140D22] border border-purple-500/20 text-ink-secondary hover:text-amber-300 hover:border-amber-400/50 transition-all hover:scale-110"
                  title="LeetCode Profile (200+ Solved)"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Digital Studio Identity Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-[320px] sm:w-[400px] h-[360px] sm:h-[440px] flex items-center justify-center">
              
              {/* Outer Glowing Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/15 animate-spin-very-slow pointer-events-none"></div>
              <div className="absolute inset-6 rounded-full border border-dashed border-purple-400/20 pointer-events-none"></div>

              {/* Central Glowing Purple Sphere / Composition */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-purple-900/80 via-violet-600/40 to-indigo-500/30 p-1 shadow-[0_0_80px_rgba(124,58,237,0.35)] backdrop-blur-xl flex items-center justify-center group">
                <div className="w-full h-full rounded-full bg-[#150D26]/90 border border-purple-400/30 flex flex-col items-center justify-center text-center p-6">
                  
                  {/* Digital Studio Core Emblem */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  
                  <span className="font-display font-bold text-lg text-[#F5F3FF] tracking-tight">
                    PRACHI RAUT
                  </span>
                  <span className="font-mono text-xs text-brand-lavender mt-1">
                    Creative Engineer
                  </span>
                  <div className="mt-2 text-[11px] text-ink-muted">
                    8.66 CGPA • 9 Projects
                  </div>
                </div>
              </div>

              {/* Floating Technology Capsules */}
              {floatingBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={badge.name}
                    className={`absolute ${badge.pos} ${badge.anim} z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A122B]/90 border border-purple-400/30 text-xs font-mono text-ink-primary shadow-[0_8px_20px_rgba(13,9,23,0.5)] backdrop-blur-md hover:border-brand-lavender transition-all`}
                    style={{ animationDelay: badge.delay }}
                  >
                    <IconComponent className="w-3.5 h-3.5 text-brand-lavender" />
                    <span>{badge.name}</span>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
