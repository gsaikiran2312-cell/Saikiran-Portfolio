import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalDetails as defaultDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ personalDetails = defaultDetails }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Left Info */}
          <div className="flex items-center gap-3">
            <img
              src="/avatar.jpg"
              alt="Gandhudi Sai Kiran Icon"
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600 shadow-sm shrink-0"
            />
            <div className="text-left space-y-0.5">
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                {personalDetails.name || "GANDHUDI SAI KIRAN"}
              </h3>
              <p className="text-xs font-semibold text-indigo-600">
                Full Stack Developer
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                React.js • Node.js • Java • MongoDB
              </p>
            </div>
          </div>


          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalDetails.email || 'gsaikiran2312@gmail.com'}`}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-600" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-slate-500 font-mono">
          © 2026 Gandhudi Sai Kiran. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

