import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast.show) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300">
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl backdrop-blur-xl border ${
        isSuccess 
          ? 'bg-white border-emerald-300 text-emerald-900 shadow-emerald-900/10' 
          : 'bg-white border-rose-300 text-rose-900 shadow-rose-900/10'
      }`}>
        {isSuccess ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> : <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />}
        <p className="text-sm font-semibold pr-2">{toast.message}</p>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
