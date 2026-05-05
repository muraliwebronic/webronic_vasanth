import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Webronic",
  description: "Webronic's privacy policy detailing how we collect, use, and protect your data.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
