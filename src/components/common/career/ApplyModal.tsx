"use client";

import Link from "next/link";
import { X, GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ApplyModal({ open, onClose }: ApplyModalProps) {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-2 shrink-0">
          <div>
            <h3 className="text-xl font-black text-slate-900">
              Join the Team
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Select the path that matches your experience.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-2 rounded-full transition-colors -mt-2 -mr-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="p-6 overflow-y-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Internship Card */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfLFogNrkSs6KuLXiQJ1LP0gqZo8yURLHavcqeYZsXMruheig/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-300 hover:bg-white hover:border-[#2776ea] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                  <GraduationCap size={20} />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-400 group-hover:text-[#2776ea] transition-colors"
                />
              </div>

              <div className="mt-auto">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Students & Grads
                </p>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Internship
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Launch your career with hands-on experience in real-world projects.
                </p>
              </div>
            </Link>

            {/* Recruitment Card */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_W8qvRrATorolwDgyM57HiynWANI9ivDlifnUdlR8pWJcnQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-300 hover:bg-white hover:border-[#76ea27] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#76ea27]/10 flex items-center justify-center text-[#6cd623] group-hover:bg-[#6cd623] group-hover:text-white transition-colors">
                  <Briefcase size={20} />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-400 group-hover:text-[#6cd623] transition-colors"
                />
              </div>

              <div className="mt-auto">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Professionals
                </p>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Experienced
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Take the next step in your career with high-impact engineering roles.
                </p>
              </div>
            </Link>

          </div>
        </div>
        
      </div>
    </div>
  );
}