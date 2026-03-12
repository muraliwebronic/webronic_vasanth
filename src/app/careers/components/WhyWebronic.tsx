"use client";

import { useState } from "react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureModal from "@/components/common/career/FeatureModal";
import { LucideIcon } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "green";
  details: string[];
}

export default function WhyWebronic() {
  const { whyWebronic } = CAREERS_DATA;

  const [isOpen, setIsOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);

  const openModal = (feature: Feature) => {
    setActiveFeature(feature);
    setIsOpen(true);
  };

  return (
    <>
      <section className="bg-slate-50 container-pd py-24 font-sora">
        <div className=" mx-auto px-6 max-w-7xl">

          <SectionHeader
            badge={whyWebronic.header.badge}
            title={whyWebronic.header.title}
            highlight={whyWebronic.header.highlight}
            description={whyWebronic.header.description}
            centered
            className="max-w-3xl mx-auto mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWebronic.features.map((feature: Feature) => {
              const accent =
                feature.color === "blue"
                  ? "text-[#2776ea]"
                  : "text-[#76ea27]";

              return (
                <button
                  key={feature.id}
                  onClick={() => openModal(feature)}
                  className="group text-left bg-white rounded-2xl p-6 border border-slate-100
                             hover:border-slate-200 hover:shadow-lg transition-all"
                >
                  {/* Icon */}
                  <div
                    className={`h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center ${accent} mb-5`}
                  >
                    <feature.icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:underline">
                    {feature.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>

                  {/* Subtle affordance */}
                  <span
                    className={`mt-4 inline-block text-xs font-semibold ${accent}`}
                  >
                    View details →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <FeatureModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        feature={activeFeature}
      />
    </>
  );
}
