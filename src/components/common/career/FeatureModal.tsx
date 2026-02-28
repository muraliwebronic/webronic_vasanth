"use client";

import { useEffect } from "react";
import { X, CheckCircle2, LucideIcon } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "green";
  details?: string[];
}

interface FeatureModalProps {
  open: boolean;
  onClose: () => void;
  feature: Feature | null;
}

export default function FeatureModal({
  open,
  onClose,
  feature,
}: FeatureModalProps) {
  // Prevent background scrolling and allow Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open || !feature) return null;

  // Color logic
  const isBlue = feature.color === "blue";
  const iconBg = isBlue ? "bg-blue-50" : "bg-emerald-50";
  const iconColor = isBlue ? "text-blue-600" : "text-emerald-600";
  const buttonHover = isBlue 
    ? "hover:bg-blue-50 hover:text-blue-600 focus-visible:ring-blue-500" 
    : "hover:bg-emerald-50 hover:text-emerald-600 focus-visible:ring-emerald-500";

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feature-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 fade-in duration-300 overflow-hidden max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Fixed at top */}
        <div className="flex items-start justify-between px-6 pt-6 sm:px-8 sm:pt-8 pb-4 shrink-0">
          <div className={`shrink-0 h-14 w-14 rounded-2xl ${iconBg} flex items-center justify-center ${iconColor}`}>
            <feature.icon size={28} strokeWidth={1.5} />
          </div>
          
          <button
            onClick={onClose}
            className={`text-slate-400 p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 ring-offset-2 ${buttonHover}`}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content: Scrollable area */}
        <div className="px-6 pb-6 sm:px-8 sm:pb-8 overflow-y-auto custom-scrollbar"> 
          <h3 
            id="feature-modal-title"
            className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-3"
          >
            {feature.title}
          </h3>
          
          <p className="text-slate-600 leading-relaxed text-[15px] sm:text-[16px]">
            {feature.description}
          </p>

          {/* Details List */}
          {feature.details && feature.details.length > 0 && (
            <div className="mt-6 sm:mt-8 space-y-4 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Included Features
              </h4>
              <ul className="space-y-3">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600">
                    <CheckCircle2 size={18} className={`mt-[2px] shrink-0 ${iconColor}`} />
                    <span className="leading-snug">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}