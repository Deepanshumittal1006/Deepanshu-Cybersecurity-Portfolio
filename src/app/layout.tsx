import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalSound } from "@/components/common/GlobalSound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070B14",
};

export const metadata: Metadata = {
  title: "Deepanshu Mittal | Network Engineer — Cybersecurity & OT Security",
  description:
    "Professional portfolio of Deepanshu Mittal — Network Engineer with hands-on experience across telecom NOC operations, enterprise network infrastructure, Fortinet firewall deployment, and industrial OT/IT security.",
  keywords: [
    "Network Engineer",
    "Cybersecurity",
    "OT Security",
    "NOC Engineer",
    "Telecom Operations",
    "Industrial Networking",
    "Fortinet Firewall",
    "Hirschmann",
    "KVM Virtualization",
  ],
  authors: [{ name: "Deepanshu Mittal" }],
  robots: "index, follow",
  openGraph: {
    title: "Deepanshu Mittal | Network Engineer — Cybersecurity & OT Security",
    description:
      "Professional portfolio of Deepanshu Mittal — Network Engineer with hands-on experience across telecom NOC operations, enterprise network infrastructure, Fortinet firewall deployment, and industrial OT/IT security.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Mittal | Network Engineer — Cybersecurity & OT Security",
    description:
      "Professional portfolio of Deepanshu Mittal — Network Engineer with hands-on experience across telecom NOC operations, enterprise network infrastructure, Fortinet firewall deployment, and industrial OT/IT security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-cyber-bg text-slate-100 min-h-screen flex flex-col antialiased bg-tech-grid relative">
        <GlobalSound />
        <div className="fixed inset-0 z-[-1] bg-dot-pattern opacity-50 pointer-events-none" />
        
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
