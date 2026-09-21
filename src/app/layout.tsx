import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cities, services, site } from "@/lib/site";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SQ Roofing | Roofing Contractor in Boulder & Across Colorado",
    template: `%s | ${site.name}`,
  },
  description:
    "SQ Roofing installs, repairs, and restores roofs across Colorado. Free documented inspections, hail and storm damage insurance claim help, and work that holds up. Based in Boulder. Call 303-579-5874.",
  keywords: [
    "roofing contractor Colorado",
    "Boulder roofing company",
    "roof replacement Colorado",
    "hail damage roof repair",
    "roof repair Denver",
    "storm damage roofing",
    "free roof inspection Colorado",
    "insurance claim roofing contractor",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "SQ Roofing | Roofing Contractor in Boulder & Across Colorado",
    description:
      "Free documented roof inspections, hail and storm damage claim help, replacement, and repair across Colorado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQ Roofing | Colorado Roofing Contractor",
    description:
      "Free documented roof inspections and storm damage claim help across Colorado.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

/**
 * LocalBusiness structured data. This is what feeds Google's local pack and
 * the knowledge panel, so it matters as much as any page copy.
 *
 * TODO(Barry): once the Google Business Profile is live, add its URL to
 * site.googleBusinessUrl and the street address to site.street so both
 * appear here. Google cross-checks this against the GBP listing.
 */
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description:
      "Roofing contractor serving Boulder and the state of Colorado. Roof replacement, repair, hail and storm damage restoration, inspections, gutters, and commercial roofing.",
    url: site.url,
    telephone: site.phone,
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.baseCity,
      addressRegion: site.baseState,
      addressCountry: "US",
      ...(site.street ? { streetAddress: site.street } : {}),
      ...(site.postalCode ? { postalCode: site.postalCode } : {}),
    },
    ...(site.googleBusinessUrl ? { sameAs: [site.googleBusinessUrl] } : {}),
    areaServed: [
      { "@type": "State", name: "Colorado" },
      ...cities.map((c) => ({
        "@type": "City",
        name: c.name,
        containedInPlace: { "@type": "State", name: "Colorado" },
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // Tells Next.js the smooth scrolling in globals.css is intentional, so
      // it doesn't warn and so route transitions still jump instantly.
      data-scroll-behavior="smooth"
      // `js` is rendered here on the server rather than added by a script, so
      // the scroll-reveal starting state is present before first paint with no
      // hydration mismatch. The <noscript> below cancels it entirely.
      className={`js ${instrumentSerif.variable} ${inter.variable}`}
    >
      <head>
        <noscript>
          <style>{`.js .reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-paper antialiased">
        <LocalBusinessSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
