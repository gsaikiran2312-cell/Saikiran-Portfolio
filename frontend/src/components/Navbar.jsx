import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code2, Sparkles, Send, Download, Database } from 'lucide-react';
import { personalDetails as defaultDetails } from '../data/portfolioData';

export default function Navbar({ isDark, toggleTheme, personalDetails = defaultDetails, onOpenAdmin, backendConnected }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? isDark ? 'glass-nav py-3' : 'glass-nav-light py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base sm:text-lg leading-tight tracking-tight text-white dark:text-white text-slate-900 group-hover:text-indigo-400 transition-colors">
              {personalDetails.name}
            </span>
            <span className="text-[10px] text-indigo-400 font-mono tracking-wider uppercase flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-pink-400" /> Full Stack / MERN Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 dark:bg-slate-900/70 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 dark:border-slate-800/80 border-slate-200/80 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 dark:text-slate-400 text-slate-600 hover:text-white dark:hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Dynamic Backend Manager Button */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-indigo-300 hover:text-white text-xs font-mono transition-all"
            title="Edit Dynamic Portfolio Data"
          >
            <Database className="w-3.5 h-3.5 text-indigo-400" />
            <span>Edit Data</span>
            <span className={`w-2 h-2 rounded-full ${backendConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl border border-slate-800 dark:border-slate-800 border-slate-200 bg-slate-900/80 dark:bg-slate-900/80 bg-white text-slate-300 dark:text-slate-300 text-slate-700 hover:text-indigo-400 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-sm"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Download Resume / Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenAdmin}
            className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-indigo-400"
            title="Edit Dynamic Portfolio Data"
          >
            <Database className="w-4 h-4" />
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mobile"
            className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-300"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Mobile Menu"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card mt-3 mx-4 p-4 rounded-2xl border border-slate-800 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-300 font-medium text-xs"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Edit Portfolio Data (Backend)</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
