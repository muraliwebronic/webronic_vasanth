import { Suspense } from "react";
import ServicesClient from "./ProductClient"; // Based on your import
import UniversalHeroSkeleton from "@/components/UI/UniversalHeroSkeleton";


export const metadata = {
  title: "Product Details | Webronic",
  description: "Detailed information about our enterprise IT products and software solutions.",
};

export default function ProductPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-white"><UniversalHeroSkeleton /></main>}>
      <ServicesClient />
    </Suspense>
  );
}