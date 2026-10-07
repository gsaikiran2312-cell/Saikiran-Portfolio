import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast.show) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short transition-all duration-300">
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-xl border ${
        isSuccess 
          ? 'bg-slate-900/90 border-emerald-500/50 text-emerald-300 shadow-emerald-950/40' 
          : 'bg-slate-900/90 border-rose-500/50 text-rose-300 shadow-rose-950/40'
      }`}>
        {isSuccess ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
        <p className="text-sm font-medium pr-2">{toast.message}</p>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
