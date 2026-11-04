"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { companyData } from "../data/company";

interface WhatsAppButtonProps {
  customMessage?: string;
}

export function WhatsAppButton({ customMessage }: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg =
    "Hello MAHA Properties, I would like to inquire about properties in Hyderabad.";
  const message = encodeURIComponent(customMessage || defaultMsg);
  const waUrl = `https://wa.me/${companyData.whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-gray-200 animate-fadeIn">
          <span>Chat directly with N. Surendra</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-700 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MAHA Properties on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-green-400 opacity-30 group-hover:opacity-60 animate-ping duration-1000 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow" />
      </a>
    </div>
  );
}

