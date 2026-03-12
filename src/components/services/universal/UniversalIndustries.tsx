"use client";

import { useState, useRef } from "react";
import { ArrowRight, ChevronRight, Zap, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalIndustries({ data }: { data: ServicePageData['industries'] }) {
  const [activeTab, setActiveTab] = useState(data.items[0]?.id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentIndustry = data.items.find((ind) => ind.id === activeTab) || data.items[0];

  // Define theme configuration for different colors
  const themeConfig: Record<string, {
    badge: string;
    ping: string;
    iconBox: string;
    zap: string;
    successText: string;
  }> = {
    blue: {
      badge: "bg-blue-500/10 border-blue-500/20 text-blue-600",
      ping: "bg-blue-500",
      iconBox: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      zap: "text-blue-500 fill-blue-500",
      successText: "text-blue-600"
    },
    green: {
      badge: "bg-green-500/10 border-green-500/20 text-green-600",
      ping: "bg-green-500",
      iconBox: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      zap: "text-green-500 fill-green-500",
      successText: "text-green-600"
    },
    orange: {
      badge: "bg-orange-500/10 border-orange-500/20 text-orange-600",
      ping: "bg-orange-500",
      iconBox: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      zap: "text-orange-500 fill-orange-500",
      successText: "text-orange-600"
    },
    purple: {
      badge: "bg-purple-500/10 border-purple-500/20 text-purple-600",
      ping: "bg-purple-500",
      iconBox: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      zap: "text-purple-500 fill-purple-500",
      successText: "text-purple-600"
    },
    teal: {
      badge: "bg-teal-500/10 border-teal-500/20 text-teal-600",
      ping: "bg-teal-500",
      iconBox: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
      zap: "text-teal-500 fill-teal-500",
      successText: "text-teal-600"
    },
    indigo: {
      badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600",
      ping: "bg-indigo-500",
      iconBox: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      zap: "text-indigo-500 fill-indigo-500",
      successText: "text-indigo-600"
    }
  };

  const theme = themeConfig[currentIndustry.theme] || themeConfig.blue;

  return (
    <section className="bg-slate-50 container-pd py-24 lg:py-32 font-sora relative overflow-hidden">
      <div className=" mx-auto px-6 max-w-7xl relative z-10">

        <SectionHeader
          badge="Impact"
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-20"
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* --- LEFT: SIDEBAR NAVIGATION (Matches Projects Page) --- */}
          <div className="lg:w-1/4 shrink-0">
            <div className="lg:sticky lg:top-32">

              {/* Desktop Title */}
              <div className="hidden lg:flex items-center gap-2 mb-6 pl-1 text-slate-400">
                <LayoutGrid size={14} />
                <span className="text-caption font-black uppercase tracking-[0.2em]">Industries</span>
              </div>

              {/* TAB container  */}
              <div
                ref={scrollRef}
                className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1"
              >
                {data.items.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`group relative flex items-center justify-between transition-all duration-300 ease-out
                                    px-5 py-2.5 rounded-full min-w-max border
                                    lg:w-full lg:px-4 lg:py-3.5 lg:rounded-xl lg:border
                                    ${activeTab === ind.id
                        ? "bg-primary text-white border-primary shadow-md shadow-blue-500/25"
                        : "bg-white text-slate-500 border-slate-200 hover:border-primary/30 hover:bg-white hover:text-slate-700 hover:shadow-sm"
                      }
                                `}
                  >
                    {/* Active Indicator (Desktop) */}
                    {activeTab === ind.id && (
                      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-white/30 rounded-r-full" />
                    )}

                    <div className="flex items-center gap-3">
                      <div className={`transition-colors ${activeTab === ind.id
                        ? "text-white"
                        : "text-slate-400 group-hover:text-primary"
                        }`}>
                        <DynamicIcon name={ind.icon} size={18} />
                      </div>
                      <span className="text-submenu font-bold tracking-wide">
                        {ind.label}
                      </span>
                    </div>

                    {/* Count Badge */}
                    <span className={`text-caption ml-3 font-bold px-2 py-0.5 rounded-md transition-colors ${activeTab === ind.id
                      ? "bg-white/20 text-white"
                      : "hidden lg:block bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                      }`}>
                      {ind.features.length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile Swipe Hint */}
              <div className="lg:hidden flex items-center gap-1 mt-2 text-caption font-bold text-slate-400 uppercase tracking-widest animate-pulse pl-2">
                Swipe <ChevronRight size={10} />
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTENT AREA --- */}
          <div className="lg:w-3/4 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                {/* Category Meta */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200/60">
                  <div>
                    <h3 className="text-h3 font-bold text-slate-900 mb-2">
                      {currentIndustry.label}
                    </h3>
                    <p className="text-body text-slate-500 max-w-2xl font-medium leading-relaxed">
                      {currentIndustry.description}
                    </p>
                  </div>
                  <div className={`hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border text-caption font-black uppercase tracking-widest whitespace-nowrap ${theme.badge}`}>
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.ping}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${theme.ping}`}></span>
                    </span>
                    Proven Impact
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentIndustry.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${theme.iconBox}`}>
                          <DynamicIcon name={feature.icon} size={20} strokeWidth={2} />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                      </div>

                      <p className="text-sm text-slate-500 leading-relaxed mb-6 grow">
                        {feature.desc}
                      </p>
                      
                      {/* --------------- add this Success Story later ------------- */}
                      {/* {feature.caseStudy && (
                        <div className="mt-auto pt-4 border-t border-slate-50">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap size={12} className={theme.zap} />
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.successText}`}>
                              Success Story
                            </span>
                          </div>
                          <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100 group-hover:border-slate-200 transition-colors">
                            <p className="text-xs font-bold text-slate-900 mb-1 line-clamp-1">
                              {feature.caseStudy.title}
                            </p>
                            <p className="text-xs font-semibold text-slate-500">
                              {feature.caseStudy.result}
                            </p>
                          </div>
                        </div>
                      )} */}
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}