import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Award, Code2, ExternalLink, Calendar } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Verified Milestones
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Certifications & Algorithmic Practice
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#0e1118]/80 border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.icon === 'code' ? <Code2 className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase text-emerald-400 tracking-wider block">
                        {item.type}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {item.issuer}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-3 border-t border-white/[0.04]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View LeetCode Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
