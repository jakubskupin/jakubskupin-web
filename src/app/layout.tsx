import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://jakubskupin.cz";

export const metadata: Metadata = {
  title: "Jakub Skupin — Personal brand × AI × Marketing",
  description:
    "Pojmenuju, čím jste výjimeční — a dám tomu tvar. Strategie, web a obsah pro experty, kteří mají co říct, ale online to není vidět.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Jakub Skupin — Personal brand × AI × Marketing",
    description:
      "Pojmenuju, čím jste výjimeční. A dám tomu tvar. Pro experty, kteří mají co říct — ale online to není vidět.",
    url: siteUrl,
    siteName: "Jakub Skupin",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jakub Skupin",
  url: siteUrl,
  description:
    "Pojmenuju, čím jste výjimeční — a dám tomu tvar. Strategie, web a obsah pro experty, kteří mají co říct, ale online to není vidět.",
  jobTitle: "Personal Brand Strategist",
  knowsAbout: [
    "Personal branding",
    "AI v marketingu",
    "Positioning",
    "Brand strategie",
    "Web development",
  ],
  sameAs: ["https://www.linkedin.com/in/jakubskupin/"],
  offers: [
    {
      "@type": "Offer",
      name: "X-Factor Sprint",
      description:
        "Positioning, messaging, vizuální směr a web do 2 pracovních dní.",
      priceCurrency: "CZK",
      price: "42500",
    },
    {
      "@type": "Offer",
      name: "AI Research Sprint",
      description:
        "Hloubková strategická analýza za dny, ne týdny.",
      priceCurrency: "CZK",
      price: "12500",
    },
    {
      "@type": "Offer",
      name: "Content Partner",
      description:
        "Obsahový sparring partner pro tvůrce a CEO.",
      priceCurrency: "CZK",
      price: "35000",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${syne.variable} ${manrope.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-text focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Přeskočit na obsah
        </a>
        {children}
      </body>
    </html>
  );
}
