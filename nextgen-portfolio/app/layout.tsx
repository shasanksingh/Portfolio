import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";

import { GsapReveal } from "@/components/providers/gsap-reveal";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { profile } from "@/lib/content";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shashank-singh.ai"),
  title: {
    default: "Shashank Singh | AI Engineer",
    template: "%s | Shashank Singh",
  },
  description: profile.positioning,
  keywords: [
    "Shashank Singh",
    "AI Engineer",
    "RAG Pipelines",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "LLM Applications",
    "Agentic AI",
    "Vector Search",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Shashank Singh | AI Engineer",
    description: profile.positioning,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6fbff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <SmoothScroll />
        <GsapReveal />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
