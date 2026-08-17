import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  themeColor: "#0B0F17",
};

export const metadata: Metadata = {
  title: "Deepanshu | Network Engineer — Cybersecurity & OT Security",
  description:
    "Professional portfolio of Deepanshu — Network Engineer with hands-on experience across telecom NOC operations, enterprise network infrastructure, Fortinet firewall deployment, and industrial OT/IT security.",
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
  authors: [{ name: "Deepanshu" }],
  robots: "index, follow",
  openGraph: {
    title: "Deepanshu | Network Engineer — Cybersecurity & OT Security",
    description:
      "Professional portfolio of Deepanshu — Network Engineer with hands-on experience across telecom NOC operations, enterprise network infrastructure, Fortinet firewall deployment, and industrial OT/IT security.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu | Network Engineer — Cybersecurity & OT Security",
    description:
      "Professional portfolio of Deepanshu — Network Engineer with hands-on experience across telecom NOC operations, enterprise network infrastructure, Fortinet firewall deployment, and industrial OT/IT security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-cyber-bg text-slate-100 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
