import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getPropertyBySlug, getPublishedProperties } from "../../../data/properties";
import { companyData, getPropertyWhatsAppUrl } from "../../../data/company";
import { ImageGallery } from "../../../components/image-gallery";
import { PropertyCard } from "../../../components/property-card";
import {
  MapPin,
  Building2,
  Calendar,
  Layers,
  Phone,
  MessageCircle,
  Download,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Waves,
  Dumbbell,
  PhoneCall,
  Activity,
  HeartHandshake,
  Footprints,
  Smile,
  Compass,
  Gamepad2,
  Trees,
  Sun,
  Shield,
  ChevronRight,
  Info,
} from "lucide-react";

const PriceCalculator = dynamic(
  () => import("../../../components/price-calculator").then((m) => m.PriceCalculator),
  {
    loading: () => (
      <div className="bg-white rounded-3xl p-8 border border-[#E5DFD3] animate-pulse min-h-[420px] flex items-center justify-center text-xs text-[#747B86]">
        Loading price estimator...
      </div>
    ),
  }
);

const EnquiryForm = dynamic(
  () => import("../../../components/enquiry-form").then((m) => m.EnquiryForm),
  {
    loading: () => (
      <div className="bg-white rounded-3xl p-8 border border-[#E5DFD3] animate-pulse min-h-[460px] flex items-center justify-center text-xs text-[#747B86]">
        Loading enquiry form...
      </div>
    ),
  }
);

const MobileStickyBar = dynamic(
  () => import("../../../components/mobile-sticky-bar").then((m) => m.MobileStickyBar)
);

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  PhoneCall: <PhoneCall className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Footprints: <Footprints className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Trees: <Trees className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
};

export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const properties = getPublishedProperties();
  return properties.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found | MAHA Properties",
    };
  }

  const title = `${property.name} — ${property.locationArea} | MAHA Properties`;
  const description = `${property.subtitle || property.description}`.slice(0, 155);
  const ogImage = property.images[0]?.src || "/properties/chandanagar/project-img-1.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: `${companyData.websiteUrl}/properties/${property.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${companyData.websiteUrl}/properties/${property.slug}`,
      siteName: "MAHA PROPERTIES",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${property.name} in ${property.location}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = getPublishedProperties()
    .filter((p) => p.slug !== property.slug)
    .slice(0, 3);

  const whatsappUrl = getPropertyWhatsAppUrl(property.name);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: companyData.websiteUrl },
      { "@type": "ListItem", position: 2, name: "Properties", item: `${companyData.websiteUrl}/properties` },
      {
        "@type": "ListItem",
        position: 3,
        name: property.name,
        item: `${companyData.websiteUrl}/properties/${property.slug}`,
      },
    ],
  };

  const propertySchema = {
    "@context": "https://schema.org",
    "@type": property.propertyType === "villas" ? "SingleFamilyResidence" : "ApartmentComplex",
    name: property.name,
    description: property.description,
    url: `${companyData.websiteUrl}/properties/${property.slug}`,
    ...(property.images.length > 0 && {
      image: property.images.map((img) => `${companyData.websiteUrl}${img.src}`),
    }),
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.locationArea,
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    ...(property.approvalInfo.projectReraNumber && {
      identifier: {
        "@type": "PropertyValue",
        propertyID: "TG RERA Registration Number",
        value: property.approvalInfo.projectReraNumber,
      },
    }),
    ...(property.amenities.length > 0 && {
      amenityFeature: property.amenities.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a.name,
        value: true,
      })),
    }),
  };

  return (
    <div className="bg-[#F7F2E9]/30 min-h-screen pb-24 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }}
      />

      {/* 1. Header & Breadcrumbs */}
      <section className="bg-[#0B1630] text-white py-10 sm:py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-300">
            <Link href="/" className="hover:text-[#C9A25B]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <Link href="/properties" className="hover:text-[#C9A25B]">
              Properties
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#C9A25B] font-medium truncate">{property.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C9A25B] text-[#0B1630] text-[11px] font-bold uppercase tracking-wider">
                  {property.typeLabel}
                </span>
                {property.constructionStatus && (
                  <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-semibold">
                    {property.constructionStatus}
                  </span>
                )}
                {property.approvalInfo.projectReraNumber && (
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-[#F7F2E9] font-mono">
                    RERA: {property.approvalInfo.projectReraNumber}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {property.name}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C9A25B]" />
                  {property.location}
                </span>
                {property.developerName && (
                  <span>• Developer: {property.developerName}</span>
                )}
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#enquiry-section"
                className="px-6 py-3 rounded-full bg-[#C9A25B] hover:bg-[#B08B45] text-[#0B1630] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Enquire Now
              </a>
              <a
                href={`tel:${companyData.primaryPhone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A25B]" />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 8 Columns: Gallery, Overview, Specs, Amenities, Location */}
          <div className="lg:col-span-8 space-y-10">
            {/* 2. Hero Gallery */}
            {property.images.length > 0 ? (
              <ImageGallery images={property.images} />
            ) : (
              <div className="rounded-3xl bg-[#0B1630] text-white p-10 sm:p-14 text-center border border-[#E5DFD3] space-y-3">
                <Building2 className="w-12 h-12 text-[#C9A25B] mx-auto" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold">
                  {property.name} — Photography Awaited
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
                  Verified project photographs for {property.name} will be added upon receipt from the developer. Contact our advisor to request official project material or schedule a site visit.
                </p>
              </div>
            )}

            {/* 3. Quick Facts */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DFD3] shadow-sm">
              <h2 className="font-serif text-xl font-bold text-[#0B1630] mb-5">
                Quick Facts
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7F2E9]/60 border border-[#E5DFD3]/70">
                  <span className="text-[11px] uppercase tracking-wider text-[#747B86] font-semibold block">
                    Property Type
                  </span>
                  <span className="text-sm font-bold text-[#0B1630] mt-1 block">
                    {property.typeLabel}
                  </span>
                </div>

                {property.bhkOptions.length > 0 && (
                  <div className="p-4 rounded-2xl bg-[#F7F2E9]/60 border border-[#E5DFD3]/70">
                    <span className="text-[11px] uppercase tracking-wider text-[#747B86] font-semibold block">
                      Configurations
                    </span>
                    <span className="text-sm font-bold text-[#0B1630] mt-1 block">
                      {property.bhkOptions.join(" & ")}
                    </span>
                  </div>
                )}

                {property.sizeRange && (
                  <div className="p-4 rounded-2xl bg-[#F7F2E9]/60 border border-[#E5DFD3]/70">
                    <span className="text-[11px] uppercase tracking-wider text-[#747B86] font-semibold block">
                      Size Range
                    </span>
                    <span className="text-sm font-bold text-[#0B1630] mt-1 block">
                      {property.sizeRange}
                    </span>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-[#F7F2E9]/60 border border-[#E5DFD3]/70">
                  <span className="text-[11px] uppercase tracking-wider text-[#747B86] font-semibold block">
                    Indicative Price
                  </span>
                  <span className="text-sm font-bold text-[#0B1630] mt-1 block">
                    {property.priceDisplay}
                  </span>
                </div>

                {property.projectOverview?.totalArea && (
                  <div className="p-4 rounded-2xl bg-[#F7F2E9]/60 border border-[#E5DFD3]/70">
                    <span className="text-[11px] uppercase tracking-wider text-[#747B86] font-semibold block">
                      Land Extent
                    </span>
                    <span className="text-sm font-bold text-[#0B1630] mt-1 block">
                      {property.projectOverview.totalArea}
                    </span>
                  </div>
                )}

                {property.projectOverview?.totalUnits && (
                  <div className="p-4 rounded-2xl bg-[#F7F2E9]/60 border border-[#E5DFD3]/70">
                    <span className="text-[11px] uppercase tracking-wider text-[#747B86] font-semibold block">
                      Total Residences
                    </span>
                    <span className="text-sm font-bold text-[#0B1630] mt-1 block">
                      {property.projectOverview.totalUnits} Units
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 4. Project Overview & Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DFD3] shadow-sm space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0B1630] mb-3">
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-[#171C26]/85 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {property.highlights.length > 0 && (
                <div className="pt-4 border-t border-[#E5DFD3]">
                  <h3 className="font-serif text-lg font-bold text-[#0B1630] mb-3">
                    Key Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-[#171C26]">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A25B] shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Approval & Consultancy Note */}
              <div className="p-4 rounded-2xl bg-[#F7F2E9] border border-[#C9A25B]/40 flex items-start gap-3 text-xs text-[#171C26]">
                <Info className="w-4 h-4 text-[#A6823F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-[#0B1630]">
                    Approval Status: {property.approvalInfo.status}
                  </p>
                  <p className="text-[#747B86] leading-relaxed">
                    {property.approvalInfo.note}
                  </p>
                </div>
              </div>

              {property.brochureUrl && (
                <div>
                  <a
                    href={property.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B1630] hover:bg-[#132347] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#C9A25B]" />
                    <span>Download Project Brochure</span>
                  </a>
                </div>
              )}
            </div>

            {/* 5. Available Configurations */}
            {property.configurations && property.configurations.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DFD3] shadow-sm space-y-5">
                <h2 className="font-serif text-2xl font-bold text-[#0B1630]">
                  Available Configurations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.configurations.map((cfg) => (
                    <div
                      key={cfg.id}
                      className="p-5 rounded-2xl border border-[#E5DFD3] bg-[#F7F2E9]/30 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-[#0B1630]">
                          {cfg.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0B1630] text-[#C9A25B] text-[11px] font-semibold">
                          {cfg.type}
                        </span>
                      </div>
                      {cfg.sizeLabel && (
                        <p className="text-xs font-semibold text-[#171C26]">
                          Size: {cfg.sizeLabel}
                        </p>
                      )}
                      {cfg.facing && cfg.facing.length > 0 && (
                        <p className="text-xs text-[#747B86]">
                          Facing: {cfg.facing.join(" & ")}
                        </p>
                      )}
                      {cfg.description && (
                        <p className="text-xs text-[#747B86] leading-relaxed">
                          {cfg.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conditional Interactive Price Estimator (only when confirmed pricingRules exist) */}
            {property.pricingRules && (
              <PriceCalculator propertyTitle={property.name} />
            )}

            {/* 6. Key Amenities */}
            {property.amenities.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DFD3] shadow-sm space-y-5">
                <h2 className="font-serif text-2xl font-bold text-[#0B1630]">
                  Key Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F7F2E9]/50 border border-[#E5DFD3]/70 text-xs sm:text-sm font-medium text-[#171C26]"
                    >
                      <span className="text-[#C9A25B] shrink-0">
                        {iconMap[amenity.icon] || <Sparkles className="w-5 h-5" />}
                      </span>
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. Location & Connectivity */}
            {property.locationConnectivity && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DFD3] shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h2 className="font-serif text-2xl font-bold text-[#0B1630]">
                    Location & Connectivity
                  </h2>
                  <a
                    href={property.locationConnectivity.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1630] hover:text-[#C9A25B] underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-sm text-[#747B86]">
                  {property.locationConnectivity.distanceNote}
                </p>
                <ul className="space-y-2 pt-1">
                  {property.locationConnectivity.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-[#171C26]">
                      <MapPin className="w-4 h-4 text-[#C9A25B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right 4 Columns: Sticky Enquiry & Site Visit Panel */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <EnquiryForm
              propertySlug={property.slug}
              propertyTitle={property.name}
              lockProperty={true}
              heading={`Enquire About ${property.name}`}
            />

            <div className="bg-[#0B1630] text-white rounded-3xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#C9A25B] text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Schedule a Site Visit</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Speak with {companyData.contactPerson} to coordinate a guided site visit and connect with the developer sales team.
              </p>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={`tel:${companyData.primaryPhone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white text-[#0B1630] text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* 8. Related Properties */}
        {relatedProperties.length > 0 && (
          <section className="pt-10 border-t border-[#E5DFD3] space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1630]">
                Other Approved Properties
              </h2>
              <Link
                href="/properties"
                className="text-xs sm:text-sm font-semibold text-[#0B1630] hover:text-[#C9A25B]"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {relatedProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </section>
        )}
      </div>

      <MobileStickyBar propertyTitle={property.name} />
    </div>
  );
}
