import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import GlobalContactDetector from "@/components/UI/GlobalContactDetector";

const buildDate = new Date().toISOString().split('T')[0];

// --- AI SEO & Structured Data (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.webronic.com/#organization",
      "name": "Webronic Industries",
      "url": "https://www.webronic.com",
      "datePublished": "2024-01-01",
      "dateModified": buildDate,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.webronic.com/assets/webonic2.png",
        "width": 112,
        "height": 112
      },
      "sameAs": [
        "https://twitter.com/webronic",
        "https://www.linkedin.com/company/webronic/",
        "https://www.facebook.com/webronic/",
        "https://www.instagram.com/webronic.official/",
        "https://www.youtube.com/@WEBRONIC/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-72000-88500",
        "contactType": "customer service",
        "areaServed": ["IN", "EU"],
        "availableLanguage": ["en"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.webronic.com/#website",
      "url": "https://www.webronic.com",
      "name": "Webronic Industries",
      "description": "Global IT Services, AI Solutions & Digital Transformation",
      "datePublished": "2024-01-01",
      "dateModified": buildDate,
      "publisher": {
        "@id": "https://www.webronic.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.webronic.com/#service",
      "url": "https://www.webronic.com",
      "name": "Webronic AI & IT Solutions",
      "description": "Enterprise technology partner delivering AI/ML solutions and digital transformation.",
      "image": "https://www.webronic.com/og-image.jpg",
      "datePublished": "2024-01-01",
      "dateModified": buildDate,
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Webronic Industries | Global IT Services, AI Solutions & Digital Transformation",
  description: "Leading IT services company delivering AI/ML solutions, cloud services, and digital transformation across India and Europe. Enterprise technology partner for global success.",
  keywords: ["IT services company", "AI solutions", "cloud services", "digital transformation", "enterprise software", "technology consulting"],
  applicationName: "Webronic Industries",
  authors: [{ name: "Webronic Industries", url: "https://www.webronic.com" }],
  creator: "Webronic Industries",
  publisher: "Webronic Industries",
  metadataBase: new URL("https://www.webronic.com"),
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://www.webronic.com/feed.xml",
    },
  },
  openGraph: {
    title: "Webronic Industries | Global IT Services & AI Solutions",
    description: "Leading IT services company delivering AI/ML solutions, cloud services, and digital transformation across India and Europe.",
    url: "https://www.webronic.com",
    siteName: "Webronic Industries",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webronic Industries - Global IT Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webronic Industries | Global IT Services",
    description: "Enterprise technology partner for digital transformation and AI innovation",
    images: ["/og-image.jpg"],
    creator: "@webronic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Hreflang — International targeting */}
        <link rel="alternate" hrefLang="en" href="https://webronic.com" />
        <link rel="alternate" hrefLang="en-SE" href="https://webronic.com" />
        <link rel="alternate" hrefLang="en-NO" href="https://webronic.com" />
        <link rel="alternate" hrefLang="en-IN" href="https://webronic.com" />
        <link rel="alternate" hrefLang="x-default" href="https://webronic.com" />
        <link rel="alternate" type="application/rss+xml" title="Webronic RSS Feed" href="https://webronic.com/feed.xml" />

        {/* Preconnect & DNS Prefetch — Performance hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Tag Manager - HEAD */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MRCPLV59');
            `,
          }}
        />
      </head>

      <body className="font-sora antialiased bg-white text-slate-900 flex flex-col min-h-screen">
        {/* Skip-to-content link — first focusable element for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#2776ea] focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:text-sm focus:font-bold focus:uppercase focus:tracking-wider focus:shadow-lg"
        >
          Skip to main content
        </a>
        {/* Google Tag Manager (noscript) - IMMEDIATELY AFTER BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRCPLV59"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
        <GlobalContactDetector />

        <header id="main-header" className="relative z-[100]">
          <Navbar />
        </header>

        <main id="main-content" className="flex-1">
          <Providers>{children}</Providers>
        </main>

        <footer id="main-footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}