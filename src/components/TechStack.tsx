import React from 'react';
import { techStackData } from '../data/portfolioData';
import { 
  Code2, Layout, Server, Smartphone, Database, 
  Cpu, Wrench, Sparkles, CheckCircle2 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code2': return <Code2 className="w-4 h-4 text-brand-lavender" />;
      case 'layout': return <Layout className="w-4 h-4 text-brand-soft" />;
      case 'server': return <Server className="w-4 h-4 text-brand-violet" />;
      case 'smartphone': return <Smartphone className="w-4 h-4 text-pink-400" />;
      case 'database': return <Database className="w-4 h-4 text-brand-lavender" />;
      case 'cpu': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'wrench': return <Wrench className="w-4 h-4 text-brand-soft" />;
      default: return <Sparkles className="w-4 h-4 text-brand-violet" />;
    }
  };

  const subtleBgColors = [
    'bg-[#150D26]/85',
    'bg-[#170E2B]/85',
    'bg-[#19102E]/85',
    'bg-[#160E2A]/85',
    'bg-[#180F2D]/85',
    'bg-[#1A1132]/85',
    'bg-[#150E28]/85',
  ];

  return (
    <section id="stack" className="py-24 sm:py-32 relative scroll-mt-20">
      
      {/* Background Soft Ambient Light */}
      <div className="glow-orb w-[500px] h-[500px] top-1/3 -left-36 bg-brand-purple/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-purple-500/15">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lavender"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-lavender font-semibold">
                Technology Constellation
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F5F3FF]">
              My toolkit.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-secondary max-w-xl font-normal">
              Production-tested languages, backend engines, mobile frameworks, and AI toolsets.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#140D22]/80 border border-purple-500/20 text-xs font-mono text-brand-soft self-start md:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet" />
            <span>Verified in Active Repositories</span>
          </div>
        </div>

        {/* 7 Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techStackData.map((category, idx) => {
            const formattedNum = String(idx + 1).padStart(2, '0');
            const bgClass = subtleBgColors[idx % subtleBgColors.length];

            return (
              <div
                key={category.category}
                className={`p-6 rounded-3xl ${bgClass} border border-purple-500/15 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1`}
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-purple-500/10">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-brand-lavender block">
                          {formattedNum}
                        </span>
                        <h3 className="font-display font-bold text-xs text-[#F5F3FF] tracking-wider uppercase">
                          {category.category}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-ink-muted">
                      {category.skills.length} tools
                    </span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-purple-600/20 text-brand-lavender border border-purple-400/30 hover:bg-purple-600/30 font-medium'
                            : 'bg-white/[0.03] text-ink-secondary border border-purple-500/10 hover:border-purple-500/25'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[10px] font-mono text-ink-muted">
                  <span>Applied in code</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-violet/40 group-hover:bg-brand-violet transition-colors"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
