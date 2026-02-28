"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, Mail } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const CAREER_FAQS = [
  {
    question: "Do you sponsor work visas for international candidates?",
    answer: "Currently, all positions are India-based (Chennai, Madurai, Salem). We do not sponsor international work visas at this time. However, we do have partnerships in Sweden for specific client projects."
  },
  {
    question: "Is remote work available?",
    answer: "We offer hybrid work (2-3 days in office, rest remote). Fully remote is considered on a case-by-case basis for senior/specialized roles. All new hires start with 2 months office-based for onboarding."
  },
  {
    question: "What is the salary range for specific roles?",
    answer: "Salaries are competitive and depend on experience, skills, and role level. Ranges mentioned in job descriptions are indicative. We’re transparent during the offer process and open to negotiation based on your value-add."
  },
  {
    question: "Do you hire freshers?",
    answer: "Yes! We have internship programs (6 months) with full-time conversion potential. High-performing interns receive offers. We also hire recent graduates for junior developer roles."
  },
  {
    question: "What technologies do you work with?",
    answer: "We use a modern tech stack including Node.js, React, Python, Django, Flutter, React Native, TensorFlow, PyTorch, Docker, Kubernetes, AWS, Azure, GCP, MongoDB, PostgreSQL, and more. We actively invest in learning new technologies."
  },
  {
    question: "How long does the hiring process take?",
    answer: "Typically 2-3 weeks from application to offer. We move quickly for strong candidates to ensure a smooth experience."
  },
  {
    question: "Can I apply for multiple roles?",
    answer: "Yes, but we recommend applying for roles where you genuinely meet the requirements. Our team will consider you for the best fit based on your skills."
  },
  {
    question: "Do you provide relocation assistance?",
    answer: "Yes, for candidates moving to Chennai, Madurai, or Salem from other cities. We provide financial assistance and support in finding accommodation."
  },
  {
    question: "What is the dress code?",
    answer: "Business casual. We're not formal—jeans and polo shirts are fine. Fridays are even more casual. However, client meetings may require formal attire."
  },
  {
    question: "Do you offer employee referral bonuses?",
    answer: "Yes! We offer ₹50,000 - ₹200,000 depending on the role level. This is paid after 6 months of successful employment."
  },
  {
    question: "What is the probation period?",
    answer: "There is a standard 6-month probation period for all employees. Performance reviews are conducted at 3 months and 6 months. Probation can be extended if necessary."
  },
  {
    question: "Can I negotiate my offer?",
    answer: "Absolutely. We’re reasonable and fair. If you have competing offers or specific circumstances, we are open to discussing them."
  }
];

export default function CareersFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-white py-24 md:py-32 font-sora relative overflow-hidden" id="faq">
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* CENTERED HEADER */}
        <SectionHeader 
          badge="FAQ"
          title="Your Questions Answered"
          description="Everything you need to know about joining the Webronic team, our culture, and our process."
          centered={true}
          className="mb-12"
          size="default" 
        />

        {/* FAQ LIST (Clean & Compact) */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {CAREER_FAQS.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div key={index} className="group">
                <button 
                  onClick={() => toggleItem(index)} 
                  className="w-full text-left py-6 flex items-start gap-4 focus:outline-none cursor-pointer hover:bg-slate-50/50 transition-colors px-2 -mx-2 rounded-lg"
                >
                  {/* Icon Toggle (Small & Subtle) */}
                  <div className={`shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#2776ea] text-white rotate-180" 
                      : "bg-slate-100 text-slate-400 group-hover:bg-[#2776ea]/10 group-hover:text-[#2776ea]"
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>

                  <div className="flex-1">
                    {/* Question */}
                    <h3 className={`text-base md:text-lg font-bold leading-relaxed transition-colors duration-300 ${
                      isOpen ? "text-[#2776ea]" : "text-slate-900 group-hover:text-slate-700"
                    }`}>
                      {item.question}
                    </h3>

                    {/* Answer (Animated Height) */}
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0 pt-0"
                    }`}>
                      <div className="overflow-hidden">
                        <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </p>
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
             href="mailto:careers@webronic.com" 
             className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-[#2776ea] transition-colors"
           >
             <Mail size={16} />
             <span>Still have questions? Email careers@webronic.com</span>
           </a>
        </div>

      </div>
    </section>
  );
}