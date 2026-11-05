import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getPropertyBySlug, getAllProperties } from "../../../data/properties";
import { companyData } from "../../../data/company";
import { getBlurDataUrl } from "../../../data/blur-data";
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
  Droplets,
  Navigation,
  FileCheck,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Info,
} from "lucide-react";

// Code-split client-only interactive components with zero-CLS skeleton placeholders
const PriceCalculator = dynamic(
  () => import("../../../components/price-calculator").then((m) => m.PriceCalculator),
  {
    loading: () => (
      <div className="bg-white rounded-3xl p-8 border border-gray-200 animate-pulse min-h-[460px] flex items-center justify-center text-xs text-gray-400">
        Loading interactive price estimator...
      </div>
    ),
  }
);

const EnquiryForm = dynamic(
  () => import("../../../components/enquiry-form").then((m) => m.EnquiryForm),
  {
    loading: () => (
      <div className="bg-white rounded-3xl p-8 border border-gray-200 animate-pulse min-h-[480px] flex items-center justify-center text-xs text-gray-400">
        Loading enquiry form...
      </div>
    ),
  }
);

const MobileStickyBar = dynamic(
  () => import("../../../components/mobile-sticky-bar").then((m) => m.MobileStickyBar)
);

// Lucide icon helper
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
  Droplets: <Droplets className="w-5 h-5" />,
  Navigation: <Navigation className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const properties = getAllProperties();
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

  let title = `${property.title.slice(0, 40)} | MAHA Properties`;
  let description = `${property.description.slice(0, 150)}...`;

  if (slug === "premium-gated-community-chandanagar") {
    title = "2 & 3 BHK Flats in Chandanagar | MAHA Properties";
    description =
      "Ready-to-move 2 & 3 BHK flats near Gangaram Lake, Chandanagar, Hyderabad. View verified pricing, floor plans & amenities with MAHA Properties.";
  } else if (slug === "brigade-gateway-neopolis") {
    title = "Brigade Gateway Neopolis Hyderabad | MAHA Properties";
    description =
      "Iconic 3 & 4 Bed flats & Sky Duplexes at Brigade Gateway, Neopolis Kokapet. TG RERA P02400009142. Festive benefits with MAHA Properties.";
  } else if (slug === "brigade-barcelona-neopolis") {
    title = "Brigade Barcelona Neopolis | MAHA Properties";
    description =
      "Spanish-inspired luxury 3 & 4 Bed homes by Ricardo Bofill in Neopolis, Hyderabad. 270° panoramic decks. Enquire with MAHA Properties.";
  }

  const ogImage = property.images[0]?.src || "/properties/chandanagar/project-img-1.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: `https://mahaproperties.in/properties/${property.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://mahaproperties.in/properties/${property.slug}`,
      siteName: "MAHA PROPERTIES",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
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

  const allProps = getAllProperties();
  const relatedProperties = allProps
    .filter((p) => p.slug !== property.slug && p.type === property.type)
    .slice(0, 3);

  const whatsappInquiryText = `Hello MAHA Properties, I'm interested in the ${property.title} project at ${property.location}. Please share availability, floor plans, and the latest pricing.`;
  const heroImage = property.images[0]?.src || "/properties/chandanagar/project-img-1.jpg";

  // Structured Data (JSON-LD) for Real Estate Listing & Breadcrumbs
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
      {
        "@type": "ListItem",
        position: 3,
        name: property.title,
        item: `https://mahaproperties.in/properties/${property.slug}`,
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: property.title,
    description: property.description,
    url: `https://mahaproperties.in/properties/${property.slug}`,
    image: property.images.map((img) =>
      img.src.startsWith("http") ? img.src : `https://mahaproperties.in${img.src}`
    ),
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.location.split(",")[0].trim(),
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.slug.includes("neopolis") ? 17.4018 : 17.4934,
      longitude: property.slug.includes("neopolis") ? 78.3155 : 78.3392,
    },
    ...(property.approvalInfo.reraNumber
      ? { identifier: property.approvalInfo.reraNumber }
      : {}),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: property.startingPrice,
      price: property.startingPrice,
      availability: "https://schema.org/InStock",
      validFrom: property.createdAt,
    },
    amenityFeature: property.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.name,
      value: true,
    })),
  };

  return (
    <div className="bg-white min-h-screen pb-28 md:pb-16">
      {/* JSON-LD Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200/80 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link href="/properties" className="hover:text-black">
            Properties
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link
            href={`/properties?category=${property.type}`}
            className="hover:text-black capitalize"
          >
            {property.typeLabel}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">
            {property.title}
          </span>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[500px] lg:min-h-[580px] flex items-end bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={`${property.title} - ${property.typeLabel} in ${property.location}`}
            fill
            priority
            placeholder="blur"
            blurDataURL={getBlurDataUrl(heroImage)}
            sizes="100vw"
            className="object-cover"
          />
          {/* Deep dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full text-white">
          <div className="space-y-4 max-w-4xl">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-extrabold uppercase tracking-wider">
                {property.status}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                {property.typeLabel}
              </span>
              {property.projectOverview?.totalArea && (
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-200 text-xs font-medium">
                  {property.projectOverview.totalArea}
                </span>
              )}
              {property.projectOverview?.totalTowers && (
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-200 text-xs font-medium">
                  {property.projectOverview.totalTowers} Towers
                </span>
              )}
              {property.projectOverview?.totalUnits && (
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-200 text-xs font-medium">
                  {property.projectOverview.totalUnits} Apartments
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {property.slug === "premium-gated-community-chandanagar"
                ? "Luxury Living by Gangaram Lake"
                : property.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-200 font-light max-w-3xl leading-relaxed">
              {property.subtitle || property.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-300 pt-1">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{property.location}</span>
            </div>

            {/* Pricing & CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/15">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-widest block font-medium">
                  Starting Base Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {property.priceDisplay}
                  </span>
                  {property.pricePerSqFt && (
                    <span className="text-xs text-[#D4AF37] font-semibold">
                      (@ ₹{property.pricePerSqFt.toLocaleString()}/sq.ft)
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-gray-400 italic block mt-0.5">
                  *Additional charges apply (Amenities, floor, facing, corpus, taxes)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#enquiry-section"
                  className="px-6 py-3.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-transform active:scale-95 shadow-lg text-center"
                >
                  Enquire Now
                </a>

                <a
                  href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                    whatsappInquiryText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Details, Gallery, Configurations, Calculator, Amenities */}
          <div className="lg:col-span-8 space-y-12">
            {/* 2. IMAGE GALLERY */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  Project Gallery & Visuals
                </h2>
                <span className="text-xs text-gray-500">
                  {property.images.length} High-Resolution Photographs
                </span>
              </div>
              <ImageGallery images={property.images} />
            </section>

            {/* 3. PROJECT OVERVIEW GRID */}
            <section className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Project Overview & Specifications
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                <div className="space-y-1">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Location
                  </span>
                  <span className="font-semibold text-gray-900 block text-sm">
                    {property.location.split(",")[0]}
                  </span>
                  <span className="text-gray-500 block truncate">{property.location.split(",").slice(1).join(",")}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Property Type
                  </span>
                  <span className="font-semibold text-gray-900 block text-sm">
                    {property.typeLabel}
                  </span>
                  <span className="text-gray-500 block">{property.areaRange}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Possession
                  </span>
                  <span className="font-semibold text-emerald-700 block text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {property.status}
                  </span>
                  <span className="text-gray-500 block">{property.projectOverview?.possession || "Verified Status"}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Project Area
                  </span>
                  <span className="font-semibold text-gray-900 block text-sm">
                    {property.projectOverview?.totalArea || "Prime Layout"}
                  </span>
                  <span className="text-gray-500 block">{property.projectOverview?.communityType || "Gated Landmark"}</span>
                </div>

                <div className="space-y-1 pt-2 border-t border-gray-200">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Towers & Floors
                  </span>
                  <span className="font-semibold text-gray-900 block text-sm">
                    {property.projectOverview?.towerConfiguration || `${property.projectOverview?.totalTowers || 1} Towers`}
                  </span>
                  <span className="text-gray-500 block">High-Rise Engineering</span>
                </div>

                <div className="space-y-1 pt-2 border-t border-gray-200">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Total Units
                  </span>
                  <span className="font-semibold text-gray-900 block text-sm">
                    {property.projectOverview?.totalUnits ? `${property.projectOverview.totalUnits} Residences` : "Exclusive Inventory"}
                  </span>
                  <span className="text-gray-500 block">Curated Community</span>
                </div>

                <div className="space-y-1 pt-2 border-t border-gray-200">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Price Structure
                  </span>
                  <span className="font-semibold text-gray-900 block text-sm">
                    {property.priceDisplay}
                  </span>
                  <span className="text-gray-500 block">
                    {property.pricePerSqFt ? `@ ₹${property.pricePerSqFt.toLocaleString()}/sq.ft` : "Signature Pricing"}
                  </span>
                </div>

                <div className="space-y-1 pt-2 border-t border-gray-200">
                  <span className="text-gray-400 uppercase font-bold tracking-wider block text-[10px]">
                    Approvals
                  </span>
                  <span className="font-semibold text-gray-900 block text-sm truncate">
                    {property.approvalInfo.reraNumber ? `RERA: ${property.approvalInfo.reraNumber}` : property.approvalInfo.status.split("(")[0]}
                  </span>
                  <span className="text-gray-500 block">
                    {property.approvalInfo.reraVerified ? "Verified Approval" : "Statutory Scrutiny"}
                  </span>
                </div>
              </div>

              {/* Approval Disclaimer Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                <div>
                  <strong>Approval Information Note:</strong> {property.approvalInfo.note}
                </div>
              </div>
            </section>

            {/* 4. AVAILABLE CONFIGURATIONS */}
            {property.configurations && property.configurations.length > 0 && (
              <section className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Unit Choices
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                    Available Configurations & Base Pricing
                  </h2>
                  <p className="text-xs text-gray-500">
                    {property.pricePerSqFt
                      ? `Calculated at starting ₹${property.pricePerSqFt.toLocaleString()} per sq.ft base rate. Additional charges apply.`
                      : "Signature residences with bespoke luxury specifications, exclusive sky decks, and spot booking benefits."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {property.configurations.map((config) => (
                    <div
                      key={config.id}
                      className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-[#141414] text-white text-xs font-bold">
                            {config.type}
                          </span>
                          <span className="text-xs font-semibold text-gray-500">
                            {config.sizeSqFt.toLocaleString()} sq.ft
                          </span>
                        </div>

                        <h3 className="font-serif text-lg font-bold text-gray-900">
                          {config.name}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed">
                          {config.description}
                        </p>

                        <div className="pt-2 border-t border-gray-100 text-xs space-y-1.5 text-gray-600">
                          <div className="flex justify-between">
                            <span>Facing Options:</span>
                            <span className="font-semibold text-gray-900">
                              {config.facing.join(", ")}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Base Rate:</span>
                            <span className="font-semibold text-gray-900">
                              ₹{config.basePricePerSqFt.toLocaleString()}/sq.ft
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Amenities Charge:</span>
                            <span className="font-semibold text-gray-900">
                              ₹{(config.amenitiesCharges / 100000).toFixed(0)} Lakhs
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-gray-100">
                        <div className="text-[10px] text-gray-400 uppercase font-bold">
                          Starting Base Price
                        </div>
                        <div className="text-xl font-black text-gray-900">
                          {config.basePriceTotal >= 10000000
                            ? `₹${(config.basePriceTotal / 10000000).toFixed(2)} Cr*`
                            : `₹${(config.basePriceTotal / 100000).toFixed(2)} Lakhs*`}
                        </div>
                        <div className="text-[10px] text-gray-400 italic mb-3">
                          *Excludes applicable taxes & statutory charges
                        </div>

                        <a
                          href={property.pricingRules ? "#calculator-section" : "#enquiry-section"}
                          className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-[#141414] hover:text-white text-gray-800 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                        >
                          <span>{property.pricingRules ? "Estimate Total Cost ↓" : "Check Availability & Benefit →"}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. INTERACTIVE PRICE CALCULATOR OR FESTIVE SPOT BOOKING BENEFIT */}
            {property.pricingRules ? (
              <section id="calculator-section" className="scroll-mt-24">
                <PriceCalculator propertyTitle={property.title} />
              </section>
            ) : (
              <section id="calculator-section" className="scroll-mt-24 bg-gradient-to-br from-[#141414] via-[#1c1c1c] to-[#252525] text-white rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Exclusive Spot Booking Benefit
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
                      Celebrate the Audacity to Have it All
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                      Make this season exceptional with signature 3 & 4 Bed homes or exclusive 5 & 6 Bed Sky Duplexes. Schedule an exclusive private site visit with registered consultant N. Surendra.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block uppercase font-medium">Starting From</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#D4AF37]">{property.priceDisplay}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase">Festive Advantage</span>
                    <p className="font-semibold text-white">Priority Allotment & Spot Benefits</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase">Sky-Deck Experience</span>
                    <p className="font-semibold text-white">Private Viewing Deck Appointments</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase">Financing Support</span>
                    <p className="font-semibold text-white">Pre-Approved Institutional Bank Loans</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                      `Hello MAHA Properties, I would like to explore the exclusive festive spot booking benefit and schedule a site visit for ${property.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Claim Spot Booking Benefit on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${companyData.primaryPhone}`}
                    className="py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/20"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>Call Consultant: {companyData.primaryPhoneFormatted}</span>
                  </a>
                </div>
              </section>
            )}

            {/* 6. AMENITIES SECTION */}
            <section className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Club & Recreation
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                  Premium Lifestyle Amenities
                </h2>
                <p className="text-xs text-gray-500">
                  Designed for wellness, fitness, and community engagement for all age groups.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {property.amenities.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <div className="p-2.5 rounded-xl bg-[#F8F6F0] text-[#D4AF37] shrink-0">
                      {iconMap[item.icon] || <Sparkles className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-bold text-gray-800 leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. LOCATION & CONNECTIVITY */}
            {property.locationConnectivity && (
              <section className="space-y-6 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Strategic Location
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                    Connected to Everything That Matters
                  </h2>
                  <p className="text-xs text-gray-600">
                    {property.locationConnectivity.distanceNote}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {property.locationConnectivity.points.map((point, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-gray-200/80 flex items-start gap-2 text-xs text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Google Map Link Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    Pin indicates general Gangaram Lake / Chandanagar area (Approximate map link).
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      property.locationConnectivity.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141414] hover:bg-black text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </section>
            )}

            {/* 8. PAYMENT STRUCTURE & MILESTONES */}
            {property.paymentMilestones && (
              <section className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Financial Terms
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                    Payment Structure
                  </h2>
                  <p className="text-xs text-gray-500">
                    Structured payment plan in accordance with builder schedule and bank financing options.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-1.5">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Stage 1
                    </span>
                    <h3 className="font-serif text-base font-bold text-gray-900">
                      Booking & Allotment
                    </h3>
                    <div className="text-xl font-black text-[#D4AF37]">
                      {property.paymentMilestones.bookingAmount}
                    </div>
                    <p className="text-[11px] text-gray-500 pt-1">
                      Initial token deposit upon selecting unit and configuration.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-1.5">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Stage 2
                    </span>
                    <h3 className="font-serif text-base font-bold text-gray-900">
                      Agreement of Sale
                    </h3>
                    <div className="text-xl font-black text-gray-900">
                      20% of Total Cost
                    </div>
                    <p className="text-[11px] text-gray-500 pt-1">
                      Payable upon signing official agreement of sale.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-1.5">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Stage 3
                    </span>
                    <h3 className="font-serif text-base font-bold text-gray-900">
                      Bank Loan Financing
                    </h3>
                    <div className="text-xl font-black text-gray-900">
                      80% Remaining
                    </div>
                    <p className="text-[11px] text-gray-500 pt-1">
                      Subject to lender underwriting and buyer eligibility criteria.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 italic bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  {property.paymentMilestones.note}
                </p>
              </section>
            )}

            {/* 9. DOWNLOAD BROCHURE */}
            {property.brochureUrl && (
              <section className="p-6 sm:p-8 rounded-3xl bg-[#141414] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Official Project Brochure & Floor Plans
                  </h3>
                  <p className="text-xs text-gray-300 max-w-lg">
                    Download the complete digital brochure including floor layouts, tower floor plates, master plan, and detailed architectural renders.
                  </p>
                </div>
                <a
                  href={property.brochureUrl}
                  download="Chandanagar-Luxury-Community-Brochure.pdf"
                  className="px-6 py-3.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center gap-2 shrink-0 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF (28 MB)</span>
                </a>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Consultation Box & Enquiry Form */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Agent Card */}
            <div className="p-6 rounded-3xl bg-[#141414] text-white space-y-4 shadow-xl border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black font-serif font-black flex items-center justify-center text-lg">
                  NS
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold">
                    {companyData.contactPerson}
                  </h4>
                  <p className="text-xs text-gray-300">
                    Real Estate Consultant
                  </p>
                  <p className="text-[11px] text-[#D4AF37] font-mono">
                    TSRERA: {companyData.rera.agentRegistrationNumber}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-800 space-y-2.5 text-xs">
                <a
                  href={`tel:${companyData.primaryPhone}`}
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call {companyData.primaryPhoneFormatted}</span>
                </a>

                <a
                  href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                    whatsappInquiryText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-gray-400 text-center pt-1">
                Office: Plot No. 12, SLN Heights, Kukatpally
              </div>
            </div>

            {/* Direct Form */}
            <EnquiryForm
              propertyTitle={property.title}
              defaultConfig="2 BHK (1,270 sq.ft)"
            />
          </div>
        </div>

        {/* 10. RELATED PROPERTIES */}
        {relatedProperties.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Similar Opportunities
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                  Explore More {property.typeLabel}s
                </h2>
              </div>
              <Link
                href="/properties"
                className="text-xs font-bold text-gray-900 hover:text-[#D4AF37] flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar propertyTitle={property.title} />
    </div>
  );
}
