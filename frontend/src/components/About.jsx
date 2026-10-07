import React from 'react';
import { User, Code2, Layers, CheckCircle2, Award } from 'lucide-react';
import { aboutData as defaultAbout } from '../data/portfolioData';

export default function About({ aboutData = defaultAbout }) {
  const paragraphs = aboutData.paragraphs || defaultAbout.paragraphs;
  const stats = aboutData.stats || defaultAbout.stats;

  return (
    <section id="about" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3" />
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 4 Paragraph Narrative */}
          <div className="lg:col-span-8 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Right Column: 4 Statistics Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-center items-center text-center shadow-xs hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

