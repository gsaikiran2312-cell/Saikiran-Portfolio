import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalDetails as defaultDetails } from '../data/portfolioData';

export default function Hero({ personalDetails = defaultDetails }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span>FULL STACK DEVELOPER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
              GANDHUDI SAI KIRAN
            </h1>

            {/* Secondary Heading */}
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-6 tracking-tight">
              Building scalable & modern web applications
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
              I'm a Full Stack Developer focused on building reliable, responsive, and user-friendly applications using modern frontend, backend, and database technologies.
            </p>

            {/* Technology Line */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 font-mono mb-8">
              <span>React.js</span>
              <span className="text-indigo-400">•</span>
              <span>Node.js</span>
              <span className="text-indigo-400">•</span>
              <span>Express.js</span>
              <span className="text-indigo-400">•</span>
              <span>MongoDB</span>
              <span className="text-indigo-400">•</span>
              <span>Java</span>
              <span className="text-indigo-400">•</span>
              <span>Spring Boot</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Text */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Currently building real-world applications at Speshway Solutions.</span>
            </p>

          </div>

          {/* Right Column: Premium Developer Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* High-end Framed Profile Image Card */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 group">
                <img
                  src="/hero-profile.jpg"
                  alt="GANDHUDI SAI KIRAN"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/avatar.jpg';
                  }}
                />
                
                {/* Gradient shadow overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Floating Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
                  <h3 className="text-xl font-bold tracking-tight">GANDHUDI SAI KIRAN</h3>
                  <p className="text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider">
                    MERN Stack & Java Developer
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

