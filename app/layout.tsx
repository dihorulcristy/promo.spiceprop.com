import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Primary SEO - Core Keywords Focus
  title: "Free Prop Firm Trial | €6K Demo Account - SpiceProp",
  description: "Get your FREE prop firm trial today! Test SpiceProp for free with a €6K prop trading demo account. Start your funded account free practice now - no deposit required.",

  // Keywords targeting - Core focus
  keywords: [
    "free prop firm trial",
    "prop trading demo account free",
    "test spiceprop for free",
    "funded account free practice",
    "free funded account",
    "prop firm demo",
    "free trading challenge",
    "prop trading practice account",
    "spiceprop free trial"
  ],

  // Canonical URL
  alternates: {
    canonical: "https://promo.spiceprop.com",
  },

  // Open Graph for social sharing
  openGraph: {
    title: "Free Prop Firm Trial | €6K Demo Account - SpiceProp",
    description: "Get your FREE prop trading demo account. Test SpiceProp for free with €6K funded account practice. No deposit required!",
    url: "https://promo.spiceprop.com",
    siteName: "SpiceProp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpiceProp - Free Prop Firm Trial",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Free Prop Firm Trial | €6K Demo - SpiceProp",
    description: "FREE prop trading demo account. Test SpiceProp for free. €6K funded account practice - no deposit required!",
    images: ["/images/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional SEO
  authors: [{ name: "SpiceProp" }],
  creator: "SpiceProp",
  publisher: "SpiceProp",
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "SpiceProp",
    "description": "Free prop firm trial with €6K demo account. Practice prop trading risk-free. Best FTMO and FundedNext alternative.",
    "url": "https://sice-prop.vercel.app",
    "logo": "https://sice-prop.vercel.app/images/logo.png",
    "priceRange": "Free",
    "offers": {
      "@type": "Offer",
      "name": "Free Prop Firm Trial",
      "description": "€6K funded account demo - 100% FREE with code SPICEFREE",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "10000"
    },
    "sameAs": [
      "https://spiceprop.com"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDHDKWJ2');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDHDKWJ2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
