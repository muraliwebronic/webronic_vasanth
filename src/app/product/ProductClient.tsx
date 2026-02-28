"use client";

import { useSearchParams } from "next/navigation";
import { getProductData, isProductData } from "./productRegistry";

// Universal Service Components
import UniversalHero from "@/components/services/universal/UniversalHero";
import UniversalOverview from "@/components/services/universal/UniversalOverview";
import UniversalCoreServices from "@/components/services/universal/UniversalCoreServices";
import UniversalTechStack from "@/components/services/universal/UniversalTechStack";
import UniversalProcess from "@/components/services/universal/UniversalProcess";
import UniversalIndustries from "@/components/services/universal/UniversalIndustries";
import UniversalCaseStudies from "@/components/services/universal/UniversalCaseStudies";
import UniversalFAQ from "@/components/services/universal/UniversalFAQ";
import UniversalGetStarted from "@/components/services/universal/UniversalGetStarted";
import UniversalRelatedResources from "@/components/services/universal/UniversalRelatedResources";

// New Product Components
import UniversalProductFeatures from "@/components/products/universal/UniversalProductFeatures";
import UniversalUseCases from "@/components/products/universal/UniversalUseCases";
import UniversalBusinessModel from "@/components/products/universal/UniversalBusinessModel";
import UniversalSuccessMetrics from "@/components/products/universal/UniversalSuccessMetrics";
import UniversalProductRelatedResources from "@/components/products/universal/UniversalProductRelatedResources";

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";

  const data = getProductData(category);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sora p-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Product Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md">
          We couldn't find the product category:
          <span className="ml-2 font-mono text-red-500 bg-red-50 px-2 py-1 rounded">
            {category || "Empty"}
          </span>
        </p>
        <a href="/" className="px-6 py-3 bg-[#2776ea] text-white rounded-xl font-bold">
          Return Home
        </a>
      </div>
    );
  }

  // Common Components (Shared)
  const commonComponents = (
    <>
      <UniversalHero data={data.hero} />
      <UniversalOverview data={data.overview} />
    </>
  );

  // PRODUCT PAGE RENDER
  if (isProductData(data)) {
    return (
      <main className="min-h-screen bg-white selection:bg-[#2776ea] selection:text-white">
        {commonComponents}

        {/* Exclusive Product Components */}
        <UniversalSuccessMetrics data={data.successMetrics} />
        <UniversalProductFeatures data={data.productFeatures} />
        <UniversalTechStack data={data.techStack} />
        <UniversalUseCases data={data.useCases} />
        <UniversalBusinessModel data={data.businessModel} />
        <UniversalProcess data={data.process} />

        <UniversalGetStarted data={data.getStarted} />
        {data.relatedResources && <UniversalProductRelatedResources data={data.relatedResources} />}
      </main>
    );
  }

  // SERVICE PAGE RENDER (Fallback / Original)
  return (
    <main className="min-h-screen bg-white selection:bg-[#2776ea] selection:text-white">
      {commonComponents}
      <UniversalCoreServices data={data.coreServices} />
      <UniversalTechStack data={data.techStack} />
      <UniversalProcess data={data.process} />
      <UniversalIndustries data={data.industries} />
      <UniversalCaseStudies data={data.caseStudies} />
      <UniversalFAQ data={data.faq} />
      <UniversalGetStarted data={data.getStarted} />
      <UniversalRelatedResources data={data.relatedResources} />
    </main>
  );
}

