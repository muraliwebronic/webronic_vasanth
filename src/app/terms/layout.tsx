import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Webronic",
  description: "Read our terms and conditions for using Webronic's IT services and solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
