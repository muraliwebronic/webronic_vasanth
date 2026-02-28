"use client";

import { Quote, Heart, User } from "lucide-react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function LifeAtWebronic() {
  const { lifeAtWebronic } = CAREERS_DATA;

  return (
    <div className="font-sora overflow-hidden">
      
      {/* --- STORIES SECTION (Light) --- */}
      <section className="bg-slate-50 py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <SectionHeader 
             badge={lifeAtWebronic.header.badge}
             title={lifeAtWebronic.header.title}
             description={lifeAtWebronic.header.description}
             centered={true}
             className="max-w-3xl mx-auto mb-16"
          />

          {/* Stories Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {lifeAtWebronic.stories.map((story, index) => {
              const isBlue = story.color === "blue";
              // Using the exact same colors provided
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
              const borderColor = isBlue ? "group-hover:border-[#2776ea]/20" : "group-hover:border-[#76ea27]/20";

              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full ${borderColor}`}
                >
                  {/* Card Header: Profile & Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Compact Icon */}
                    <div
                      className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center ${accentColor} shrink-0 transition-transform group-hover:scale-105`}
                    >
                      <story.icon size={22} strokeWidth={2} />
                    </div>

                    {/* Meta Data */}
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 leading-tight">
                        {story.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                          {story.role}
                        </p>
                        <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                        <p className="text-xs font-medium text-slate-400">
                          {story.tenure}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Story Content - Reduced Size */}
                  <div className="mb-6">
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      “{story.content}”
                    </p>
                  </div>

                  {/* Footer - Clean Layout (No heavy background) */}
                  <div className="mt-auto pt-5 border-t border-dashed border-slate-100 flex items-start gap-3">
                    <Heart
                      className={`shrink-0 w-4 h-4 ${accentColor} mt-1 fill-current opacity-90`}
                    />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">
                        What I Love
                      </p>
                      <p className="text-sm font-bold text-slate-700 leading-snug">
                        {story.love}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS STRIP (Primary Blue Mode) --- */}
      <section className="bg-[#2776ea] py-20 text-white relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10  divide-y md:divide-y-0 md:divide-x divide-white/10">
            {lifeAtWebronic.testimonials.map((item, index) => (
              <div
                key={index}
                className="px-6 py-8 md:py-0 flex flex-col items-center md:items-start text-center md:text-left"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 border border-white/20 text-white shadow-sm">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>

                {/* Quote - Text Reduced */}
                <p className="text-sm font-medium leading-relaxed mb-6 text-blue-50 opacity-90">
                  “{item.text}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/10">
                    <User size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none mb-1">
                      {item.author}
                    </p>
                    <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest leading-none">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}