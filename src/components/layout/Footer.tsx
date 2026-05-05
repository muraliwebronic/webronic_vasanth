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
    href: "/service?category=web-development",
    icon: Code2,
  },
  { name: "AI & ML", href: "/service?category=ai-machine-learning", icon: Bot },
  {
    name: "Cloud Services",
    href: "/service?category=cloud-services",
    icon: Cloud,
  },
  {
    name: "Digital Transformation",
    href: "/service?category=digital-transformation",
    icon: Zap,
  },
  { name: "DevOps", href: "/service?category=devops", icon: Terminal },
  {
    name: "IoT Solutions",
    href: "/service?category=iot-solutions",
    icon: Wifi,
  },
  {
    name: "Data Analytics",
    href: "/service?category=data-analytics",
    icon: BarChart3,
  },
];

const quickLinks = [
  { name: "StoreTech", type: "page", href: "/product?category=storetech", icon: Store },
  { name: "All Products", type: "page", href: "/products", icon: LayoutGrid },
  { name: "Projects", type: "page", href: "/projects", icon: Code2 },
  { name: "Branches", type: "page", href: "/branches", icon: MapPin },
  { name: "About Us", type: "page", href: "/about", icon: Info },
  { name: "Partners", type: "section", id: "Partners", icon: Handshake },
  { name: "Clients", type: "section", id: "client", icon: Globe },
  { name: "Careers", type: "page", href: "/careers", icon: Briefcase },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTopIfSamePage = (e: React.MouseEvent<HTMLAnchorElement>, targetHref: string) => {
    // 1. Handle Section Hash Links (e.g., /#client)
    const hashIndex = targetHref.indexOf("#");
    if (hashIndex !== -1 && targetHref.length > hashIndex + 1) {
      const hash = targetHref.slice(hashIndex + 1);
      const targetPath = targetHref.slice(0, hashIndex) || "/";
      
      // If we are already on the page where the hash is targeted
      if (pathname === targetPath || (targetPath === "" && pathname === "/")) {
        const el = document.getElementById(hash);
        if (el) {
          e.preventDefault();
          window.scrollTo({
            top: el.offsetTop - 90, // Account for sticky navbar
            behavior: "smooth",
          });
        }
        return; 
      }
      return; // Let Next.js route to the new page natively
    }

    // 2. Handle Scroll to Top for identical page clicks
    const currentUrl = window.location.pathname + window.location.search + window.location.hash;
    const targetUrl = targetHref.startsWith("http") ? targetHref : (targetHref.startsWith("/") ? targetHref : `/${targetHref}`);
    
    if (currentUrl === targetUrl || currentUrl.replace(/\/$/, '') === targetUrl.replace(/\/$/, '')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 3. Handle Scroll to Top for query parameter changes on the same page
    const cleanTargetPath = targetHref.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
    const cleanCurrentPath = pathname.replace(/\/$/, "") || "/";

    if (cleanCurrentPath === cleanTargetPath) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 150);
    }
  };

  const socialIcons = [
    { name: "Facebook", src: "/assets/icons/facebook.png", href: "https://www.facebook.com/webronic/" },
    { name: "Instagram", src: "/assets/icons/instagram.png", href: "https://www.instagram.com/webronic.official/" },
    { name: "YouTube", src: "/assets/icons/youtube.png", href: "https://www.youtube.com/@WEBRONIC/" },
    { name: "LinkedIn", src: "/assets/icons/linkedin.png", href: "https://www.linkedin.com/company/webronic/" },
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
      className="relative w-full z-10 overflow-hidden container-pd bg-white border-t border-slate-100 pt-16 md:pt-20 pb-10 font-sora"
    >
      <div className="absolute -bottom-24 -left-24 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-100/50 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 h-48 w-48 md:h-64 md:w-64 rounded-full bg-indigo-100/50 blur-[70px] md:blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-[4vw]">
        <div className="grid gap-10 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">

          {/* COLUMN 1: BRAND */}
          <div className="space-y-6 lg:col-span-2 md:col-span-2">
            <div className="flex justify-start">
              <Link href="/">
                <Image
                  src="/assets/webonic2.png"
                  alt="Webronic Industries logo"
                  width={140}
                  height={40}
                  className="object-contain transition-opacity hover:opacity-80"
                />
              </Link>
            </div>
            <p className="text-body text-slate-500 text-justify leading-relaxed font-medium max-w-sm">
              Architecting scalable, secure, and future ready digital
              foundations. Engineering innovation from concept to global impact
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Webronic on ${social.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 transition-all hover:bg-[#2776ea]/10 hover:border-[#2776ea]/20 hover:-translate-y-1"
                >
                  <Image src={social.src} alt={`${social.name} icon`} width={20} height={20} />
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
                    onClick={(e) => scrollTopIfSamePage(e, service.href)}
                    className="text-submenu text-slate-500 hover:text-[#2776ea] transition-all flex items-center group text-left bg-transparent border-none p-0 cursor-pointer w-full"
                  >

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
                  <Link
                    href={item.href || `/#${item.id}`}
                    onClick={(e) => scrollTopIfSamePage(e, item.href || `/#${item.id}`)}
                    className="text-submenu text-slate-500 hover:text-[#2776ea] transition-all flex items-center group bg-transparent border-none p-0 cursor-pointer text-left w-full"
                  >
                    <item.icon
                      size={13}
                      className={`mr-2 transition-colors shrink-0 text-slate-400 group-hover:text-[#2776ea] `}
                    />
                    <span >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}

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
                    onClick={(e) => scrollTopIfSamePage(e, policy.href)}
                    className="text-submenu text-slate-500 hover:text-[#2776ea] transition-all flex items-center group bg-transparent border-none p-0 cursor-pointer text-left w-full"
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

        </div>

        {/* --- REGIONAL HUBS --- */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <h4 className="text-caption font-black uppercase tracking-[0.2em] text-[#2776ea] mb-8 text-center md:text-left">
            Our Centers
          </h4>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-12">
            {/* --- 1. DYNAMIC ADDRESSES --- */}
            {branches.map((hub, idx) => (
              <div
                key={idx}
                className="flex flex-col h-full group transition-all text-center md:text-left hover:bg-slate-50/50 p-4 rounded-xl border border-transparent hover:border-slate-100"
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
                <p className="mt-auto pt-4 text-sm text-[#2776ea] font-bold">
                  <a href={`tel:${hub.contact}`} className="hover:underline">
                    {hub.contact}
                  </a>
                </p>
              </div>
            ))}

            {/* --- 2. STATIC REGISTERED OFFICE --- */}
            <div className="flex flex-col h-full group transition-all text-center md:text-left hover:bg-slate-50/50 p-4 rounded-xl border border-transparent hover:border-slate-100">
              <p className="text-caption font-black uppercase tracking-widest text-slate-400 mb-2 group-hover:text-[#2776ea] transition-colors">
                Chennai : Registered Office
              </p>
              <a
                href="https://maps.app.goo.gl/QLzqNbRZsVd4RuF17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 leading-relaxed hover:text-[#2776ea] transition-colors"
              >
                New #33, Old #17, 2nd St, Mylapore, Chennai - 600004
              </a>
              <p className="mt-auto pt-4 text-sm text-[#2776ea] font-bold">
                <a href="tel:+917200088500" className="hover:underline">
                  +917200088500</a>
              </p>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left border-t border-slate-100 pt-8">
            <div className="order-2 md:order-1">
              <p className="text-caption hidden md:block  font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] text-slate-900  md:max-w-none">
                © {new Date().getFullYear()} WEBRONIC INDUSTRIES PRIVATE LIMITED.
                <br className="block md:hidden" /> ALL RIGHTS RESERVED.
              </p>
              <p className="text-caption md:hidden font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] text-slate-900  md:max-w-none">
                © {new Date().getFullYear()} WEBRONIC INDUSTRIES PVT. LTD.
                <br className="block md:hidden" /> ALL RIGHTS RESERVED.
              </p>
              {/* 
              <div className="flex items-center justify-center md:justify-start gap-2 mt-3 md:mt-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] animate-pulse" />
                <p className="text-caption text-slate-500 uppercase tracking-widest font-medium">
                  Global Enterprise Tech Solutions
                </p>
              </div> */}
            </div>

            <div className="flex items-center justify-center order-1 md:order-2">
              <a
                href="https://www.thingsatweb.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit ThingsAtWeb partner website"
                className="transition-opacity"
              >
                <Image
                  src="/assets/webonic2.png"
                  alt="Webronic Industries footer logo"
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