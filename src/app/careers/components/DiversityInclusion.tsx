"use client";

import { 
  Users, 
  Heart, 
  TrendingUp, 
  ShieldCheck, 
  Baby, 
  EyeOff, 
  CheckCircle2,
  Globe
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function DiversityInclusion() {
  return (
    <section className="bg-white py-24 font-sora relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <SectionHeader
          badge="Diversity & Inclusion"
          title="Everyone Belongs Here"
          description="We believe diverse teams build better products. Different perspectives, backgrounds, and experiences make us stronger. We are not perfect, but we are committed to continuous improvement."
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        {/* --- MAIN BENTO GRID --- */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          
          {/* Card 1: The Gender Stat (Prominent) */}
          <div className="lg:col-span-5 bg-[#2776ea] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between group shadow-lg shadow-blue-900/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2 opacity-90">
                <TrendingUp size={20} />
                <span className="text-sm font-bold uppercase tracking-wider">Gender Diversity</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-black tracking-tighter">30%</span>
                <span className="text-xl font-medium opacity-80">Women in Tech</span>
              </div>
              <p className="mt-4 text-blue-100 text-sm leading-relaxed max-w-xs">
                We are well above the industry average of 15%, and we are actively committed to reaching 40% by 2026.
              </p>
            </div>

            {/* Progress Bar Visual */}
            <div className="relative z-10 mt-8">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 opacity-80">
                <span>Current</span>
                <span>Goal</span>
              </div>
              <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[75%] rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2: Equal Opportunity (Clean White) */}
          <div className="lg:col-span-4 bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-slate-200 transition-colors flex flex-col justify-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">
              Equal Opportunity
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Hiring and promotions are based purely on merit, skills, and potential. We have zero tolerance for discrimination, harassment, or bias.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600">
                Merit Based
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600">
                Zero Tolerance
              </span>
            </div>
          </div>

          {/* Card 3: LGBTQ+ & Accessibility (Stacked) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex-1 bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-center hover:border-slate-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Heart size={18} fill="currentColor" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">LGBTQ+ Support</h4>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                A safe, welcoming environment for all gender identities and orientations.
              </p>
            </div>

            <div className="flex-1 bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-center hover:border-slate-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <Globe size={18} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Accessibility</h4>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Full workplace accommodations for differently-abled employees.
              </p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: ERGs & ACTIONS --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 pt-8">
          
          {/* Left: Employee Resource Groups */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Employee Resource Groups
            </h3>
            <p className="text-slate-500 mb-8 text-sm max-w-md leading-relaxed">
              Our ERGs are voluntary, employee-led groups that foster a diverse, inclusive workplace aligned with our organizational mission.
            </p>
            
            <div className="space-y-4">
              {/* ERG 1 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="h-10 w-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Women in Tech</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide mt-0.5">Mentorship & Networking</p>
                </div>
              </div>

              {/* ERG 2 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="h-10 w-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">LGBTQ+ Alliance</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide mt-0.5">Community & Advocacy</p>
                </div>
              </div>

              {/* ERG 3 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Baby size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Parents at Webronic</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide mt-0.5">Support for Working Parents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Actions Checklist */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full">
            <h3 className="text-xl font-black text-slate-900 mb-2">
              Actions, Not Just Words
            </h3>
            <p className="text-sm text-slate-500 mb-8 font-medium">
              How we are operationalizing our commitment to diversity every single day.
            </p>

            <div className="space-y-6">
              {[
                { 
                  title: "Blind Resume Screening", 
                  desc: "We remove names and gender indicators from initial applications to reduce unconscious bias." 
                },
                { 
                  title: "Diverse Interview Panels", 
                  desc: "Every candidate interacts with a diverse group of interviewers to ensure a balanced perspective." 
                },
                { 
                  title: "Inclusive Benefits", 
                  desc: "Parental leave for all genders and full same-sex partner medical coverage." 
                },
                { 
                  title: "Bias Training", 
                  desc: "Mandatory unconscious bias training for all managers and hiring leads." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-0.5 shrink-0">
                    <div className="h-6 w-6 rounded-full bg-[#76ea27]/10 flex items-center justify-center text-[#6cd623] group-hover:bg-[#76ea27] group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#2776ea] transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}