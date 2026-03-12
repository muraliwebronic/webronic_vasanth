"use client";

import { useState } from "react";

// 1. IMPORT THE REGISTRY
import { servicesRegistry } from "./data/servicesRegistry";

// 2. Import Components
import SectionHeader from "@/components/common/SectionHeader";
import { PageServiceCard } from "@/components/services/PageServiceCard";
import ServiceGrid from "@/components/services/ServiceGrid";
import Contact from "@/section/home/Contact";
import { ServiceConsultationForm } from "@/ui/forms";

// --- TYPES ---
export interface ServiceCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  localIcon?: string;
  points: string[];
  technologies: { name: string; logo: string }[];
}

// --- DATA PREPARATION ---
const MAIN_SERVICE_IDS = [
  "web-development",
  "ai-machine-learning",
  "cloud-services",
  "digital-transformation",
  "devops",
  'software-development',
  "iot-solutions",
  "data-analytics",
];

// Helper to transform registry data to ServiceCardData
const transformData = (ids: string[]): ServiceCardData[] => {
  return ids
    .map((id) => servicesRegistry[id])
    .filter(Boolean)
    .map((data) => ({
      id: data.id,
      title: data.preview.title,
      tagline: data.preview.tagline,
      description: data.preview.description,
      localIcon: data.preview.localIcon,
      image: data.preview.image,
      icon: data.preview.icon,
      points: data.preview.points,
      technologies: data.preview.technologies,
    }));
};

// 1. Get Main Services List (Vertical Stack)
const mainServicesList = transformData(MAIN_SERVICE_IDS);

// 2. Get Additional Services List (Grid Layout)
const allIds = Object.keys(servicesRegistry);
const additionalIds = allIds.filter((id) => !MAIN_SERVICE_IDS.includes(id));
const additionalServicesList = transformData(additionalIds);


// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  const [selectedService, setSelectedService] =
    useState<ServiceCardData | null>(null);

  return (
    <>
      <main className="bg-white min-h-screen container-pd font-sora selection:bg-[#2776ea] selection:text-white">
        {/* 2. MAIN SERVICES (Vertical Stack - PageServiceCard) */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-slate-100">
          <div className="container-pd mx-auto px-6 md:px-12 lg:px-24">
            {/* Header for Main Services - USING REUSABLE COMPONENT */}
            <div className="max-w-3xl mb-24">
              <SectionHeader
                badge="Core Domains"
                title="Primary"
                highlight="Service Suite"
                description="Our foundational technical capabilities designed to drive digital transformation, operational efficiency, and sustainable growth for modern enterprises"
                centered={false}
                className="mb-0"
              />
            </div>

            <div className="flex flex-col gap-24 md:gap-32">
              {mainServicesList.map((service, index) => (
                <PageServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onCtaClick={setSelectedService}
                  reversed={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. ADDITIONAL SERVICES (New Grid UI - ServiceGrid) */}
        <ServiceGrid services={additionalServicesList} />

        {/* 4. SERVICE CONSULTATION FORM MODAL */}
        <ServiceConsultationForm
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          serviceTitle={selectedService?.title ?? ""}
        />


      </main>
      <Contact />

    </>

  );
}