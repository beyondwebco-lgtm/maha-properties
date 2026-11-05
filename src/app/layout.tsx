import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

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

const jakarta = Plus_Jakarta_Sans({
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
  metadataBase: new URL("https://mahaproperties.in"),
  title: {
    default: "MAHA PROPERTIES | Real Estate Consultancy Hyderabad",
    template: "%s | MAHA PROPERTIES Hyderabad",
  },
  description:
    "MAHA Properties is a premier real estate consultancy in Kukatpally, Hyderabad. TSRERA Registered Agent A02500004914. Villas, apartments, plots & land.",
  keywords: [
    "Real estate consultancy in Kukatpally",
    "Properties in Hyderabad",
    "Villas in Hyderabad",
    "Apartments in Hyderabad",
    "Open plots in Hyderabad",
    "Chandanagar flats near Gangaram lake",
    "Brigade Gateway Neopolis",
    "MAHA Properties Hyderabad",
    "TSRERA registered agent Hyderabad",
  ],
  authors: [{ name: "MAHA PROPERTIES", url: "https://mahaproperties.in" }],
  creator: "MAHA PROPERTIES",
  publisher: "MAHA PROPERTIES",
  alternates: {
    canonical: "https://mahaproperties.in",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "MAHA PROPERTIES | Real Estate Consultancy Hyderabad",
    description:
      "Explore ready apartments, villas, plots, and land in Hyderabad. Registered with Telangana RERA (Reg No: A02500004914).",
    url: "https://mahaproperties.in",
    siteName: "MAHA PROPERTIES",
    images: [
      {
        url: "/properties/chandanagar/project-img-1.jpg",
        width: 1200,
        height: 630,
        alt: "MAHA Properties Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAHA PROPERTIES | Real Estate Consultancy Hyderabad",
    description:
      "Explore ready apartments, villas, plots, and land in Hyderabad. TSRERA Agent Reg No: A02500004914.",
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
  image: "https://mahaproperties.in/images/maha-logo-dark.png",
  logo: "https://mahaproperties.in/images/maha-logo-light.png",
  url: "https://mahaproperties.in",
  telephone: "+91-7799884849",
  email: "mahaproperties16@gmail.com",
  founder: {
    "@type": "Person",
    name: "Nallamekala Surendra",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "TSRERA Registration Number",
    value: "A02500004914",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 12, Flat No. 101, SLN Heights, Tulasi Nagar",
    addressLocality: "Kukatpally",
    addressRegion: "Telangana",
    postalCode: "500072",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4934,
    longitude: 78.4018,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "20:00",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${jakarta.variable} min-h-screen flex flex-col bg-white text-gray-900 antialiased selection:bg-[#D4AF37] selection:text-black`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
