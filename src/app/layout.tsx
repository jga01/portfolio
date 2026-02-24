import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CustomCursor } from "@/components/ui/Cursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { PageTransition } from "@/components/ui/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tiago Goossen",
  description:
    "Fullstack engineer shipping multi-tenant SaaS, AI agent systems, and marketplaces.",
  keywords: [
    "fullstack developer",
    "software engineer",
    "react",
    "next.js",
    ".net",
    "python",
    "AI agents",
    "portfolio",
  ],
  authors: [{ name: "Tiago Goossen de Andrade" }],
  openGraph: {
    title: "Tiago Goossen — Fullstack Engineer",
    description:
      "Fullstack engineer shipping multi-tenant SaaS, AI agent systems, and marketplaces.",
    type: "website",
    locale: "en_US",
    siteName: "Tiago Goossen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiago Goossen — Fullstack Engineer",
    description:
      "Fullstack engineer shipping multi-tenant SaaS, AI agent systems, and marketplaces.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <GrainOverlay />
          <CustomCursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
