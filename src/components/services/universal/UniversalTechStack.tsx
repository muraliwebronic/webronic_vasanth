"use client";

import { Code2, Bot, Cloud, CheckCircle2, Cpu, ArrowRight, Database, ShoppingCart } from "lucide-react";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";

export default function UniversalTechStack({ id, data }: { id: string, data: ServicePageData['techStack'] }) {
  if (!data) return null;

  const hasFrameworks = data.frameworks && data.frameworks.length > 0;
  const hasLLMs = data.llms && data.llms.length > 0;
  const hasMLOps = data.mlOps && data.mlOps.length > 0;
  const hasCloud = data.cloudPlatforms && data.cloudPlatforms.length > 0;

  const hasIntelligence = hasLLMs || hasMLOps;

  // --- CONDITIONAL UI MAPPING FOR WEB DEVELOPMENT ---
  const isWebDev = id === "web-development";

  const llmTitle = isWebDev ? "CMS & Headless" : "Models & LLMs";
  const llmSubtitle = isWebDev ? "Content Management" : "Core Intelligence";
  const LlmIcon = isWebDev ? Database : Bot;

  const mlOpsTitle = isWebDev ? "E-commerce Solutions" : "MLOps Pipeline";
  const mlOpsSubtitle = isWebDev ? "Digital Storefronts" : "Automated Workflows";
  const MlOpsIcon = isWebDev ? ShoppingCart : Cpu;

  return (
    <section className="relative bg-[#fafafa] container-pd   py-24 font-sora px-6 border-t border-slate-200/50 overflow-hidden">

      {/* Sophisticated Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className=" mx-auto container-pd relative z-10">

        <SectionHeader
          badge={data.badge || "Tech Stack"}
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-2xl mx-auto mb-16"
          size="default"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12"
        >

          {/* =========================================
              1. FRAMEWORKS (Blue Accents)
          ========================================= */}
          {hasFrameworks && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.frameworks?.map((item, i) => (
                <div
                  key={`framework-${i}`}
                  className="group relative  bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300  transition-all duration-400 flex flex-col h-full overflow-hidden"
                >
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-200 transition-all duration-400 shrink-0">
                        <Code2 size={22} strokeWidth={2} />
                      </div>
                      <h4 className="text-base font-semibold text-slate-800 leading-snug break-words group-hover:text-blue-950 transition-colors">
                        {typeof item.name === 'string' ? item.name.replace(/\//g, ' / ') : item.name}
                      </h4>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed break-words mt-auto group-hover:text-slate-600 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =========================================
              2. CMS / E-COMMERCE (or LLMs/MLOps dynamically)
          ========================================= */}
          {hasIntelligence && (
            <div className="grid lg:grid-cols-2 gap-6">

              {/* LLM / CMS Block (Purple Accents) */}
              {hasLLMs && (
                <div className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-purple-300 transition-all duration-400 flex flex-col h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100/50 shrink-0 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-purple-200 transition-all duration-400">
                      <LlmIcon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{llmTitle}</h3>
                      <p className="text-sm font-medium text-purple-600/80 mt-0.5">{llmSubtitle}</p>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-3">
                    {data.llms?.map((item, i) => (
                      <div key={`llm-${i}`} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-sm transition-all duration-300 w-full group/item">
                        <CheckCircle2 size={18} className="text-purple-400 mt-0.5 shrink-0 group-hover/item:text-purple-600 transition-colors" />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-slate-800 text-sm mb-1">{item.name}</h5>
                          <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MLOps / Ecommerce Block (Indigo Accents) */}
              {hasMLOps && (
                <div className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-indigo-300 transition-all duration-400 flex flex-col h-full overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100/50 shrink-0 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-200 transition-all duration-400">
                      <MlOpsIcon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{mlOpsTitle}</h3>
                      <p className="text-sm font-medium text-indigo-600/80 mt-0.5">{mlOpsSubtitle}</p>
                    </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 gap-3">
                    {data.mlOps?.map((tag, i) => {
                      const isString = typeof tag === 'string';
                      const label = isString ? tag : tag.name;
                      const desc = !isString && tag.desc ? tag.desc : null;

                      return (
                        <div key={`mlop-${i}`} className="flex flex-col p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all duration-300 w-full group/mlop">
                          <div className="flex items-center gap-3 w-full">
                            <ArrowRight size={16} className="text-slate-300 group-hover/mlop:text-indigo-500 transition-colors" />
                            <span className="text-sm font-semibold text-slate-800 flex-1 min-w-0 break-words leading-snug">
                              {label}
                            </span>
                          </div>
                          {desc && (
                            <p className="text-sm text-slate-500 mt-1.5 pl-7 leading-relaxed break-words">
                              {desc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================
              3. CLOUD PLATFORMS (Dynamic Accents)
          ========================================= */}
          {hasCloud && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.cloudPlatforms?.map((platform, i) => {

                // Using the dynamic colors mapped to nice hover shadows
                const hoverBorderColor = platform.color.includes("text-")
                  ? platform.color.replace("text-", "hover:border-").replace("-500", "-400").replace("-600", "-400")
                  : "hover:border-slate-300";

                const bgDotColor = platform.color.includes("text-")
                  ? platform.color.replace("text-", "bg-")
                  : "bg-slate-400";

                const iconBgColor = platform.color.includes("text-")
                  ? platform.color.replace("text-", "group-hover:bg-")
                  : "group-hover:bg-slate-600";

                return (
                  <div
                    key={`cloud-${i}`}
                    className={`group relative bg-white p-7 rounded-2xl border border-slate-200/80 transition-all duration-400 flex flex-col h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${hoverBorderColor} overflow-hidden`}
                  >
                    <div className="relative z-10 flex items-center justify-between mb-8">
                      <h4 className={`text-base font-bold tracking-wide ${platform.color}`}>
                        {platform.provider}
                      </h4>
                      <div className={`h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-white ${iconBgColor} transition-all duration-400`}>
                        <Cloud size={20} strokeWidth={2} />
                      </div>
                    </div>

                    <div className="relative z-10 space-y-4">
                      {platform.services.map((service, j) => {
                        const isString = typeof service === 'string';
                        const label = isString ? service : service.name;
                        const desc = !isString && service.desc ? service.desc : null;

                        return (
                          <div key={`service-${j}`} className="flex items-start gap-3 group/service">
                            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-all duration-300 shadow-sm ${bgDotColor} group-hover/service:scale-125`} />
                            <div className="flex-1">
                              <span className="text-sm font-semibold text-slate-700 block transition-colors group-hover/service:text-slate-950">
                                {label}
                              </span>
                              {desc && (
                                <p className="text-sm text-slate-500 leading-relaxed mt-1">
                                  {desc}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}