import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "A&A Auto Detailing | Premium Car Detailing in Austin, Buda, Kyle & San Marcos",
    template: "%s | A&A Auto Detailing",
  },
  description:
    "Professional mobile auto detailing serving Austin, Buda, Kyle, San Marcos, and Central Texas. Interior & exterior detailing, ceramic coating, paint correction, and more. Book your appointment today.",
  keywords: [
    "auto detailing Austin",
    "car detailing Buda",
    "car detailing Kyle TX",
    "car detailing San Marcos",
    "ceramic coating Central Texas",
    "paint correction Austin",
    "mobile detailing Texas",
    "A&A Auto Detailing",
  ],
  authors: [{ name: "A&A Auto Detailing" }],
  creator: "A&A Auto Detailing",
  metadataBase: new URL("https://anaautodetailing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A&A Auto Detailing | Premium Car Detailing in Central Texas",
    description:
      "Renew Your Ride, Refresh Your Drive. Professional car detailing in Austin, Buda, Kyle, San Marcos, and Central Texas.",
    url: "https://anaautodetailing.com",
    siteName: "A&A Auto Detailing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A&A Auto Detailing | Premium Car Detailing in Central Texas",
    description:
      "Renew Your Ride, Refresh Your Drive. Book your premium detail today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Automotive",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  "@id": "https://anaautodetailing.com/#business",
  name: "A&A Auto Detailing",
  description:
    "Professional mobile auto detailing serving Austin, Buda, Kyle, San Marcos, and Central Texas. Interior & exterior detailing, ceramic coating, and paint correction.",
  image: "https://anaautodetailing.com/opengraph-image",
  logo: "https://anaautodetailing.com/icon.svg",
  url: "https://anaautodetailing.com",
  telephone: "+1-512-229-8145",
  email: "610aaautodetailing@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "477 Suffield Dr #619",
    addressLocality: "Buda",
    addressRegion: "TX",
    postalCode: "78610",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0855,
    longitude: -97.8403,
  },
  areaServed: [
    { "@type": "City", name: "Austin", "@id": "https://en.wikipedia.org/wiki/Austin,_Texas" },
    { "@type": "City", name: "Buda", "@id": "https://en.wikipedia.org/wiki/Buda,_Texas" },
    { "@type": "City", name: "Kyle", "@id": "https://en.wikipedia.org/wiki/Kyle,_Texas" },
    { "@type": "City", name: "San Marcos", "@id": "https://en.wikipedia.org/wiki/San_Marcos,_Texas" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/people/AA-Auto-Detailing/100089112146854/",
    "https://www.instagram.com/austinautodetailer/",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://anaautodetailing.com/#booking",
      inLanguage: "en-US",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Detailing Appointment",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
