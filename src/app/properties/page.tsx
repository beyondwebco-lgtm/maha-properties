import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PropertiesCatalogue } from "../../components/properties-catalogue";

export const metadata: Metadata = {
  title: "Properties for Sale in Hyderabad | MAHA Properties",
  description:
    "Explore luxury apartments in Chandanagar & Neopolis, premium villas, HMDA open plots, and land parcels in Hyderabad. TSRERA Agent Reg A02500004914.",
  alternates: {
    canonical: "https://mahaproperties.in/properties",
  },
  openGraph: {
    title: "Properties for Sale in Hyderabad | MAHA Properties",
    description:
      "Explore ready apartments, villas, open plots, and land investments across Hyderabad with MAHA Properties. TSRERA Agent Reg A02500004914.",
    url: "https://mahaproperties.in/properties",
    siteName: "MAHA PROPERTIES",
    images: [
      {
        url: "/properties/chandanagar/project-img-1.jpg",
        width: 1200,
        height: 630,
        alt: "Properties in Hyderabad - MAHA Properties",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Properties for Sale in Hyderabad | MAHA Properties",
    description:
      "Explore verified villas, apartments, plots, and land opportunities across Hyderabad with MAHA Properties.",
    images: ["/properties/chandanagar/project-img-1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mahaproperties.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Properties",
      item: "https://mahaproperties.in/properties",
    },
  ],
};

export default function PropertiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-[#D4AF37]" />
              <span className="text-xs text-gray-500 font-medium">Loading properties...</span>
            </div>
          </div>
        }
      >
        <PropertiesCatalogue />
      </Suspense>
    </>
  );
}
