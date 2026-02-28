"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Users,
  Activity,
  GraduationCap,
  Briefcase,
  Sparkles,
  Zap,
} from "lucide-react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function CareersHero() {
  const { hero } = CAREERS_DATA;

  return (
    <section className="relative w-full bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 font-sora overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* --- LEFT COLUMN --- */}
          <div className="max-w-2xl">
            <SectionHeader
              badge={hero.badge}
              title={hero.titleLines[0]}
              highlight={hero.titleLines[1]}
              description={hero.subHeadline}
              centered={false}
              size="default"
              className="mb-10"
            />

            {/* --- CAREER CONTACT CARDS (DIRECT & CLEAN) --- */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              
              {/* Card 1: Internship */}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfLFogNrkSs6KuLXiQJ1LP0gqZo8yURLHavcqeYZsXMruheig/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                {/* Top Row: Icon & Badge */}
                <div className="flex justify-between items-start mb-5">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <GraduationCap size={24} strokeWidth={2} />
                  </div>
              
                </div>

                {/* Text Content */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-lg font-black text-slate-900 mb-2">
                    Internship
                  </h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    Don't just fetch coffee. <span className="text-slate-800 font-bold decoration-blue-300 decoration-2 underline underline-offset-2">Build production code.</span> For students & fresh grads.
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto flex items-center text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                  Apply Now
                  <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>

              {/* Card 2: Experienced Hiring */}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_W8qvRrATorolwDgyM57HiynWANI9ivDlifnUdlR8pWJcnQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1"
              >
                {/* Top Row: Icon & Badge */}
                <div className="flex justify-between items-start mb-5">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <Briefcase size={24} strokeWidth={2} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600 group-hover:bg-emerald-100">
                    <Zap size={10} />
                    Hiring Active
                  </span>
                </div>

                {/* Text Content */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-lg font-black text-slate-900 mb-2">
                    Experienced Hiring
                  </h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    Ready for the big leagues? High impact roles with <span className="text-slate-800 font-bold decoration-emerald-300 decoration-2 underline underline-offset-2">top-tier compensation.</span>
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto flex items-center text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors">
                  See Open Roles
                  <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>

            </div>

            {/* --- STATS ROW (UNCHANGED) --- */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-50">
              {hero.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-h3 font-black text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-caption font-bold uppercase tracking-wider text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: VISUAL MODULE (UNCHANGED) --- */}
          <div className="relative flex justify-center md:justify-end items-center">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 opacity-50" />

            <div className="relative z-10 w-full max-w-[340px] bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <div className="bg-slate-50/50 px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-caption font-bold uppercase tracking-widest text-slate-400">
                    Hiring Active
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <Users size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-caption font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Department
                    </span>
                    <span className="text-submenu font-bold text-slate-900 block">
                      Engineering & Product
                    </span>
                  </div>
                </div>

                <p className="text-caption font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2 mb-3">
                  Priority Roles
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Full Stack Dev",
                    "ML Engineer",
                    "DevOps Lead",
                    "Product Designer",
                  ].map((role, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-caption font-bold text-slate-600"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-[#2776ea] via-[#76ea27] to-[#2776ea]" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
              <div className="bg-[#76ea27]/10 p-1.5 rounded-lg text-[#6cd623]">
                <Activity size={16} />
              </div>
              <div>
                <span className="block text-caption font-bold text-slate-400 uppercase">
                  Growth
                </span>
                <span className="block text-caption font-bold text-slate-900">
                  200+ Innovators
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}