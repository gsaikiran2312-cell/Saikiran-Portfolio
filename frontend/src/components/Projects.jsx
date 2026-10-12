import React, { useState, useEffect, useRef } from 'react';
import { FolderGit2, Eye, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { projects as defaultProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ projects = defaultProjects }) {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Unified Mouse Drag & Touch Swipe State
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (clientX) => {
    setDragStartX(clientX);
    setDragDistance(0);
    isDraggingRef.current = false;
  };

  const handleDragMove = (clientX) => {
    if (dragStartX === null) return;
    const diff = clientX - dragStartX;
    setDragDistance(diff);
    if (Math.abs(diff) > 8) {
      isDraggingRef.current = true;
    }
  };

  const handleDragEnd = () => {
    if (dragStartX === null) return;
    const threshold = 35;
    if (dragDistance < -threshold) {
      nextSlide();
    } else if (dragDistance > threshold) {
      prevSlide();
    }
    setDragStartX(null);
    setDragDistance(0);
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  return (
    <section id="projects" className="py-24 relative bg-white text-slate-900 overflow-hidden select-none w-full">
      {/* Subtle Light Accent Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50/70 via-white to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* Section Heading & Carousel Arrow Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-Times new roman font-bold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>PORTFOLIO HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-600 text-sm max-w-md mt-1">
              Swipe or click left/right across the full screen to explore all projects.
            </p>
          </div>

          {/* Controls: Left / Right Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Project"
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-slate-50 transition-all flex items-center justify-center shrink-0 shadow-md active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Project"
              className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shrink-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 100% Full-Screen Width 3D Cover Flow Perspective Stage */}
        <div
          className="relative w-full h-[440px] sm:h-[490px] flex items-center justify-center py-4 cursor-grab active:cursor-grabbing overflow-hidden"
          style={{ perspective: '1200px' }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const isActive = offset === 0;

            const spacing = isMobile ? 150 : 290;
            const translateX = offset * spacing + (dragStartX !== null ? dragDistance * 0.4 : 0);
            const scale = 1 - Math.abs(offset) * 0.16;
            const rotateY = offset === 0 ? 0 : offset > 0 ? -25 : 25;
            const opacity = 1 - Math.abs(offset) * 0.3;
            const zIndex = 30 - Math.abs(offset) * 10;

            if (Math.abs(offset) > 3) {
              return null;
            }

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (isDraggingRef.current) return;
                  if (isActive) {
                    setActiveModalProject(project);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex: zIndex,
                  opacity: Math.max(0.15, opacity),
                }}
                className={`absolute w-[240px] sm:w-[290px] md:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border-2 ${
                  isActive
                    ? 'border-indigo-600 ring-4 ring-indigo-500/20 shadow-[0_25px_60px_rgba(79,70,229,0.35)]'
                    : 'border-slate-200/90 shadow-xl shadow-slate-900/10 hover:border-indigo-300 hover:opacity-90'
                }`}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-1.5 pointer-events-none">
                  <span className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-indigo-700 text-xs font-mono font-bold shadow-sm">
                    {project.category}
                  </span>
                  {isActive && (
                    <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white text-[11px] font-bold shadow-md animate-pulse flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </span>
                  )}
                </div>

                {/* Bottom Content: Title & Arrow Button */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-3 text-white pointer-events-none">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug drop-shadow-md">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-indigo-300 mt-1 line-clamp-2">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/50 scale-105'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-9 h-2.5 bg-indigo-600 shadow-md shadow-indigo-600/30'
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





