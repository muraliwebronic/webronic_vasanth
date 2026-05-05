import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Webronic",
  description: "Understand Webronic's cancellation and refund policies for our IT and software services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
