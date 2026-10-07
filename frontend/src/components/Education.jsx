import React from 'react';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Academic Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <School className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {item.degree}
                </h3>
                
                <p className="text-sm font-semibold text-purple-400 mb-1">
                  {item.institution}
                </p>

                <p className="text-xs text-slate-400 flex items-center gap-1 font-mono mb-4">
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  <span>{item.location}</span>
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
