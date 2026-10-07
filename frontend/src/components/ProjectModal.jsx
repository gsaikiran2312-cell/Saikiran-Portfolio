import React from 'react';
import { X, CheckCircle2, Sparkles, Layers, ShieldCheck, UserCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700/80 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-mono border border-indigo-500/30">
              {project.category} Case Study
            </span>
            <span className="text-xs text-slate-400 font-mono">Enterprise Project</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Image Banner */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-indigo-400 text-sm sm:text-base font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Supported Roles Badge if applicable */}
          {project.rolesSupported && (
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-2">
              <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-purple-400" />
                <span>Role-Based Access Control Supported Roles</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.rolesSupported.map((role, rIdx) => (
                  <span key={rIdx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                    • {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Description */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">Project Overview</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features & Accomplishments */}
          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Key System Features & Technical Contributions</span>
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security & Authentication */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-1.5">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Security & Access Control</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              JWT-based authentication and role-based authorization ensuring isolated, secure workflows across frontend React views and Express API endpoints.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository Profile</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
