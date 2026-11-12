import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PropertiesCatalogue } from "../../components/properties-catalogue";
import { companyData } from "../../data/company";

export const metadata: Metadata = {
  title: "Properties in Hyderabad | Apartments & Luxury Villas",
  description:
    "Explore approved apartments in Chandanagar & Neopolis and luxury gated villas in Patancheru, Hyderabad with personalized guidance from MAHA Properties.",
  alternates: {
    canonical: `${companyData.websiteUrl}/properties`,
  },
  openGraph: {
    title: "Properties in Hyderabad | MAHA Properties",
    description:
      "Explore approved apartments, gated communities, and luxury villas in Hyderabad with MAHA Properties.",
    url: `${companyData.websiteUrl}/properties`,
    siteName: "MAHA PROPERTIES",
    images: [
      {
        url: "/properties/chandanagar/project-img-1.jpg",
        width: 1200,
        height: 630,
        alt: "Properties in Hyderabad — MAHA Properties",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Properties in Hyderabad | MAHA Properties",
    description:
      "Explore approved apartments, gated communities, and luxury villas across Hyderabad.",
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
      item: companyData.websiteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Properties",
      item: `${companyData.websiteUrl}/properties`,
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
      <Suspense fallback={<div className="min-h-screen bg-[#F7F2E9]/40" />}>
        <PropertiesCatalogue />
      </Suspense>
    </>
  );
}
