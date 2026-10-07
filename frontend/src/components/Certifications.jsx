import React from 'react';
import { Award, CheckCircle2, Heart, Languages, Lightbulb, Sparkles, Users } from 'lucide-react';
import { certifications, certHighlights, softSkills, spokenLanguages, interests } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Soft Skills & Interests</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Certifications & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Certification Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-700 uppercase tracking-wider font-mono font-bold">Official Credential</span>
                  <h3 className="text-xl font-bold text-slate-900">{certifications[0].title}</h3>
                  <p className="text-xs text-slate-600 font-medium">{certifications[0].institution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                  Experience & Accomplishments
                </h4>
                {certHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Box */}
            <div className="glass-card p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>Soft Skills & Professional Traits</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Spoken Languages & Personal Interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spoken Languages Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Languages className="w-4 h-4 text-purple-600" />
                <span>Spoken Languages</span>
              </h3>

              <div className="space-y-2.5">
                {spokenLanguages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                    <span className="font-bold text-slate-900">{lang}</span>
                    <span className="text-[11px] font-mono text-purple-700 font-semibold">Fluent</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-600" />
                <span>Interests & Passions</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:text-pink-600 transition-colors"
                  >
                    ✨ {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
