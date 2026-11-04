import React from "react";
import Link from "next/link";
import { MahaLogo } from "./logo";
import { companyData } from "../data/company";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] text-white pt-16 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <MahaLogo variant="horizontal" theme="dark" size="lg" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional real estate consultancy based in Kukatpally, Hyderabad.
              Assisting home buyers and investors with verified property selections across villas, apartments, open plots, and lands.
            </p>
            {/* TSRERA Agent Trust Badge */}
            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-[#D4AF37]/40 space-y-1">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Telangana RERA Registered Agent</span>
              </div>
              <p className="text-xs text-gray-300 font-mono">
                Reg No: <span className="text-white font-bold">{companyData.rera.agentRegistrationNumber}</span>
              </p>
              <p className="text-[11px] text-gray-400">
                Agent: {companyData.rera.registeredAgent} • Valid: {companyData.rera.validityStart} to {companyData.rera.validityEnd}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold tracking-wide uppercase mb-4 text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Browse Properties</span>
                </Link>
              </li>
              <li>
                <Link href="/properties/premium-gated-community-chandanagar" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 font-medium text-gray-300">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Chandanagar Project (Featured)</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Consultancy Services</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>About Us & Credentials</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Contact & Office Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold tracking-wide uppercase mb-4 text-[#D4AF37]">
              Property Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {companyData.categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/properties?category=${cat.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[11px] text-gray-500 group-hover:text-[#D4AF37]">Explore →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold tracking-wide uppercase mb-4 text-[#D4AF37]">
              Office & Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyData.address.line1}, {companyData.address.line2}, {companyData.address.area}, {companyData.address.city} – {companyData.address.pincode}, {companyData.address.state}.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${companyData.primaryPhone}`}
                  className="hover:text-white transition-colors font-medium text-gray-300"
                >
                  {companyData.primaryPhoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${companyData.secondaryPhone}`}
                  className="hover:text-white transition-colors text-gray-400"
                >
                  {companyData.secondaryPhoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {companyData.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={companyData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-medium hover:bg-emerald-900 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p className="max-w-3xl leading-relaxed text-gray-400">
            <strong className="text-gray-300">Disclaimer:</strong> MAHA Properties is an authorized Real Estate Agent registered with Telangana RERA (Reg. No. A02500004914). Property specifications, pricing, floor plans, and amenities are subject to developer confirmation and legal validation. All listed dimensions and values are indicative.
          </p>
          <div className="shrink-0 text-gray-400">
            © {currentYear} MAHA PROPERTIES. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

