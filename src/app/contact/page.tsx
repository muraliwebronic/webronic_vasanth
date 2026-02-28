"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  X,
  Send,
  MessageSquare,
  Navigation,
  Globe,
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { branches } from "@/AllData/branches/branches";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsModalOpen(false);
  };


  const socials = [
    {
      src: "/assets/icons/facebook.png",
      href: "https://www.facebook.com/thingsatweb",
      alt: "Facebook",
    },
    {
      src: "/assets/icons/instagram.png",
      href: "https://www.instagram.com/thingsatweb/",
      alt: "Instagram",
    },
    {
      src: "/assets/icons/youtube.png",
      href: "https://www.youtube.com/channel/UCp53pdpbd7qL-JNoAkAW0Ag",
      alt: "YouTube",
    },
    {
      src: "/assets/icons/linkedin.png",
      href: "https://www.linkedin.com/company/thingsatweb/",
      alt: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 lg:py-32 font-sora"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* --- LEFT COLUMN: Header & Branch Cards --- */}
          <div className="flex flex-col">
            
            {/* 1. SECTION HEADER (Reused Component) */}
            <div className="mb-12">
               <SectionHeader 
                  badge="Connect With Us"
                  title="Let’s Architect"
                  highlight="The Future"
                  description="Whether you have a technical challenge or a digital vision, our engineers are ready to deploy solutions that scale."
                  centered={false}
                  className="max-w-2xl"
               />
            </div>

            {/* 2. BRANCH CARDS (Exact Design Reuse) */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
               {branches.map((branch, index) => (
                  <div
                     key={index}
                     className={`group flex flex-col justify-between bg-white rounded-3xl border border-slate-200 p-8 hover:border-[#2776ea]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 ${index === 0 ? 'md:col-span-2 border-slate-300 shadow-sm' : ''}`}
                  >
                     <div>
                        {/* Type Label */}
                        <span className="block text-caption font-bold uppercase tracking-widest text-[#2776ea] mb-3">
                           {branch.type}
                        </span>

                        {/* City Name */}
                        <h3 className="text-h3 font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                           {branch.city}
                        </h3>

                        {/* Address */}
                        <p className="text-body font-medium text-slate-500 leading-relaxed">
                           {branch.address}
                        </p>
                     </div>

                     {/* Card Footer: Actions */}
                     <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                        {/* Call Button */}
                        <a
                           href={`tel:${branch.contact.replace(/\s/g, "")}`}
                           className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 text-menu font-bold text-slate-700 hover:bg-[#2776ea] hover:text-white transition-all active:scale-95"
                        >
                           <Phone size={14} />
                           <span>Call Now</span>
                        </a>

                        {/* Map Icon Button */}
                        <a
                           href={branch.mapUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-[#2776ea] hover:text-[#2776ea] transition-all active:scale-95 group/icon"
                           aria-label="Get Directions"
                        >
                           <Navigation size={16} className="group-hover/icon:rotate-45 transition-transform" />
                        </a>
                     </div>
                  </div>
               ))}
            </div>

            {/* Socials Row */}
            <div className="flex items-center gap-4 pl-2">
               <span className="text-caption font-bold uppercase tracking-widest text-slate-400 mr-2">
                  Follow Us
               </span>
               {socials.map((social, i) => (
                  <a
                     key={i}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 transition-all hover:border-[#2776ea] hover:shadow-lg hover:-translate-y-1"
                  >
                     <Image
                        src={social.src}
                        alt={social.alt}
                        width={18}
                        height={18}
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                     />
                  </a>
               ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: BLUE ACTION CARD --- */}
          <div className="lg:sticky lg:top-32 mt-8 lg:mt-0">
            <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-blue-900/20 relative overflow-hidden text-white">
              {/* Card Background Decor */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#76ea27]/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="h-14 w-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-lg">
                  <MessageSquare size={24} className="text-[#76ea27]" />
                </div>
                
                <h3 className="text-3xl font-black mb-4 tracking-tight">
                  Project Enquiry
                </h3>
                <p className="text-blue-100 font-medium mb-10 leading-relaxed text-body opacity-90">
                  Have a technical requirement? Our solution architects are ready to engineer the perfect solution for your scale.
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group w-full flex items-center justify-center gap-3 bg-white text-[#2776ea] py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-caption hover:bg-[#76ea27] hover:text-white transition-all shadow-lg active:scale-95"
                >
                  Start Conversation 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-12 pt-10 border-t border-white/10">
                   <Link
                    href="https://www.thingsatweb.com/"
                    target="_blank"
                    className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity"
                  >
                     <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Globe size={20} className="text-[#2776ea]" />
                     </div>
                     <div>
                        <span className="block text-caption font-black uppercase tracking-widest text-[#76ea27] mb-0.5">
                            Global Partner
                        </span>
                        <span className="block font-bold text-lg leading-none">ThingsAtWeb</span>
                     </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL (Kept Industrial Style) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-8 pt-8 pb-6 border-b border-slate-100 flex justify-between items-start">
               <div>
                  <div className="flex items-center gap-3 mb-2">
                     <div className="h-8 w-8 rounded-lg bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                        <Send size={16} />
                     </div>
                     <span className="text-caption font-black uppercase tracking-widest text-[#2776ea]">
                        Priority Channel
                     </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                     Get in Touch
                  </h3>
               </div>
               <button
                  onClick={() => setIsModalOpen(false)}
                  className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
               >
                  <X size={18} />
               </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Requirement Type
                  </label>
                  <div className="relative">
                     <select className="w-full appearance-none rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors cursor-pointer">
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>Digital Marketing</option>
                        <option>IoT Solutions</option>
                        <option>Cloud Infrastructure</option>
                     </select>
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ArrowRight size={14} className="rotate-90" />
                     </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-caption hover:bg-[#76ea27] hover:text-slate-900 transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}