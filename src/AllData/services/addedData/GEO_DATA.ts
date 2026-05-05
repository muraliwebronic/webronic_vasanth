import { DEVOPS_DATA } from "@/AllData/services/mainData/DEVOPS_DATA";
import { IOT_DATA } from "@/AllData/services/mainData/IOT_DATA";
import { SOFTWARE_DATA } from "@/AllData/services/mainData/SOFTWARE_DATA";
import { ServicePageData } from "../types";

const internalLinks = [
  { label: "DevOps Services", href: "/service?category=devops" },
  { label: "IoT Development", href: "/service?category=iot-solutions" },
  { label: "DevOps Stockholm", href: "/service?category=devops-services-stockholm-sweden" },
  { label: "DevOps Norway", href: "/service?category=devops-services-norway" },
  { label: "IoT Sweden", href: "/service?category=iot-development-sweden" },
  { label: "IoT Norway", href: "/service?category=iot-development-norway" },
  { label: "Software Stockholm", href: "/service?category=software-development-stockholm" },
  { label: "Software Oslo", href: "/service?category=software-development-oslo-norway" },
];

export const GEO_DATA: Record<string, ServicePageData> = {
  "devops-services-stockholm-sweden": {
    ...DEVOPS_DATA,
    id: "devops-services-stockholm-sweden",
    areaServed: "Stockholm, Sweden",
    serviceType: "DevOps",
    metaTitle: "DevOps Services in Stockholm, Sweden | Webronic",
    metaDescription: "Webronic provides elite DevOps consulting, CI/CD automation, and cloud infrastructure services for enterprises and startups across Stockholm, Sweden.",
    localClientNote: "Webronic has extensive experience empowering Stockholm-based enterprises. Our DevOps architects have modernized cloud infrastructure for leading Swedish tech innovators, ensuring 99.9% uptime and rapid deployment cycles.",
    internalLinks,
    hero: { ...DEVOPS_DATA.hero, titlePrefix: "DevOps Services in", titleHighlight: "Stockholm, Sweden", description: "Accelerate your delivery pipelines with Webronic's premier DevOps engineers right here in Stockholm." },
    faq: {
      heading: "Stockholm DevOps FAQs",
      items: [
        { question: "Why choose Webronic for DevOps in Stockholm?", answer: "We combine global engineering standards with deep knowledge of the Swedish tech ecosystem." },
        { question: "Do you support AWS and Azure migrations?", answer: "Yes, our Stockholm team specializes in multi-cloud and hybrid infrastructure transformations." }
      ]
    }
  },
  "devops-services-norway": {
    ...DEVOPS_DATA,
    id: "devops-services-norway",
    areaServed: "Norway",
    serviceType: "DevOps",
    metaTitle: "DevOps Services in Norway | Webronic",
    metaDescription: "Transform your software delivery with Webronic's DevOps services in Norway. We specialize in automated pipelines, Kubernetes, and cloud security.",
    localClientNote: "From Oslo to Bergen, Webronic supports Norwegian enterprises with secure, scalable cloud infrastructure and continuous delivery pipelines.",
    internalLinks,
    hero: { ...DEVOPS_DATA.hero, titlePrefix: "DevOps Services in", titleHighlight: "Norway", description: "Modernize your cloud infrastructure with Norway's trusted DevOps partner." },
  },
  "iot-development-sweden": {
    ...IOT_DATA,
    id: "iot-development-sweden",
    areaServed: "Sweden",
    serviceType: "IoT Development",
    metaTitle: "IoT Development Company in Sweden | Webronic",
    metaDescription: "Leading IoT development company in Sweden. Webronic builds scalable connected device ecosystems, smart retail solutions, and industrial IoT platforms.",
    localClientNote: "Webronic is the technology partner behind StoreTech, powering over 150 unmanned retail stores across Sweden with seamless IoT integration.",
    internalLinks,
    hero: { ...IOT_DATA.hero, titlePrefix: "IoT Development in", titleHighlight: "Sweden", description: "Building the next generation of connected ecosystems for Swedish enterprises." },
  },
  "iot-development-norway": {
    ...IOT_DATA,
    id: "iot-development-norway",
    areaServed: "Norway",
    serviceType: "IoT Development",
    metaTitle: "IoT Development Services in Norway | Webronic",
    metaDescription: "Expert IoT solutions for Norwegian businesses. Webronic delivers end-to-end connected ecosystems for smart industries and unmanned retail.",
    localClientNote: "Our IoT infrastructure powers innovative Norwegian businesses like Tanlux, enabling 24/7 autonomous studio operations across the country.",
    internalLinks,
    hero: { ...IOT_DATA.hero, titlePrefix: "IoT Development in", titleHighlight: "Norway", description: "Empowering Norway's digital transformation with robust IoT infrastructure." },
  },
  "software-development-stockholm": {
    ...SOFTWARE_DATA,
    id: "software-development-stockholm",
    areaServed: "Stockholm, Sweden",
    serviceType: "Software Development",
    metaTitle: "Software Development Company in Stockholm | Webronic",
    metaDescription: "Partner with Stockholm's premier software development agency. We engineer scalable web, mobile, and enterprise applications for global impact.",
    localClientNote: "Webronic provides dedicated software engineering teams to Stockholm startups and enterprises, delivering high-performance scalable architectures.",
    internalLinks,
    hero: { ...SOFTWARE_DATA.hero, titlePrefix: "Software Development in", titleHighlight: "Stockholm", description: "Custom software engineering for Stockholm's most ambitious brands." },
  },
  "software-development-oslo-norway": {
    ...SOFTWARE_DATA,
    id: "software-development-oslo-norway",
    areaServed: "Oslo, Norway",
    serviceType: "Software Development",
    metaTitle: "Software Development in Oslo, Norway | Webronic",
    metaDescription: "Webronic delivers custom software engineering, SaaS development, and digital transformation solutions for enterprises in Oslo, Norway.",
    localClientNote: "We build scalable software ecosystems for Oslo-based innovators, ensuring enterprise-grade security and modern technology stacks.",
    internalLinks,
    hero: { ...SOFTWARE_DATA.hero, titlePrefix: "Software Development in", titleHighlight: "Oslo, Norway", description: "Engineering the future of Norwegian digital businesses." },
  },
  
  // --- ADDED INDIAN CITIES ---
  "software-development-bangalore-india": {
    ...SOFTWARE_DATA,
    id: "software-development-bangalore-india",
    areaServed: "Bangalore, India",
    serviceType: "Software Development",
    metaTitle: "Software Development Company in Bangalore, India | Webronic",
    metaDescription: "Partner with Webronic, a top software development company in Bangalore. We build scalable enterprise software, mobile apps, and SaaS solutions.",
    localClientNote: "Operating in the Silicon Valley of India, Webronic provides elite engineering talent to fast-growing startups and enterprises in Bangalore.",
    internalLinks,
    hero: { ...SOFTWARE_DATA.hero, titlePrefix: "Software Development in", titleHighlight: "Bangalore", description: "World-class software engineering from India's tech capital." },
  },
  "devops-services-hyderabad-india": {
    ...DEVOPS_DATA,
    id: "devops-services-hyderabad-india",
    areaServed: "Hyderabad, India",
    serviceType: "DevOps",
    metaTitle: "DevOps Consulting Services in Hyderabad | Webronic",
    metaDescription: "Webronic offers premium DevOps consulting, CI/CD pipeline automation, and cloud architecture services for enterprises in Hyderabad, India.",
    localClientNote: "Our Hyderabad-based engineering hub empowers global and local businesses with automated, highly secure, and scalable cloud infrastructures.",
    internalLinks,
    hero: { ...DEVOPS_DATA.hero, titlePrefix: "DevOps Services in", titleHighlight: "Hyderabad", description: "Accelerate your software delivery with elite DevOps talent in Hyderabad." },
  },
  "iot-development-chennai-india": {
    ...IOT_DATA,
    id: "iot-development-chennai-india",
    areaServed: "Chennai, India",
    serviceType: "IoT Development",
    metaTitle: "IoT Development Company in Chennai | Webronic",
    metaDescription: "Webronic delivers end-to-end IoT solutions in Chennai, connecting smart devices, industrial automation, and enterprise platforms.",
    localClientNote: "Webronic supports Chennai's thriving industrial and tech sectors with robust IoT ecosystems and seamless hardware-software integration.",
    internalLinks,
    hero: { ...IOT_DATA.hero, titlePrefix: "IoT Development in", titleHighlight: "Chennai", description: "Building intelligent connected systems for Chennai's enterprises." },
  },
  "software-development-mumbai-india": {
    ...SOFTWARE_DATA,
    id: "software-development-mumbai-india",
    areaServed: "Mumbai, India",
    serviceType: "Software Development",
    metaTitle: "Software Development Services in Mumbai | Webronic",
    metaDescription: "Webronic provides bespoke software development and digital transformation solutions for financial and corporate enterprises in Mumbai, India.",
    localClientNote: "Partnering with Mumbai's leading enterprises to deliver secure, high-performance financial software and scalable corporate architectures.",
    internalLinks,
    hero: { ...SOFTWARE_DATA.hero, titlePrefix: "Software Development in", titleHighlight: "Mumbai", description: "Enterprise-grade software engineering for India's financial capital." },
  },

  // --- ADDED SWEDEN CITIES ---
  "software-development-gothenburg-sweden": {
    ...SOFTWARE_DATA,
    id: "software-development-gothenburg-sweden",
    areaServed: "Gothenburg, Sweden",
    serviceType: "Software Development",
    metaTitle: "Software Development Company in Gothenburg | Webronic",
    metaDescription: "Expert software development services in Gothenburg, Sweden. Webronic engineers secure web and mobile applications for Nordic enterprises.",
    localClientNote: "Webronic provides dedicated engineering support to Gothenburg's industrial and tech sectors, driving digital innovation across the region.",
    internalLinks,
    hero: { ...SOFTWARE_DATA.hero, titlePrefix: "Software Development in", titleHighlight: "Gothenburg", description: "Custom software solutions engineered for Gothenburg's innovators." },
  },
  "devops-services-malmo-sweden": {
    ...DEVOPS_DATA,
    id: "devops-services-malmo-sweden",
    areaServed: "Malmö, Sweden",
    serviceType: "DevOps",
    metaTitle: "DevOps Services in Malmö, Sweden | Webronic",
    metaDescription: "Webronic delivers top-tier DevOps automation, cloud scaling, and secure infrastructure services for startups and enterprises in Malmö, Sweden.",
    localClientNote: "Our DevOps architects help Malmö-based companies achieve rapid deployment cycles and 99.9% uptime with modern cloud-native strategies.",
    internalLinks,
    hero: { ...DEVOPS_DATA.hero, titlePrefix: "DevOps Services in", titleHighlight: "Malmö, Sweden", description: "Transforming cloud infrastructure for Malmö's tech ecosystem." },
  },

  // --- ADDED NORWAY CITIES ---
  "software-development-bergen-norway": {
    ...SOFTWARE_DATA,
    id: "software-development-bergen-norway",
    areaServed: "Bergen, Norway",
    serviceType: "Software Development",
    metaTitle: "Software Development in Bergen, Norway | Webronic",
    metaDescription: "Webronic offers advanced software engineering, marine tech solutions, and digital transformation services for enterprises in Bergen, Norway.",
    localClientNote: "Supporting Bergen's vibrant business landscape with robust, secure, and highly scalable custom software applications.",
    internalLinks,
    hero: { ...SOFTWARE_DATA.hero, titlePrefix: "Software Development in", titleHighlight: "Bergen, Norway", description: "Next-generation software engineering for Bergen's enterprises." },
  },

 
};
