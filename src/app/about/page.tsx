import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData } from "../../data/company";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  FileCheck,
  Building,
  Compass,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TSRERA Agent Reg A02500004914 | MAHA Properties",
  description:
    "Learn about MAHA Properties, Kukatpally, Hyderabad. Registered with Telangana RERA Agent No. A02500004914. Ethical property advisory.",
  alternates: {
    canonical: "https://mahaproperties.in/about",
  },
  openGraph: {
    title: "About Us | MAHA Properties Hyderabad",
    description:
      "Professional real estate consultancy in Kukatpally, Hyderabad. TSRERA Registered Agent Reg No. A02500004914.",
    url: "https://mahaproperties.in/about",
    images: [{ url: "/properties/chandanagar/project-img-6.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MAHA Properties Hyderabad",
    description: "TSRERA Registered Real Estate Consultancy (Reg No: A02500004914).",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mahaproperties.in" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://mahaproperties.in/about" },
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Banner */}
      <section className="bg-[#141414] text-white py-16 sm:py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Company Profile
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              About MAHA PROPERTIES
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Professional real estate consultancy located in Kukatpally, Hyderabad. Dedicated to providing ethical guidance and verified property options for home buyers and real estate investors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Grounded Advice for Hyderabad’s Real Estate Market
              </h2>

              <p>
                <strong>MAHA PROPERTIES</strong> operates as a registered real estate consultancy firm headquartered in SLN Heights, Tulasi Nagar, Kukatpally. Under the leadership of <strong>N. Surendra (Nallamekala Surendra)</strong>, the firm provides structured assistance across residential apartments, independent luxury villas, open residential plots, and investment land parcels in Telangana.
              </p>

              <p>
                The Hyderabad property landscape is dynamic, with fast-developing micro-markets spanning Kukatpally, Chandanagar, Miyapur, Kompally, and the Western growth vectors of Mokila, Kollur, and Shankarpally. For home buyers and investors, navigating these opportunities requires on-ground verification, accurate understanding of statutory approvals, and clear pricing clarity.
              </p>

              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#D4AF37]/30 space-y-3">
                <h3 className="font-serif text-base font-bold text-gray-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#D4AF37]" />
                  <span>Our Operating Principles</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Verified Project Facts:</strong> We rely exclusively on confirmed builder specifications, statutory approval numbers, and official layout plans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Transparent Financials:</strong> We provide itemized breakdowns including base rates, amenities charges, floor-rising fees, and statutory contributions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Customer-First Consultation:</strong> Unbiased advisory aligned to your budget, commute convenience, and family priorities.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Official TSRERA Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#141414] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-neutral-900 border border-[#D4AF37]/50 text-[#D4AF37]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">
                      TSRERA Registered Agent
                    </h3>
                    <p className="text-xs text-gray-400">
                      Telangana Real Estate Regulatory Authority
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs border-y border-gray-800 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Registration Number:</span>
                    <span className="font-mono font-bold text-[#D4AF37] text-sm">
                      {companyData.rera.agentRegistrationNumber}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Registered Agent:</span>
                    <span className="font-semibold text-white">
                      {companyData.rera.registeredAgent}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Validity Period:</span>
                    <span className="text-white">
                      {companyData.rera.validityStart} to {companyData.rera.validityEnd}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Issuing Authority:</span>
                    <span className="text-gray-300">
                      Govt. of Telangana (TSRERA)
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed italic">
                  *Regulatory Notice: The TSRERA certificate is granted to the individual real estate agent. Individual properties, gated communities, and projects listed on this platform are subject to separate developer-level approvals from TSRERA and HMDA/GHMC.
                </p>

                <div className="pt-2">
                  <a
                    href={`tel:${companyData.primaryPhone}`}
                    className="w-full py-3 px-4 rounded-xl bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Agent: {companyData.primaryPhoneFormatted}</span>
                  </a>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 text-xs space-y-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                  Registered Office Location
                </span>
                <p className="font-bold text-gray-900 text-sm">
                  MAHA PROPERTIES
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {companyData.address.full}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

