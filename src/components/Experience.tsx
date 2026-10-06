import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative scroll-mt-20">
      
      {/* Background Soft Glow */}
      <div className="glow-orb w-[550px] h-[550px] top-1/2 -right-36 bg-brand-violet/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-purple-500/15">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lavender"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-lavender font-semibold">
                Industry Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F5F3FF]">
              Experience.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-secondary max-w-xl font-normal">
              Software development internships building production-ready mobile features, authentication flows, and API integrations.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#140D22]/80 border border-purple-500/20 text-xs font-mono text-brand-soft self-start md:self-auto">
            <Briefcase className="w-3.5 h-3.5 text-brand-lavender" />
            <span>2 Verified Internships</span>
          </div>
        </div>

        {/* Distinctive Purple Vertical Timeline */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Animated Purple Gradient Marker */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-2 w-5 h-5 rounded-full bg-[#0D0917] border-2 border-brand-violet group-hover:border-brand-lavender transition-all flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 animate-pulse"></span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#140D22]/85 border border-purple-500/15 hover:border-purple-400/40 transition-all duration-300 shadow-xl backdrop-blur-xl group-hover:-translate-y-1">
                
                {/* Header: Role, Company & Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F3FF] tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-brand-lavender font-semibold text-sm sm:text-base mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-ink-secondary">
                    <span className="flex items-center gap-1.5 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 text-brand-soft">
                      <Calendar className="w-3.5 h-3.5 text-brand-violet" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="hidden sm:flex items-center gap-1 text-ink-muted">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3 mb-6">
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-primary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-purple-500/10">
                  <span className="text-[11px] font-mono text-ink-muted uppercase mr-1">
                    Environment:
                  </span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-full bg-purple-900/20 text-brand-soft border border-purple-500/15"
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
