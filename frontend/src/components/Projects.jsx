import React, { useState, useEffect } from 'react';
import { FolderGit2, Eye, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { projects as defaultProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ projects = defaultProjects }) {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Carousel Controls Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PORTFOLIO HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-600 text-sm max-w-md mt-1">
              Click any project card to view full architecture & case study.
            </p>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-700 shadow-md hover:shadow-lg hover:border-indigo-400 hover:text-indigo-600 hover:-translate-x-0.5 active:translate-x-0 transition-all flex items-center justify-center shrink-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-12 h-12 rounded-2xl bg-indigo-600 border border-indigo-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:bg-indigo-700 hover:translate-x-0.5 active:translate-x-0 transition-all flex items-center justify-center shrink-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Sliding Cards Container Track */}
        <div
          className="relative overflow-hidden py-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 cursor-pointer group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Vertical Card Box (3:4 Portrait Aspect Ratio) */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Subtle gradient overlay at bottom for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                  {/* Category Pill Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-indigo-700 text-xs font-mono font-bold shadow-sm">
                    {project.category}
                  </div>

                  {/* Hover Callout Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-[11px] font-semibold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm flex items-center gap-1.5 transform group-hover:translate-y-0 -translate-y-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </div>

                  {/* Vertical Card Bottom: ONLY Project Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-indigo-200 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-mono font-medium text-indigo-300 mt-1 line-clamp-2">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md group-hover:bg-indigo-600 text-white flex items-center justify-center transition-all shadow-md group-hover:scale-110 shrink-0">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? 'w-8 h-2.5 bg-indigo-600'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Full Information Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}



