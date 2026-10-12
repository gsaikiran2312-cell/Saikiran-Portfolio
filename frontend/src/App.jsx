import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import CodeBanner from './components/CodeBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AdminDrawer from './components/AdminDrawer';
import LoginModal from './components/LoginModal';
import * as fallbackData from './data/portfolioData';

const API_BASE_URL = 'http://localhost:5001/api/portfolio';

export default function App() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);

  // Multi-page View State (initialized from URL hash)
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const valid = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    return valid.includes(hash) ? hash : 'home';
  });

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const valid = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      if (valid.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Dynamic Portfolio State
  const [data, setData] = useState({
    personalDetails: fallbackData.personalDetails,
    aboutData: fallbackData.aboutData,
    skillCategories: fallbackData.skillCategories,
    workExperience: fallbackData.workExperience,
    projects: fallbackData.projects,
    servicesData: fallbackData.servicesData,
    whyWorkWithMe: fallbackData.whyWorkWithMe,
    codeBannerData: fallbackData.codeBannerData,
  });

  // Check auth state on mount
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    const token = localStorage.getItem('adminAuthToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Listen for /login or #login in URL
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/login' || hash === '#login') {
        if (localStorage.getItem('adminAuthToken')) {
          setIsAuthenticated(true);
          setIsAdminOpen(true);
        } else {
          setIsLoginModalOpen(true);
        }
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

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
          setData((prev) => ({ ...prev, ...result.data }));
          setBackendConnected(true);
        }
      }
    } catch (err) {
      console.warn("Express backend offline or unavailable, using local fallback state:", err);
      setBackendConnected(false);
    }
  };

  const handleOpenAdminTrigger = () => {
    if (isAuthenticated || localStorage.getItem('adminAuthToken')) {
      setIsAuthenticated(true);
      setIsAdminOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsAdminOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthToken');
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    setIsAdminOpen(false);
    showToast('Signed out of Admin portal.', 'success');
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
          setData((prev) => ({ ...prev, ...updatedData }));
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

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  return (
    <div
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white font-serif antialiased flex flex-col"
    >
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast({ ...toast, show: false })} />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onShowToast={showToast}
      />

      {/* Admin Control Center Drawer */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        data={data}
        onSave={handleSaveToBackend}
        onReset={handleResetBackend}
        isSaving={isSaving}
        onLogout={handleLogout}
      />

      {/* Navigation Bar */}
      <Navbar
        personalDetails={data.personalDetails || fallbackData.personalDetails}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAdmin={handleOpenAdminTrigger}
        backendConnected={backendConnected}
      />

      {/* Main Multi-Page Views */}
      <main className="relative flex-1">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-200">
            <Hero
              personalDetails={data.personalDetails || fallbackData.personalDetails}
              onNavigate={handleNavigate}
            />
            <Services servicesData={data.servicesData || fallbackData.servicesData} />
            <WhyWorkWithMe whyData={data.whyWorkWithMe || fallbackData.whyWorkWithMe} />
            <CodeBanner
              bannerData={data.codeBannerData || fallbackData.codeBannerData}
              personalDetails={data.personalDetails || fallbackData.personalDetails}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="pt-24 sm:pt-28 min-h-[calc(100vh-220px)] animate-in fade-in duration-200">
            <About aboutData={data.aboutData || fallbackData.aboutData} />
            <WhyWorkWithMe whyData={data.whyWorkWithMe || fallbackData.whyWorkWithMe} />
          </div>
        )}

        {currentPage === 'skills' && (
          <div className="pt-24 sm:pt-28 min-h-[calc(100vh-220px)] animate-in fade-in duration-200">
            <Skills skillCategories={data.skillCategories || fallbackData.skillCategories} />
          </div>
        )}

        {currentPage === 'experience' && (
          <div className="pt-24 sm:pt-28 min-h-[calc(100vh-220px)] animate-in fade-in duration-200">
            <Experience workExperience={data.workExperience || fallbackData.workExperience} />
          </div>
        )}

        {currentPage === 'projects' && (
          <div className="pt-24 sm:pt-28 min-h-[calc(100vh-220px)] animate-in fade-in duration-200">
            <Projects projects={data.projects || fallbackData.projects} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-24 sm:pt-28 min-h-[calc(100vh-220px)] animate-in fade-in duration-200">
            <Contact
              personalDetails={data.personalDetails || fallbackData.personalDetails}
              onShowToast={showToast}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        personalDetails={data.personalDetails || fallbackData.personalDetails}
        onNavigate={handleNavigate}
      />
    </div>
  );
}


