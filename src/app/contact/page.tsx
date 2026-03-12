"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  MessageSquare,
  Navigation,
  Globe,
  MapPin,
  ArrowUpRight
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { branches } from "@/AllData/branches/branches";
import { ContactEnquiryForm } from "@/ui/forms";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socials = [
    {
      src: "/assets/icons/facebook.png",
      href: "https://www.facebook.com/webronic/",
      alt: "Facebook",
    },
    {
      src: "/assets/icons/instagram.png",
      href: "https://www.instagram.com/webronic_/",
      alt: "Instagram",
    },
    {
      src: "/assets/icons/youtube.png",
      href: "https://www.youtube.com/@WEBRONIC/",
      alt: "YouTube",
    },
    {
      src: "/assets/icons/linkedin.png",
      href: "https://www.linkedin.com/company/webronic/",
      alt: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="relative container-pd bg-white py-24 lg:py-32 font-sora"
    >
      {/* Background Decor - Wrapped in its own overflow-hidden div */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* items-start is required here for sticky to work inside a grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">

          {/* --- LEFT COLUMN: Header & Branch Cards --- */}
          <div className="flex flex-col">

            {/* 1. SECTION HEADER */}
            <div className="mb-12">
              <SectionHeader
                badge="Connect With Us"
                title="Let's Architect"
                highlight="The Future"
                description="Whether you have a technical challenge or a digital vision, our engineers are ready to deploy solutions that scale."
                centered={false}
                className="max-w-2xl"
              />
            </div>

            {/* 2. NEW 3D PEDESTAL BRANCH CARDS */}
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-12 mb-16 mt-4">
              {branches.map((branch, index) => (
                <div key={index} className={`group relative flex flex-col justify-end h-full pt-12 ${index === 0 ? 'md:col-span-2' : ''}`}>

                  {/* FLOATING MAP ICON */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
                    <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-3 group-hover:scale-105 group-hover:rotate-3">
                      <MapPin size={28} className="text-slate-400 group-hover:text-[#2776ea] transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* PEDESTAL BASE */}
                  <div className="relative h-full w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 pt-12 flex flex-col items-center shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-900/5 group-hover:border-blue-100 overflow-hidden">

                    {/* Fake Floor Shadow */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-blue-900/10 group-hover:blur-xl" />

                    {/* Content Section */}
                    <div className="relative z-10 text-center flex-1 flex flex-col w-full">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2776ea] mb-2">
                        {branch.type}
                      </p>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                        {branch.city}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm mx-auto">
                        {branch.address}
                      </p>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="mt-8 w-full pt-6 border-t border-slate-100 group-hover:border-slate-200/60 transition-colors flex items-center justify-center gap-4">
                      {/* Call Button */}
                      <a
                        href={`tel:${branch.contact.replace(/\s/g, "")}`}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-50 text-sm font-bold text-slate-700 hover:bg-[#2776ea] hover:text-white transition-all active:scale-95"
                      >
                        <Phone size={14} />
                        <span>Call</span>
                      </a>

                      {/* Map Direction Button */}
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-[#76ea27] hover:text-white transition-all active:scale-95 group/map"
                        aria-label="Get Directions"
                      >
                        <Navigation size={18} className="group-hover/map:rotate-45 transition-transform" />
                      </a>
                    </div>

                    {/* Subtle Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* 3. SOCIALS ROW */}
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
          {/* STICKY CLASSES ARE HERE */}
          <div className="lg:sticky lg:top-30 mt-8 lg:mt-0">
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

      {/* --- CONTACT ENQUIRY FORM MODAL --- */}
      <ContactEnquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}