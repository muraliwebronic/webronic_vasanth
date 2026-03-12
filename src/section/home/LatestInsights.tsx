"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { INSIGHTS } from "@/AllData/Home/BlogsData";

export default function LatestInsights() {
  // --- STATE-DRIVEN FEATURED POST (NO DESIGN CHANGE) ---
  const initialFeatured =
    INSIGHTS.find((post) => post.featured) || INSIGHTS[0];

  const [featuredPost, setFeaturedPost] = useState(initialFeatured);

  const recentPosts = INSIGHTS.filter(
    (post) => post.id !== featuredPost.id
  );

  return (
    <section className="relative container-pd py-20 lg:px-20 bg-white overflow-hidden font-sora">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-pd relative z-10 mx-auto px-6">
        {/* HEADER */}
        <SectionHeader
          badge="Blogs"
          title="Trends Shaping"
          highlight="The Future"
          description="Insights on AI driven manufacturing cloud transformation and IoT powered predictive maintenance"
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* --- FEATURED POST --- */}
          <div className="lg:col-span-7">
            <div className="group relative block h-full rounded-3xl overflow-hidden border border-slate-200 transition-all duration-500 hover:border-[#2776ea] hover:shadow-2xl hover:shadow-blue-900/10">
              {/* Image */}
              <div className="relative h-[400px] w-full overflow-hidden bg-slate-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-caption font-bold uppercase tracking-widest text-[#2776ea] shadow-sm">
                  Featured Insight
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 bg-white">
                <div className="flex items-center gap-4 text-caption font-bold text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#2776ea]" />
                    {featuredPost.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-h2 font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#2776ea] transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-body text-slate-500 font-medium leading-relaxed mb-8 max-w-xl">
                  {featuredPost.excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* --- RECENT POSTS --- */}
          <div className="lg:col-span-5 flex flex-col h-full gap-6">
            <h4 className="text-menu font-black uppercase tracking-widest text-slate-400 mb-2 border-b border-slate-100 pb-4">
              Recent Updates
            </h4>

            <div className="flex flex-col gap-4">
              {recentPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setFeaturedPost(post)}
                  className="group w-full text-left flex gap-5 items-center p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-caption font-bold uppercase tracking-wide text-[#2776ea] mb-1">
                      {post.category}
                    </div>
                    <h4 className="text-submenu font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#2776ea] transition-colors">
                      {post.title}
                    </h4>
                    <div className="text-caption font-medium text-slate-400">
                      {post.date}
                    </div>
                  </div>

                  <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ChevronRight size={20} className="text-[#76ea27]" />
                  </div>
                </button>
              ))}
            </div>

            {/* View All */}
            {/* <Link
              href="/insights"
              className="mt-6 inline-flex items-center justify-center w-full py-4 rounded-xl border border-slate-200 text-menu font-bold text-slate-600 hover:border-[#2776ea] hover:text-[#2776ea] transition-all bg-white shadow-sm"
            >
              View All Articles
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
