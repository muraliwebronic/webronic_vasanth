import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services & Solutions | Webronic",
  description: "Explore Webronic's comprehensive IT services, software development, and AI solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
