import Hero from "@/section/home/Hero"
import Service from "@/section/home/service/Service"
import Client from "@/section/home/Client"
import Partner from "@/section/home/Partner"
import Contact from "@/section/home/Contact"
import Location from "@/section/home/Location"
import Career from "@/section/home/Career"
import IndustryFocus from "@/section/home/IndustryFocus"
import WhyChooseUs from "@/section/home/WhyChooseUs"
import LatestInsights from "@/section/home/LatestInsights"


export default function page() {
  return (
    <>
    <Hero />
    <Service />
    <IndustryFocus />
    <WhyChooseUs />
    <Partner />
    <Client />
    {/* <LatestInsights /> */}
    <Career />
    <Location />
    <Contact />
    </>
  )
}
