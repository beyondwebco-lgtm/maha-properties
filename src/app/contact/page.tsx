import React from "react";
import type { Metadata } from "next";
import { companyData, getPropertyWhatsAppUrl } from "../../data/company";
import { EnquiryForm } from "../../components/enquiry-form";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact MAHA Properties | Kukatpally, Hyderabad",
  description:
    "Connect with MAHA Properties in Kukatpally, Hyderabad for apartments and luxury villas. Phone: +91 7799884849. TSRERA Agent Reg No: A02500004914.",
  alternates: {
    canonical: `${companyData.websiteUrl}/contact`,
  },
  openGraph: {
    title: "Contact MAHA Properties | Kukatpally, Hyderabad",
    description:
      "Speak with registered property advisor N. Surendra at MAHA Properties. Phone: +91 7799884849.",
    url: `${companyData.websiteUrl}/contact`,
    images: [{ url: "/images/maha-logo-dark.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MAHA Properties | Hyderabad",
    description: "TSRERA Registered Agent A02500004914. Phone: +91 7799884849.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: companyData.websiteUrl },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${companyData.websiteUrl}/contact` },
  ],
};

export default function ContactPage() {
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "SLN Heights, Tulasi Nagar, Kukatpally, Hyderabad 500072"
  )}`;

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="bg-[#0B1630] text-white py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A25B]">
              Get In Touch
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Contact MAHA Properties
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Looking for apartments in Chandanagar or Neopolis, or luxury villas in Patancheru? Reach out to our consultancy team for project details, availability, and site visit scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A6823F]">
                  Consultant & Office
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1630] mt-1">
                  Speak With Our Advisor
                </h2>
                <p className="text-xs text-[#747B86] mt-1">
                  Direct assistance with registered agent {companyData.rera.registeredAgent}
                </p>
              </div>

              <div className="space-y-4">
                {/* Phones & WhatsApp */}
                <div className="p-5 rounded-2xl bg-[#F7F2E9]/50 border border-[#E5DFD3] flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0B1630] text-[#C9A25B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#747B86] tracking-wider block">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${companyData.primaryPhone}`}
                      className="text-base font-bold text-[#0B1630] hover:text-[#C9A25B] transition-colors block"
                    >
                      {companyData.primaryPhoneFormatted}
                    </a>
                    <a
                      href={`tel:${companyData.secondaryPhone}`}
                      className="text-sm font-semibold text-[#171C26] hover:text-[#C9A25B] transition-colors block"
                    >
                      {companyData.secondaryPhoneFormatted}
                    </a>
                    <div className="pt-1">
                      <a
                        href={getPropertyWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-[#F7F2E9]/50 border border-[#E5DFD3] flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0B1630] text-[#C9A25B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#747B86] tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-sm font-bold text-[#0B1630] hover:text-[#C9A25B] transition-colors block break-all"
                    >
                      {companyData.email}
                    </a>
                    <span className="text-[#747B86] text-[11px]">
                      Property enquiries & site visit coordination
                    </span>
                  </div>
                </div>

                {/* Office Address */}
                <div className="p-5 rounded-2xl bg-[#F7F2E9]/50 border border-[#E5DFD3] flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0B1630] text-[#C9A25B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#747B86] tracking-wider block">
                      Office Address
                    </span>
                    <p className="font-semibold text-[#171C26] leading-relaxed text-sm">
                      {companyData.address.line1}, {companyData.address.line2}
                    </p>
                    <p className="text-[#747B86]">
                      {companyData.address.area}, {companyData.address.city} – {companyData.address.pincode}, {companyData.address.state}.
                    </p>
                    <div className="pt-2">
                      <a
                        href={mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1630] hover:text-[#C9A25B] underline"
                      >
                        <span>Directions on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* RERA Registration */}
                <div className="p-5 rounded-2xl bg-[#0B1630] text-white flex items-start gap-4 border border-white/10">
                  <div className="p-3 rounded-xl bg-white/10 text-[#C9A25B] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#C9A25B] tracking-wider block">
                      Telangana RERA Registered Agent
                    </span>
                    <p className="font-mono font-bold text-sm text-white">
                      Reg. No: {companyData.rera.agentRegistrationNumber}
                    </p>
                    <p className="text-gray-300 text-[11px]">
                      Agent: {companyData.rera.registeredAgent} • Valid: {companyData.rera.validityStart} to {companyData.rera.validityEnd}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm heading="Property Assistance & Site Visit Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
