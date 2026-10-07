import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { personalDetails as defaultDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ personalDetails = defaultDetails, onOpenContact }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Ambient Background Lighting for Light Theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Professional Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalDetails.status}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4">
              {personalDetails.name}
            </h1>

            {/* Professional Subtitles */}
            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-bold text-indigo-600 mb-6">
              <span>{personalDetails.role}</span>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              {personalDetails.tagline}
            </p>

            {/* Recruiter CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-md shadow-indigo-600/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-sm border border-slate-200 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-purple-600" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-mono font-semibold">Connect:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 shadow-xs transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 shadow-xs transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{personalDetails.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Developer Snapshot Box */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 max-w-sm sm:max-w-md w-full shadow-2xl shadow-slate-900/10">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-semibold text-slate-300">developer.profile.js</span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300 leading-relaxed">
                <p className="text-purple-400"><span className="text-indigo-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-pink-400">name:</span> <span className="text-amber-300">'{personalDetails.name}'</span>,</p>
                <p className="pl-4"><span className="text-pink-400">role:</span> <span className="text-amber-300">'{personalDetails.role}'</span>,</p>
                <p className="pl-4"><span className="text-pink-400">experience:</span> <span className="text-emerald-400">'1.6 Years'</span>,</p>
                <p className="pl-4"><span className="text-pink-400">stack:</span> [</p>
                <p className="pl-8 text-slate-400">'React.js', 'Node.js', 'Express.js',</p>
                <p className="pl-8 text-slate-400">'MongoDB', 'REST APIs', 'Tailwind'</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-pink-400">location:</span> <span className="text-amber-300">'{personalDetails.location}'</span></p>
                <p className="text-purple-400">&#125;;</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Enterprise Systems
                </span>
                <span className="font-mono text-[11px] text-slate-500">Fleet • Restaurant • Event</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
