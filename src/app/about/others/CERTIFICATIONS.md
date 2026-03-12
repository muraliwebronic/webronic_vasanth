{/* --- CERTIFICATIONS & AWARDS --- */}
      <section className="py-24 bg-white">
        <div className="container-pd mx-auto px-6 max-w-7xl">
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