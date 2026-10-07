import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl text-slate-900">
                {personalDetails.name}
              </span>
            </a>
            <p className="text-xs text-slate-600 max-w-sm font-medium">
              Full Stack Developer | MERN Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-700 text-xs font-semibold transition-all group shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-indigo-600 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Bottom Footer Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono font-medium">
          <p>© {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Full Stack MERN Portfolio • Built with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" /> React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
