import React from 'react';
import { User, Code, Layers, Sparkles, CheckCircle2, Rocket, ShieldCheck, Download } from 'lucide-react';
import { personalDetails, aboutHighlights } from '../data/portfolioData';

export default function About() {
  const coreCompetencies = [
    {
      title: "Full Stack Architecture",
      description: "End-to-end web application development using React.js, Node.js, Express.js, and MongoDB.",
      icon: Code,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    },
    {
      title: "API & Authentication",
      description: "RESTful API development, third-party integrations, and JWT role-based access control.",
      icon: ShieldCheck,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
    {
      title: "Enterprise Solutions",
      description: "Building production systems including Fleet Management, Restaurant, and Event platforms.",
      icon: Layers,
      color: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    },
    {
      title: "Performance & Agile",
      description: "Query optimization, responsive UI with Tailwind CSS, Git workflows, and Agile delivery.",
      icon: Rocket,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PROFESSIONAL SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Sai Kiran Gandhudi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          
          {/* Left Column: Summary Card */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>Full Stack & MERN Developer</span>
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Full Stack Developer with <strong>1.6 years of experience</strong> in developing scalable web applications using <strong>React.js, Node.js, Express.js, JavaScript, MongoDB, HTML, CSS, and RESTful APIs</strong>.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Experienced in building enterprise applications including <strong>Fleet Management, Restaurant Management, and Event Management systems</strong>, with expertise in role-based authentication, API development, database management, responsive UI development, and application performance optimization.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Strong understanding of full-stack development, Agile methodologies, Git/GitHub, and end-to-end application development.
              </p>
            </div>

            {/* Resume Download CTA */}
            <div className="pt-4 border-t border-slate-200">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Get Full Resume / Contact Information</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Highlights Pills Box */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono mb-4">
                Core Professional Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {aboutHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono flex items-center justify-between font-medium">
              <span>Location: Andhra Pradesh, India</span>
              <span className="text-indigo-600">Agile Mindset</span>
            </div>
          </div>

        </div>

        {/* 4 Core Competencies Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreCompetencies.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${item.color}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
