import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData, getPropertyWhatsAppUrl } from "../data/company";
import { getFeaturedProperties, getFilterOptions } from "../data/properties";
import { getBlurDataUrl } from "../data/blur-data";
import { PropertyCard } from "../components/property-card";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  Compass,
  Building2,
  CalendarCheck,
  FileText,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const filterOptions = getFilterOptions();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden bg-[#0B1630]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/properties/chandanagar/project-img-1.jpg"
            alt="Sai Keerthi Lake View residential community in Chandanagar, Hyderabad"
            fill
            priority
            placeholder="blur"
            blurDataURL={getBlurDataUrl("/properties/chandanagar/project-img-1.jpg")}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1630]/95 via-[#0B1630]/80 to-[#0B1630]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl space-y-6 text-white">
            {/* TSRERA Registered Agent Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A25B]/50 text-xs text-[#F7F2E9]">
              <ShieldCheck className="w-4 h-4 text-[#C9A25B] shrink-0" />
              <span>
                Real Estate Consultancy • TSRERA Agent Reg: <strong>{companyData.rera.agentRegistrationNumber}</strong>
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
              Discover Your Next Home in Hyderabad.
            </h1>

            <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-light leading-relaxed">
              Explore premium apartments, gated communities and luxury villas across Hyderabad, with personalized property guidance from MAHA Properties.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/properties"
                className="px-8 py-4 rounded-full bg-[#C9A25B] hover:bg-[#B08B45] text-[#0B1630] font-bold text-sm tracking-wide uppercase transition-all text-center shadow-lg"
              >
                Explore Properties
              </Link>

              <Link
                href="/contact?intent=site-visit"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide backdrop-blur-md border border-white/25 transition-all text-center"
              >
                Schedule a Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPACT PROPERTY SEARCH */}
      <section aria-label="Property Search" className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 w-full">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-[#E5DFD3] p-5 sm:p-6">
          <form
            action="/properties"
            method="GET"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 items-end"
          >
            {/* Location */}
            <div>
              <label htmlFor="home-location" className="block text-[11px] font-bold uppercase tracking-wider text-[#747B86] mb-1">
                Location
              </label>
              <select
                id="home-location"
                name="location"
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs sm:text-sm text-[#171C26] bg-[#F7F2E9]/40 focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">All Locations</option>
                {filterOptions.locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label htmlFor="home-category" className="block text-[11px] font-bold uppercase tracking-wider text-[#747B86] mb-1">
                Property Type
              </label>
              <select
                id="home-category"
                name="category"
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs sm:text-sm text-[#171C26] bg-[#F7F2E9]/40 focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">All Types</option>
                <option value="apartments">Apartments</option>
                <option value="villas">Villas</option>
              </select>
            </div>

            {/* BHK Configuration */}
            <div>
              <label htmlFor="home-bhk" className="block text-[11px] font-bold uppercase tracking-wider text-[#747B86] mb-1">
                BHK
              </label>
              <select
                id="home-bhk"
                name="bhk"
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs sm:text-sm text-[#171C26] bg-[#F7F2E9]/40 focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">Any BHK</option>
                {filterOptions.bhkOptions.map((bhk) => (
                  <option key={bhk} value={bhk}>
                    {bhk}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="home-budget" className="block text-[11px] font-bold uppercase tracking-wider text-[#747B86] mb-1">
                Budget Range
              </label>
              <select
                id="home-budget"
                name="budget"
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs sm:text-sm text-[#171C26] bg-[#F7F2E9]/40 focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">Any Budget</option>
                <option value="under-1cr">Under ₹1 Cr</option>
                <option value="1cr-3cr">₹1 Cr – ₹3 Cr</option>
                <option value="above-3cr">Above ₹3 Cr</option>
                <option value="price-on-request">Price on Request</option>
              </select>
            </div>

            {/* Construction Status */}
            <div>
              <label htmlFor="home-status" className="block text-[11px] font-bold uppercase tracking-wider text-[#747B86] mb-1">
                Status
              </label>
              <select
                id="home-status"
                name="status"
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs sm:text-sm text-[#171C26] bg-[#F7F2E9]/40 focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">All Statuses</option>
                {filterOptions.statuses.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 px-5 rounded-xl bg-[#0B1630] hover:bg-[#132347] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-colors h-[42px]"
            >
              <Search className="w-4 h-4 text-[#C9A25B]" />
              <span>Search</span>
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROPERTIES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A6823F]">
                Approved Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1630]">
                Explore Our Featured Properties
              </h2>
              <p className="text-sm text-[#747B86] max-w-2xl">
                {companyData.supportingCopy}
              </p>
            </div>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1630] hover:text-[#C9A25B] transition-colors shrink-0"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY MAHA PROPERTIES */}
      <section className="py-16 sm:py-20 bg-[#F7F2E9] border-y border-[#E5DFD3] content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A6823F]">
              Why MAHA Properties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1630]">
              Your Trusted Property Partner
            </h2>
            <p className="text-sm text-[#747B86]">
              As an independent real estate consultancy, we help buyers compare suitable residential options across Hyderabad with clarity and personalized coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Compass className="w-6 h-6 text-[#C9A25B]" />,
                title: "Personalized Property Guidance",
                desc: "Recommendations aligned with your preferred Hyderabad corridor, space requirements, and budget.",
              },
              {
                icon: <Building2 className="w-6 h-6 text-[#C9A25B]" />,
                title: "Carefully Selected Projects",
                desc: "Focused portfolio of residential apartments, gated communities, and triplex villas.",
              },
              {
                icon: <CalendarCheck className="w-6 h-6 text-[#C9A25B]" />,
                title: "Site Visit Coordination",
                desc: "Organized project visits and direct introductions to the relevant developer sales team.",
              },
              {
                icon: <FileText className="w-6 h-6 text-[#C9A25B]" />,
                title: "Clear Pricing & Documentation Support",
                desc: "Guidance on understanding cost sheets, payment schedules, and required buyer documentation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#E5DFD3] shadow-sm space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B1630] flex items-center justify-center">
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
      </section>

      {/* SECTION 5: SIMPLE BUYING JOURNEY */}
      <section className="py-16 sm:py-20 bg-white content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A6823F]">
              How We Assist You
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1630]">
              Simple Buying Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Explore Properties",
                desc: "Browse approved residential apartments and gated villa communities across Hyderabad.",
              },
              {
                step: "02",
                title: "Connect With Our Advisor",
                desc: "Discuss configurations, availability, and pricing details with our registered property consultant.",
              },
              {
                step: "03",
                title: "Schedule a Site Visit",
                desc: "Visit shortlisted projects in person and connect with the developer sales team for next steps.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-7 rounded-2xl border border-[#E5DFD3] bg-[#F7F2E9]/30 space-y-3"
              >
                <span className="font-serif text-3xl font-bold text-[#C9A25B]">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1630]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#747B86] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONSULTATION CTA */}
      <section className="py-16 sm:py-20 bg-[#0B1630] text-white content-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A25B]">
            {companyData.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Looking for the Right Property?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tell us your preferred location, property type and budget. Our team will help you explore suitable options.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A25B] hover:bg-[#B08B45] text-[#0B1630] font-bold text-sm tracking-wide uppercase transition-colors"
            >
              Get Property Assistance
            </Link>
            <a
              href={getPropertyWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Advisor</span>
            </a>
            <a
              href={`tel:${companyData.primaryPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/25 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9A25B]" />
              <span>{companyData.primaryPhoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
