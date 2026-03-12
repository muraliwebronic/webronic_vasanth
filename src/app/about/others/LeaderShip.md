   <section id="leadership" className="py-24 bg-slate-50">
        <div className="container-pd mx-auto px-6 max-w-7xl">
          <SectionHeader
            badge="Team"
            title={leadership.title}
            description="The visionaries guiding our path"
            centered={true}
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {leadership.members.map((leader, i) => {
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