import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalContactDetector from "@/components/UI/GlobalContactDetector";


export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noimageindex: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        {/* HARD META FALLBACK (even if metadata fails) */}
        <meta name="robots" content="noindex, nofollow, noimageindex, nosnippet, nocache" />
        <meta name="googlebot" content="noindex, nofollow, noimageindex, nosnippet, nocache" />
      </head>

      <body className="font-sora antialiased bg-white text-slate-900 flex flex-col min-h-screen">
        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
        <GlobalContactDetector />

        <header id="main-header" className="relative z-[100]">
          <Navbar />
        </header>

        <main className="flex-1">
          <Providers>{children}</Providers>
        </main>

        <footer id="main-footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}