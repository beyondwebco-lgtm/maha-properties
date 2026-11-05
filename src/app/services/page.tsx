import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData } from "../../data/company";
import {
  Home,
  Building2,
  MapPin,
  Compass,
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Services Hyderabad | MAHA Properties",
  description:
    "Expert consultancy for luxury villas, gated apartments, open plots, and land investments in Hyderabad. TSRERA Agent Reg A02500004914.",
  alternates: {
    canonical: "https://mahaproperties.in/services",
  },
  openGraph: {
    title: "Real Estate Services Hyderabad | MAHA Properties",
    description:
      "Consultancy for villas, apartments, plots, and land parcels across Hyderabad. TSRERA Agent Reg A02500004914.",
    url: "https://mahaproperties.in/services",
    images: [{ url: "/properties/chandanagar/project-img-1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services Hyderabad | MAHA Properties",
    description: "Expert consultancy for villas, apartments, plots, and land in Hyderabad.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mahaproperties.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://mahaproperties.in/services" },
  ],
};

export default function ServicesPage() {
  const services = [
    {
      id: "apartments",
      title: "Apartments & Gated Communities",
      badge: "High-Rise & Gated Living",
      description:
        "Assistance with identifying, shortlisting, and acquiring verified residential apartments across Hyderabad’s premier residential and IT corridors. We analyze floor configurations, builder credentials, construction milestones, and statutory approvals.",
      highlights: [
        "Curated 2, 3 & 4 BHK apartments in gated communities",
        "Ready-to-move and under-construction project evaluations",
        "Assistance with floor plans, pricing comparison, and developer negotiation",
        "Guidance on bank loan approvals and legal documentation",
      ],
      image: "/properties/chandanagar/project-img-1.jpg",
      exploreLink: "/properties?category=apartments",
    },
    {
      id: "villas",
      title: "Luxury & Independent Villas",
      badge: "Exclusive Residences",
      description:
        "Guidance for discerning customers exploring bespoke independent villas, duplexes, and triplex residences. We assist you in finding spacious homes featuring private gardens, community clubhouses, and premium lifestyle amenities.",
      highlights: [
        "Triplex and duplex gated villa enclaves in growth corridors",
        "Evaluation of built-up area, Vaastu compliance, and private amenities",
        "Strategic locations in Kompally, Kollur, Mokila, and Gandipet",
        "Complete assistance from site inspection through deed execution",
      ],
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
      exploreLink: "/properties?category=villas",
    },
    {
      id: "open-plots",
      title: "Open Residential Plots",
      badge: "Appreciation Assets",
      description:
        "Support for exploring residential and investment plot options in verified layout developments. We prioritize clear-title properties approved by statutory authorities including HMDA and DTCP.",
      highlights: [
        "HMDA & DTCP layout approved residential plots",
        "Inspection of infrastructure: BT roads, underground cabling, water lines",
        "Verification of master plans and arterial connectivity corridors",
        "Ideal for immediate villa construction or medium-term wealth appreciation",
      ],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
      exploreLink: "/properties?category=open-plots",
    },
    {
      id: "lands",
      title: "Strategic Land Advisory",
      badge: "Commercial & Development",
      description:
        "Professional assistance for land-related property enquiries across Hyderabad's expanding vectors. Catering to high-net-worth individuals, institutional buyers, and developers seeking large parcels with growth momentum.",
      highlights: [
        "Strategic parcels near the Outer Ring Road (ORR) and radial corridors",
        "Commercial, mixed-use, institutional, and prospective development lands",
        "Thorough title search, revenue record scrutiny, and link document review",
        "Direct liaison with property owners ensuring confidential dealings",
      ],
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=80",
      exploreLink: "/properties?category=lands",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header Banner */}
      <section className="bg-[#141414] text-white py-16 sm:py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Consultancy Services
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Real Estate Consultancy Services in Hyderabad
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              MAHA PROPERTIES provides buyer-focused real estate guidance across four core categories: Villas, Apartments, Open Plots, and Lands. We operate under Telangana RERA Agent Registration No. A02500004914.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-100 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#141414]/80 backdrop-blur-md text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Specialized Expertise
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={service.exploreLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] hover:bg-[#D4AF37] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>Explore {service.title.split(" ")[0]} Listings</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                        `Hello MAHA Properties, I'm interested in your ${service.title} consultancy services.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200"
                      aria-label="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Contact CTA */}
      <section className="bg-[#F8F6F0] py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <ShieldCheck className="w-12 h-12 text-[#D4AF37] mx-auto" />
          <h2 className="font-serif text-3xl font-bold text-gray-900">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Discuss your requirements with registered consultant N. Surendra. We provide transparent advice without obligation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${companyData.primaryPhone}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#141414] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call: {companyData.primaryPhoneFormatted}</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-gray-300 text-gray-900 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-all"
            >
              Visit Kukatpally Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

