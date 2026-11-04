import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "../data/company";
import { getFeaturedProperties, getAllProperties } from "../data/properties";
import { PropertyCard } from "../components/property-card";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Search,
  Compass,
  ArrowRight,
  CheckCircle,
  Building,
  Home,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const allProperties = getAllProperties();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/properties/chandanagar/project-img-1.jpg"
            alt="Premium Hyderabad Residences"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          {/* Deep tasteful dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-white text-center lg:text-left">
              {/* TSRERA Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/50 text-xs text-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>TSRERA Approved Real Estate Agent • Reg No: <strong>{companyData.rera.agentRegistrationNumber}</strong></span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
                Find Your <span className="text-gold-gradient">Perfect Property</span> in Hyderabad.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
                Explore verified villas, premium apartments, open plots, and strategic land opportunities across Hyderabad with MAHA Properties.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/properties"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-[#141414] font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-[1.02] text-center"
                >
                  Explore Properties
                </Link>

                <a
                  href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                    "Hello MAHA Properties, I would like to talk to an expert about properties in Hyderabad."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>Talk to Our Expert</span>
                </a>
              </div>

              {/* Trust Points */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-400 font-medium border-t border-white/10">
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Verified Listings</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Direct Agent Support</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Clear Documentation</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Kukatpally Office</span>
                </div>
              </div>
            </div>

            {/* Right Card: Featured Property Spotlight */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white space-y-4 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-wider">
                    Featured Project
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">Ready to Move</span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <Image
                    src="/properties/chandanagar/project-img-4.jpg"
                    alt="Chandanagar Gated Community"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold">
                    Premium Gated Community
                  </h3>
                  <p className="text-xs text-gray-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Chandanagar, Near Gangaram Lake
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Starting Base</span>
                    <span className="text-lg font-bold text-[#D4AF37]">₹88.89 Lakhs*</span>
                  </div>
                  <Link
                    href="/properties/premium-gated-community-chandanagar"
                    className="px-4 py-2 rounded-xl bg-white text-[#141414] text-xs font-bold hover:bg-[#D4AF37] transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROPERTY SEARCH BAR */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 w-full">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/80 p-4 sm:p-6">
          <form
            action="/properties"
            method="GET"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
          >
            {/* Property Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                Property Type
              </label>
              <select
                name="category"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="">All Categories</option>
                <option value="apartments">Apartments</option>
                <option value="villas">Villas</option>
                <option value="open-plots">Open Plots</option>
                <option value="lands">Lands</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                Location
              </label>
              <select
                name="location"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="">All Hyderabad Locations</option>
                <option value="Neopolis">Neopolis / Kokapet</option>
                <option value="Chandanagar">Chandanagar / Gangaram</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="Kompally">Kompally</option>
                <option value="Mokila">Mokila / Shankarpally</option>
                <option value="Kollur">Kollur / ORR</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                Status
              </label>
              <select
                name="status"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="">All Statuses</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Available">Available</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#141414] hover:bg-black text-white text-sm font-bold tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow"
              >
                <Search className="w-4 h-4 text-[#D4AF37]" />
                <span>Find Properties</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Handpicked Selection</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Featured Properties
              </h2>
              <p className="text-sm text-gray-500 mt-2 max-w-xl">
                Explore our spotlight verified gated residences and residential investment choices in Hyderabad.
              </p>
            </div>

            <Link
              href="/properties"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#D4AF37] transition-colors"
            >
              <span>View All Properties ({allProperties.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
            {/* Also show other properties to fill the showcase */}
            {allProperties
              .filter((p) => !p.featured)
              .slice(0, 2)
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </div>
      </section>

      {/* 4. PROPERTY CATEGORIES */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Tailored Portfolios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Explore by Category
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Discover residential and investment opportunities aligned with your family goals and financial budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/properties?category=${cat.id}`}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-bold">{cat.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between text-xs font-bold text-[#141414] group-hover:text-[#D4AF37] transition-colors pt-2 border-t border-gray-100">
                    <span>View Listings</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT MAHA PROPERTIES & TSRERA REGISTRATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <Image
                  src="/properties/chandanagar/project-img-6.jpg"
                  alt="MAHA Properties Consulting Hyderabad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-gray-300">Office Location</p>
                  <p className="text-sm font-bold">SLN Heights, Tulasi Nagar, Kukatpally</p>
                  <p className="text-[11px] text-[#D4AF37] mt-1">Hyderabad – 500072, Telangana</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>About MAHA Properties</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Your Property Journey, <br />
                <span className="text-[#D4AF37]">Our Priority.</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                MAHA PROPERTIES is a professional real estate consultancy based in Kukatpally, Hyderabad, spearheaded by registered real estate consultant <strong>N. Surendra</strong>. We assist home buyers, NRI investors, and property seekers in navigating Hyderabad’s vibrant real estate landscape with transparency and clarity.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you are evaluating a ready-to-move apartment near the IT corridor, an independent luxury villa, or a high-growth residential open plot, we provide personalized guidance, verified documentation analysis, and seamless on-ground site visits.
              </p>

              {/* TSRERA Certificate Spotlight */}
              <div className="p-5 rounded-2xl bg-[#141414] text-white space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-serif text-base font-bold">Registered with Telangana RERA</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-mono font-bold">
                    Reg. No: {companyData.rera.agentRegistrationNumber}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300 pt-1">
                  <div>
                    <span className="text-gray-400 block text-[11px]">Registered Agent:</span>
                    <strong className="text-white">{companyData.rera.registeredAgent}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Registration Validity:</span>
                    <span>{companyData.rera.validityStart} to {companyData.rera.validityEnd}</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 italic pt-1 border-t border-gray-800">
                  Note: Agent registration certificate issued by Telangana Real Estate Regulatory Authority. Individual project approvals are subject to developer-specific sanctions.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-colors"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${companyData.primaryPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call {companyData.primaryPhoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MAHA PROPERTIES */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Trust & Transparency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Why Choose MAHA Properties
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Our consultative approach prioritizes buyer requirements with verified insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] text-[#D4AF37] flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Personalized Property Guidance
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct one-on-one consultation aligning project choices with your lifestyle, family needs, and financial budget.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] text-[#D4AF37] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Local Market Understanding
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Deep ground knowledge of Hyderabad micro-markets including Kukatpally, Chandanagar, Miyapur, Kompally, and Mokila.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] text-[#D4AF37] flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Property Selection Assistance
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Curated property options with physical inspections, floor plan assessments, and price comparisons across projects.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] text-[#D4AF37] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Clear Communication
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Straightforward pricing, transparent fee breakdowns, and reliable updates without ambiguous or false claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA BANNER */}
      <section className="py-16 bg-[#141414] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Looking for the Right Property?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Connect with MAHA Properties to discuss your requirements. We will assist you with verified configurations, site visits, and transparent pricing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${companyData.primaryPhone}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {companyData.primaryPhoneFormatted}</span>
            </a>

            <a
              href={companyData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

