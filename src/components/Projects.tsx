import React, { useState } from 'react';
import { projectsData, Project } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Layers, Cpu, Smartphone } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'full-stack' | 'ai-ml' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { key: 'all', label: 'ALL', count: projectsData.length, icon: Sparkles },
    { key: 'full-stack', label: 'FULL-STACK', count: projectsData.filter(p => p.category === 'full-stack').length, icon: Layers },
    { key: 'ai-ml', label: 'AI / DATA', count: projectsData.filter(p => p.category === 'ai-ml').length, icon: Cpu },
    { key: 'mobile', label: 'MOBILE', count: projectsData.filter(p => p.category === 'mobile').length, icon: Smartphone },
  ] as const;

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 sm:py-32 relative scroll-mt-20">
      
      {/* Background Soft Glow */}
      <div className="glow-orb w-[600px] h-[600px] top-1/4 -right-48 bg-brand-violet/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Block: Digital Shelf Title & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-purple-500/15">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lavender"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-lavender font-semibold">
                Project Gallery
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F5F3FF]">
              Things I've built.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-secondary max-w-xl font-normal">
              From production-style platforms to AI experiments and mobile products.
            </p>
          </div>

          {/* Rounded Purple Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 bg-[#140D22]/90 rounded-full border border-purple-500/20 backdrop-blur-xl self-start md:self-auto">
            {filterTabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                    filter === tab.key
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                      : 'text-ink-secondary hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                    filter === tab.key ? 'bg-white/20 text-white' : 'bg-purple-900/30 text-ink-muted'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="h-full">
              <ProjectCard
                project={project}
                index={idx}
                onSelect={setSelectedProject}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Case-Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
