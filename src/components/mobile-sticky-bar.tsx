"use client";

import React from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { companyData } from "../data/company";

interface MobileStickyBarProps {
  propertyTitle?: string;
  onEnquireClick?: () => void;
}

export function MobileStickyBar({
  propertyTitle,
  onEnquireClick,
}: MobileStickyBarProps) {
  const defaultText = propertyTitle
    ? `Hello MAHA Properties, I'm interested in ${propertyTitle}. Please share more details.`
    : "Hello MAHA Properties, I would like to inquire about your property listings.";

  const waUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    defaultText
  )}`;

  const scrollToEnquiry = () => {
    if (onEnquireClick) {
      onEnquireClick();
      return;
    }
    const elem = document.getElementById("enquiry-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${companyData.primaryPhone}`}
          aria-label={`Call MAHA Properties at ${companyData.primaryPhoneFormatted}`}
          className="flex items-center justify-center gap-1.5 min-h-[48px] px-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-semibold active:scale-95 transition-transform touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span>Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire with MAHA Properties on WhatsApp"
          className="flex items-center justify-center gap-1.5 min-h-[48px] px-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold shadow active:scale-95 transition-transform touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire CTA */}
        <button
          onClick={scrollToEnquiry}
          type="button"
          aria-label="Scroll to property enquiry form"
          className="flex items-center justify-center gap-1.5 min-h-[48px] px-2 rounded-xl bg-[#141414] text-white text-xs font-semibold active:scale-95 transition-transform touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <Send className="w-4 h-4 text-[#D4AF37]" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}

