"use client";

import Link from "next/link";
import { Briefcase, ArrowRight, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function ApplySection() {
  return (
    <section className="bg-white container-pd py-16 md:py-24 font-sora relative overflow-hidden" id="apply">
      <div className="mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <SectionHeader
          badge="Apply Now"
          title="Ready to Join Us?"
          description="Start your journey with Webronic today. Choose your path below."
          centered={true}
          className="mb-12 md:mb-16 max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          
          {/* --- LEFT CARD: INTERNSHIP (White Theme) --- */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfLFogNrkSs6KuLXiQJ1LP0gqZo8yURLHavcqeYZsXMruheig/viewform"
            target="_blank"
            rel="noopener noreferrer"
            // CHANGED: Removed hover:-translate-y-2, added hover:scale-[1.03] origin-center
            className="group relative overflow-hidden bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 transition-all duration-500 hover:border-[#2776ea]/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:scale-[1.03] origin-center flex flex-col h-full"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <GraduationCap size={160} className="text-[#2776ea] -rotate-12 translate-x-8 -translate-y-8" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2776ea] mb-8 group-hover:scale-110 group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-500">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                Internship Program
              </h3>
              <p className="text-base text-slate-500 font-medium mb-12 leading-relaxed flex-1">
                Kickstart your career with hands-on experience. Work alongside industry experts on real-world projects designed to accelerate your learning.
              </p>

              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400 group-hover:text-[#2776ea] transition-colors uppercase tracking-wider">
                  Begin Application
                </span>
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-300">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* --- RIGHT CARD: EXPERIENCED HIRING (Blue Theme) --- */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_W8qvRrATorolwDgyM57HiynWANI9ivDlifnUdlR8pWJcnQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            // CHANGED: Removed hover:-translate-y-2, added hover:scale-[1.03] origin-center
            className="group relative overflow-hidden bg-[#2776ea] rounded-[2rem] p-8 md:p-10 border border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:scale-[1.03] origin-center flex flex-col h-full"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#76ea27]/20 rounded-full blur-[60px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500">
              <Briefcase size={160} className="text-white rotate-12 translate-x-8 -translate-y-8" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-8 border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-[#2776ea] transition-all duration-500 shadow-lg">
                <Briefcase size={32} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Experienced Roles
              </h3>
              <p className="text-base text-blue-100 font-medium mb-12 leading-relaxed flex-1 opacity-90">
                Ready for your next big leap? Join our team of senior engineers and architects to build high-impact, scalable digital solutions.
              </p>

              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm font-bold text-blue-200 group-hover:text-white transition-colors uppercase tracking-wider">
                  View Openings
                </span>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-[#2776ea] transition-all duration-300">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}