import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { whyWorkWithMe as defaultWhyWork } from '../data/portfolioData';

export default function WhyWorkWithMe({ whyData = defaultWhyWork }) {
  return (
    <section className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VALUE & COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Work With Me?
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3" />
        </div>

        {/* 2-Column Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whyData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex gap-4 items-start shadow-xs hover:border-indigo-300 transition-all"
            >
              <div className="text-xl font-mono font-extrabold text-indigo-600 bg-indigo-100/80 px-3 py-1.5 rounded-xl shrink-0">
                {item.number}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
