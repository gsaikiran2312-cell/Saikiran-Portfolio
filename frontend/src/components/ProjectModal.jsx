import React from 'react';
import { X, CheckCircle2, Layers, ExternalLink, AlertCircle, Lightbulb, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const keyFeatures = project.keyFeatures || project.highlights || [];
  const technologies = project.technologies || project.tags || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl relative flex flex-col text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-mono font-bold border border-indigo-200">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium">Case Study</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Screenshot Banner */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-indigo-600 text-sm font-semibold font-mono">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Overview</h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.problem && (
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-1.5">
                  <h5 className="text-xs font-mono font-bold uppercase text-rose-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>The Problem</span>
                  </h5>
                  <p className="text-xs text-rose-950 leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
                  <h5 className="text-xs font-mono font-bold uppercase text-emerald-900 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-emerald-600" />
                    <span>The Solution</span>
                  </h5>
                  <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {keyFeatures.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Contribution */}
          {project.myContribution && (
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
              <h4 className="text-xs font-mono font-bold uppercase text-indigo-900 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-indigo-600" />
                <span>My Contribution</span>
              </h4>
              <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed font-medium">
                {project.myContribution}
              </p>
            </div>
          )}

          {/* Technology Stack Badges */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-xs transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

