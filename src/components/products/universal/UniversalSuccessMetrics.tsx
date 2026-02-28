"use client";

import { SuccessMetricsData } from "@/app/product/types";
import SectionHeader from "@/components/common/SectionHeader";
import { DynamicIcon } from "@/components/common/DynamicIcon";

export default function UniversalSuccessMetrics({ data }: { data: SuccessMetricsData }) {
    if (!data) return null;

    return (
        <section className="bg-slate-50/50 py-24 lg:py-32 font-sora border-t border-slate-100 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Changed to items-start so the columns can have different heights, enabling the sticky effect */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* STICKY HEADER SECTION (PC ONLY) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 relative z-10">
                        <SectionHeader
                            badge={data.badge}
                            title={data.heading}
                            description={data.description}
                            centered={false}
                            className="mb-8"
                        />
                        {/* Can add extra context or a CTA here later */}
                    </div>

                    <div className="hidden lg:block lg:col-span-1" />

                    {/* SCROLLING METRICS GRID */}
                    <div className="lg:col-span-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {data.metrics.map((metric, i) => (
                                <div 
                                    key={i} 
                                    className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 group"
                                >
                                    {/* Premium Icon Box */}
                                    <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 transition-all duration-500">
                                        <DynamicIcon name={metric.icon} size={24} />
                                    </div>
                                    
                                    {/* Data Value */}
                                    <div className="text-4xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                        {metric.value}
                                    </div>
                                    
                                    {/* Data Label */}
                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                        {metric.label}
                                    </div>
                                    
                                    {/* Description text */}
                                    <div className="text-sm font-medium text-slate-500 leading-relaxed">
                                        {metric.description}
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