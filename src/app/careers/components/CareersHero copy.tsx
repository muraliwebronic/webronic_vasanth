"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Users,
  Activity,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function CareersHero() {
  const { hero } = CAREERS_DATA;

  return (
    <section className="relative w-full bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 font-sora overflow-hidden border-b border-slate-100">
      <div className="container-pd mx-auto px-6 md:px-12 lg:px-24 relative z-10">
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

            {/* --- CAREER CONTACT CARDS (REPLACES OLD CTA) --- */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {/* Internship */}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfLFogNrkSs6KuLXiQJ1LP0gqZo8yURLHavcqeYZsXMruheig/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-[#2776ea] hover:shadow-lg hover:shadow-blue-900/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                    <GraduationCap size={20} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-[#2776ea] transition-colors"
                  />
                </div>

                <p className="text-caption font-black uppercase tracking-widest text-slate-400 mb-2">
                  Apply for
                </p>
                <h4 className="text-h3 font-black text-slate-900 mb-3">
                  Internship
                </h4>
                <p className="text-submenu font-medium text-slate-500 leading-relaxed mb-6">
                  Perfect for students and recent graduates looking to gain
                  hands-on experience in high-impact tech environments.
                </p>

                <span className="inline-flex items-center gap-2 text-caption font-black uppercase tracking-widest text-[#2776ea]">
                  Start Application
                  <ArrowUpRight size={14} />
                </span>
              </Link>

              {/* Experienced Recruitment */}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_W8qvRrATorolwDgyM57HiynWANI9ivDlifnUdlR8pWJcnQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-[#76ea27] hover:shadow-lg hover:shadow-emerald-900/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-[#76ea27]/10 flex items-center justify-center text-[#6cd623]">
                    <Briefcase size={20} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-[#76ea27] transition-colors"
                  />
                </div>

                <p className="text-caption font-black uppercase tracking-widest text-slate-400 mb-2">
                  Experienced
                </p>
                <h4 className="text-h3 font-black text-slate-900 mb-3">
                  Recruitment
                </h4>
                <p className="text-submenu font-medium text-slate-500 leading-relaxed mb-6">
                  For industry professionals looking for specialized roles in
                  software engineering, design, or project management.
                </p>

                <span className="inline-flex items-center gap-2 text-caption font-black uppercase tracking-widest text-[#76ea27]">
                  View Opportunities
                  <ArrowUpRight size={14} />
                </span>
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

          {/* --- RIGHT COLUMN: VISUAL MODULE (ORIGINAL, UNCHANGED) --- */}
          <div className="relative flex justify-center md:justify-end items-center">
            <div className="absolute  inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 opacity-50" />

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
