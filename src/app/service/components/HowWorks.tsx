"use client";

import { useState } from "react";
import {
  ChevronDown,
  Check,
  Layers,
  Sparkles,
} from "lucide-react";
import { services, type Service } from "@/app/service/components/data";
import { ProjectRequestForm } from "@/ui/forms";

// --- CLEAN REWORKED SERVICE CARD ---
const ServiceCard = ({
  service,
  isOpen,
  onToggle,
  onCtaClick,
  index,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
  onCtaClick: (service: Service) => void;
  index: number;
}) => {
  return (
    <div
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
      className="group relative w-full rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:border-[#2776ea]/20 animate-in slide-in-from-bottom-8 fade-in font-sora"
    >
      <div className="flex flex-col lg:flex-row">

        {/* LEFT: CONTENT AREA */}
        <div className="flex-1 p-8 md:p-12 lg:p-14 flex flex-col justify-center">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
                {service.tagline}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-[#2776ea] transition-colors">
              {service.title}
            </h3>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-xl">
              {service.description}
            </p>
          </div>

          {/* Clean Checkpoints */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            {service.points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-[#76ea27]">
                  <Check size={12} strokeWidth={4} />
                </div>
                <span className="text-sm font-bold text-slate-700">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-auto">
            <button
              onClick={() => onCtaClick(service)}
              className="relative overflow-hidden rounded-full bg-slate-900 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#2776ea] hover:shadow-lg active:scale-95"
            >
              Start Project
            </button>

            {/* Tech Stack Toggle */}
            <div className="relative">
              <button
                onClick={onToggle}
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-[#2776ea] transition-colors group/toggle"
              >
                <Layers size={14} />
                Technology Stack
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#2776ea]" : "group-hover/toggle:translate-y-0.5"
                    }`}
                />
              </button>

              {/* Clean Dropdown */}
              <div className={`absolute top-full left-0 mt-4 z-20 min-w-[280px] origin-top-left transition-all duration-300 ${isOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
                }`}>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xl grid grid-cols-4 gap-4">
                  {service.technologies.map((t) => (
                    <div key={t.name} className="flex items-center justify-center h-10 w-10 p-1.5 rounded-lg bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all" title={t.name}>
                      <img src={t.logo} alt={t.name} className="w-full h-full object-contain  opacity-70 hover:opacity-100 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: FLOATING VISUAL (No Box) */}
        <div className="lg:w-[40%] relative min-h-[320px] lg:min-h-auto flex items-center justify-center overflow-hidden">
          {/* Soft Organic Blur Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-[#2776ea]/10 to-cyan-400/10 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

          {/* Sparkle Decoration */}
          <Sparkles className="absolute top-12 right-12 text-[#76ea27] opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" size={24} />

          {/* The Image */}
          <div className="relative z-10 w-[85%] max-w-[360px] transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function HowWorks() {
  const [openTechId, setOpenTechId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main className="bg-white font-sora overflow-x-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="relative container-pd mx-auto px-6 md:px-12 lg:px-24">

          {/* Header */}
          <div className="mb-20 lg:mb-28 text-left max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-8 bg-[#2776ea] rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Architecting the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776ea] to-cyan-500">
                Digital Future
              </span>
            </h2>
            <p className="text-slate-500 text-base lg:text-lg font-medium max-w-2xl leading-relaxed">
              WEBRONIC transforms legacy challenges into competitive advantages
              using high-performance digital architectures
            </p>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isOpen={openTechId === service.id}
                onToggle={() =>
                  setOpenTechId(openTechId === service.id ? null : service.id)
                }
                onCtaClick={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectRequestForm
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceTitle={selectedService?.title ?? ""}
      />
    </main>
  );
}