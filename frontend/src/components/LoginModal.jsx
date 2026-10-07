import React, { useState } from 'react';
import { X, Lock, Mail, Eye, EyeOff, ShieldCheck, KeyRound } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess, onShowToast }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const res = await fetch('http://localhost:5001/api/portfolio/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        localStorage.setItem('adminAuthToken', result.token || 'gsk_admin_jwt_token_2026');
        localStorage.setItem('adminUser', JSON.stringify(result.user || { name: 'GANDHUDI SAI KIRAN' }));
        if (onShowToast) onShowToast('Login successful! Admin access granted.', 'success');
        onLoginSuccess();
        onClose();
        setEmail('');
        setPassword('');
      } else {
        const errorText = result.message || 'Invalid email or password.';
        setErrorMessage(errorText);
        if (onShowToast) onShowToast(errorText, 'error');
      }
    } catch (err) {
      console.warn("Express backend offline, performing client check:", err);
      // Client-side fallback credential check
      if (email === 'gsaikiran2312@gmail.com' && password === 'gsaikiran2312@') {
        localStorage.setItem('adminAuthToken', 'gsk_admin_jwt_token_2026');
        localStorage.setItem('adminUser', JSON.stringify({ name: 'GANDHUDI SAI KIRAN', email }));
        if (onShowToast) onShowToast('Login successful! Admin access granted.', 'success');
        onLoginSuccess();
        onClose();
        setEmail('');
        setPassword('');
      } else {
        const errorText = 'Invalid login credentials. Please verify your email and password.';
        setErrorMessage(errorText);
        if (onShowToast) onShowToast(errorText, 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">Admin Authentication</h3>
              <p className="text-xs text-slate-500 font-mono">Sign in to edit, add, or delete details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
              {errorMessage}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold font-mono text-slate-700 uppercase">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="gsaikiran2312@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold font-mono text-slate-700 uppercase">Password</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all mt-2 disabled:opacity-50"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isSubmitting ? 'Authenticating...' : 'Sign In as Admin'}</span>
          </button>
        </form>

        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Protected Route: /login</span>
          <span className="text-indigo-600 font-semibold">GSK Secure Portal</span>
        </div>
      </div>
    </div>
  );
}
