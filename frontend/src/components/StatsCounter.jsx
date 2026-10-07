import React from 'react';
import { Clock, Code2, Users, Zap } from 'lucide-react';
import { stats } from '../data/portfolioData';

export default function StatsCounter() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-6 h-6 text-indigo-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'Users': return <Users className="w-6 h-6 text-pink-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      default: return <Zap className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                  {item.value}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
