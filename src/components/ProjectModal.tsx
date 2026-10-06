import React, { useEffect } from 'react';
import { Project } from '../data/projectsData';
import { ProjectVisual } from './ProjectVisual';
import { 
  X, ExternalLink, Play, FileText, CheckCircle2, 
  Lightbulb, AlertCircle, Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0f17] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Domain badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.domainNumber} — {project.domainLabel}
          </span>
          {project.featured && (
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
              Featured Showcase
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          {project.name}
        </h2>
        <p className="text-base text-zinc-400 mb-6">
          {project.subtitle}
        </p>

        {/* Visual Component */}
        <div className="mb-6">
          <ProjectVisual type={project.visualType} name={project.name} />
        </div>

        {/* Project Overview */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            Project Overview
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution block */}
        {project.problemSolution && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-950/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problemSolution.problem}
              </p>
            </div>
            <div className="bg-zinc-950/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problemSolution.solution}
              </p>
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Key Technical Implementations
          </h3>
          <ul className="space-y-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-emerald-400 hover:text-zinc-950 transition-colors shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            View Repository
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}

          {project.videoDemoUrl && (
            <a
              href={project.videoDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 font-medium text-sm transition-colors"
            >
              <Play className="w-4 h-4 text-rose-400" />
              Watch Video Demo
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 font-medium text-sm transition-colors"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              API Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
