import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { companyData } from "../data/company";

const WhatsAppButton = dynamic(
  () => import("../components/whatsapp-button").then((m) => m.WhatsAppButton)
);

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600", "700", "800"],
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(companyData.websiteUrl),
  title: {
    default: "MAHA PROPERTIES | Real Estate Consultancy in Hyderabad",
    template: "%s | MAHA PROPERTIES Hyderabad",
  },
  description:
    "Discover thoughtfully selected apartments, luxury villas and gated communities in Hyderabad with personalized guidance from MAHA Properties. TSRERA Agent A02500004914.",
  keywords: [
    "Real estate consultancy in Hyderabad",
    "Apartments for sale in Hyderabad",
    "Luxury villas in Patancheru",
    "Apartments in Chandanagar",
    "Luxury apartments in Neopolis",
    "Gated community properties in Hyderabad",
    "MAHA Properties Kukatpally",
    "TSRERA registered agent A02500004914",
  ],
  authors: [{ name: "MAHA PROPERTIES", url: companyData.websiteUrl }],
  creator: "MAHA PROPERTIES",
  publisher: "MAHA PROPERTIES",
  alternates: {
    canonical: companyData.websiteUrl,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "MAHA PROPERTIES | Real Estate Consultancy in Hyderabad",
    description:
      "Your Property Journey, Our Priority. Explore apartments, gated communities and luxury villas across Hyderabad with MAHA Properties.",
    url: companyData.websiteUrl,
    siteName: "MAHA PROPERTIES",
    images: [
      {
        url: "/properties/chandanagar/project-img-1.jpg",
        width: 1200,
        height: 630,
        alt: "MAHA Properties — Real Estate Consultancy in Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAHA PROPERTIES | Real Estate Consultancy in Hyderabad",
    description:
      "Discover apartments, gated communities and luxury villas in Hyderabad. TSRERA Registered Agent A02500004914.",
    images: ["/properties/chandanagar/project-img-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "MAHA PROPERTIES",
  description:
    "Real estate consultancy and property sales advisory in Kukatpally, Hyderabad assisting buyers with residential apartments, gated communities, and luxury villas.",
  image: `${companyData.websiteUrl}/images/maha-logo-dark.png`,
  logo: `${companyData.websiteUrl}/images/maha-logo-light.png`,
  url: companyData.websiteUrl,
  telephone: "+91-7799884849",
  email: companyData.email,
  founder: {
    "@type": "Person",
    name: companyData.rera.registeredAgent,
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "TSRERA Agent Registration Number",
    value: companyData.rera.agentRegistrationNumber,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${companyData.address.line1}, ${companyData.address.line2}`,
    addressLocality: companyData.address.area,
    addressRegion: companyData.address.state,
    postalCode: companyData.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4934,
    longitude: 78.4018,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hyderabad",
    },
    {
      "@type": "AdministrativeArea",
      name: "Telangana",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#171C26]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
