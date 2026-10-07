import React from 'react';
import { Mail, MessageSquare, Copy, Download, ExternalLink } from 'lucide-react';
import { personalDetails as defaultDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact({ personalDetails = defaultDetails, onShowToast }) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email || 'gsaikiran2312@gmail.com');
    if (onShowToast) onShowToast('Email copied to clipboard!', 'success');
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT & CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mt-2">
            Have a project, opportunity, or idea you'd like to discuss? Reach out directly via email or connect through social channels.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3" />
        </div>

        {/* Clean Centered Contact Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider">Direct Email</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-2">
                {personalDetails.email || "gsaikiran2312@gmail.com"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Feel free to send an email for job opportunities, project inquiries, or technical collaborations.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
              <a
                href={`mailto:${personalDetails.email || 'gsaikiran2312@gmail.com'}`}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-colors"
                title="Copy Email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <ExternalLink className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider">Professional Networks</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-2">
                GitHub & LinkedIn
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Explore my repositories, code commits, and professional network updates.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-800 hover:text-indigo-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-indigo-600" />
                <span>GitHub</span>
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-800 hover:text-indigo-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


