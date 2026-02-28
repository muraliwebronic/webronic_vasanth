"use client";

import Link from "next/link";
import { 
  Briefcase, 
  FileText, 
  ArrowRight, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Instagram,
  GraduationCap
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function ApplySection() {
  return (
    <section className="bg-white py-16 md:py-24 font-sora relative overflow-hidden" id="apply">
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
          badge="Apply Now"
          title="Ready to Join Us?"
          description="Start your journey with Webronic today. Choose your path below."
          centered={false}
          className="mb-8 md:mb-12 max-w-2xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          
          {/* --- LEFT COLUMN: TWO GOOGLE FORM CARDS (Col-Span 7) --- */}
          <div className="lg:col-span-7 flex flex-col gap-5 md:gap-6">
            
            {/* Card 1: Internship Application */}
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfLFogNrkSs6KuLXiQJ1LP0gqZo8yURLHavcqeYZsXMruheig/viewform" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-blue-50 transition-all duration-300 hover:border-[#2776ea] hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Background Decor - Adjusted position for mobile */}
              <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <GraduationCap size={100} className="md:w-[120px] md:h-[120px] text-[#2776ea] -rotate-12 translate-x-4 -translate-y-4" />
              </div>

              <div className="relative z-10">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-[#2776ea] flex items-center justify-center text-white mb-5 md:mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} className="md:w-[26px] md:h-[26px]" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-[#0f172a] mb-2">
                  Apply for Internship
                </h3>
                <p className="text-sm md:text-base text-blue-900/70 font-medium mb-6 md:mb-8 max-w-md leading-relaxed">
                  Start your career with hands-on experience in real-world projects. Perfect for students and fresh graduates.
                </p>

                <div className="inline-flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest text-[#2776ea] group-hover:translate-x-2 transition-transform">
                  Start Application <ArrowRight size={16} strokeWidth={3} />
                </div>
              </div>
            </Link>

            {/* Card 2: Experienced Hiring */}
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_W8qvRrATorolwDgyM57HiynWANI9ivDlifnUdlR8pWJcnQ/viewform" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-emerald-50 transition-all duration-300 hover:border-[#76ea27] hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Briefcase size={100} className="md:w-[120px] md:h-[120px] text-[#76ea27] rotate-12 translate-x-4 -translate-y-4" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5 md:gap-6">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-[#76ea27] flex items-center justify-center text-emerald-950 shadow-lg shadow-emerald-500/30 shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} className="md:w-[26px] md:h-[26px]" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-black text-[#0f172a] mb-1">
                    Experienced Hiring
                  </h3>
                  <p className="text-sm text-blue-900/70 font-bold">
                    For professionals looking for high-impact roles.
                  </p>
                </div>

                <div className="shrink-0 mt-2 sm:mt-0">
                   <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-emerald-100 flex items-center justify-center text-emerald-300 group-hover:bg-[#76ea27] group-hover:border-[#76ea27] group-hover:text-emerald-950 transition-all bg-white">
                      <ArrowRight size={18} className="md:w-[20px] md:h-[20px]" strokeWidth={2.5} />
                   </div>
                </div>
              </div>
            </Link>

          </div>

          {/* --- RIGHT COLUMN: CONTACT WIDGET (Bright Blue Gradient) --- */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#2776ea] to-[#1e6ad4] rounded-2xl md:rounded-3xl p-8 md:p-10 text-white h-full flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-blue-500/20">
              
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#76ea27]/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black mb-2">Questions?</h3>
                <p className="text-blue-50 font-medium mb-8 md:mb-10 text-sm leading-relaxed opacity-90">
                  Reach out to our talent acquisition team directly. We are happy to guide you.
                </p>

                <div className="space-y-6 md:space-y-8">
                  {/* Email */}
                  <a href="mailto:careers@webronic.com" className="flex items-start gap-4 md:gap-5 group">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-white/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#2776ea] transition-all">
                      <Mail size={20} className="md:w-[22px] md:h-[22px]" />
                    </div>
                    <div className="min-w-0"> {/* min-w-0 helps text truncate/wrap correctly in flex */}
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1">Email</p>
                      <p className="font-bold text-lg md:text-xl text-white group-hover:underline decoration-2 underline-offset-4 break-words">
                        careers@webronic.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+917200088500" className="flex items-start gap-4 md:gap-5 group">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-white/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#76ea27] group-hover:text-emerald-900 transition-all">
                      <Phone size={20} className="md:w-[22px] md:h-[22px]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1">Phone</p>
                      <p className="font-bold text-lg md:text-xl text-white group-hover:underline decoration-2 underline-offset-4">+91 72000 88500</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="relative z-10 pt-10 md:pt-12 mt-8 md:mt-auto border-t border-white/20">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-4 md:mb-5">Follow Us</p>
                <div className="flex gap-3 md:gap-4">
                  {[
                    { icon: Linkedin, href: "https://linkedin.com/company/webronic-industries", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com/webronic", label: "Twitter" },
                    { icon: Instagram, href: "https://www.instagram.com/thingsatweb", label: "Instagram" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#2776ea] transition-all hover:-translate-y-1 shadow-sm"
                      aria-label={social.label}
                    >
                      <social.icon size={18} className="md:w-[20px] md:h-[20px]" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}