import { Suspense } from "react";
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import UniversalHeroSkeleton from "@/components/UI/UniversalHeroSkeleton";
import { getServiceData } from "@/app/services/data/servicesRegistry";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const category = (resolvedSearchParams?.category as string) || "";
  const serviceData = getServiceData(category);

  if (!serviceData) {
    return {
      title: "Service Not Found | Webronic",
      description: "The requested service category could not be found.",
    };
  }

  return {
    title: serviceData.metaTitle || `${serviceData.preview.title} | Webronic`,
    description: serviceData.metaDescription || serviceData.preview.description,
  };
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-white"><UniversalHeroSkeleton /></main>}>
      <ServicesClient />
    </Suspense>
  );
}