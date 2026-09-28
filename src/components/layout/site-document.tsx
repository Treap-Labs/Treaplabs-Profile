/* eslint-disable @next/next/no-head-element, @next/next/no-before-interactive-script-outside-document -- Shared HTML document rendered by both App Router root layouts. */
import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SitePathProvider } from "@/components/layout/site-path-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/lib/constants";

import "@/app/globals.css";

const themeScript = `
  try {
    var savedTheme = localStorage.getItem("treaplabs-theme");
    document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
  }
`;

const display = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const globalSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/icon-512.png`,
    image: `${siteConfig.url}/images/treaplabs-og.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: { "@type": "Country", name: "Indonesia" },
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      "Mobile app development",
      "Website development",
      "Artificial intelligence",
      "AI automation",
      "AI integration",
      "Machine learning",
      "Technology consulting",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: ["id-ID", "en-US"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
  },
];

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icons/treaplabs.png", type: "image/png" }],
    apple: [{ url: "/icons/treaplabs.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111113" },
    { media: "(prefers-color-scheme: light)", color: "#eae8e2" },
  ],
};

export function SiteDocument({ children, locale, initialPathname }: {
  children: ReactNode;
  locale: Locale;
  initialPathname?: string;
}) {
  return (
    <html lang={locale} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K36JZ8WH');
          `}
        </Script>
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K36JZ8WH"
            height="0"
            width="0"
            className="hidden invisible"
            title="Google Tag Manager"
          />
        </noscript>
        <JsonLd data={globalSchema} />
        <SitePathProvider initialPathname={initialPathname}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </SitePathProvider>
      </body>
    </html>
  );
}
