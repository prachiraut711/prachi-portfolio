import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-white/[0.06] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                05 / Academic Foundation
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Education
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-light">
              Formal computer engineering training complemented by consistent high academic achievement.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
            Computer Engineering Graduate
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-[#0e1118]/80 border transition-all duration-300 flex flex-col justify-between backdrop-blur-sm ${
                idx === 0 
                  ? 'border-emerald-500/30 bg-[#0e141a]/90 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.08)]' 
                  : 'border-white/[0.06] hover:border-white/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-zinc-400 mb-4">
                  {edu.institution}
                </p>

                {edu.description && (
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-zinc-500">
                  Performance
                </span>
                <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
