import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Primary SEO - Targeting "free prop firm trial" keywords
  title: "Free Prop Firm Trial | €6K Funded Account Demo - SpiceProp",
  description: "Get your FREE prop firm trial today! Practice prop trading with a €6K demo account. Best FTMO free trial alternative. No deposit required. Start your funded account free practice now.",

  // Keywords targeting
  keywords: [
    "free prop firm trial",
    "prop trading demo account free",
    "test spiceprop for free",
    "funded account free practice",
    "FTMO free trial alternative",
    "fundednext demo account",
    "free funded account",
    "prop firm demo",
    "free trading challenge",
    "prop trading practice account"
  ],

  // Canonical URL
  alternates: {
    canonical: "https://sice-prop.vercel.app",
  },

  // Open Graph for social sharing
  openGraph: {
    title: "Free Prop Firm Trial | €6K Demo Account - SpiceProp",
    description: "Get your FREE prop trading demo account. Best FTMO & FundedNext alternative. €6K funded account practice with no deposit. Start trading risk-free today!",
    url: "https://sice-prop.vercel.app",
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
    description: "FREE prop trading demo account. Best FTMO alternative. €6K funded account practice - no deposit required!",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
