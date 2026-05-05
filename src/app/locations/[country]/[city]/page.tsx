import { notFound } from "next/navigation";
import { locationsData, locationServices } from "../../data";
import Contact from "@/section/home/Contact";
import Link from "next/link";
import Script from "next/script";
import UniversalHero from "@/components/services/universal/UniversalHero";
import UniversalOverview from "@/components/services/universal/UniversalOverview";
import UniversalFAQ from "@/components/services/universal/UniversalFAQ";
import { ServicePageData } from "@/AllData/services/types";

type PageProps = {
  params: Promise<{ country: string; city: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const countryObj = locationsData.find((c) => c.countrySlug === resolvedParams.country);
  const cityObj = countryObj?.cities.find((c) => c.slug === resolvedParams.city);

  if (!cityObj || !countryObj) return { title: "Not Found" };

  return {
    title: `Software Development & Tech Company in ${cityObj.name}, ${countryObj.countryName} | Webronic`,
    description: `Webronic is a premier software engineering, DevOps, and IoT development company serving ${cityObj.name}. Accelerate your digital transformation today.`,
  };
}

export default async function GeoTargetedPage({ params }: PageProps) {
  const resolvedParams = await params;
  const countryObj = locationsData.find((c) => c.countrySlug === resolvedParams.country);
  const cityObj = countryObj?.cities.find((c) => c.slug === resolvedParams.city);

  if (!cityObj || !countryObj) return notFound();

  const { name: cityName } = cityObj;
  const { countryName } = countryObj;

  const buildDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": `Webronic ${cityName}`,
        "image": "https://www.webronic.com/assets/webonic2.png",
        "description": `Premier software development, DevOps, and digital transformation agency serving ${cityName}, ${countryName}.`,
        "areaServed": {
          "@type": "City",
          "name": cityName,
        },
        "datePublished": buildDate,
        "dateModified": buildDate
      },
      {
        "@type": "Service",
        "name": "Custom Software Development",
        "provider": {
          "@type": "LocalBusiness",
          "name": `Webronic ${cityName}`,
        },
        "areaServed": {
          "@type": "City",
          "name": cityName,
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Why choose Webronic for software development in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We combine global engineering talent with deep understanding of the ${countryName} market, ensuring scalable, high-performance solutions for local enterprises.`,
            },
          },
          {
            "@type": "Question",
            "name": `What services do you offer in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide custom software engineering, IoT solutions, AI/ML integration, Cloud & DevOps services, and complete digital transformation consulting.",
            },
          },
        ],
      },
    ],
  };

  // --- Map to Universal Component Data Types ---
  const heroData: ServicePageData['hero'] = {
    badge: "Regional Tech Hub",
    titlePrefix: "Premier Software & IT Consulting in",
    titleHighlight: `${cityName}, ${countryName}`,
    description: `Accelerating digital innovation for enterprises and fast-growing startups across ${countryName}.`,
    features: ["Custom Software", "Cloud DevOps", "IoT Ecosystems", "AI & Machine Learning"],
    ctaPrimary: "Discuss Your Project",
  };

  const overviewData: ServicePageData['overview'] = {
    badge: `Local Expertise in ${cityName}`,
    heading: "Bridging the gap between technical challenges and",
    highlight: "business outcomes",
    content: [
      `Are you looking for a trusted technology partner in ${cityName}? We engineer scalable software, architect robust cloud infrastructure, and build intelligent AI and IoT ecosystems tailored to your business goals.`,
      `In today's highly competitive market in ${cityName}, relying on generic off-the-shelf software is no longer enough. Whether you need a cross-platform mobile application, automated DevOps CI/CD pipelines, or an unmanned IoT retail solution, our dedicated engineering teams deliver with a 99.7% success rate.`,
      `As a leading tech agency serving ${cityName}, we partner with you to understand your market dynamics in ${countryName}. From initial concept to enterprise-wide deployment, Webronic provides the architecture, security, and scalability required to future-proof your digital operations. Connect with our ${cityName} implementation experts today.`
    ],
    differentiators: [
      {
        title: "Local Market Understanding",
        description: `Tailored digital strategies for the ${countryName} ecosystem.`,
        icon: "Globe"
      },
      {
        title: "Enterprise Security",
        description: "Bank-grade security and robust compliance standards.",
        icon: "ShieldCheck"
      },
      {
        title: "Scalable Architecture",
        description: "Systems designed to scale effortlessly with your user base.",
        icon: "Layers"
      }
    ]
  };

  const faqData: ServicePageData['faq'] = {
    heading: `Frequently Asked Questions - ${cityName}`,
    items: [
      {
        question: `Why choose Webronic for software development in ${cityName}?`,
        answer: `We combine global engineering talent with a deep understanding of the ${countryName} market, ensuring scalable, high-performance solutions for local enterprises.`
      },
      {
        question: `Do you have active clients in ${countryName}?`,
        answer: `Yes, we support numerous digital platforms and IoT infrastructures across ${countryName}, handling millions of successful transactions and ensuring 24/7 uptime.`
      },
      {
        question: `What industries do you serve in ${cityName}?`,
        answer: `We provide cross-industry expertise, particularly specializing in retail tech, unmanned stores (IoT), SaaS platforms, and enterprise cloud migrations.`
      },
      {
        question: `How do we start a project?`,
        answer: `Simply reach out via our contact form. Our technical architects will schedule a discovery call to understand your requirements and outline a robust execution plan tailored for your ${cityName} operations.`
      }
    ]
  };

  return (
    <>
      <Script
        id={`json-ld-${cityObj.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white min-h-screen font-sora selection:bg-[#2776ea] selection:text-white">
        
        <UniversalHero data={heroData} />
        <UniversalOverview data={overviewData} />

        {/* Core Services Section using simple styled grid within container-pd */}
        <section className="container-pd py-24">
           <div className="mx-auto">
             <div className="mb-12">
               <span className="text-caption font-bold text-[#2776ea] uppercase tracking-widest block mb-2">Our Expertise</span>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900">Tech Services in <span className="text-[#2776ea]">{cityName}</span></h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {locationServices.map((service, idx) => (
                 <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#2776ea]/30 transition-all group">
                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                     {service}
                   </h3>
                   <p className="text-slate-500 text-sm leading-relaxed">
                     Custom tailored {service.toLowerCase()} strategies designed specifically for enterprises and innovators in {cityName}.
                   </p>
                 </div>
               ))}
             </div>
           </div>
        </section>

        <UniversalFAQ data={faqData} />

        {/* Internal Linking / Related Geo Pages */}
        <section className="container-pd pb-24">
          <div className="mx-auto pt-12 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Explore Other {countryName} Tech Hubs</h3>
            <div className="flex flex-wrap gap-4">
              {countryObj.cities.filter(c => c.slug !== cityObj.slug).map(c => (
                <Link 
                  key={c.slug} 
                  href={`/locations/${countryObj.countrySlug}/${c.slug}`}
                  className="px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-bold hover:bg-[#2776ea] hover:text-white transition-colors"
                >
                  Software Development in {c.name}
                </Link>
              ))}
              <Link 
                href="/services"
                className="px-4 py-2 rounded-lg bg-slate-50 text-[#2776ea] text-sm font-bold hover:bg-[#2776ea]/10 transition-colors"
              >
                View All Global Services →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Contact />
    </>
  );
}
