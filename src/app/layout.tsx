import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FunnelClickTracker } from "@/components/analytics/FunnelClickTracker";
import { MobileStickyBar } from "@/components/ui/MobileStickyBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/structuredData";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
  authors: [{ name: siteConfig.legalBusinessName }],
  creator: siteConfig.legalBusinessName,
  icons: {
    icon: "/cajas-tanques-express-logo-transparent.png",
    shortcut: "/cajas-tanques-express-logo-transparent.png",
    apple: "/cajas-tanques-express-logo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "es_US",
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
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];
t=b.createElement(e);t.async=!0;
t.src=v;
s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)
}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1048799951233624');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1048799951233624&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-neutral-900 antialiased selection:bg-brand-900 selection:text-white">
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-M2Z84LZP"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyBar />
        <FunnelClickTracker />
        <Analytics />
      </body>
    </html>
  );
}
