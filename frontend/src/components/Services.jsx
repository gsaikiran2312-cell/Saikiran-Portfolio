import React, { useState, useRef } from 'react';
import { Layout, Server, Database, Code2, Link, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData as defaultServices } from '../data/portfolioData';

function ThreeDServiceCard({ service, index, iconComp: IconComp }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div style={{ perspective: '1000px' }} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out, box-shadow 0.25s ease-out',
        }}
        className="group relative h-full bg-white rounded-3xl p-7 border-2 border-slate-200/90 shadow-[0_12px_0_0_#cbd5e1,0_20px_35px_rgba(79,70,229,0.08)] hover:shadow-[0_18px_0_0_#a5b4fc,0_30px_55px_rgba(79,70,229,0.22)] hover:border-indigo-400 hover:-translate-y-2 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
      >
        {/* Dynamic Light Glare Reflection */}
        <div
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%)`,
            opacity: glare.opacity,
          }}
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        />

        {/* 3D Elevated Content Layers */}
        <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}>
          
          {/* Header Row: 3D Raised Icon & Number Badge */}
          <div className="flex items-center justify-between mb-6">
            <div
              style={{ transform: 'translateZ(35px)' }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-[0_6px_0_0_#3730a3,0_12px_20px_rgba(79,70,229,0.35)] group-hover:scale-105 group-hover:shadow-[0_8px_0_0_#3730a3,0_16px_25px_rgba(79,70,229,0.45)] transition-all"
            >
              <IconComp className="w-7 h-7" />
            </div>

            <span
              style={{ transform: 'translateZ(20px)' }}
              className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 font-mono text-xs font-bold shadow-inner"
            >
              0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{ transform: 'translateZ(20px)' }}
            className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 tracking-tight"
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            style={{ transform: 'translateZ(15px)' }}
            className="text-slate-600 text-sm leading-relaxed"
          >
            {service.description}
          </p>
        </div>

        {/* Bottom 3D Accent Indicator */}
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700"
        >
          <span className="flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform" />
            <span>Interactive Expertise</span>
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export default function Services({ servicesData = defaultServices }) {
  const [activeTab, setActiveTab] = useState('all');

  const iconMap = {
    1: Code2,
    2: Layout,
    3: Server,
    4: Database,
    5: Link,
    6: Zap
  };

  const tabs = [
    { id: 'all', label: 'All What I Do' },
    { id: 'frontend', label: 'Frontend & Full Stack' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Database & Real-time' },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'frontend') return service.id === 1 || service.id === 2;
    if (activeTab === 'backend') return service.id === 3 || service.id === 5;
    if (activeTab === 'database') return service.id === 4 || service.id === 6;
    return true;
  });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden select-none">
      
      {/* Background Decorative Mesh Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>SERVICES & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            What I Do
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mt-4 shadow-sm" />
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mt-3">
            Hover over each card to experience real-time 3D depth, parallax reflection, and perspective elevation.
          </p>
        </div>

        {/* 3D Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 mb-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer active:translate-y-1 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-[0_5px_0_0_#3730a3,0_10px_20px_rgba(79,70,229,0.35)] -translate-y-0.5'
                    : 'bg-white border-2 border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-[0_5px_0_0_#e2e8f0]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {filteredServices.map((service, idx) => {
            const IconComp = iconMap[service.id] || Code2;
            return (
              <ThreeDServiceCard
                key={service.id}
                service={service}
                index={idx}
                iconComp={IconComp}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

