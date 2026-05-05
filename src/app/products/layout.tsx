import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Tech Innovations | Webronic",
  description: "Explore Webronic's proprietary product ecosystem including StoreTech, Tanlux, and advanced IoT solutions designed to bridge complex data with operational excellence.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
