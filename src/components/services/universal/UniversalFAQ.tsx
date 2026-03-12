"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalFAQ({ data }: { data: ServicePageData['faq'] }) {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Hides the component if data is missing OR if there are no FAQ items
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section className="bg-white container-pd py-24 md:py-32 font-sora relative overflow-hidden" id="faq">

      <div className=" mx-auto px-6 max-w-3xl relative z-10">

        {/* CENTERED HEADER */}
        <SectionHeader
          badge="FAQ"
          title={data.heading}
          description="Answers to common questions about our process and deliverables"
          centered={true}
          className="mb-12"
          size="default"
        />

        {/* FAQ LIST (Clean & Compact) */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {data.items.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div key={index} className="group">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left py-6 flex items-start gap-4 focus:outline-none cursor-pointer hover:bg-slate-50/50 transition-colors px-2 -mx-2 rounded-lg"
                >
                  {/* Icon Toggle (Small & Subtle) */}
                  <div className={`shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                    ? "bg-primary text-white rotate-180"
                    : "bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"
                    }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>

                  <div className="flex-1">
                    {/* Question */}
                    <h3 className={`text-h3 leading-relaxed transition-colors duration-300 ${isOpen ? "text-primary" : "text-slate-900 group-hover:text-slate-700"
                      }`}>
                      {item.question}
                    </h3>

                    {/* Answer (Animated Height) */}
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0 pt-0"
                      }`}>
                      <div className="overflow-hidden">
                        <p className="text-slate-500 font-medium leading-relaxed text-body">
                          {item.answer}
                        </p>

                        {item.list && (
                          <ul className="mt-4 space-y-2">
                            {item.list.map((listItem, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-500 font-medium text-body">
                                <span className="bg-primary w-1.5 h-1.5 rounded-full mt-2 shrink-0" />
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.answerFooter && (
                          <p className="mt-4 text-slate-500 font-medium leading-relaxed text-body">
                            {item.answerFooter}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA (Compact) */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-menu font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
          >
            <MessageCircle size={14} />
            <span>Still have questions? Contact Support</span>
          </a>
        </div>

      </div >
    </section >
  );
}