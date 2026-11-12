import React from "react";
import Link from "next/link";
import { MahaLogo } from "./logo";
import { companyData, getPropertyWhatsAppUrl } from "../data/company";
import { getPublishedProperties } from "../data/properties";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const publishedProperties = getPublishedProperties();

  return (
    <footer className="bg-[#0B1630] text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <MahaLogo variant="horizontal" theme="dark" size="lg" />
            <p className="text-gray-300 text-sm leading-relaxed">
              {companyData.tagline} A registered real estate consultancy in Kukatpally, Hyderabad, helping home buyers explore apartments, gated communities, and luxury villas.
            </p>
            {/* TSRERA Agent Trust Badge */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-[#C9A25B]/40 space-y-1">
              <div className="flex items-center gap-2 text-[#C9A25B] font-semibold text-xs tracking-wide">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Telangana RERA Registered Agent</span>
              </div>
              <p className="text-xs text-gray-200 font-mono">
                Reg No: <span className="text-white font-bold">{companyData.rera.agentRegistrationNumber}</span>
              </p>
              <p className="text-[11px] text-gray-400">
                Agent: {companyData.rera.registeredAgent} • Valid: {companyData.rera.validityStart} to {companyData.rera.validityEnd}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold tracking-wide uppercase mb-4 text-[#C9A25B]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#C9A25B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A25B]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#C9A25B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A25B]" />
                  <span>Properties</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C9A25B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A25B]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9A25B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A25B]" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#C9A25B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A25B]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Properties */}
          <div>
            <h4 className="font-serif text-base font-semibold tracking-wide uppercase mb-4 text-[#C9A25B]">
              Featured Projects
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {publishedProperties.map((prop) => (
                <li key={prop.id}>
                  <Link
                    href={`/properties/${prop.slug}`}
                    className="hover:text-[#C9A25B] transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{prop.name}</span>
                    <span className="text-[11px] text-gray-400 group-hover:text-[#C9A25B] shrink-0">
                      {prop.locationArea} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold tracking-wide uppercase mb-4 text-[#C9A25B]">
              Office & Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A25B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyData.address.line1}, {companyData.address.line2}, {companyData.address.area}, {companyData.address.city} – {companyData.address.pincode}, {companyData.address.state}.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A25B] shrink-0" />
                <a
                  href={`tel:${companyData.primaryPhone}`}
                  className="hover:text-[#C9A25B] transition-colors font-medium text-white"
                >
                  {companyData.primaryPhoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A25B] shrink-0" />
                <a
                  href={`tel:${companyData.secondaryPhone}`}
                  className="hover:text-[#C9A25B] transition-colors text-gray-300"
                >
                  {companyData.secondaryPhoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A25B] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-[#C9A25B] transition-colors truncate"
                >
                  {companyData.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={getPropertyWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/90 border border-emerald-600/40 text-emerald-300 text-xs font-medium hover:bg-emerald-900 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Property Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-gray-400 gap-4">
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-gray-200">Disclaimer:</strong> MAHA Properties acts solely as a registered real estate consultancy and intermediary (TSRERA Agent Reg. No. {companyData.rera.agentRegistrationNumber}) and is not the developer or builder of listed projects. Project specifications, pricing, availability, and RERA/HMDA approvals are subject to developer confirmation.
          </p>
          <div className="shrink-0 flex items-center gap-4 text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white underline">
              Privacy Policy
            </Link>
            <span>© {currentYear} MAHA PROPERTIES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
