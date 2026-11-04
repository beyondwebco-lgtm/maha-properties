import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whatsapp-button";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahaproperties.in"),
  title: {
    default: "MAHA PROPERTIES | Real Estate Consultancy Kukatpally, Hyderabad",
    template: "%s | MAHA PROPERTIES Hyderabad",
  },
  description:
    "MAHA Properties is a premier real estate consultancy in Kukatpally, Hyderabad. TSRERA Registered Agent (A02500004914). Explore luxury villas, gated apartments, HMDA open plots, and strategic land investments.",
  keywords: [
    "Real estate consultancy in Kukatpally",
    "Properties in Hyderabad",
    "Villas in Hyderabad",
    "Apartments in Hyderabad",
    "Open plots in Hyderabad",
    "Chandanagar flats near Gangaram lake",
    "MAHA Properties Hyderabad",
    "TSRERA registered agent Hyderabad",
  ],
  authors: [{ name: "MAHA PROPERTIES", url: "https://mahaproperties.in" }],
  creator: "MAHA PROPERTIES",
  publisher: "MAHA PROPERTIES",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "MAHA PROPERTIES | Real Estate Consultancy Kukatpally, Hyderabad",
    description:
      "Explore ready-to-move apartments, luxury villas, open plots, and land parcels with MAHA Properties. Registered with Telangana RERA (Reg No: A02500004914).",
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased selection:bg-[#D4AF37] selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
