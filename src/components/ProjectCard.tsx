import React from 'react';
import { Project } from '../data/projectsData';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight, ExternalLink, Play, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div 
      className={`group relative flex flex-col justify-between rounded-3xl bg-[#140D22]/85 border border-purple-500/15 hover:border-purple-400/45 transition-all duration-300 hover:shadow-[0_16px_50px_-15px_rgba(124,58,237,0.25)] hover:-translate-y-1.5 p-6 sm:p-7 backdrop-blur-xl ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Top Header: Index, Domain & Quick Links */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-brand-lavender/70">
              #{formattedIndex}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-purple-500/10 text-brand-lavender border border-purple-500/20">
              {project.domainLabel}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-violet-600/30 to-purple-600/30 text-brand-soft border border-purple-400/30">
                <Sparkles className="w-3 h-3 text-brand-lavender" />
                Featured Highlight
              </span>
            )}
          </div>

          {/* Direct Action Icons */}
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Live Demo"
                className="p-2 rounded-full bg-white/[0.04] hover:bg-purple-500/20 text-ink-secondary hover:text-white border border-purple-500/15 transition-all hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.videoDemoUrl && (
              <a
                href={project.videoDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Watch Demo Video"
                className="p-2 rounded-full bg-white/[0.04] hover:bg-pink-500/20 text-ink-secondary hover:text-pink-300 border border-purple-500/15 transition-all hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <Play className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-purple-500/25 text-ink-secondary hover:text-white border border-purple-500/15 transition-all hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Visual Preview Container */}
        <div 
          onClick={() => onSelect(project)}
          className="mb-5 cursor-pointer transform group-hover:scale-[1.01] transition-transform duration-300"
        >
          <ProjectVisual type={project.visualType} name={project.name} />
        </div>

        {/* Project Titles */}
        <div className="mb-3">
          <h3 
            onClick={() => onSelect(project)}
            className="text-xl sm:text-2xl font-display font-bold text-[#F5F3FF] group-hover:text-brand-lavender transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.name}</span>
            <div className="p-1.5 rounded-full bg-white/[0.03] group-hover:bg-purple-500/20 group-hover:text-brand-lavender text-ink-muted transition-all">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </h3>
          <p className="text-xs sm:text-sm text-brand-soft/80 mt-1 font-sans">
            {project.subtitle}
          </p>
        </div>

        {/* Concise Description */}
        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-purple-500/10">
          {project.techStack.slice(0, 5).map((tech) => (
            <span 
              key={tech}
              className="font-mono text-[11px] px-3 py-1 rounded-full bg-purple-900/20 text-brand-soft/90 border border-purple-500/15 group-hover:border-purple-400/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-purple-950/40 text-ink-muted border border-purple-500/10">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-lavender hover:text-white transition-colors group/btn"
          >
            <span>View Architecture Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-[#F5F3FF] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
