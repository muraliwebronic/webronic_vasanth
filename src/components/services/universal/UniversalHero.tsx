"use client";

import Link from "next/link";
import { ArrowRight, Check, Activity, Layers } from "lucide-react";
import { ServicePageData } from "@/app/service/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalHero({ data }: { data: ServicePageData['hero'] }) {
   if (!data) return null;

   return (
      <section className="relative w-full bg-white pt-24 pb-20 container-pd lg:pt-32 lg:pb-16 font-sora overflow-hidden border-b border-slate-100">

         <div className=" mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

               {/* --- LEFT: COMPACT TEXT --- */}
               <div className="max-w-2xl">
                  <SectionHeader
                     badge={data.badge}
                     title={data.titlePrefix}
                     highlight={data.titleHighlight}
                     description={data.description}
                     centered={false}
                     size="default" // Using standard size, not "hero"
                     className="mb-6"
                  />

                  {/* Small CTAs */}
                  <div className="flex flex-wrap gap-3">
                     <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2776ea] text-white text-menu font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-md active:scale-95">
                        {data.ctaPrimary}
                     </Link>

                     {/* will show this after altre the content  */}
                     {/* {data.ctaSecondary && (
                        <Link href="#case-studies" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-menu font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95">
                           {data.ctaSecondary}
                        </Link>
                     )} */}
                  </div>
               </div>

               {/* --- RIGHT: RE-DESIGNED COMPACT VISUAL --- */}
               <div className="relative flex flex-col lg:block items-center lg:items-end mt-12 lg:mt-0">

                  {/* 1. Engineering Grid Background (Subtle Tech Feel) */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 opacity-50" />

                  {/* 2. Main Module Card (UPDATED to max-w-sm and protected from global CSS) */}
<div className="relative z-10 w-full max-w-sm lg:max-w-none lg:w-[clamp(384px,35vw,500px)] lg:flex-none bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden mx-auto lg:mr-0">
                     {/* Top Status Bar */}
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
                           <span className="text-caption font-bold uppercase tracking-widest text-slate-400">Operational</span>
                        </div>
                     </div>

                     {/* Main Content Area */}
                     <div className="p-6 md:p-8">

                        {/* Icon & Identity */}
                        <div className="flex flex-col lg:flex-row items-start gap-4 mb-8">
                           <div className="h-14 w-14 rounded-2xl bg-primary flex  items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                              <Layers size={28} strokeWidth={1.5} />
                           </div>
                           <div>
                              <span className="text-caption font-bold text-slate-400 uppercase tracking-widest block mb-1">Architecture</span>
                              <span className="text-xl md:text-2xl font-bold text-slate-900 leading-tight block">{data.badge}</span>
                           </div>
                        </div>

                        {/* Capabilities Stack (Pills) */}
                        <div className="space-y-4">
                           <p className="text-caption font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                              Active Modules
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {data.features.map((feature, i) => (
                                 <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-sm font-bold text-slate-600 whitespace-normal text-left leading-tight hover:bg-slate-100 transition-colors">
                                    {feature}
                                 </span>
                              ))}
                           </div>
                        </div>

                     </div>

                     {/* Bottom Highlight Line */}
                     <div className="h-1.5 w-full bg-gradient-to-r from-[#2776ea] via-[#76ea27] to-[#2776ea]" />
                  </div>

                  {/* Floating Badge (Accent) - Responsive Positioning */}
                  <div className="relative mt-6 lg:absolute lg:mt-0 lg:-bottom-18 lg:-left-12 lg:translate-x-0 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite] max-w-xs mx-auto lg:mx-0">
                     <div className="bg-[#76ea27]/10 p-2 rounded-xl text-[#6cd623] shrink-0">
                        <Activity size={20} />
                     </div>
                     <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Impact</span>
                        <span className="block text-sm font-bold text-slate-900 leading-tight">{data.titleHighlight}</span>
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </section>
   );
}