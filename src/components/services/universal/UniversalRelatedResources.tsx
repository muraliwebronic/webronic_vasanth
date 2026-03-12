"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { servicesRegistry } from "@/app/service/data/servicesRegistry";

// Convert servicesRegistry to an array format for easy mapping
const allServices = Object.keys(servicesRegistry).map(key => {
  const service = servicesRegistry[key];
  return {
    id: key,
    name: service.preview.title,
    href: `/services?category=${key}`,
    icon: service.preview.icon,
    desc: service.preview.tagline,
  };
});

export default function UniversalRelatedResources({ data }: { data: ServicePageData['relatedResources'] & { id?: string } }) {
  const hasCustomServices = data?.services && data.services.length > 0;

  return (
    <section className="bg-slate-50 container-pd py-24 font-sora relative overflow-hidden border-t border-slate-200">
      <div className=" mx-auto px-6 max-w-7xl relative z-10">

        {/* --- SECTION 1: RELATED SERVICES --- */}
        <div className="mb-12">
          <SectionHeader
            badge="Ecosystem"
            title="Explore More Capabilities"
            description="Discover our other specialized services to complete your digital strategy."
            centered={true}
            className="max-w-3xl mx-auto mb-16"
            size="default"
          />

          {/* DATA-DRIVEN SERVICES (from relatedResources.services[]) */}
          {hasCustomServices ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.services.map((service, index) => {
                // Find matching service from allServices to use its exact base href if available
                const matchedService = allServices.find(item => item.id === service.id);

                const finalHref = matchedService ? matchedService.href : `/services?category=${service.id}`;

                return (
                  <Link
                    key={index}
                    href={finalHref}
                    className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-start h-full"
                  >
                    <div className={`h-12 w-12 rounded-xl ${service.bg} flex items-center justify-center ${service.color} mb-5 group-hover:scale-110 transition-transform`}>
                      <DynamicIcon name={service.icon} size={24} />
                    </div>

                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-primary mb-2 transition-colors">
                      {service.title}
                    </h4>

                    <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-primary transition-colors mt-auto uppercase tracking-wider">
                      View Details <ArrowRight size={16} />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* FALLBACK: ALL SERVICES FROM REGISTRY (for service pages) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allServices.map((service, index) => {
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-start h-full"
                  >
                    <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                      <DynamicIcon name={service.icon} size={24} />
                    </div>

                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-primary mb-2 transition-colors">
                      {service.name}
                    </h4>

                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                      {service.desc}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-primary transition-colors mt-auto uppercase tracking-wider">
                      View Service <ArrowRight size={16} />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}