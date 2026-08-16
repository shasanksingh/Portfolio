import type { Metadata, Viewport } from "next";

import { GsapReveal } from "@/components/providers/gsap-reveal";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { profile } from "@/lib/content";

import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('nextgen-theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var n=t||p;document.documentElement.classList.toggle('dark',n==='dark');document.documentElement.dataset.theme=n;}catch(e){}",
          }}
        />
        <SmoothScroll />
        <GsapReveal />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
