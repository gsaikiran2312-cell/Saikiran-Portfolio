import React from 'react';
import { X, CheckCircle2, Sparkles, Layers, ShieldCheck, UserCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 shadow-2xl relative flex flex-col bg-white text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-semibold border border-indigo-200">
              {project.category} Case Study
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium">Enterprise Project</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Image Banner */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              {project.title}
            </h3>
            <p className="text-indigo-600 text-sm sm:text-base font-semibold">
              {project.tagline}
            </p>
          </div>

          {/* Supported Roles Badge if applicable */}
          {project.rolesSupported && (
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-2">
              <h4 className="text-xs font-bold text-purple-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-purple-700" />
                <span>Role-Based Access Control Supported Roles</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.rolesSupported.map((role, rIdx) => (
                  <span key={rIdx} className="px-2.5 py-1 rounded-lg bg-white border border-purple-200 text-xs font-mono text-purple-800 font-semibold">
                    • {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Description */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">Project Overview</h4>
            <p className="text-slate-700 text-sm leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Features & Accomplishments */}
          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Key System Features & Technical Contributions</span>
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security & Authentication */}
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-1.5">
            <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-700" />
              <span>Security & Access Control</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              JWT-based authentication and role-based authorization ensuring isolated, secure workflows across frontend React views and Express API endpoints.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-600" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-indigo-700 font-semibold">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-semibold transition-colors"
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
