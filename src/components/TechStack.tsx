import React from 'react';
import { techStackData } from '../data/portfolioData';
import { 
  Code2, Layout, Server, Smartphone, Database, 
  Cpu, Wrench, Sparkles, CheckCircle2 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code2': return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'layout': return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'server': return <Server className="w-4 h-4 text-emerald-400" />;
      case 'smartphone': return <Smartphone className="w-4 h-4 text-indigo-400" />;
      case 'database': return <Database className="w-4 h-4 text-amber-400" />;
      case 'cpu': return <Cpu className="w-4 h-4 text-rose-400" />;
      case 'wrench': return <Wrench className="w-4 h-4 text-teal-400" />;
      default: return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="stack" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-white/[0.06] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                03 / Technology Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Tools I build with.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-light">
              Carefully chosen tools and frameworks applied across real-world full-stack, mobile, and AI/ML projects.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified in active code repositories</span>
          </div>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techStackData.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl bg-[#0e1118]/80 border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm hover:-translate-y-0.5"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.05]">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(category.iconName)}
                    <h3 className="font-mono text-xs font-bold text-zinc-200 tracking-wider">
                      {category.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 hover:bg-emerald-500/20'
                          : 'bg-white/[0.03] text-zinc-300 border border-white/[0.06] hover:border-white/15'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle indicator bar */}
              <div className="mt-6 pt-3 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Production tested</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
