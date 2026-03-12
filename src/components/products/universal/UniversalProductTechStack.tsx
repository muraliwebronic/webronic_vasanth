"use client";

import {
  Server,
  ShieldCheck,
  Cloud,
  Smartphone,
  Cpu,
  Cctv,
  CreditCard,
  CheckCircle2
} from "lucide-react";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";

export default function UniversalProductTechStack({ data }: { data: ServicePageData['techStack'] }) {
  if (!data) return null;

  const hasHardware = data.frameworks && data.frameworks.length > 0;
  const hasCloud = data.cloudPlatforms && data.cloudPlatforms.length > 0;

  // Helper function to assign icons based on the hardware name
  const getHardwareIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("pax") || lowerName.includes("terminal")) return CreditCard;
    if (lowerName.includes("camera") || lowerName.includes("vision")) return Cctv;
    return Cpu;
  };

  // Helper function to assign icons based on the cloud provider/category name
  const getCloudIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("backend") || lowerName.includes("database")) return Server;
    if (lowerName.includes("aws") || lowerName.includes("cloud")) return Cloud;
    if (lowerName.includes("security") || lowerName.includes("compliance")) return ShieldCheck;
    if (lowerName.includes("mobile") || lowerName.includes("connectivity")) return Smartphone;
    return Cloud;
  };

  return (
    <section className="relative bg-white  py-24 font-sora px-6 border-t border-slate-100 overflow-hidden">


      <div className=" mx-auto container-pd relative z-10">

        <SectionHeader
          badge={data.badge || "System Architecture"}
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-20"
          size="default"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-16"
        >

          {/* =========================================
              1. EDGE & HARDWARE (Mapped from frameworks)
          ========================================= */}
          {hasHardware && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-slate-100" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Edge & Hardware Infrastructure</h3>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.frameworks?.map((item, i) => {
                  const Icon = getHardwareIcon(item.name);

                  return (
                    <div
                      key={`hardware-${i}`}
                      className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
                    >
                      {/* Subtle dark glow on hover for hardware */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 via-transparent to-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col h-full items-center text-center">
                        <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-800 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 shrink-0">
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 leading-snug break-words mb-3">
                          {typeof item.name === 'string' ? item.name : (item as any).name}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed break-words mt-auto">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =========================================
              2. CLOUD & SOFTWARE (Mapped from cloudPlatforms)
          ========================================= */}
          {hasCloud && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-slate-100" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Cloud & Core Architecture</h3>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              {/* 2x2 Grid since you have 4 sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {data.cloudPlatforms?.map((platform, i) => {
                  const Icon = getCloudIcon(platform.provider);

                  // Extract color logic smoothly
                  const hoverBorderColor = platform.color.includes("text-")
                    ? platform.color.replace("text-", "hover:border-").replace("-500", "-400").replace("-600", "-400")
                    : "hover:border-slate-400";

                  const iconTextColor = platform.color;
                  const iconBgColor = platform.color.includes("text-") ? platform.color.replace("text-", "bg-").replace("-500", "-50").replace("-600", "-50") : "bg-slate-50";

                  return (
                    <div
                      key={`cloud-${i}`}
                      className={`group bg-white p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${hoverBorderColor}`}
                    >
                      <div className="flex items-center gap-5 mb-8 pb-6 border-b border-slate-100">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${iconBgColor} ${iconTextColor} border border-white shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className={`text-xl font-bold tracking-tight text-slate-800`}>
                          {platform.provider}
                        </h4>
                      </div>

                      <div className="space-y-4">
                        {platform.services.map((service, j) => {
                          const isString = typeof service === 'string';
                          const label = isString ? service : service.name;
                          const desc = !isString && service.desc ? service.desc : null;

                          return (
                            <div key={`service-${j}`} className="flex items-start gap-3 group/service p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors">
                              <CheckCircle2 size={18} className={`mt-0.5 shrink-0 transition-colors ${iconTextColor} opacity-70 group-hover/service:opacity-100`} />
                              <div className="flex-1 min-w-0">
                                <span className="text-sm font-bold text-slate-700 block transition-colors group-hover/service:text-slate-900">
                                  {label}
                                </span>
                                {desc && (
                                  <p className="text-sm text-slate-500 leading-relaxed mt-1 pr-4">
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
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}