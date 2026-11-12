import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { companyData, getPropertyWhatsAppUrl } from "../../data/company";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Compass,
  Users,
  ListChecks,
  CalendarCheck,
  FileText,
  Award,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Real Estate Consultancy in Hyderabad",
  description:
    "MAHA Properties is a TSRERA registered real estate consultancy (Reg No: A02500004914) in Kukatpally, Hyderabad, guiding buyers on apartments and luxury villas.",
  alternates: {
    canonical: `${companyData.websiteUrl}/about`,
  },
  openGraph: {
    title: "About MAHA Properties | Real Estate Consultancy Hyderabad",
    description:
      "Real estate consultancy in Kukatpally, Hyderabad connecting buyers with residential projects. TSRERA Agent Reg No: A02500004914.",
    url: `${companyData.websiteUrl}/about`,
    images: [{ url: "/properties/chandanagar/project-img-1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MAHA Properties | Hyderabad",
    description: "TSRERA Registered Real Estate Agent (Reg No: A02500004914).",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: companyData.websiteUrl },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${companyData.websiteUrl}/about` },
  ],
};

export default function AboutPage() {
  const highlights = [
    {
      icon: <Compass className="w-5 h-5 text-[#C9A25B]" />,
      title: "Hyderabad Property Market Knowledge",
      desc: "Focused understanding of residential corridors across West and Central-West Hyderabad including Chandanagar, Patancheru, and Neopolis.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#C9A25B]" />,
      title: "Buyer Requirement Consultation",
      desc: "One-on-one discussions to align location preferences, BHK configurations, and budget parameters before shortlisting.",
    },
    {
      icon: <ListChecks className="w-5 h-5 text-[#C9A25B]" />,
      title: "Project Shortlisting",
      desc: "Structured comparison of suitable gated apartment communities and villa projects based on confirmed specifications.",
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-[#C9A25B]" />,
      title: "Site Visit Assistance",
      desc: "Coordinated on-site visits and direct introductions to the respective developer sales team.",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#C9A25B]" />,
      title: "Pricing and Documentation Guidance",
      desc: "Support in reviewing developer cost breakdowns, payment schedules, and standard booking documentation.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#C9A25B]" />,
      title: "Registered Agent Credentials",
      desc: `Registered with Telangana RERA under Agent Registration No. ${companyData.rera.agentRegistrationNumber}.`,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="bg-[#0B1630] text-white py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A25B]">
              {companyData.tagline}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              About MAHA Properties
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              MAHA Properties is a real estate consultancy based in Kukatpally, Hyderabad, connecting property buyers with suitable residential apartments, gated communities, and luxury villas.
            </p>
          </div>
        </div>
      </section>

      {/* Consultancy Role & Credentials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#171C26] leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A6823F]">
                Our Role
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1630]">
                Dedicated Property Advisory for Hyderabad Home Buyers
              </h2>
              <p className="text-[#747B86]">
                MAHA Properties acts as a professional intermediary between real estate developers and property buyers. We are not the builder or developer of the projects featured on our platform.
              </p>
              <p className="text-[#747B86]">
                Our focus is to help buyers explore available residential projects, compare configurations, understand pricing structures, check availability, schedule site visits, and connect directly with the relevant developer sales team.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/properties"
                  className="px-6 py-3 rounded-full bg-[#0B1630] hover:bg-[#132347] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Explore Properties
                </Link>
                <a
                  href={getPropertyWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Verified TSRERA Agent Card */}
            <div className="lg:col-span-5 bg-[#F7F2E9] rounded-3xl p-7 border border-[#E5DFD3] space-y-5">
              <div className="flex items-center gap-2.5 text-[#0B1630]">
                <ShieldCheck className="w-6 h-6 text-[#C9A25B]" />
                <h3 className="font-serif text-xl font-bold">
                  TSRERA Agent Credentials
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm border-y border-[#E5DFD3] py-4">
                <div className="flex justify-between gap-4">
                  <span className="text-[#747B86]">Registered Agent</span>
                  <span className="font-semibold text-[#0B1630] text-right">
                    {companyData.rera.registeredAgent}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#747B86]">Agent Registration No.</span>
                  <span className="font-mono font-bold text-[#0B1630]">
                    {companyData.rera.agentRegistrationNumber}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#747B86]">Validity Period</span>
                  <span className="font-medium text-[#171C26]">
                    {companyData.rera.validityStart} to {companyData.rera.validityEnd}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#747B86]">Authority</span>
                  <span className="font-medium text-[#171C26] text-right">
                    TSRERA
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#747B86] leading-relaxed">
                Note: Agent registration is distinct from project-specific RERA approvals. Individual project RERA numbers are listed on each project page where verified.
              </p>

              <div className="space-y-2 pt-1 text-xs text-[#171C26]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A25B] shrink-0 mt-0.5" />
                  <span>{companyData.address.full}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C9A25B] shrink-0" />
                  <a href={`tel:${companyData.primaryPhone}`} className="font-semibold hover:underline">
                    {companyData.primaryPhoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C9A25B] shrink-0" />
                  <a href={`mailto:${companyData.email}`} className="hover:underline">
                    {companyData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Consultancy Strengths */}
          <div>
            <div className="mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A6823F]">
                How We Help
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1630]">
                Our Consultancy Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0B1630] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B1630]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#747B86] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
