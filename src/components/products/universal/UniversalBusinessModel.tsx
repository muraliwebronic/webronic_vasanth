"use client";

import { BusinessModelData } from "@/app/product/types";
import SectionHeader from "@/components/common/SectionHeader";
import { Check, CreditCard } from "lucide-react";

export default function UniversalBusinessModel({ data }: { data: BusinessModelData }) {
    if (!data) return null;

    return (
        <section className="bg-slate-50 container-pd py-24 font-sora border-y border-slate-200/50">
            <div className=" mx-auto px-6 max-w-7xl">
                <SectionHeader
                    badge={data.badge}
                    title={data.heading}
                    description={data.description}
                    centered={true}
                    className="max-w-3xl mx-auto mb-16"
                />

                <div className="space-y-10">
                    {data.streams.map((stream, idx) => (
                        <div key={idx} className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900">{stream.title}</h3>
                                    <p className="text-slate-500">{stream.description}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {stream.pricing.map((tier, i) => (
                                    <div key={i} className={`relative p-8 rounded-3xl border ${i === 1 ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-slate-50/50'} hover:shadow-lg transition-all duration-300`}>
                                        {i === 1 && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                                Popular
                                            </div>
                                        )}

                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{tier.plan}</h4>
                                        <div className="text-3xl font-black text-blue-600 mb-6">{tier.price}</div>

                                        <ul className="space-y-4">
                                            {tier.features.map((feature, f) => (
                                                <li key={f} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                                                    <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* <button className={`w-full mt-8 py-3 rounded-xl font-bold text-sm transition-colors ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'}`}>
                                            Choose {tier.plan}
                                        </button> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Profitability Example Section */}
                {data.profitability && (
                    <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 relative z-10">
                            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                            {data.profitability.title}
                        </h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                            {data.profitability.metrics.map((metric, i) => {
                                // Highlight key summary rows
                                const isHighlight = metric.label.includes('Revenue') || metric.label.includes('Profit') || metric.label.includes('Total') || metric.label.includes('ROI');
                                return (
                                    <div key={i} className={`rounded-2xl p-5 border transition-colors ${isHighlight ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'}`}>
                                        <div className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                                            {metric.label}
                                        </div>
                                        <div className={`text-2xl font-black mb-1.5 tracking-tight ${isHighlight ? 'text-green-400' : 'text-white'}`}>
                                            {metric.value}
                                        </div>
                                        {metric.subtext && (
                                            <div className="text-xs font-medium text-slate-400 leading-relaxed">
                                                {metric.subtext}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
