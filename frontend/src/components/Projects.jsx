import React, { useState } from 'react';
import { FolderGit2, Search, Eye, Sparkles, Filter, ShieldCheck, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projects.filter((proj) => {
    return proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           proj.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Full Stack Projects</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Detailed case studies of enterprise systems built using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Search Input Row */}
        <div className="flex justify-end mb-8">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div>
                {/* Image Header */}
                <div className="relative aspect-video overflow-hidden border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-indigo-300 text-[10px] font-mono">
                    {project.category}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/90 text-slate-200 hover:text-white border border-slate-800 hover:border-indigo-500/50 shadow-md backdrop-blur-md transition-colors"
                    title="View Case Study Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 text-[10px] font-mono border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/40 mt-auto flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                >
                  <span>View Case Study</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-3xl border border-slate-800 max-w-md mx-auto">
            <Filter className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h4 className="text-white font-bold text-lg mb-1">No Projects Found</h4>
            <p className="text-slate-400 text-xs">Try searching for keywords like "Node", "React", or "MongoDB".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>

      {/* Project Modal Case Study */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
