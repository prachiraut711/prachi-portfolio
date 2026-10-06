import React from 'react';
import { achievementsData, personalInfo } from '../data/portfolioData';
import { Award, Code2, ArrowUpRight } from 'lucide-react';

export const Achievements: React.FC = () => {
  const certifications = achievementsData.filter(item => item.id !== 'leetcode');

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* LeetCode Dedicated Feature Card */}
        <div className="mb-12 p-8 sm:p-10 rounded-4xl bg-gradient-to-r from-[#170E2B]/90 via-[#1C1236]/90 to-[#140D22]/90 border border-purple-500/25 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Continuous Algorithmic Practice</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3FF]">
              "Problem solving is part of how I build."
            </h3>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              Consistently practicing Data Structures and Algorithms with 200+ problems solved across arrays, trees, dynamic programming, and graph traversal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <div className="text-left sm:text-right">
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-amber-300 block">
                200+
              </span>
              <span className="text-xs font-mono text-ink-muted">
                Problems Solved
              </span>
            </div>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-amber-500/15 text-[#F5F3FF] hover:text-amber-200 border border-amber-500/30 font-medium text-xs font-mono transition-all flex items-center gap-2 hover:scale-105"
            >
              <span>View LeetCode Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Certifications Block */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-lavender"></span>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-lavender font-semibold">
              Professional Certifications
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#140D22]/85 border border-purple-500/15 hover:border-purple-400/35 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-lavender">
                      <span>{cert.issuer}</span>
                      {cert.date && (
                        <>
                          <span>•</span>
                          <span className="text-ink-muted">{cert.date}</span>
                        </>
                      )}
                    </div>
                    <span className="px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] font-mono text-brand-soft">
                      Verified
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-2xl bg-purple-500/15 text-brand-lavender border border-purple-500/25 shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-lg font-display font-bold text-[#F5F3FF] group-hover:text-brand-lavender transition-colors leading-snug">
                        {cert.title}
                      </h5>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed pl-12">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-purple-500/10 flex items-center justify-between text-xs font-mono text-ink-muted">
                  <span>Provider: {cert.issuer}</span>
                  <span className="text-brand-soft">Credentialed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
