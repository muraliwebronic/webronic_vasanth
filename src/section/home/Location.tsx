"use client";

import { useState } from "react";
import {
  Globe2,
  MapPin,
  Navigation,
  Building2,
  LucideIcon,
  Briefcase,
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";

// --- CHILD COMPONENT: 3D LOCATION CARD (REDESIGNED) ---

const LocationCard = ({
  title,
  addr,
  icon: Icon,
  accentColor = "#2776ea",
  tag,
  mapUrl,
  logo,
}: {
  title: string;
  addr: string;
  icon: LucideIcon;
  accentColor?: string;
  tag?: string;
  mapUrl?: string;
  logo?: string;
}) => (
  <div
    role="button"
    tabIndex={0}
    onClick={() => mapUrl && window.open(mapUrl, "_blank")}
    onKeyDown={(e) => {
      if ((e.key === "Enter" || e.key === " ") && mapUrl) {
        window.open(mapUrl, "_blank");
      }
    }}
    className="group w-full h-full bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer"
  >
    <div className="flex items-start justify-between mb-6">
      {/* --- LOGO OR ICON SWITCH --- */}
      {logo ? (
        // 1. If logo exists, show Image in the same size box (h-10 w-10)
        <div className="relative h-14 w-24">
          <Image
            src={logo}
            alt={title}
            fill
            // object-contain keeps aspect ratio, p-0.5 gives slight padding
            className="object-contain  transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
      ) : (
        // 2. Otherwise, show the standard colored Icon Box
        <div
          className="h-10 w-10 rounded-lg flex items-center justify-center transition-colors duration-300"
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >
          <Icon size={20} strokeWidth={1.5} />
        </div>
      )}

      {/* Tag */}
      {tag && (
        <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-caption font-bold uppercase tracking-wider text-slate-500">
          {tag}
        </span>
      )}
    </div>

    <div className="flex flex-col flex-1">
      <h3 className="text-menu font-black text-slate-900 mb-2 leading-tight group-hover:text-[#2776ea] transition-colors">
        {title}
      </h3>

      <p className="text-submenu font-medium text-slate-500 leading-relaxed">
        {addr}
      </p>
    </div>
  </div>
);


export default function Branches() {
  const branches = [
    {
      id: "all",
      city: "Global HQ",
      mapEmbed:
        "https://www.google.com/maps/d/embed?mid=1_YV73DNApxBopTdb3rgM35fFRAg6c4g&ehbc=2E312F&noprof=1",
    },
  ];

  const [currentMap, setCurrentMap] = useState(branches[0]);

  return (
    <section
      id="location"
      className="relative bg-white container-pd py-24 font-sora overflow-hidden"
    >
      <div className=" mx-auto px-6 max-w-7xl relative z-10">
        {/* --- HEADER --- */}
        <SectionHeader
          title="Global Presence"
          highlight="Our Network"
          description="Strategically located across key technology hubs to deliver seamless support and innovation worldwide"
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        {/* --- MAP container  --- */}
        <div className="group relative w-full h-[500px] rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-2xl shadow-slate-200/50 mb-24">
          <iframe
            title="Webronic Industries Locations"
            src={currentMap.mapEmbed}
            width="100%"
            className="h-[calc(100%+60px)] -mt-[60px] w-full border-0  opacity-80 transition-all duration-700  group-hover:opacity-100"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* --- LOCATIONS GRID --- */}
        <div className="grid  gap-8 lg:gap-8">
          {/* INDIA OPERATIONS (Left) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8 pl-1">
              <div className="p-2 rounded-lg bg-blue-50 text-[#2776ea]">
                <MapPin size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                India Operations
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Madurai R&D",
                  addr: "2nd Floor, 3/92B JS TOWER, Alanganallur Main Road, Sikkandar Savadi, Madurai, Tamil Nadu 625018",
                  icon: Building2,
                  tag: "HQ",
                  mapUrl:
                    "https://maps.app.goo.gl/jscYhRJoX2MXWUFv9",
                },
                {
                  title: "Chennai Admin",
                  addr: "A1 - No. 20, Sakthi Apartments, Cenotoph Road, Rathna Nagar, Teynampet, Chennai, Tamil Nadu 600004",
                  icon: Briefcase,
                  tag: "Admin",
                  mapUrl:
                    "https://maps.app.goo.gl/yTmoHWdnDt8Exu5z8",
                },
                {
                  title: "Salem Hub",
                  addr: "1-718, Sannasi Muniyappan Kovil, Surappalli (PO), Mettur (TK), Jalakandapuram, Salem - 636501",
                  icon: Navigation,
                  tag: "Dev",
                  mapUrl: "https://maps.app.goo.gl/g53opWY3u7S4NLMN7",
                },
              ].map((loc, idx) => (
                <LocationCard
                  key={idx}
                  title={loc.title}
                  addr={loc.addr}
                  icon={loc.icon}
                  tag={loc.tag}
                  mapUrl={loc.mapUrl}
                />
              ))}
            </div>
          </div>

          {/* INTERNATIONAL (Right) */}
          <div className="lg:col-span-4">
  <div className="flex items-center gap-3 mb-8 pl-1">
    <div className="p-2 rounded-lg bg-green-50 text-[#76ea27]">
      <Globe2 size={18} />
    </div>
    <h3 className="text-lg font-bold text-slate-900">
      International
    </h3>
  </div>

  <div className="h-fit">
    <LocationCard
      // Pass the logo as a new prop here
      logo="/assets/images/thingsatweb.png"
      title="Thingsatweb Sweden AB"
      addr="Sockerbruksgatan 7 53140 Lidköping - Collaborating to bring Scandinavian innovation standards globally"
      icon={Globe2}
      accentColor="#76ea27"
      tag="Partner"
      mapUrl={"https://www.google.com/maps/place/Sockerbruksgatan+7,+531+40+Lidk%C3%B6ping,+Sweden/@58.5032049,13.1775654,455m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465b28a468894b7d:0xd1df8b4fbd46a4e5!8m2!3d58.5032049!4d13.1775654!16s%2Fg%2F11c4wx0mt4?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"}
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
