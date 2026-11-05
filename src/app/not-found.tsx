import React from "react";
import Link from "next/link";
import { Home, ArrowRight, Search, Compass } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | MAHA Properties",
  description: "The requested property or page could not be found. Explore verified listings with MAHA Properties in Hyderabad.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl">
        <div className="w-16 h-16 rounded-3xl bg-[#F8F6F0] text-[#D4AF37] flex items-center justify-center mx-auto border border-[#D4AF37]/30">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            404 — Page Not Found
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Looking for a Property?
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            The page you are looking for may have moved or is temporarily unavailable. Browse our verified Hyderabad properties or return home.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/properties"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#D4AF37] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <Search className="w-4 h-4" />
            <span>Browse Properties</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-[#D4AF37]" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 space-y-2">
          <span className="font-bold text-gray-700 block">Popular Destinations:</span>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <Link
              href="/properties/premium-gated-community-chandanagar"
              className="hover:text-[#D4AF37] underline transition-colors"
            >
              Chandanagar Gated Community
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/properties/brigade-gateway-neopolis"
              className="hover:text-[#D4AF37] underline transition-colors"
            >
              Brigade Gateway Neopolis
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact"
              className="hover:text-[#D4AF37] underline transition-colors"
            >
              Contact Agent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
