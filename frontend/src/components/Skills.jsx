import React from 'react';
import { Cpu, Layout, Server, Database, Wrench } from 'lucide-react';
import { skillCategories as defaultCategories } from '../data/portfolioData';

export default function Skills({ skillCategories = defaultCategories }) {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend': return <Layout className="w-4 h-4 text-indigo-600" />;
      case 'backend': return <Server className="w-4 h-4 text-indigo-600" />;
      case 'database': return <Database className="w-4 h-4 text-indigo-600" />;
      case 'tools': return <Wrench className="w-4 h-4 text-indigo-600" />;
      default: return <Cpu className="w-4 h-4 text-indigo-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-600 text-sm max-w-md mt-2">
            Technologies and tools I use to build modern applications.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3" />
        </div>

        {/* Categorized Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-xs font-semibold text-slate-700 hover:text-indigo-700 transition-colors shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

