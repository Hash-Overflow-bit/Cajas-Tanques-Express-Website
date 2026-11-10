import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/ui/MobileStickyBar";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "CAJAS & TANQUES EXPRESS",
    "envio de cajas a republica dominicana",
    "envio de tanques a republica dominicana",
    "recogida de cajas",
    "recogida de tanques",
    "shipping to dominican republic",
    "envios puerta a puerta rd",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: "/cajas-tanques-express-logo-transparent.png",
    shortcut: "/cajas-tanques-express-logo-transparent.png",
    apple: "/cajas-tanques-express-logo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-canvas text-neutral-900 antialiased selection:bg-brand-900 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
