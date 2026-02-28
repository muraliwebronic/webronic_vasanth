"use client";

import { useState, useEffect } from "react";
import { Clock, Cpu, X, CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

export default function UniversalCoreServices({ data }: { data: ServicePageData['coreServices'] }) {
  const [selectedCard, setSelectedCard] = useState<typeof data.cards[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedCard]);

  if (!data) return null;

  return (
    <section className="relative bg-slate-50 py-24 font-sora overflow-hidden border-b border-slate-200/60">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <SectionHeader
          badge={data.badge}
          title={data.titleLine1}
          highlight={data.titleHighlight}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-16"
          size="default"
        />

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.cards.map((card, index) => {
            const hasRichContent = (card.subSections && card.subSections.length > 0) || (card.fullDescription && card.fullDescription.length > 0);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => hasRichContent && setSelectedCard(card)}
                className={`group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl  transition-all duration-500 flex flex-col h-full ${card.span || ""} ${hasRichContent ? "cursor-pointer " : ""}`}
              >

                {/* Decorative colored line at top */}
                <div className={`absolute top-0 inset-x-8 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:duration-200 ${card.bg?.replace("/10", "") || "bg-blue-500"}`} />

                <div className="flex items-start justify-between mb-8">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-500`}>
                    <DynamicIcon name={card.icon} size={28} strokeWidth={1.5} />
                  </div>
                  {/* Interactive Hint Icon */}
                  {hasRichContent && (
                    <div className={`h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300`}>
                      <ArrowUpRight size={18} />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  {/* Highlights List (if simple card) */}
                  {card.list && (
                    <ul className="space-y-3 mb-6">
                      {card.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                          <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {card.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-500 uppercase tracking-wide group-hover:bg-white group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read More Footer */}
                {hasRichContent && (
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Explore Details</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* COMPACT FOOTER METRICS */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Block */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-center gap-6">
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{data.footer.left.title}</h4>
              <p className="text-2xl font-black text-slate-900 tracking-tight">{data.footer.left.content}</p>
            </div>
          </div>

          {/* Right Block */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-center gap-6">
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
              <Cpu size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{data.footer.right.title}</h4>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(data.footer.right.content) && data.footer.right.content.map((tag: string, i: number) => (
                  <span key={i} className="px-2 py-1 rounded bg-slate-50 text-xs font-bold text-slate-600 border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* REFINED DETAIL MODAL */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedCard(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: "100%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "100%", opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-[85vh] bg-white sm:rounded-[2rem] rounded-t-[2rem] shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
            >

              {/* Close Button (Mobile Fixed) */}
              <button
                onClick={() => setSelectedCard(null)}
                className="fixed top-6 right-6 z-210 h-10 w-10 rounded-full bg-white/90 backdrop-blur border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-red-500 transition-colors md:hidden shadow-lg"
              >
                <X size={20} />
              </button>

              {/* LEFT SIDEBAR (Sticky Info) */}
              <div className="md:w-[35%] bg-slate-50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col shrink-0">
                <div className="mb-8">
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${selectedCard.bg} ${selectedCard.color} mb-6`}>
                    <DynamicIcon name={selectedCard.icon} size={32} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
                    {selectedCard.title}
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    {selectedCard.desc}
                  </p>
                </div>

                {/* Desktop Close Button */}
                <div className="mt-auto hidden md:block">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold uppercase tracking-wider text-sm"
                  >
                    <div className="h-10 w-10 rounded-full border-2 border-slate-200 group-hover:border-slate-900 flex items-center justify-center transition-colors">
                      <X size={18} />
                    </div>
                    Close Details
                  </button>
                </div>
              </div>

              {/* RIGHT CONTENT (Scrollable) */}
              <div className="md:flex-1 md:overflow-y-auto p-8 md:p-12 scroll-smooth">

                {/* Full Description */}
                {selectedCard.fullDescription && (
                  <div className="prose prose-lg prose-slate max-w-none mb-12">
                    {selectedCard.fullDescription.map((para, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                )}

                {/* Sections */}
                <div className="space-y-16">
                  {selectedCard.subSections && selectedCard.subSections.map((section, i) => (
                    <div key={i}>
                      {section.heading && (
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-px bg-slate-200 flex-1" />
                          <h4 className="text-xl font-black text-slate-900 bg-white px-4 border border-slate-200 rounded-full py-1 shadow-sm">
                            {section.heading}
                          </h4>
                          <div className="h-px bg-slate-200 flex-1" />
                        </div>
                      )}

                      {/* Rich Items Cards */}
                      {section.items && (
                        <div className="grid md:grid-cols-2 gap-6">
                          {section.items.map((item, j) => (
                            <div key={j} className="bg-slate-50/50 hover:bg-slate-50 rounded-2xl p-6 border border-slate-100 transition-colors">
                              {item.term && (
                                <div className="flex items-baseline gap-2 mb-2">
                                  <div className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                                  <h5 className="text-lg font-bold text-slate-900">{item.term}</h5>
                                </div>
                              )}
                              {item.description && (
                                <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-slate-200">
                                  {item.description}
                                </p>
                              )}
                              {item.subItems && (
                                <ul className="mt-4 space-y-2 pl-4">
                                  {item.subItems.map((sub, k) => (
                                    <li key={k} className="flex items-start gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                      <CheckCircle2 size={12} className="text-blue-500 mt-0.5" />
                                      {sub}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Simple List Items */}
                      {section.content && (
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                          <ul className="grid md:grid-cols-2 gap-4">
                            {section.content.map((text, k) => (
                              <li key={k} className="flex items-center gap-3 text-slate-700 font-medium">
                                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                  <CheckCircle2 size={14} />
                                </div>
                                {text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}