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
  title: "SpiceProp - Premier Prop Trading Firm",
  description: "Join SpiceProp, a leading prop trading firm. Get funded up to €100K with our challenges and scale your trading career today.",

  // Keywords targeting - Core focus
  keywords: [
    "prop trading firm",
    "funded trading account",
    "prop firm challenge",
    "forex funded account",
    "spiceprop",
    "best prop firm",
    "prop trading",
    "funded trader"
  ],

  // Canonical URL
  alternates: {
    canonical: "https://promo.spiceprop.com",
  },

  // Open Graph for social sharing
  openGraph: {
    title: "SpiceProp - Premier Prop Trading Firm",
    description: "Join SpiceProp and get funded up to €100K. Start your prop trading journey today.",
    url: "https://promo.spiceprop.com",
    siteName: "SpiceProp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpiceProp - Prop Trading Firm",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SpiceProp - Premier Prop Trading Firm",
    description: "Funded trading accounts up to €100K. Join SpiceProp today.",
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
    "description": "Leading prop trading firm offering funded accounts up to €100K. Best FTMO and FundedNext alternative.",
    "url": "https://sice-prop.vercel.app",
    "logo": "https://sice-prop.vercel.app/images/logo.png",
    "priceRange": "$$",
    "offers": {
      "@type": "Offer",
      "name": "SpiceProp Trading Challenges",
      "description": "Get funded and start trading with SpiceProp.",
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
