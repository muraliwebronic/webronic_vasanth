import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects & Portfolio | Webronic",
  description: "View Webronic's portfolio of successful IT projects, software solutions, and digital transformations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
