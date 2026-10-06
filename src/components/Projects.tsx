import React, { useState } from 'react';
import { projectsData, Project } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Terminal, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'full-stack' | 'ai-ml' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Projects', count: projectsData.length },
    { key: 'full-stack', label: 'Full-Stack Web', count: projectsData.filter(p => p.category === 'full-stack').length },
    { key: 'ai-ml', label: 'AI / Data / ML', count: projectsData.filter(p => p.category === 'ai-ml').length },
    { key: 'mobile', label: 'Mobile Apps', count: projectsData.filter(p => p.category === 'mobile').length },
  ] as const;

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 sm:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/[0.06] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                01 / Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Selected Work
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-light">
              "Different problems. Different stacks. One engineering mindset."
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 bg-zinc-950/80 rounded-xl border border-white/[0.08] backdrop-blur-sm self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  filter === tab.key
                    ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filter === tab.key ? 'bg-zinc-950/20 text-zinc-900' : 'bg-white/5 text-zinc-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* If 'all' view: Show organized by Domain blocks or Grid */}
        {filter === 'all' ? (
          <div className="space-y-20">
            {/* Domain 1: Full-Stack Web */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-zinc-500">01</span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-zinc-200 uppercase font-mono">
                    Full-Stack Web Engineering
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">3 Production Architectures</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {projectsData
                  .filter((p) => p.category === 'full-stack')
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={setSelectedProject}
                    />
                  ))}
              </div>
            </div>

            {/* Domain 2: AI / Data / ML */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-zinc-500">02</span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-zinc-200 uppercase font-mono">
                    AI, Data & Machine Learning Systems
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">4 Intelligent Applications</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {projectsData
                  .filter((p) => p.category === 'ai-ml')
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={setSelectedProject}
                    />
                  ))}
              </div>
            </div>

            {/* Domain 3: Mobile Applications */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-zinc-500">03</span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-zinc-200 uppercase font-mono">
                    Mobile Applications
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">2 Cross-Platform Apps</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {projectsData
                  .filter((p) => p.category === 'mobile')
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={setSelectedProject}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
