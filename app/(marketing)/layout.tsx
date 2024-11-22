import { NavBar } from "@/components/navbar";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Everything AI",
  description:
    "Everything AI is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </main>
  );
}
