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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#090510]/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#140D22] border border-purple-500/25 rounded-3xl sm:rounded-4xl shadow-[0_25px_80px_rgba(124,58,237,0.35)] p-6 sm:p-10 text-[#F5F3FF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="sticky top-0 float-right -mt-2 -mr-2 sm:-mt-3 sm:-mr-3 p-2.5 rounded-full bg-[#1F1435]/90 hover:bg-purple-500/25 border border-purple-500/25 text-ink-muted hover:text-white transition-all shadow-md z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Domain Badge & Status */}
        <div className="flex items-center flex-wrap gap-2.5 mb-3.5">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-brand-lavender border border-purple-500/25">
            {project.domainLabel}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium px-3 py-1 rounded-full bg-purple-500/15 text-brand-lavender border border-purple-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender animate-pulse"></span>
              {project.status}
            </span>
          )}
          {project.featured && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/30 to-purple-600/30 text-brand-soft border border-purple-400/25">
              Featured Case Study
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-[#F5F3FF] mb-2 leading-tight">
          {project.name}
        </h2>
        <p className="text-sm sm:text-base text-brand-soft font-sans mb-8">
          {project.subtitle}
        </p>

        {/* Visual Component */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg">
          <ProjectVisual type={project.visualType} name={project.name} />
        </div>

        {/* Section 1: Project Overview */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-brand-lavender font-semibold">
            <FileText className="w-4 h-4 text-brand-violet" />
            <span>Project Overview</span>
          </div>
          <div className="mt-3 sm:mt-4 pl-0 sm:pl-6 border-l-0 sm:border-l-2 sm:border-purple-500/20">
            <p className="text-sm sm:text-base text-ink-primary leading-relaxed font-normal">
              {project.description}
            </p>
          </div>
        </div>

        {/* Section 2: The Problem */}
        {project.problemSolution && (
          <>
            <div className="mb-10 sm:mb-12">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-pink-400 font-semibold">
                <AlertCircle className="w-4 h-4 text-pink-400" />
                <span>The Problem</span>
              </div>
              <div className="mt-3 sm:mt-4 pl-0 sm:pl-6 border-l-0 sm:border-l-2 sm:border-pink-500/20">
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {project.problemSolution.problem}
                </p>
              </div>
            </div>

            {/* Section 3: Engineering Solution */}
            <div className="mb-10 sm:mb-12">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-brand-lavender font-semibold">
                <Lightbulb className="w-4 h-4 text-brand-violet" />
                <span>Engineering Solution</span>
              </div>
              <div className="mt-3 sm:mt-4 pl-0 sm:pl-6 border-l-0 sm:border-l-2 sm:border-purple-500/20">
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {project.problemSolution.solution}
                </p>
              </div>
            </div>
          </>
        )}

        {/* Section 4: Key Technical Implementations */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-brand-lavender font-semibold">
            <CheckCircle2 className="w-4 h-4 text-brand-violet" />
            <span>Key Technical Implementations</span>
          </div>
          <div className="mt-3 sm:mt-4 pl-0 sm:pl-6 border-l-0 sm:border-l-2 sm:border-purple-500/20">
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ink-primary leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-brand-violet mt-1.5 shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 5: Technology Stack */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-brand-lavender font-semibold">
            <Layers className="w-4 h-4 text-brand-violet" />
            <span>Technology Stack</span>
          </div>
          <div className="mt-3 sm:mt-4 pl-0 sm:pl-6 border-l-0 sm:border-l-2 sm:border-purple-500/20">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-purple-900/25 text-brand-soft border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links Row */}
        <div className="flex flex-wrap items-center gap-3 pt-6 sm:pt-8 border-t border-purple-500/20">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Repository</span>
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-purple-500/15 hover:bg-purple-500/25 text-brand-lavender border border-purple-500/30 font-medium text-sm transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}

          {project.videoDemoUrl && (
            <a
              href={project.videoDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-pink-500/15 hover:bg-pink-500/25 text-pink-300 border border-pink-500/30 font-medium text-sm transition-all hover:scale-105"
            >
              <Play className="w-4 h-4" />
              <span>Watch Video Demo</span>
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/10 text-ink-secondary border border-purple-500/20 font-medium text-sm transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4 text-brand-lavender" />
              <span>API Docs</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
