'use client';

import teamMembers from '@/AllData/About/TeamData';
import SectionHeader from '@/components/common/SectionHeader';

export default function TeamComponent() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-16 md:py-28"
    >
      <div className="relative mx-auto max-w-5xl px-6">

        <SectionHeader
          badge="Our Team"
          title="Our"
          highlight="Core Team"
          description="A specialized collective of professionals driving technology, product, and operational excellence"
          centered={false}
          className="mb-16 md:mb-24 max-w-xl"
        />

        {/* Team List */}
        <div className="border-t border-b border-slate-100 divide-y divide-slate-100">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex items-start justify-between py-6 md:py-8 px-3 md:px-5 transition-all duration-300 hover:bg-slate-50/60"
            >
              {/* Accent Bar */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-1 bg-[#2776ea] rounded-full transition-all duration-300 group-hover:h-10" />

              <div className="flex items-start gap-6">

                {/* Index */}
                <span className="hidden md:block text-xs font-bold text-slate-300 tabular-nums group-hover:text-[#76ea27] transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                {/* Name & Role */}
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#2776ea] transition-colors">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#76ea27] transition-colors">
                    {member.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
