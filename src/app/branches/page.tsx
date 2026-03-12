"use client";

import { Phone, Navigation, MapPin } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { branches } from "@/AllData/branches/branches";

export default function Branches() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden container-pd bg-slate-50 py-24 lg:py-32 font-sora"
    >
      <div className="relative mx-auto container-pd px-6 md:px-12 lg:px-24">
        
        {/* --- HEADER --- */}
        <div className="mb-16 lg:mb-20">
          <SectionHeader
            badge="Network Coverage"
            title="Strategic Digital"
            highlight="Operations Hubs"
            description="Visit our physical locations to experience how we merge industrial logic with creative engineering across Tamil Nadu"
            centered={false}
            className="max-w-3xl"
          />
        </div>

        {/* --- 3D PEDESTAL CARD GRID --- */}
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3 pt-6">
          {branches.map((branch, index) => (
            <div key={index} className="group relative flex flex-col justify-end h-full pt-12">
              
              {/* FLOATING MAP ICON */}
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
                <div className="relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3">
                  <MapPin size={32} className="text-slate-400 group-hover:text-[#2776ea] transition-colors duration-300" strokeWidth={1.5} />
                </div>
              </div>

              {/* PEDESTAL BASE */}
              <div className="relative h-full w-full bg-white rounded-[2.5rem] border border-slate-100 p-6 pt-16 flex flex-col items-center shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-900/5 group-hover:border-blue-100 overflow-hidden">
                
                {/* Fake Floor Shadow */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-blue-900/10 group-hover:blur-xl" />

                {/* Content Section */}
                <div className="relative z-10 text-center flex-1 flex flex-col w-full">
                  <p className="text-caption font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                    {branch.type}
                  </p>
                  <h3 className="text-menu font-bold text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors leading-tight">
                    {branch.city}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm mx-auto">
                    {branch.address}
                  </p>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-8 w-full pt-4 border-t border-slate-100 group-hover:border-slate-200/60 transition-colors flex items-center justify-center gap-4">
                  {/* Call Button */}
                  <a
                    href={`tel:${branch.contact.replace(/\s/g, "")}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 text-sm font-bold text-slate-700 hover:bg-[#2776ea] hover:text-white transition-all active:scale-95"
                  >
                    <Phone size={14} />
                    <span>Call</span>
                  </a>

                  {/* Map Direction Button */}
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-[#76ea27] hover:text-white transition-all active:scale-95 group/map"
                    aria-label="Get Directions"
                  >
                    <Navigation size={16} className="group-hover/map:rotate-45 transition-transform" />
                  </a>
                </div>

                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}