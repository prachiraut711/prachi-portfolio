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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090510]/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#140D22] border border-purple-500/25 rounded-4xl shadow-[0_25px_80px_rgba(124,58,237,0.35)] p-6 sm:p-8 text-[#F5F3FF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-purple-500/20 border border-purple-500/20 text-ink-muted hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Domain Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-brand-lavender border border-purple-500/25">
            {project.domainLabel}
          </span>
          {project.featured && (
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-gradient-to-r from-violet-600/30 to-purple-600/30 text-brand-soft border border-purple-400/20">
              Featured Architecture
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-[#F5F3FF] mb-2">
          {project.name}
        </h2>
        <p className="text-sm sm:text-base text-brand-soft/90 mb-6 font-sans">
          {project.subtitle}
        </p>

        {/* Visual Component */}
        <div className="mb-6">
          <ProjectVisual type={project.visualType} name={project.name} />
        </div>

        {/* Project Overview */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-brand-lavender mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-violet" />
            Project Overview
          </h3>
          <p className="text-sm sm:text-base text-ink-primary leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution block */}
        {project.problemSolution && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#0B0616]/90 p-4 rounded-2xl border border-purple-500/15">
              <div className="flex items-center gap-2 text-pink-400 text-xs font-mono uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {project.problemSolution.problem}
              </p>
            </div>
            <div className="bg-[#0B0616]/90 p-4 rounded-2xl border border-purple-500/15">
              <div className="flex items-center gap-2 text-brand-lavender text-xs font-mono uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {project.problemSolution.solution}
              </p>
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-brand-lavender mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-violet" />
            Key Technical Implementations
          </h3>
          <ul className="space-y-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-2 shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-brand-lavender mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-violet" />
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-mono px-3 py-1 rounded-full bg-purple-900/25 text-brand-soft border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-purple-500/15">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)]"
          >
            <GithubIcon className="w-4 h-4" />
            View Repository
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/15 hover:bg-purple-500/25 text-brand-lavender border border-purple-500/30 font-medium text-sm transition-all"
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-500/15 hover:bg-pink-500/25 text-pink-300 border border-pink-500/30 font-medium text-sm transition-all"
            >
              <Play className="w-4 h-4" />
              Watch Video Demo
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-ink-secondary border border-purple-500/15 font-medium text-sm transition-all"
            >
              <FileText className="w-4 h-4 text-brand-lavender" />
              API Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
