import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AdminDrawer from './components/AdminDrawer';
import * as fallbackData from './data/portfolioData';

const API_BASE_URL = 'http://localhost:5001/api/portfolio';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);

  // Dynamic Portfolio State
  const [data, setData] = useState({
    personalDetails: fallbackData.personalDetails,
    aboutHighlights: fallbackData.aboutHighlights,
    stats: fallbackData.stats,
    skillCategories: fallbackData.skillCategories,
    workExperience: fallbackData.workExperience,
    projects: fallbackData.projects,
    education: fallbackData.education,
    certifications: fallbackData.certifications,
    certHighlights: fallbackData.certHighlights,
    softSkills: fallbackData.softSkills,
    spokenLanguages: fallbackData.spokenLanguages,
    interests: fallbackData.interests,
  });

  // Fetch dynamic data from Express Backend on mount
  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const res = await fetch(API_BASE_URL);
      if (res.ok) {
        const result = await res.json();
        if (result.success && result.data) {
          setData(result.data);
          setBackendConnected(true);
        }
      }
    } catch (err) {
      console.warn("Express backend offline or unavailable, using local fallback state:", err);
      setBackendConnected(false);
    }
  };

  const handleSaveToBackend = async (updatedData) => {
    setIsSaving(true);
    try {
      const res = await fetch(API_BASE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          setData(updatedData);
          showToast('Portfolio data updated and saved to Express backend!', 'success');
          setIsAdminOpen(false);
        } else {
          showToast('Failed to update portfolio data.', 'error');
        }
      } else {
        showToast('Backend error on saving portfolio data.', 'error');
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
      showToast('Could not reach Express backend server.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetBackend = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/reset`, { method: 'POST' });
      if (res.ok) {
        const result = await res.json();
        if (result.success && result.data) {
          setData(result.data);
          showToast('Portfolio reset to initial default state!', 'success');
          setIsAdminOpen(false);
        }
      }
    } catch (err) {
      console.error("Error resetting backend data:", err);
      showToast('Failed to reset backend data.', 'error');
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast({ ...toast, show: false })} />

      {/* Admin Control Center Drawer */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        data={data}
        onSave={handleSaveToBackend}
        onReset={handleResetBackend}
        isSaving={isSaving}
      />

      {/* Navigation Bar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        personalDetails={data.personalDetails}
        onOpenAdmin={() => setIsAdminOpen(true)}
        backendConnected={backendConnected}
      />

      {/* Main Dynamic Sections */}
      <main className="relative">
        <Hero
          personalDetails={data.personalDetails}
          onOpenContact={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <StatsCounter stats={data.stats} />

        <About
          personalDetails={data.personalDetails}
          aboutHighlights={data.aboutHighlights}
        />

        <Skills skillCategories={data.skillCategories} />

        <Experience workExperience={data.workExperience} />

        <Projects projects={data.projects} />

        <Education education={data.education} />

        <Certifications
          certifications={data.certifications}
          certHighlights={data.certHighlights}
          softSkills={data.softSkills}
          spokenLanguages={data.spokenLanguages}
          interests={data.interests}
        />

        <Contact
          personalDetails={data.personalDetails}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer
        personalDetails={data.personalDetails}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />
    </div>
  );
}
