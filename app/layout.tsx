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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: "A&A Auto Detailing",
  image: "https://anaautodetailing.com/og-image.jpg",
  url: "https://anaautodetailing.com",
  telephone: "+1-512-229-8145",
  email: "wildcarlr2@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "477 Suffield Dr #619",
    addressLocality: "Buda",
    addressRegion: "TX",
    postalCode: "78610",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Austin" },
    { "@type": "City", name: "Buda" },
    { "@type": "City", name: "Kyle" },
    { "@type": "City", name: "San Marcos" },
  ],
  sameAs: [
    "https://www.facebook.com/people/AA-Auto-Detailing/100089112146854/",
    "https://www.instagram.com/austinautodetailer/",
  ],
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
