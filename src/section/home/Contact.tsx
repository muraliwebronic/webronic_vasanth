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
  ArrowUpRight,
  LucideIcon,
  Globe
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { ContactEnquiryForm } from "@/ui/forms";

// --- CHILD COMPONENT: 3D CONTACT CARD ---
type ContactCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
  onCopy?: () => void;
  copied?: boolean;
  isPartner?: boolean;
  actionText?: string;
};

const ContactCard = ({ label, value, icon: Icon, href, onCopy, copied, isPartner, actionText }: ContactCardProps) => (
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
          <div className="h-8 relative w-32 mx-auto opacity-70 transition-all duration-300 group-hover:opacity-100">
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
              <a href={href} target={actionText === "View Map" ? "_blank" : undefined} rel={actionText === "View Map" ? "noopener noreferrer" : undefined} className="text-menu font-bold text-slate-900 hover:text-[#2776ea] transition-colors leading-tight break-words line-clamp-3">
                {value}
              </a>
            ) : (
              <p className="text-sm font-bold text-slate-900 leading-relaxed">
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
            target={isPartner || actionText === "View Map" ? "_blank" : undefined}
            rel={isPartner || actionText === "View Map" ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between w-full text-submenu font-bold text-slate-400 hover:text-[#2776ea] transition-colors uppercase tracking-wider"
          >
            <span>{isPartner ? "Visit Partner" : actionText || `${label.split(" ")[0]} Now`}</span>
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      {/* Subtle Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  </div>
);

// Define an explicit type for the array to avoid TypeScript inference errors
type ContactDetail = {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
  isPartner?: boolean;
  actionText?: string;
};

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- CONTACT DATA ---
  const contactDetails: ContactDetail[] = [
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
      value: "New #33, Old #17, 2nd St, Mylapore, Chennai - 600004",
      icon: MapPin,
    },
    {
      label: "Global Partner",
      value: "ThingsAtWeb",
      icon: Globe,
      href: "https://www.thingsatweb.com/",
      isPartner: true,
    }
  ];

  // --- SOCIAL ICONS ---
  const socialIcons = [
    { src: "/assets/icons/facebook.png", href: "https://www.facebook.com/webronic/" },
    { src: "/assets/icons/instagram.png", href: "https://www.instagram.com/webronic_/" },
    { src: "/assets/icons/youtube.png", href: "https://www.youtube.com/@WEBRONIC/" },
    { src: "/assets/icons/linkedin.png", href: "https://www.linkedin.com/company/webronic/" },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden container-pd bg-white py-24 lg:py-32 font-sora"
    >
      <div className="relative px-6 lg:px-[4vw] z-10">
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
                className="group inline-flex items-center justify-center gap-4 bg-[#2776ea] text-white px-8 py-6 rounded-[2rem] text-menu font-black uppercase tracking-widest hover:bg-[#76ea27] transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-fit"
              >
                Start A Project
                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </button>

              <p className="text-submenu font-medium text-slate-400 leading-relaxed max-w-xs">
                Prefer a quick chat? Use the contact details on the right to reach our team directly
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-4 mt-2">
                {socialIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-[#2776ea] hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <Image
                      src={social.src}
                      alt="Social Icon"
                      width={20}
                      height={20}
                      className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300 opacity-60 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
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
                  actionText={item.actionText}
                  onCopy={!item.href ? () => handleCopy(item.value, item.label) : undefined}
                  copied={copied === item.label}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- CONTACT ENQUIRY FORM MODAL --- */}
      <ContactEnquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}