import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Webronic",
  description: "Discover how Webronic provides tailored IT solutions and software for various industries including healthcare, finance, and retail.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
