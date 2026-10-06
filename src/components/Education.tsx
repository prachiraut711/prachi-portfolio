import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative scroll-mt-20">
      
      {/* Background Soft Glow */}
      <div className="glow-orb w-[500px] h-[500px] top-1/4 -left-32 bg-brand-purple/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-purple-500/15">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lavender"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-lavender font-semibold">
                Academic Background
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F5F3FF]">
              Education.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-secondary max-w-xl font-normal">
              Solid computer engineering training and strong mathematical fundamentals.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#140D22]/80 border border-purple-500/20 text-xs font-mono text-brand-soft self-start md:self-auto">
            <GraduationCap className="w-3.5 h-3.5 text-brand-lavender" />
            <span>Class of 2026</span>
          </div>
        </div>

        {/* Education Layout: Primary B.E. Feature + Compact Secondary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Primary B.E. Degree Highlight */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-4xl bg-gradient-to-br from-[#1A1032]/95 via-[#150D28]/90 to-[#120B22]/90 border border-purple-500/25 shadow-2xl flex flex-col justify-between group hover:border-purple-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-3 rounded-2xl bg-purple-500/15 text-brand-lavender border border-purple-500/25">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-brand-lavender px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    Primary Degree
                  </span>
                </div>
                <span className="text-xs font-mono text-ink-secondary flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-violet" />
                  {educationData[0].period}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3FF] tracking-tight mb-2">
                {educationData[0].degree}
              </h3>
              <p className="text-base text-brand-soft font-medium mb-4">
                {educationData[0].institution}
              </p>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                {educationData[0].description}
              </p>
            </div>

            <div className="pt-6 border-t border-purple-500/15 flex items-center justify-between">
              <span className="text-xs font-mono text-ink-muted uppercase">
                Cumulative Performance
              </span>
              <span className="font-display font-bold text-lg sm:text-xl text-gradient-vibrant bg-purple-500/15 px-4 py-1.5 rounded-full border border-purple-400/30">
                {educationData[0].grade}
              </span>
            </div>
          </div>

          {/* Compact HSC and SSC Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {educationData.slice(1).map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#140D22]/85 border border-purple-500/15 hover:border-purple-400/35 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-ink-muted flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-violet" />
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-soft bg-purple-500/10 px-3 py-0.5 rounded-full border border-purple-500/20">
                      {edu.grade}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-[#F5F3FF] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-secondary">
                    {edu.institution}
                  </p>
                </div>

                {edu.description && (
                  <p className="text-xs text-ink-muted mt-3 pt-3 border-t border-purple-500/10">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
