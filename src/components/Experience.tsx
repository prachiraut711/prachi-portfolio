import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-white/[0.06] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                04 / Professional Path
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Experience
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-light">
              Hands-on engineering internships building scalable mobile solutions, user authentication pipelines, and API integrations.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
            2 Software Internships
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/[0.08] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-emerald-400 group-hover:scale-125 transition-transform flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1118]/80 border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-300 backdrop-blur-sm">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-emerald-400 font-medium text-sm sm:text-base mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="hidden sm:flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.04]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase mr-1">
                    Environment:
                  </span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
