import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Exchange Policy | Webronic",
  description: "Learn about Webronic's shipping, exchange, and delivery policies for our products and services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
