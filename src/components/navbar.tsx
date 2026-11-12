"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MahaLogo } from "./logo";
import { companyData, getPropertyWhatsAppUrl } from "../data/company";
import { Phone, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E5DFD3]"
          : "bg-white py-4 border-b border-[#E5DFD3]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <MahaLogo variant="horizontal" theme="light" />

          {/* Desktop Navigation Links */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#0B1630] font-semibold bg-[#F7F2E9]"
                      : "text-[#171C26] hover:text-[#0B1630] hover:bg-[#F7F2E9]/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* TSRERA Agent Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7F2E9] border border-[#C9A25B]/40 text-[11px] text-[#171C26] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A25B]" />
              <span>TSRERA Agent: {companyData.rera.agentRegistrationNumber}</span>
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href={getPropertyWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with MAHA Properties on WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Call Now Button */}
            <a
              href={`tel:${companyData.primaryPhone}`}
              aria-label={`Call MAHA Properties at ${companyData.primaryPhoneFormatted}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] rounded-full bg-[#0B1630] hover:bg-[#132347] text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A25B]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${companyData.primaryPhone}`}
              aria-label="Call MAHA Properties"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B1630] text-white"
            >
              <Phone className="w-4 h-4 text-[#C9A25B]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-12 h-12 rounded-xl text-[#171C26] hover:bg-[#F7F2E9]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DFD3] bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F7F2E9] text-[#0B1630] font-semibold"
                      : "text-[#171C26] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#E5DFD3] flex flex-col gap-2.5">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F7F2E9] text-xs text-[#171C26] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C9A25B]" />
                <span>TSRERA Agent Reg: {companyData.rera.agentRegistrationNumber}</span>
              </div>
              <a
                href={`tel:${companyData.primaryPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0B1630] text-white text-sm font-semibold tracking-wide"
              >
                <Phone className="w-4 h-4 text-[#C9A25B]" />
                <span>Call {companyData.primaryPhoneFormatted}</span>
              </a>
              <a
                href={getPropertyWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
