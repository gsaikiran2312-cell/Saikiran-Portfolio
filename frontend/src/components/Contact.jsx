import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Sparkles, Copy } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full Stack Role Opportunity',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('Thank you! Your message has been transmitted successfully.', 'success');
      setFormData({
        name: '',
        email: '',
        subject: 'Full Stack Role Opportunity',
        message: '',
      });
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    onShowToast('Email address copied to clipboard!', 'success');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    onShowToast('Phone number copied to clipboard!', 'success');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT & RECRUITER INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Touch</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Interested in hiring or collaborating? Send a message directly or reach out via email, phone, or LinkedIn.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Email Address</span>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {personalDetails.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Phone Direct</span>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {personalDetails.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Location</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {personalDetails.location}
                  </p>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs text-slate-400 uppercase font-mono">Professional Profiles:</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-indigo-400" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Response Badge */}
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center gap-2.5 text-xs text-indigo-300">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Quick response time for career and project opportunities.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-5 shadow-2xl">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 font-mono">
                    YOUR NAME <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 font-mono">
                    EMAIL ADDRESS <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 font-mono">
                  SUBJECT / REASON
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="Full Stack Role Opportunity">Full-Time / Contract Role Opportunity</option>
                  <option value="Web App Project">New Web Application Project</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 font-mono">
                  MESSAGE <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Share details about the role, project, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
