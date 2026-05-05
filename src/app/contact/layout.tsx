import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Webronic",
  description: "Get in touch with Webronic's engineering experts. Whether you need custom software development, DevOps support, or an IoT ecosystem, our solution architects are ready to help.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
