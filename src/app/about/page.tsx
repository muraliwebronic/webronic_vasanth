"use client";

import {
  MapPin,
  Award,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Heart,
  Building2,
  Activity,
  Globe2,
  ExternalLink,
} from "lucide-react";
import { ABOUT_PAGE_DATA } from "@/AllData/About/ABOUT_PAGE_DATA";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";
import { motion } from "framer-motion";
import TeamComponent from "./TeamCompont";

export default function AboutPageContent() {
  const {
    hero,
    overview,
    story,
    leadership,
    presence,
    metrics,
    certifications,
    csr,
    culture,
    whyChoose,
    careers,
    contact,
  } = ABOUT_PAGE_DATA;

  return (
    <div className="font-sora bg-slate-50 overflow-x-hidden selection:bg-[#2776ea] selection:text-white">
      {/* --- HERO SECTION (Using UniversalHero Layout) --- */}
      <section className="relative w-full bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 font-sora overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* --- LEFT: COMPACT TEXT --- */}
            <div className="max-w-2xl">
              <SectionHeader
                badge="Est. 2010"
                title="Architecting Digital"
                highlight="Excellence"
                description={hero.subHeadline.split("|")[0]}
                centered={false}
                size="default"
                className="mb-6"
              />

              {/* Small CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#values"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2776ea] text-white text-menu font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-md active:scale-95"
                >
                  Our Values
                </Link>
                <Link
                  href="#leadership"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-menu font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95"
                >
                  Meet the Team
                </Link>
              </div>
            </div>

            {/* --- RIGHT: RE-DESIGNED COMPACT VISUAL --- */}
            <div className="relative hidden lg:flex justify-end items-center">
              {/* 1. Engineering Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 opacity-50" />

              {/* 2. Main Module Card */}
              <div className="relative z-10 w-full max-w-[320px] bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                {/* Top Status Bar */}
                <div className="bg-slate-50/50 px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-caption font-bold uppercase tracking-widest text-slate-400">
                      Operational
                    </span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6">
                  {/* Icon & Identity */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      <Building2 size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-caption font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Organization
                      </span>
                      <span className="text-body font-bold text-slate-900 leading-tight block">
                        Webronic Ind.
                      </span>
                    </div>
                  </div>

                  {/* Capabilities Stack (Pills) */}
                  <div className="space-y-3">
                    <p className="text-caption font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                      Core Pillars
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-caption font-bold text-slate-600">
                        Innovation
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-caption font-bold text-slate-600">
                        Integrity
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-caption font-bold text-slate-600">
                        Scale
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Line */}
                <div className="h-1 w-full bg-gradient-to-r from-[#2776ea] via-[#76ea27] to-[#2776ea]" />
              </div>

              {/* Floating Badge (Accent) */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                <div className="bg-[#76ea27]/10 p-1.5 rounded-lg text-[#6cd623]">
                  <Activity size={16} />
                </div>
                <div>
                  <span className="block text-caption font-bold text-slate-400 uppercase">
                    Growth
                  </span>
                  <span className="block text-caption font-bold text-slate-900">
                    15+ Years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPANY OVERVIEW --- */}
      <section
        id="values"
        className="py-24 lg:py-32 relative overflow-hidden bg-white font-sora"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          {/* 1. Header Area */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionHeader
              badge="Who We Are"
              title={overview.title}
              description={overview.content[0]}
              centered={true}
            />
          </div>

          {/* 2. Differentiators (Clean Glass Cards) */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
            {overview.differentiators.items.map((item, i) => (
              <div
                key={i}
                className="group relative p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#2776ea]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Icon Container */}
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#2776ea] group-hover:scale-110 group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-500">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-h3 font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body text-slate-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Core Values (Modern Blue Bento) */}
          <div className="relative rounded-[3.5rem] bg-[#2776ea] p-10 md:p-20 overflow-hidden shadow-2xl shadow-blue-500/20">
            {/* Decorative Internal Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#76ea27]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-16">
                <SectionHeader
                  badge="Our Core"
                  title={overview.values.title}
                  description="The principles that guide every decision we make"
                  centered={true}
                  isWhite={true}
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {overview.values.items.map((val, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    {/* Value Icon */}
                    <div className="mb-6 h-14 w-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#76ea27] group-hover:text-slate-900 group-hover:border-[#76ea27] transition-all duration-500 shadow-lg">
                      <val.icon size={24} strokeWidth={1.5} />
                    </div>

                    {/* Value Text */}
                    <h4 className="font-bold text-h3 text-white mb-3 tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-blue-50/80 leading-relaxed text-submenu font-medium">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR STORY (Animated Clean Version) --- */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden font-sora">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <SectionHeader
            badge="Our Journey"
            title={story.title}
            description={story.subtitle}
            centered={true}
            className="mb-24"
          />

          <div className="relative">
            {/* Central Timeline Track */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {story.timeline.map((event, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* 1. The Content Card */}
                    <div className="w-full md:w-[45%] pl-12 md:pl-0">
                      <div
                        className={`group relative p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 hover:border-[#2776ea]/20 transition-all duration-500 ${isEven ? "md:text-right" : "md:text-left"
                          }`}
                      >
                        {/* Mobile Year Tag */}
                        <div className="md:hidden inline-block px-3 py-1 rounded-full bg-[#2776ea]/10 text-[#2776ea] text-caption font-bold uppercase tracking-widest mb-4">
                          {event.year}
                        </div>

                        <h3 className="text-h3 font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed font-medium text-body">
                          {event.desc}
                        </p>
                      </div>
                    </div>

                    {/* 2. The Center Year Pedestal (Desktop) */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                      {/* Outer Ring */}
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-[#2776ea] z-20 shadow-[0_0_0_4px_white]" />

                      {/* Year Badge (Floating) */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 font-bold text-caption tracking-wider transition-all duration-500 group-hover:scale-105 group-hover:text-[#2776ea] ${isEven ? "right-10" : "left-10"
                          }`}
                      >
                        {event.year}
                      </div>
                    </div>

                    {/* 3. Empty Spacer for Desktop Symmetry */}
                    <div className="hidden md:block md:w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="leadership" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader
            badge="Team"
            title={leadership.title}
            description="The visionaries guiding our path"
            centered={true}
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {leadership.members.map((leader, i) => {
              // Alternate styling for visual interest
              const isEven = i % 2 === 0;
              const accentColor = isEven ? "text-[#2776ea]" : "text-[#76ea27]";
              const accentBg = isEven ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
              const borderColor = isEven ? "bg-[#2776ea]" : "bg-[#76ea27]";

              return (
                <div
                  key={i}
                  className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative overflow-hidden flex flex-col h-full hover:-translate-y-2"
                >
                  {/* Subtle Top Line Reveal */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${borderColor}`}
                  />

                  {/* Header: Avatar & Action */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center ${accentBg} ${accentColor} group-hover:scale-105 transition-transform duration-300 shadow-sm`}
                    >
                      <Users size={24} strokeWidth={1.5} />
                    </div>
                    {/* Interactive Arrow Hint */}
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-slate-400">
                      <ArrowRight size={16} className="-rotate-45" />
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div
                    className={`text-caption font-bold uppercase tracking-widest mb-2 ${accentColor}`}
                  >
                    {leader.role}
                  </div>

                  {/* Name */}
                  <h3 className="text-h3 font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                    {leader.name}
                  </h3>

                  {/* Bio Description */}
                  <p className="text-body font-medium text-slate-500 leading-relaxed mb-8 flex-grow border-b border-slate-50 pb-8">
                    {leader.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mt-auto">
                    <p className="text-caption font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Core Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {/* Assuming expertise might be a comma-separated string, or just one string. 
                          Splitting it makes it look like tags if it contains commas. */}
                      {leader.expertise.split(",").map((tag, t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-caption font-bold text-slate-600 uppercase tracking-wide group-hover:border-[#2776ea]/20 group-hover:text-[#2776ea] transition-colors"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <TeamComponent /> */}

      {/* --- METRICS (Blue Strip) --- */}
      <section className="py-20 bg-[#2776ea] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 text-center divide-x divide-white/20">
            {metrics.stats.slice(0, 5).map((stat, i) => (
              <div key={i} className="group px-4">
                <p className="text-h1 font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-caption font-bold text-blue-100 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP TEAM (Floating Pedestal) --- */}
      {/* --- LEADERSHIP TEAM (Redesigned with Universal Cards) --- */}

      {/* --- GLOBAL PRESENCE (Blue Map) --- */}
      <section className="py-24 bg-[#2776ea] text-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Offices */}
            <div>
              <SectionHeader
                badge="Global Operations"
                title={presence.title}
                description="Connecting dots across continents to serve you better"
                centered={false}
                isWhite={true}
                className="mb-12"
              />

              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-white/30">
                  <h3 className="text-white font-black uppercase tracking-widest text-caption mb-6">
                    India Operations
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10">
                    {presence.india.map((loc, i) => (
                      <div key={i} className="group">
                        <div className="flex items-center gap-2 mb-2 text-white font-bold text-submenu">
                          <MapPin size={16} />
                          {loc.city.split("(")[0]}
                        </div>
                        <p className="text-caption text-blue-50 leading-relaxed font-medium mb-1 opacity-80">
                          {loc.address}
                        </p>
                        {loc.phone && (
                          <p className="text-caption text-white font-bold opacity-70">
                            {loc.phone}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-[#76ea27]">
                  <h3 className="text-[#76ea27] font-black uppercase tracking-widest text-caption mb-4">
                    European Operations
                  </h3>
                  <p className="font-bold text-h3 mb-2">
                    {presence.europe.partner}
                  </p>
                  <p className="text-body text-blue-50 leading-relaxed max-w-md opacity-90">
                    {presence.europe.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Reach List & Extra Metrics */}
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 shadow-2xl">
              <h3 className="font-bold text-h3 mb-8 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#76ea27] animate-pulse" />
                Global Reach
              </h3>
              <ul className="space-y-6">
                {presence.regions.map((region, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-submenu text-blue-50 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <span className="font-bold text-white whitespace-nowrap w-24">
                      {region.split(":")[0]}
                    </span>
                    <span className="opacity-80">{region.split(":")[1]}</span>
                  </li>
                ))}
              </ul>

              {/* Extra Metrics in Box */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-h2 font-black text-white">
                    {metrics.stats[7].value}
                  </p>
                  <p className="text-caption text-blue-100 uppercase tracking-widest mt-1">
                    Transactions
                  </p>
                </div>
                <div>
                  <p className="text-h2 font-black text-white">
                    {metrics.stats[8].value}
                  </p>
                  <p className="text-caption text-blue-100 uppercase tracking-widest mt-1">
                    Cloud Managed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS & AWARDS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <SectionHeader
              badge="Recognition"
              title={certifications.title}
              centered={true}
            />
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {certifications.quality.map((cert, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-xl bg-slate-50 text-slate-700 text-caption font-bold border border-slate-200 uppercase tracking-wider"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-20">
            {/* Partnerships (White Cards) */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-h3 font-black text-[#2776ea] mb-8 flex items-center gap-2">
                <CheckCircle2 size={20} /> Cloud Partnerships
              </h3>
              <ul className="space-y-6">
                {certifications.cloud.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#2776ea] mt-2 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-submenu">
                        {p.name}
                      </p>
                      <p className="text-caption text-slate-500 mt-1">
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-h3 font-black text-[#76ea27] mb-8 flex items-center gap-2">
                <CheckCircle2 size={20} /> Tech Partnerships
              </h3>
              <ul className="space-y-6">
                {certifications.tech.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-submenu">
                        {p.name}
                      </p>
                      <p className="text-caption text-slate-500 mt-1">
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Awards — Highlighted Section */}
          <div className="relative bg-[#2776ea] rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#76ea27]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Award className="text-white" size={22} />
                </div>
                <h3 className="font-black text-white text-xl uppercase tracking-wider">
                  Industry Recognition
                </h3>
              </div>

              {/* Award Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {metrics.awards.map((award, i) => {
                  const parts = award.match(/^(\d{4}):\s*(.+?)\s*-\s*(.+)$/);
                  const year = parts?.[1] || "";
                  const title = parts?.[2] || award;
                  const org = parts?.[3] || "";

                  return (
                    <div
                      key={i}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500"
                    >
                      {/* Year Badge */}
                      {year && (
                        <span className="inline-block px-3 py-1 rounded-lg bg-[#76ea27]/30 text-[#76ea27] text-[11px] font-black tracking-wider mb-4">
                          {year}
                        </span>
                      )}

                      <h4 className="font-bold text-white text-sm leading-snug mb-2 group-hover:text-[#76ea27] transition-colors">
                        {title}
                      </h4>
                      {org && (
                        <p className="text-[11px] text-blue-100 font-medium uppercase tracking-wider">
                          {org}
                        </p>
                      )}

                      {/* Index */}
                      <span className="absolute top-5 right-5 text-[10px] font-black text-white/15 tabular-nums">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CSR & CULTURE --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader
            badge="Impact"
            title={culture.title}
            description={culture.desc}
            centered={true}
            className="max-w-3xl mx-auto mb-16"
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {/* Left: Environment */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center">
              <h3 className="font-bold text-h3 mb-8">Values in Action</h3>
              <div className="space-y-4">
                {culture.points.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2776ea]/30 transition-colors group/point"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea] shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 text-submenu block mb-1">
                        {pt.title}
                      </span>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Perks (Blue Card) */}
            <div className="bg-[#2776ea] p-10 rounded-[2.5rem] text-white flex flex-col justify-center shadow-lg shadow-blue-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <h3 className="font-bold text-h3 mb-8 flex items-center gap-2 relative z-10">
                <Award size={20} /> Perks & Benefits
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {culture.perks.map((perk, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/20 text-caption font-bold border border-white/10 backdrop-blur-md hover:bg-white/30 transition-colors cursor-default"
                  >
                    {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CSR Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                color: "text-blue-500",
                bg: "bg-blue-50",
                data: csr.education,
              },
              {
                icon: Leaf,
                color: "text-green-500",
                bg: "bg-green-50",
                data: csr.environment,
              },
              {
                icon: Heart,
                color: "text-red-500",
                bg: "bg-red-50",
                data: csr.community,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6`}
                >
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-h3 mb-4 text-slate-900">
                  {item.data.title}
                </h3>
                <ul className="space-y-3">
                  {item.data.items.map((txt, j) => (
                    <li
                      key={j}
                      className="text-body text-slate-500 flex items-start gap-2 leading-relaxed"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 rounded-full ${item.bg.replace(
                          "50",
                          "400",
                        )} shrink-0`}
                      />
                      {txt.replace("• ", "")}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE WEBRONIC --- */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader
            badge="Why Us"
            title={whyChoose.title}
            description="The reasons enterprises and startups alike choose Webronic as their technology partner"
            centered={true}
            className="max-w-3xl mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Number Badge */}
                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2776ea] font-black text-lg mb-6 group-hover:bg-[#2776ea] group-hover:text-white group-hover:border-[#2776ea] transition-all duration-500 shadow-sm">
                  {i + 1}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                  {point.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAREERS CTA (Blue Card) --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#76ea27]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#76ea27] font-bold uppercase tracking-widest text-caption mb-4 block">
                  We're Hiring
                </span>
                <h2 className="text-h1 font-black mb-6 leading-tight">
                  {careers.title}
                </h2>
                <p className="text-blue-50 text-body mb-8 leading-relaxed font-medium opacity-90">
                  {careers.desc}
                </p>
                <a
                  href={careers.ctaLink}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2776ea] font-bold hover:bg-slate-50 transition-colors shadow-lg group"
                >
                  View Openings{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              <div className="flex flex-wrap gap-3 content-start">
                {careers.positions.map((pos, i) => (
                  <span
                    key={i}
                    className="px-5 py-3 rounded-full bg-white/10 text-submenu font-bold border border-white/20 hover:bg-white/20 transition-colors cursor-default backdrop-blur-sm"
                  >
                    {pos}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT US + STAY CONNECTED --- */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <SectionHeader
            badge="Reach Out"
            title={contact.title}
            description="We'd love to hear from you. Reach out through any of the channels below."
            centered={true}
            className="max-w-3xl mx-auto mb-16"
          />

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {/* General Inquiries */}
            <div className="group p-6 rounded-[2rem] bg-slate-50/70 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#2776ea] mb-5 group-hover:bg-[#2776ea] group-hover:text-white group-hover:border-[#2776ea] transition-all duration-500">
                <Mail size={22} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">General</p>
              <p className="text-sm font-bold text-slate-700 break-all">{contact.general.email}</p>
            </div>

            {/* Sales */}
            <div className="group p-6 rounded-[2rem] bg-slate-50/70 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-green-600 mb-5 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-500">
                <Globe2 size={22} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Sales</p>
              <p className="text-sm font-bold text-slate-700 break-all">{contact.sales}</p>
            </div>

            {/* Phone */}
            <div className="group p-6 rounded-[2rem] bg-slate-50/70 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-orange-500 mb-5 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-500">
                <Phone size={22} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-sm font-bold text-slate-700">{contact.general.phone}</p>
            </div>

            {/* Hours */}
            <div className="group p-6 rounded-[2rem] bg-slate-50/70 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-purple-500 mb-5 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-500">
                <Clock size={22} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hours</p>
              <p className="text-sm font-bold text-slate-700">{contact.general.hours}</p>
            </div>
          </div>

          {/* Departmental Emails (Compact) */}
          <div className="bg-slate-50/50 rounded-[2rem] p-8 border border-slate-100 mb-16">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-5">Department Emails</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#2776ea] shrink-0" />
                <span className="text-sm text-slate-600"><span className="font-bold text-slate-800">Careers:</span> {contact.careers}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#2776ea] shrink-0" />
                <span className="text-sm text-slate-600"><span className="font-bold text-slate-800">Media:</span> {contact.media}</span>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-[#2776ea]/5 rounded-[2rem] p-8 border border-[#2776ea]/10 mb-16 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="font-bold text-slate-800 mb-1">📬 Newsletter</p>
              <p className="text-sm text-slate-500 font-medium">{contact.newsletter}</p>
            </div>
            <a
              href="/contact"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#2776ea] text-white font-bold text-sm hover:bg-[#1a5fc4] transition-colors shadow-md"
            >
              Subscribe
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Stay Connected</p>
            <div className="flex flex-wrap justify-center gap-3">
              {contact.social.map((social, i) => (
                <a
                  key={i}
                  href={social.link.startsWith("http") ? social.link : `https://${social.link.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-[#2776ea] hover:border-[#2776ea] hover:text-white hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <social.icon size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-white transition-colors">{social.platform}</span>
                  <ExternalLink size={12} className="text-slate-300 group-hover:text-white/70 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
