import React, { useState } from 'react';
import { X, Save, RefreshCw, Database, Plus, Trash2, Upload, Loader2, LogOut, ShieldCheck } from 'lucide-react';

export default function AdminDrawer({ isOpen, onClose, data, onSave, onReset, isSaving, onLogout }) {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState(data);
  const [uploadingIndex, setUploadingIndex] = useState(null);

  if (!isOpen) return null;

  const handlePersonalChange = (field, val) => {
    setFormData({
      ...formData,
      personalDetails: {
        ...(formData.personalDetails || {}),
        [field]: val
      }
    });
  };

  const handleImageUpload = (file, callbackKey, projectIndex = null) => {
    if (!file) return;
    const key = projectIndex !== null ? `proj_${projectIndex}` : callbackKey;
    setUploadingIndex(key);

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: reader.result }),
        });
        const result = await res.json();
        if (result.success && result.url) {
          if (projectIndex !== null) {
            const updated = [...(formData.projects || [])];
            updated[projectIndex].image = result.url;
            setFormData({ ...formData, projects: updated });
          } else {
            handlePersonalChange(callbackKey, result.url);
          }
        } else {
          alert(`Cloudinary Upload Error: ${result.message}`);
        }
      } catch (err) {
        console.error('Error uploading to Cloudinary:', err);
        alert('Failed to connect to backend upload endpoint on port 5001.');
      } finally {
        setUploadingIndex(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddProject = () => {
    const newProj = {
      id: Date.now(),
      title: 'New Project Title',
      category: 'Full Stack Web Application',
      subtitle: 'Project Subtitle',
      description: 'Project description goes here...',
      keyFeatures: ['Feature 1', 'Feature 2'],
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      tags: ['React.js', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/gsaikiran2312-cell',
      demoUrl: 'https://github.com/gsaikiran2312-cell',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    };
    setFormData({
      ...formData,
      projects: [newProj, ...(formData.projects || [])]
    });
  };

  const handleDeleteProject = (index) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updated = (formData.projects || []).filter((_, i) => i !== index);
      setFormData({ ...formData, projects: updated });
    }
  };

  const handleAddExperience = () => {
    const newExp = {
      id: Date.now(),
      company: 'COMPANY NAME',
      position: 'Role Title',
      duration: 'Duration (e.g. 2026 – Present)',
      description: 'Brief overview of responsibilities...',
      responsibilities: ['Responsibility 1', 'Responsibility 2']
    };
    setFormData({
      ...formData,
      workExperience: [newExp, ...(formData.workExperience || [])]
    });
  };

  const handleDeleteExperience = (index) => {
    if (window.confirm('Are you sure you want to delete this experience entry?')) {
      const updated = (formData.workExperience || []).filter((_, i) => i !== index);
      setFormData({ ...formData, workExperience: updated });
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-slate-50 flex flex-col overflow-hidden animate-in fade-in duration-200">
      <div className="w-full h-full flex flex-col bg-slate-50 text-slate-900 overflow-hidden">

        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                <span>Admin Content Control Center</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono border border-emerald-200 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Authenticated
                </span>
              </h3>
              <p className="text-xs text-slate-500 font-mono font-medium">Logged in as: gsaikiran2312@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              title="View Live Site"
            >
              <span>View Live Website</span>
            </button>

            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-semibold transition-colors"
                title="Sign Out Admin"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Close Admin"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>


        {/* Tab Switcher */}
        <div className="flex items-center gap-1 px-6 py-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'personal', name: 'Personal Details' },
            { id: 'projects', name: 'Projects' },
            { id: 'experience', name: 'Work Experience' },
            { id: 'skills', name: 'Skills' },
            { id: 'services', name: 'Services' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-6">

          {/* PERSONAL DETAILS TAB */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Update Identity & Personal Profile
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-700 font-semibold">Full Name</label>
                  <input
                    type="text"
                    value={formData.personalDetails?.name || ''}
                    onChange={(e) => handlePersonalChange('name', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-700 font-semibold">Professional Role</label>
                  <input
                    type="text"
                    value={formData.personalDetails?.role || ''}
                    onChange={(e) => handlePersonalChange('role', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-700 font-semibold">Email Address</label>
                  <input
                    type="email"
                    value={formData.personalDetails?.email || ''}
                    onChange={(e) => handlePersonalChange('email', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-700 font-semibold">GitHub Profile URL</label>
                  <input
                    type="text"
                    value={formData.personalDetails?.github || ''}
                    onChange={(e) => handlePersonalChange('github', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-700 font-semibold flex items-center justify-between">
                  <span>Profile Image (Cloudinary)</span>
                  {uploadingIndex === 'avatar' && (
                    <span className="text-indigo-600 flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Uploading to Cloudinary...
                    </span>
                  )}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Cloudinary Image URL"
                    value={formData.personalDetails?.avatar || ''}
                    onChange={(e) => handlePersonalChange('avatar', e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                  />
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-semibold transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e.target.files[0], 'avatar')}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Featured Projects ({formData.projects?.length || 0})
                </h4>
                <button
                  onClick={handleAddProject}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Project</span>
                </button>
              </div>

              {(formData.projects || []).map((proj, idx) => (
                <div key={proj.id || idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-extrabold text-slate-900">Project #{idx + 1}</span>
                    <button
                      onClick={() => handleDeleteProject(idx)}
                      className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold flex items-center gap-1"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Project Title"
                    value={proj.title || ''}
                    onChange={(e) => {
                      const updated = [...(formData.projects || [])];
                      updated[idx].title = e.target.value;
                      setFormData({ ...formData, projects: updated });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-bold"
                  />

                  <input
                    type="text"
                    placeholder="Category"
                    value={proj.category || ''}
                    onChange={(e) => {
                      const updated = [...(formData.projects || [])];
                      updated[idx].category = e.target.value;
                      setFormData({ ...formData, projects: updated });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                  />

                  <textarea
                    rows="3"
                    placeholder="Description"
                    value={proj.description || ''}
                    onChange={(e) => {
                      const updated = [...(formData.projects || [])];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, projects: updated });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs resize-none"
                  />

                  {/* Cloudinary Upload for Project */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-600 font-semibold flex items-center justify-between">
                      <span>Project Screenshot Image</span>
                      {uploadingIndex === `proj_${idx}` && (
                        <span className="text-indigo-600 flex items-center gap-1">
                          <Loader2 className="w-3 h-3 animate-spin" /> Uploading to Cloudinary...
                        </span>
                      )}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Image URL"
                        value={proj.image || ''}
                        onChange={(e) => {
                          const updated = [...(formData.projects || [])];
                          updated[idx].image = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                      />
                      <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-semibold transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files[0], 'image', idx)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Work Experience Entries ({formData.workExperience?.length || 0})
                </h4>
                <button
                  onClick={handleAddExperience}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Experience</span>
                </button>
              </div>

              {(formData.workExperience || []).map((job, idx) => (
                <div key={job.id || idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-extrabold text-slate-900">Experience #{idx + 1}</span>
                    <button
                      onClick={() => handleDeleteExperience(idx)}
                      className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Company"
                      value={job.company || ''}
                      onChange={(e) => {
                        const updated = [...(formData.workExperience || [])];
                        updated[idx].company = e.target.value;
                        setFormData({ ...formData, workExperience: updated });
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Position"
                      value={job.position || job.role || ''}
                      onChange={(e) => {
                        const updated = [...(formData.workExperience || [])];
                        updated[idx].position = e.target.value;
                        setFormData({ ...formData, workExperience: updated });
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Duration"
                    value={job.duration || job.period || ''}
                    onChange={(e) => {
                      const updated = [...(formData.workExperience || [])];
                      updated[idx].duration = e.target.value;
                      setFormData({ ...formData, workExperience: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                  />

                  <textarea
                    rows="2"
                    placeholder="Description"
                    value={job.description || ''}
                    onChange={(e) => {
                      const updated = [...(formData.workExperience || [])];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, workExperience: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs resize-none"
                  />
                </div>
              ))}
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Technical Skill Categories
              </h4>
              {(formData.skillCategories || []).map((cat, idx) => (
                <div key={cat.id || idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-extrabold text-indigo-600">{cat.title}</span>
                  <input
                    type="text"
                    value={(cat.skills || []).join(', ')}
                    onChange={(e) => {
                      const updated = [...(formData.skillCategories || [])];
                      updated[idx].skills = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                      setFormData({ ...formData, skillCategories: updated });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-medium"
                  />
                </div>
              ))}
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Services (What I Do)
              </h4>
              {(formData.servicesData || []).map((service, idx) => (
                <div key={service.id || idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <input
                    type="text"
                    value={service.title || ''}
                    onChange={(e) => {
                      const updated = [...(formData.servicesData || [])];
                      updated[idx].title = e.target.value;
                      setFormData({ ...formData, servicesData: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-bold"
                  />
                  <textarea
                    rows="2"
                    value={service.description || ''}
                    onChange={(e) => {
                      const updated = [...(formData.servicesData || [])];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, servicesData: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs resize-none"
                  />
                </div>
              ))}
            </div>
          )}
          </div>
        </div>


        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors shadow-2xs"
          >
            <RefreshCw className="w-4 h-4 text-amber-500" />
            <span>Reset Default</span>
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving Changes...' : 'Save & Publish Changes'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

