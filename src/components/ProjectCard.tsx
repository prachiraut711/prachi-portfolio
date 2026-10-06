import React from 'react';
import { Project } from '../data/projectsData';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight, ExternalLink, Play, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#0e1118]/80 border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(16,185,129,0.12)] hover:-translate-y-1 p-5 sm:p-6 backdrop-blur-sm ${
        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Header: Domain pill & Links */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
              {project.domainNumber} • {project.domainLabel}
            </span>
            {project.featured && (
              <span className="font-mono text-[10px] text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                Key Highlight
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-300 border border-white/5 transition-colors"
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
                title="Watch Video Demo"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-zinc-400 hover:text-rose-300 border border-white/5 transition-colors"
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
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/5 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Visual Preview */}
        <div 
          onClick={() => onSelect(project)}
          className="mb-5 cursor-pointer transform group-hover:scale-[1.01] transition-transform duration-300"
        >
          <ProjectVisual type={project.visualType} name={project.name} />
        </div>

        {/* Title & Subtitle */}
        <div className="mb-3">
          <h3 
            onClick={() => onSelect(project)}
            className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.name}</span>
            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/[0.05]">
          {project.techStack.slice(0, 5).map((tech) => (
            <span 
              key={tech}
              className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.06] group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.02] text-zinc-500 border border-white/[0.04]">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors py-1 group/btn"
          >
            <Eye className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
            <span>Architecture & Details</span>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};
