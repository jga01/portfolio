import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CustomCursor } from "@/components/ui/Cursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiago Goossen — Fullstack Engineer",
  description:
    "Fullstack engineer building production systems from 3D graphics engines in C to enterprise AI-powered SaaS platforms. Based in Fortaleza, Brazil.",
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
      "Fullstack engineer building production systems from 3D graphics engines in C to enterprise AI-powered SaaS platforms.",
    type: "website",
    locale: "en_US",
    siteName: "Tiago Goossen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiago Goossen — Fullstack Engineer",
    description:
      "Fullstack engineer building production systems from 3D graphics engines in C to enterprise AI-powered SaaS platforms.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <GrainOverlay />
          <CustomCursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
