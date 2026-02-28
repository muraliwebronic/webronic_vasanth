"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowRight,
  X,
  Send,
  MessageSquare,
  ArrowUpRight,
  LucideIcon,
  Globe
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

// --- CHILD COMPONENT: 3D CONTACT CARD ---
type ContactCardProps = {
    label: string;
    value: string;
    icon: LucideIcon;
    href?: string;
    onCopy?: () => void;
    copied?: boolean;
    isPartner?: boolean; // New prop to style the partner card slightly differently
};

const ContactCard = ({ label, value, icon: Icon, href, onCopy, copied, isPartner }: ContactCardProps) => (
    <div className="group relative flex flex-col justify-end h-full font-sora pt-12">
      
      {/* 1. FLOATING ICON BOX */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className={`relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3`}>
          {isPartner ? (
             <Globe size={32} className="text-slate-400 group-hover:text-[#2776ea] transition-colors duration-300" strokeWidth={1.5} />
          ) : (
             <Icon size={32} className="text-slate-400 group-hover:text-[#2776ea] transition-colors duration-300" strokeWidth={1.5} />
          )}
        </div>
      </div>

      {/* 2. PEDESTAL BASE */}
      <div className="relative h-full w-full bg-white rounded-[2.5rem] border border-slate-100 p-6 pt-16 flex flex-col items-center shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-900/5 group-hover:border-blue-100 overflow-hidden">
        
        {/* Fake Floor Shadow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-blue-900/10 group-hover:blur-xl" />

        {/* Content Section */}
        <div className="relative z-10 text-center flex-1 flex flex-col w-full">
<p className="text-caption font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                {label}
            </p>
            
            {/* If it's the partner card, we render the Logo image */}
            {isPartner ? (
                <div className="h-8 relative w-32 mx-auto  opacity-70 transition-all duration-300  group-hover:opacity-100">
                    <Image 
                        src="/assets/images/thingsatweb.png" 
                        alt="ThingsAtWeb" 
                        fill 
                        className="object-contain" 
                    />
                </div>
            ) : (
                <>
                    {href ? (
                        <a href={href} className="text-menu font-bold text-slate-900 hover:text-[#2776ea] transition-colors leading-tight break-words">
                            {value}
                        </a>
                    ) : (
                        <p className="text-menu font-bold text-slate-900 leading-tight">
                            {value}
                        </p>
                    )}
                </>
            )}
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-8 w-full pt-4 border-t border-slate-100 group-hover:border-slate-200/60 transition-colors flex items-center justify-between">
            {onCopy ? (
                <button 
                    onClick={onCopy}
                    className="flex items-center justify-between w-full text-submenu font-bold text-slate-400 hover:text-[#2776ea] transition-colors uppercase tracking-wider"
                >
                    <span>{copied ? "Copied!" : "Copy Address"}</span>
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            ) : (
                <a 
                    href={href}
                    target={isPartner ? "_blank" : undefined}
                    rel={isPartner ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between w-full text-submenu font-bold text-slate-400 hover:text-[#2776ea] transition-colors uppercase tracking-wider"
                >
                    <span>{isPartner ? "Visit Partner" : `${label.split(" ")[0]} Now`}</span>
                    <ArrowUpRight size={16} />
                </a>
            )}
        </div>

        {/* Subtle Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
);


export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- CONTACT DATA ---
  const contactDetails = [
    {
      label: "Phone Support",
      value: "+91 72000 88500",
      icon: Phone,
      href: "tel:+917200088500",
    },
    {
      label: "Email Enquiries",
      value: "contact@webronic.com",
      icon: Mail,
      href: "mailto:contact@webronic.com",
    },
    {
      label: "Registered Office",
      value: "Mylapore, Chennai, TN 600004",
      icon: MapPin,
    },
    // We add the partner link here to balance the grid
    {
      label: "Global Partner",
      value: "ThingsAtWeb",
      icon: Globe,
      href: "https://www.thingsatweb.com/",
      isPartner: true
    }
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsModalOpen(false);
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 lg:py-32 font-sora"
    >
      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN: STICKY HEADER & CTA --- */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24 self-start">
            <SectionHeader
              title="Get in Touch"
              highlight="Let's Collaborate"
              description="Ready to transform your business? Our solution architects are here to design custom digital infrastructure tailored to your goals"
              centered={false}
              className="mb-10"
            />

            <div className="flex flex-col gap-8 w-full">
                {/* Main CTA Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-4 bg-[#2776ea] text-white px-8 py-6 rounded-[2rem] text-menu font-black uppercase tracking-widest hover:bg-[#76ea27] transition-all   hover:-translate-y-1 active:scale-95 w-full sm:w-fit"
                >
                    Start A Project
                    <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={16} />
                    </div>
                </button>

<p className="text-submenu font-medium text-slate-400 leading-relaxed max-w-xs">
                    Prefer a quick chat? Use the contact details on the right to reach our team directly
                </p>
            </div>
          </div>

          {/* --- RIGHT COLUMN: BALANCED 2x2 GRID --- */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
              {contactDetails.map((item, i) => (
                <ContactCard 
                    key={i}
                    label={item.label}
                    value={item.value}
                    icon={item.icon}
                    href={item.href}
                    isPartner={item.isPartner}
                    // Only pass copy props if it's the address
                    onCopy={!item.href && !item.isPartner ? () => handleCopy(item.value, item.label) : undefined}
                    copied={copied === item.label}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sora">
    
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={() => setIsModalOpen(false)}
    />

    {/* Modal Container */}
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

        {/* Close Button */}
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
                required
                className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="email@company.com"
                required
                className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors"
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
              required
              className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors resize-none"
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