"use client";

import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/service/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalOverview({ data }: { data: ServicePageData['overview'] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!data) return null;

  return (
    <section className="relative container-pd bg-white py-24 font-sora overflow-hidden">
      <div className="mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- TOP: TEXT CONTENT --- */}
        {/* Added max-w-5xl and mb-20 to restrict reading width and push the cards down */}
        <div className="max-w-5xl mb-20">
          <SectionHeader
            badge={data.badge}
            title={data.heading}
            highlight={data.highlight}
            centered={false}
            className="mb-8"
          />

          <div className="space-y-6 text-slate-600 font-medium leading-relaxed ">
            {data.content.slice(0, 2).map((p, i) => (
              <p key={i} className="text-slate-600 text-body">{p}</p>
            ))}

            {isExpanded && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                {data.content.slice(2).map((p, i) => (
                  <p className="text-body" key={i + 2}>{p}</p>
                ))}
              </div>
            )}

            {data.content.length > 2 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="group flex items-center gap-2 text-menu font-bold text-[#2776ea] hover:text-[#1a5bbd] transition-colors mt-4 outline-none uppercase tracking-wider"
              >
                {isExpanded ? <>Read Less <ChevronUp size={14} /></> : <>Read More <ChevronDown size={14} /></>}
              </button>
            )}
          </div>
        </div>

        {/* --- BOTTOM: DIFFERENTIATORS CARDS --- */}
        <div>
          {/* Section Title for Cards */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#76ea27] shadow-sm">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Key Differentiators</h3>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Why Webronic?</p>
            </div>
          </div>

          {/* Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.differentiators.map((item, index) => (
              <div 
                key={index} 
                // Added h-full and slightly increased padding (p-6) to make them look like substantial standalone cards
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-slate-200 duration-300 h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#2776ea] shrink-0">
                  <DynamicIcon name={item.icon} size={20} />
                </div>
                <div className="flex flex-col h-full">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}