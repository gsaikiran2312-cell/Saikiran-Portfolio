import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';
import { personalDetails as defaultDetails } from '../data/portfolioData';

export default function Navbar({ personalDetails = defaultDetails }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [...navLinks.map(link => link.href.substring(1)), 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/90 shadow-xl shadow-slate-900/5'
            : 'bg-white/80 backdrop-blur-md border-slate-200/70 shadow-lg shadow-slate-900/5'
        }`}
      >
        {/* Left: Personal Branding */}
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-600 shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/avatar.jpg"
              alt="GSK Icon"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerText = 'GSK';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-indigo-600 transition-colors">
              {personalDetails.name || "GANDHUDI SAI KIRAN"}
            </span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              {personalDetails.role || "Full Stack Developer"}
            </span>
          </div>
        </a>

        {/* Center: Navigation Pill Links */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <nav className="flex items-center gap-1 bg-slate-100/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-indigo-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right: Highlighted 3D Contact Us CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="#contact"
            className={`relative group px-5 py-2 rounded-full font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600 shadow-[0_4px_0_0_#3730a3,0_8px_16px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_0_0_#3730a3,0_12px_22px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_0_#3730a3,0_4px_8px_rgba(79,70,229,0.3)] transition-all duration-200 ease-out flex items-center gap-1.5 border border-indigo-400/40 tracking-wide ${
              activeSection === 'contact' ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
            }`}
          >
            <span>Contact Us</span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-200 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed top-16 left-4 right-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs shadow-[0_4px_0_0_#3730a3] active:translate-y-0.5 active:shadow-none transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



