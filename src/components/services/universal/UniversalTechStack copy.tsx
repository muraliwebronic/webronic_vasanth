"use client";

import { useState } from "react";
import { Settings, Code2, Bot, Cloud, CheckCircle2, Cpu, LineChart } from "lucide-react";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

export default function UniversalTechStack({ data }: { data: ServicePageData['techStack'] }) {
  const [activeTab, setActiveTab] = useState<"frameworks" | "intelligence" | "cloud">("frameworks");

  if (!data) return null;

  const hasFrameworks = data.frameworks && data.frameworks.length > 0;
  const hasLLMs = data.llms && data.llms.length > 0;
  const hasMLOps = data.mlOps && data.mlOps.length > 0;
  const hasCloud = data.cloudPlatforms && data.cloudPlatforms.length > 0;

  // Intelligence section is visible if either LLMs or MLOps exist
  const hasIntelligence = hasLLMs || hasMLOps;

  const tabs = [
    { id: "frameworks", label: "Frameworks", icon: Code2, show: hasFrameworks },
    { id: "intelligence", label: "AI & Models", icon: Bot, show: hasIntelligence },
    { id: "cloud", label: "Cloud & Dev", icon: Cloud, show: hasCloud },
  ].filter(tab => tab.show);

  return (
    <section className="relative bg-white py-24 font-sora px-6 overflow-hidden border-t border-slate-100">
      <div className="container-pd mx-auto max-w-[68rem] relative z-10">

        <SectionHeader
          badge={data.badge || "High-Performance Stack"}
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-2xl mx-auto mb-14"
          size="default"
        />

        {/* COMPACT TABS NAVIGATION */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-50 p-1.5 rounded-full border border-slate-200 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-md ring-1 ring-slate-200/50"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
              >
                <tab.icon size={16} className={activeTab === tab.id ? "text-blue-600" : "text-slate-400"} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT AREA */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">

            {/* =========================================
                1. FRAMEWORKS TAB
            ========================================= */}
            {activeTab === "frameworks" && hasFrameworks && (
              <motion.div
                key="frameworks"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {data.frameworks?.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md"
                  >
                    <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all mb-6 shrink-0">
                      <Code2 size={22} />
                    </div>

                    <h4 className="text-base font-bold text-slate-800 leading-snug mb-3 break-words">
                      {typeof item.name === 'string' ? item.name.replace(/\//g, ' / ') : item.name}
                    </h4>

                    <p className="text-sm text-slate-500 leading-relaxed break-words">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* =========================================
                2. INTELLIGENCE TAB
            ========================================= */}
            {activeTab === "intelligence" && hasIntelligence && (
              <motion.div
                key="intelligence"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Models & LLMs */}
                {hasLLMs && (
                  <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8 pb-5 border-b border-slate-100">
                      <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                        <Bot size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">Models & LLMs</h3>
                    </div>

                    <div className="space-y-4">
                      {data.llms?.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors w-full">
                          <CheckCircle2 size={18} className="text-purple-500 mt-0.5 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-slate-800 text-sm mb-1.5 break-words">{item.name}</h5>
                            <p className="text-sm text-slate-500 leading-relaxed break-words">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MLOps Pipeline */}
                {hasMLOps && (
                  <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8 pb-5 border-b border-slate-100">
                      <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                        <Cpu size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">MLOps Pipeline</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {data.mlOps?.map((tag, i) => {
                        const isString = typeof tag === 'string';
                        const label = isString ? tag : tag.name;
                        const desc = !isString && tag.desc ? tag.desc : null;

                        return (
                          <div key={i} className="flex flex-col p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors h-full">
                            <div className="flex items-start gap-2.5 w-full">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                              <span className="text-sm font-semibold text-slate-700 flex-1 min-w-0 break-words leading-snug">
                                {label}
                              </span>
                            </div>
                            {desc && (
                              <p className="text-xs text-slate-500 mt-2 pl-4 leading-relaxed break-words">
                                {desc}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto bg-slate-900 rounded-2xl p-5 flex items-center justify-between shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-white/10 rounded-lg text-blue-400">
                          <LineChart size={18} />
                        </div>
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Pipeline Efficiency</span>
                      </div>
                      <span className="text-xl font-bold text-white tracking-tight">99.9%</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* =========================================
                3. CLOUD TAB
            ========================================= */}
            {activeTab === "cloud" && hasCloud && (
              <motion.div
                key="cloud"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {data.cloudPlatforms?.map((platform, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">

                    {/* Cloud Header */}
                    <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100">
                      <h4 className={`text-sm font-bold uppercase tracking-wider ${platform.color}`}>
                        {platform.provider}
                      </h4>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-400">
                        <Cloud size={20} />
                      </div>
                    </div>

                    {/* Services List (Safely mapping labels AND descriptions) */}
                    <div className="space-y-4">
                      {platform.services.map((service, j) => {
                        const isString = typeof service === 'string';
                        const label = isString ? service : service.name;
                        const desc = !isString && service.desc ? service.desc : null;

                        // Extract just the background color from the text color utility
                        const dotColor = platform.color.includes("text-")
                          ? platform.color.replace("text-", "bg-")
                          : "bg-slate-400";

                        return (
                          <div key={j} className="flex flex-col w-full group/service">
                            <div className="flex items-start gap-3">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-transform group-hover/service:scale-150 ${dotColor}`} />
                              <div className="flex-1 min-w-0">
                                <span className="text-sm font-semibold text-slate-700 leading-snug break-words block">
                                  {label}
                                </span>
                                {/* Description support added for the Cloud Tab */}
                                {desc && (
                                  <p className="text-sm text-slate-500 leading-relaxed mt-1 break-words">
                                    {desc}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}