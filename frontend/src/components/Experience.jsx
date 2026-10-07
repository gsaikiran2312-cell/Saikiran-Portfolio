import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { workExperience as defaultExperience } from '../data/portfolioData';

export default function Experience({ workExperience = defaultExperience }) {
  return (
    <section id="experience" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3" />
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto">
          {workExperience.map((item) => (
            <div
              key={item.id || item.company}
              className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {item.company}
                  </h3>
                  <div className="text-base font-bold text-indigo-600 mt-1">
                    {item.position || item.role}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-mono font-semibold self-start md:self-auto shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{item.duration || item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                "{item.description}"
              </p>

              {/* Responsibilities List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Responsibilities & Contributions:
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {(item.responsibilities || item.achievements || []).map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
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

