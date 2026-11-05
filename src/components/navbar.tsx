"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MahaLogo } from "./logo";
import { companyData } from "../data/company";
import { Phone, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <MahaLogo variant="horizontal" theme="light" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#D4AF37] font-semibold bg-[#F8F6F0]"
                      : "text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50"
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
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F8F6F0] border border-[#D4AF37]/30 text-[11px] text-gray-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>TSRERA: {companyData.rera.agentRegistrationNumber}</span>
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                "Hello MAHA Properties, I would like to enquire about properties in Hyderabad."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with MAHA Properties on WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full text-green-700 bg-green-50 hover:bg-green-100 transition-colors border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Call Now Button */}
            <a
              href={`tel:${companyData.primaryPhone}`}
              aria-label={`Call MAHA Properties at ${companyData.primaryPhoneFormatted}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] rounded-full bg-[#141414] hover:bg-black text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-sm hover:shadow hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${companyData.primaryPhone}`}
              aria-label="Call MAHA Properties"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#141414] text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
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
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
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
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F8F6F0] text-[#D4AF37] font-semibold"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F8F6F0] text-xs text-gray-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>TSRERA Agent Reg: {companyData.rera.agentRegistrationNumber}</span>
              </div>
              <a
                href={`tel:${companyData.primaryPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#141414] text-white text-sm font-semibold tracking-wide"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {companyData.primaryPhoneFormatted}</span>
              </a>
              <a
                href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
                  "Hello MAHA Properties, I would like to enquire about properties in Hyderabad."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

