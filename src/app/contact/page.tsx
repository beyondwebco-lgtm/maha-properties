import React from "react";
import { companyData } from "../../data/company";
import { EnquiryForm } from "../../components/enquiry-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MAHA Properties Kukatpally Hyderabad",
  description:
    "Reach N. Surendra at MAHA Properties, Kukatpally, Hyderabad. Phone: +91 7799884849. TSRERA Agent Reg A02500004914. Free consultation.",
  alternates: {
    canonical: "https://mahaproperties.in/contact",
  },
  openGraph: {
    title: "Contact MAHA Properties Kukatpally Hyderabad",
    description:
      "Consultation with N. Surendra at MAHA Properties. Phone: +91 7799884849. TSRERA Agent Reg A02500004914.",
    url: "https://mahaproperties.in/contact",
    images: [{ url: "/images/maha-logo-dark.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MAHA Properties Kukatpally Hyderabad",
    description: "TSRERA Registered Agent A02500004914. Phone: +91 7799884849.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mahaproperties.in" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://mahaproperties.in/contact" },
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
      <section className="bg-[#141414] text-white py-16 sm:py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Get In Touch
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Contact MAHA PROPERTIES
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Have questions regarding ready apartments in Chandanagar, luxury villas, open plots, or investment land in Hyderabad? Reach out directly to our registered consultant.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Consultant & Office
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                  We are here to assist you
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Direct consultation with registered agent N. Surendra
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phones */}
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/90 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm text-[#D4AF37] shrink-0 border border-gray-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                      Phone & WhatsApp
                    </span>
                    <div>
                      <a
                        href={`tel:${companyData.primaryPhone}`}
                        className="text-base font-bold text-gray-900 hover:text-[#D4AF37] transition-colors block"
                      >
                        {companyData.primaryPhoneFormatted}
                      </a>
                      <span className="text-gray-500 text-[11px]">Primary / WhatsApp</span>
                    </div>
                    <div className="pt-1">
                      <a
                        href={`tel:${companyData.secondaryPhone}`}
                        className="text-sm font-semibold text-gray-700 hover:text-[#D4AF37] transition-colors block"
                      >
                        {companyData.secondaryPhoneFormatted}
                      </a>
                      <span className="text-gray-500 text-[11px]">Secondary Contact</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/90 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm text-[#D4AF37] shrink-0 border border-gray-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-sm font-bold text-gray-900 hover:text-[#D4AF37] transition-colors block break-all"
                    >
                      {companyData.email}
                    </a>
                    <span className="text-gray-500 text-[11px]">Direct enquiries & brochure requests</span>
                  </div>
                </div>

                {/* Office Address */}
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/90 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm text-[#D4AF37] shrink-0 border border-gray-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                      Kukatpally Office Address
                    </span>
                    <p className="font-semibold text-gray-900 leading-relaxed text-sm">
                      {companyData.address.line1}, {companyData.address.line2}
                    </p>
                    <p className="text-gray-600">
                      {companyData.address.area}, {companyData.address.city} – {companyData.address.pincode}, {companyData.address.state}.
                    </p>
                    <div className="pt-2">
                      <a
                        href={mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141414] hover:text-[#D4AF37] underline"
                      >
                        <span>Get Driving Directions on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* RERA Registration */}
                <div className="p-5 rounded-2xl bg-[#141414] text-white flex items-start gap-4 shadow-lg border border-gray-800">
                  <div className="p-3 rounded-xl bg-neutral-800 text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block">
                      Telangana RERA Registered
                    </span>
                    <p className="font-mono font-bold text-sm text-white">
                      Reg. No: {companyData.rera.agentRegistrationNumber}
                    </p>
                    <p className="text-gray-400 text-[11px]">
                      Agent: {companyData.rera.registeredAgent} • Valid to 2031
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm
                propertyTitle="General Real Estate Consultation"
                defaultConfig="Apartments & Gated Communities"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

