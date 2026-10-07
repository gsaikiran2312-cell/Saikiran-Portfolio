import React, { useState } from 'react';
import { X, Save, RefreshCw, Sparkles, Check, Database, Edit3, Plus, Trash2, Upload, Image as ImageIcon, Loader2 } from 'lucide-react';

export default function AdminDrawer({ isOpen, onClose, data, onSave, onReset, isSaving }) {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState(data);
  const [uploadingIndex, setUploadingIndex] = useState(null);

  if (!isOpen) return null;

  const handlePersonalChange = (field, val) => {
    setFormData({
      ...formData,
      personalDetails: {
        ...formData.personalDetails,
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
            const updated = [...formData.projects];
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

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Drawer Box */}
      <div 
        className="glass-card w-full max-w-2xl h-full overflow-y-auto border-l border-slate-200 shadow-2xl flex flex-col justify-between bg-white text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                <span>Dynamic Data Control Center</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono border border-emerald-200 font-semibold">
                  LIVE REST API Connected
                </span>
              </h3>
              <p className="text-xs text-slate-500 font-mono font-medium">Updates reflect dynamically across the site & persist to backend server.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 px-6 py-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'personal', name: 'Personal Details' },
            { id: 'experience', name: 'Work Experience' },
            { id: 'projects', name: 'Projects' },
            { id: 'skills', name: 'Skills' },
            { id: 'education', name: 'Education' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Form Body Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          
          {/* PERSONAL DETAILS TAB */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                Update Identity & Contact Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Full Name</label>
                  <input
                    type="text"
                    value={formData.personalDetails.name || ''}
                    onChange={(e) => handlePersonalChange('name', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Professional Role</label>
                  <input
                    type="text"
                    value={formData.personalDetails.role || ''}
                    onChange={(e) => handlePersonalChange('role', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Email Address</label>
                  <input
                    type="email"
                    value={formData.personalDetails.email || ''}
                    onChange={(e) => handlePersonalChange('email', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Phone Number</label>
                  <input
                    type="text"
                    value={formData.personalDetails.phone || ''}
                    onChange={(e) => handlePersonalChange('phone', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Location</label>
                  <input
                    type="text"
                    value={formData.personalDetails.location || ''}
                    onChange={(e) => handlePersonalChange('location', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Status Pill</label>
                  <input
                    type="text"
                    value={formData.personalDetails.status || ''}
                    onChange={(e) => handlePersonalChange('status', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Hero Short Tagline</label>
                <input
                  type="text"
                  value={formData.personalDetails.tagline || ''}
                  onChange={(e) => handlePersonalChange('tagline', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-700 font-semibold flex items-center justify-between">
                  <span>Profile / Avatar Image</span>
                  {uploadingIndex === 'avatar' && (
                    <span className="text-indigo-600 flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Uploading to Cloudinary...
                    </span>
                  )}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Cloudinary Image URL or path"
                    value={formData.personalDetails.avatar || ''}
                    onChange={(e) => handlePersonalChange('avatar', e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                  />
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-semibold transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e.target.files[0], 'avatar')}
                    />
                  </label>
                </div>
                {formData.personalDetails.avatar && (
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={formData.personalDetails.avatar}
                      alt="Avatar Preview"
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-xs"
                    />
                    <span className="text-[10px] text-slate-500 font-mono">Live Image Preview</span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Full Bio Summary</label>
                <textarea
                  rows="4"
                  value={formData.personalDetails.bio || ''}
                  onChange={(e) => handlePersonalChange('bio', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs resize-none"
                />
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                Manage Professional Experience Entries
              </h4>
              {formData.workExperience.map((job, idx) => (
                <div key={job.id || idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Role Title"
                      value={job.role}
                      onChange={(e) => {
                        const updated = [...formData.workExperience];
                        updated[idx].role = e.target.value;
                        setFormData({ ...formData, workExperience: updated });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={job.company}
                      onChange={(e) => {
                        const updated = [...formData.workExperience];
                        updated[idx].company = e.target.value;
                        setFormData({ ...formData, workExperience: updated });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Period (e.g. 2025 – Present)"
                    value={job.period}
                    onChange={(e) => {
                      const updated = [...formData.workExperience];
                      updated[idx].period = e.target.value;
                      setFormData({ ...formData, workExperience: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                  />

                  <textarea
                    rows="2"
                    placeholder="Job summary"
                    value={job.description}
                    onChange={(e) => {
                      const updated = [...formData.workExperience];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, workExperience: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs resize-none"
                  />
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                Manage Enterprise Projects & Case Studies
              </h4>
              {formData.projects.map((proj, idx) => (
                <div key={proj.id || idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={proj.title}
                    onChange={(e) => {
                      const updated = [...formData.projects];
                      updated[idx].title = e.target.value;
                      setFormData({ ...formData, projects: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs font-bold"
                  />

                  <input
                    type="text"
                    placeholder="Tagline"
                    value={proj.tagline}
                    onChange={(e) => {
                      const updated = [...formData.projects];
                      updated[idx].tagline = e.target.value;
                      setFormData({ ...formData, projects: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                  />

                  <textarea
                    rows="3"
                    placeholder="Full description"
                    value={proj.description}
                    onChange={(e) => {
                      const updated = [...formData.projects];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, projects: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs resize-none"
                  />

                  {/* Cloudinary Project Image Upload Field */}
                  <div className="space-y-1 pt-1 border-t border-slate-800">
                    <label className="text-[11px] font-mono text-slate-400 font-semibold flex items-center justify-between">
                      <span>Project Image (Cloudinary)</span>
                      {uploadingIndex === `proj_${idx}` && (
                        <span className="text-indigo-400 flex items-center gap-1">
                          <Loader2 className="w-3 h-3 animate-spin" /> Uploading to Cloudinary...
                        </span>
                      )}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Cloudinary Image URL"
                        value={proj.image || ''}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[idx].image = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                      />
                      <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-xs">
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
                    {proj.image && (
                      <div className="mt-1 relative aspect-video rounded-lg overflow-hidden border border-slate-800 max-h-24 w-auto">
                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                Manage Skills & Categories
              </h4>
              {formData.skillCategories.map((cat, idx) => (
                <div key={cat.id || idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-400">{cat.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">{cat.skills.length} skills</span>
                  </div>
                  <input
                    type="text"
                    value={cat.skills.join(', ')}
                    onChange={(e) => {
                      const updated = [...formData.skillCategories];
                      updated[idx].skills = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                      setFormData({ ...formData, skillCategories: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                  <p className="text-[10px] text-slate-500">Separate skills with commas (e.g. React.js, Tailwind, Node.js)</p>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                Manage Education & Academic Degrees
              </h4>
              {formData.education.map((edu, idx) => (
                <div key={edu.id || idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <input
                    type="text"
                    placeholder="Degree Name"
                    value={edu.degree}
                    onChange={(e) => {
                      const updated = [...formData.education];
                      updated[idx].degree = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs font-bold"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Period"
                      value={edu.period}
                      onChange={(e) => {
                        const updated = [...formData.education];
                        updated[idx].period = e.target.value;
                        setFormData({ ...formData, education: updated });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Institution"
                      value={edu.institution}
                      onChange={(e) => {
                        const updated = [...formData.education];
                        updated[idx].institution = e.target.value;
                        setFormData({ ...formData, education: updated });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-amber-400" />
            <span>Reset to Initial</span>
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving to Backend...' : 'Save & Publish Dynamically'}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
