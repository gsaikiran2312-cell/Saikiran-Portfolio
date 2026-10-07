import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Experience</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Hands-on commercial experience engineering enterprise full-stack software applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {workExperience.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Node Circle */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/50" />

              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300">
                
                {/* Header Metadata */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 mt-0.5">
                      <span>{item.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs">{item.type}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4 font-medium">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {item.achievements.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {item.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-indigo-300 text-[11px] font-mono border border-slate-800">
                      #{t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
