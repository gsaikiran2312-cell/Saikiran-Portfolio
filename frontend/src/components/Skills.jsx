import React, { useState } from 'react';
import { Cpu, Layout, Server, Wrench, Palette, Code, Database, Layers, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCatId, setSelectedCatId] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-indigo-400" />;
      case 'Server': return <Server className="w-4 h-4 text-purple-400" />;
      case 'Database': return <Database className="w-4 h-4 text-pink-400" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Palette': return <Palette className="w-4 h-4 text-rose-400" />;
      default: return <Layers className="w-4 h-4 text-indigo-400" />;
    }
  };

  const visibleCategories = selectedCatId === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === selectedCatId);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Skills & Tools</span>
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mt-3 font-normal">
            Categorized technical capabilities and tools applied in full-stack MERN application development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCatId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              selectedCatId === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs'
            }`}
          >
            All Skill Domains
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCatId === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-6 rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
                  <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skillName, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{skillName}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                <span>{category.skills.length} competencies</span>
                <span className="text-indigo-600 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
