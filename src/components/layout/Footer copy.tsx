"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  ShieldCheck,
  FileText,
  Truck,
  RefreshCcw,
  HelpCircle,
  Briefcase,
  Users,
  Handshake,
  Info,
  Code2,
  Bot,
  Cloud,
  Zap,
  Terminal,
  Wifi,
  BarChart3,
  Store,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { branches } from "@/AllData/branches/branches";

// --- DATA FROM NAVBAR (Synchronized) ---

const serviceItems = [
  {
    name: "Web Development",
    href: "/services?category=web-development",
    icon: Code2,
  },
  { name: "AI & ML", href: "/services?category=ai-machine-learning", icon: Bot },
  {
    name: "Cloud Services",
    href: "/services?category=cloud-services",
    icon: Cloud,
  },
  {
    name: "Digital Trans",
    href: "/services?category=digital-transformation",
    icon: Zap,
  },
  { name: "DevOps", href: "/services?category=devops", icon: Terminal },
  {
    name: "IoT Solutions",
    href: "/services?category=iot-solutions",
    icon: Wifi,
  },
  {
    name: "Data Analytics",
    href: "/services?category=data-analytics",
    icon: BarChart3,
  },
];

const quickLinks = [
  { name: "StoreTech", type: "page", href: "/product?category=storetech", icon: Store },
  { name: "All Products", type: "page", href: "/products", icon: LayoutGrid },
  { name: "Projects", type: "page", href: "/projects", icon: Code2 },
  { name: "Branches", type: "page", href: "/branches", icon: MapPin },
  { name: "About Us", type: "section", id: "/about", icon: Info },
  { name: "Partners", type: "section", id: "Partners", icon: Handshake },
  { name: "Clients", type: "section", id: "client", icon: Globe },
  { name: "Careers", type: "section", id: "career", icon: Briefcase },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (item: any) => {
    if (item.type === "page" || item.href) {
      router.push(item.href || item.id);
      return;
    }

    if (item.type === "section") {
      if (pathname === "/") {
        const el = document.getElementById(item.id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 90,
            behavior: "smooth",
          });
        }
      } else {
        router.push(`/#${item.id}`);
      }
    }
  };

  const socialIcons = [
    { src: "/assets/icons/facebook.png", href: "https://www.facebook.com/thingsatweb" },
    { src: "/assets/icons/instagram.png", href: "https://www.instagram.com/thingsatweb/" },
    { src: "/assets/icons/youtube.png", href: "https://www.youtube.com/channel/UCp53pdpbd7qL-JNoAkAW0Ag" },
    { src: "/assets/icons/linkedin.png", href: "https://www.linkedin.com/company/thingsatweb/" },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
    { label: "Terms & Conditions", href: "/terms", icon: FileText },
    { label: "Shipping Policy", href: "/shipping", icon: Truck },
    { label: "Refund Policy", href: "/refund", icon: RefreshCcw },
    { label: "Contact Support", href: "/contact", icon: HelpCircle },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full z-10 overflow-hidden bg-white border-t border-slate-100 pt-16 md:pt-20 pb-10 font-sora"
    >
      <div className="absolute -bottom-24 -left-24 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-100/50 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 h-48 w-48 md:h-64 md:w-64 rounded-full bg-indigo-100/50 blur-[70px] md:blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-6 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">

          {/* COLUMN 1: BRAND */}
          <div className="space-y-6 lg:col-span-2 md:col-span-3">
            <div className="flex justify-start">
              <Link href="/">
                <Image
                  src="/assets/webonic2.png"
                  alt="WEBRONIC"
                  width={140}
                  height={40}
                  className="object-contain transition-opacity hover:opacity-80"
                />
              </Link>
            </div>
            <p className="text-body text-slate-500 leading-relaxed font-medium max-w-sm">
              Architecting scalable, secure, and future-ready digital
              foundations. Engineering innovation from concept to global impact
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 transition-all hover:bg-[#2776ea]/10 hover:border-[#2776ea]/20 hover:-translate-y-1"
                >
                  <Image src={social.src} alt="Social" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-caption font-black uppercase tracking-[0.2em] text-[#2776ea]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceItems.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-submenu text-slate-500 hover:text-[#2776ea] transition-all flex items-center group"
                  >
                    <ArrowRight
                      size={12}
                      className="mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#2776ea]"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: QUICK LINKS */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-caption font-black uppercase tracking-[0.2em] text-[#2776ea]">
              Products & Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-submenu text-slate-500 hover:text-[#2776ea] transition-all flex items-center group bg-transparent border-none p-0 cursor-pointer text-left w-full"
                  >
                    <item.icon
                      size={13}
                      className={`mr-2 transition-colors shrink-0 ${item.name === "StoreTech"
                          ? "text-[#2776ea]"
                          : "text-slate-400 group-hover:text-[#2776ea]"
                        }`}
                    />
                    <span className={item.name === "StoreTech" ? "font-bold text-[#2776ea]" : ""}>
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/about#team"
                  className="text-submenu text-slate-500 hover:text-[#2776ea] transition-all flex items-center group"
                >
                  <Users
                    size={13}
                    className="mr-2 text-slate-400 group-hover:text-[#2776ea] transition-colors shrink-0"
                  />
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: POLICIES */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-caption font-black uppercase tracking-[0.2em] text-[#2776ea]">
              Policies
            </h4>
            <ul className="space-y-3">
              {policyLinks.map((policy) => (
                <li key={policy.label}>
                  <Link
                    href={policy.href}
                    className="text-submenu text-slate-500 hover:text-[#2776ea] transition-all flex items-center group"
                  >
                    <policy.icon
                      size={14}
                      className="mr-2 text-slate-400 group-hover:text-[#2776ea] transition-colors shrink-0"
                    />
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: HEADQUARTERS (FIXED ALIGNMENT) */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-caption font-black uppercase tracking-[0.2em] text-[#2776ea]">
              Head Office
            </h4>
            <div className="space-y-4 text-submenu text-slate-500">

              {/* ADDRESS */}
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#2776ea] mt-1 shrink-0" />
                <a href="https://maps.app.goo.gl/rBQuWZTbB2xFBTW48" target="_blank"><p className="leading-relaxed">
                  JS Tower, Alanganallur Main Road, Sikkandar Savadi, Madurai - 625018
                </p>
                </a>

              </div>

              {/* PHONE */}
              <div className="flex gap-3 items-start">
                <Phone size={16} className="text-[#2776ea] mt-1 shrink-0" />
                <p className="font-bold">+91 63833 26928</p>
              </div>

              {/* EMAIL (Corrected) */}
              <div className="flex gap-3 items-start">
                <Mail size={16} className="text-[#2776ea] mt-1 shrink-0" />
                <a
                  href="mailto:contact@webronic.com"
                  className="flex-1 hover:text-[#2776ea] transition-colors break-words"
                >
                  contact@webronic.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* --- REGIONAL HUBS --- */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <h4 className="text-caption font-black uppercase tracking-[0.2em] text-[#2776ea] mb-8 text-center md:text-left">
            Our Centers
          </h4>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-12">
            {branches.map((hub, idx) => (
              <div
                key={idx}
                className="group transition-all text-center md:text-left hover:bg-slate-50/50 p-4 rounded-xl border border-transparent hover:border-slate-100"
              >
                <p className="text-caption font-black uppercase tracking-widest text-slate-400 mb-2 group-hover:text-[#2776ea] transition-colors">
                  {hub.city} : {hub.type}
                </p>

                <a
                  href={hub.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 leading-relaxed hover:text-[#2776ea] transition-colors"
                >
                  {hub.address}
                </a>

                <p className=" text-sm mt-2 text-[#2776ea] font-bold">
                  {hub.contact}
                </p>
              </div>
            ))}
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left border-t border-slate-100 pt-8">
            <div className="order-2 md:order-1">
              <p className="text-caption font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] text-slate-400 max-w-xs md:max-w-none">
                © {new Date().getFullYear()} WEBRONIC INDUSTRIES PRIVATE LIMITED.
                <br className="block md:hidden" /> ALL RIGHTS RESERVED.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 mt-3 md:mt-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] animate-pulse" />
                <p className="text-caption text-slate-500 uppercase tracking-widest font-medium">
                  Global Enterprise Tech Solutions
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center order-1 md:order-2">
              <a
                href="https://www.thingsatweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity"
              >
                <Image
                  src="/assets/images/thingsatweb.png"
                  alt="ThingsAtWeb"
                  width={100}
                  height={28}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}