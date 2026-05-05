import Link from "next/link";
import { locationsData } from "./data";
import SectionHeader from "@/components/common/SectionHeader";
import Contact from "@/section/home/Contact";

export const metadata = {
  title: "Global Locations & Geo-Targeted Hubs | Webronic",
  description: "Explore Webronic's digital transformation and software engineering hubs across Sweden, Norway, India, and beyond.",
};

export default function LocationsDirectory() {
  return (
    <>
      <main className="bg-white min-h-screen pt-32 pb-24 font-sora selection:bg-[#2776ea] selection:text-white">
        <div className=" container-pd mx-auto">
          <div className="max-w-3xl mb-16 ">
            <SectionHeader
              badge="Our Global Presence"
              title="Geo-Targeted"
              highlight="Service Hubs"
              description="We deliver world-class software development, DevOps, IoT, and AI solutions from our specialized technology centers to clients across the globe."
              centered={false}
              className="mb-0"
              isH1={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {locationsData.map((country) => (
              <div key={country.countrySlug} className="flex flex-col gap-6">
                <h2 className="text-2xl font-black text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#2776ea]/10 text-[#2776ea] flex items-center justify-center text-sm">
                    {country.countryName.charAt(0)}
                  </span>
                  {country.countryName}
                </h2>
                <ul className="flex flex-col gap-3">
                  {country.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/locations/${country.countrySlug}/${city.slug}`}
                        className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#2776ea]/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                      >
                        <span className="font-bold text-slate-700 group-hover:text-[#2776ea] transition-colors">
                          {city.name}
                        </span>
                        <span className="text-slate-300 group-hover:text-[#2776ea] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
