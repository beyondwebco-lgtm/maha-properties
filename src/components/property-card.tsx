import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "../types/property";
import { getBlurDataUrl } from "../data/blur-data";
import { MapPin, Home, ArrowUpRight, CheckCircle2, Building2 } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const mainImage = property.images[0];
  const blurUrl = mainImage ? getBlurDataUrl(mainImage.src) : undefined;

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image container */}
      <Link
        href={`/properties/${property.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1630] block"
      >
        {mainImage ? (
          <>
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              loading="lazy"
              placeholder={blurUrl ? "blur" : "empty"}
              blurDataURL={blurUrl}
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 48vw, 380px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1630]/80 via-transparent to-[#0B1630]/25 pointer-events-none" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0B1630] to-[#171C26]">
            <Building2 className="w-10 h-10 text-[#C9A25B]/80 mb-2" />
            <span className="text-xs font-serif text-[#F7F2E9] tracking-wide">
              {property.name}
            </span>
            <span className="text-[11px] text-gray-400 mt-1">
              Project photography awaited
            </span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#0B1630]/90 text-[#F7F2E9] backdrop-blur-sm border border-white/10">
            {property.propertyType === "villas" ? "Villas" : "Apartments"}
          </span>
          {property.constructionStatus ? (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-emerald-700/95 text-white shadow flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {property.constructionStatus}
            </span>
          ) : property.statusNotice ? (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-amber-600/95 text-white shadow">
              Details Being Updated
            </span>
          ) : null}
        </div>

        {/* Bottom Location */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs pointer-events-none">
          <div className="flex items-center gap-1.5 drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-[#C9A25B] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2.5">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A6823F]">
              {property.typeLabel}
            </span>
            <Link href={`/properties/${property.slug}`}>
              <h3 className="font-serif text-xl font-bold text-[#171C26] group-hover:text-[#0B1630] transition-colors line-clamp-1 mt-0.5">
                {property.name}
              </h3>
            </Link>
          </div>

          {/* Confirmed Specs Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#747B86] py-2 border-y border-[#E5DFD3]/70">
            {property.bhkOptions.length > 0 && (
              <div className="flex items-center gap-1 font-medium text-[#171C26]">
                <Home className="w-3.5 h-3.5 text-[#C9A25B]" />
                <span>{property.bhkOptions.join(" & ")}</span>
              </div>
            )}
            {property.sizeRange && (
              <>
                <span className="text-gray-300">•</span>
                <span>{property.sizeRange}</span>
              </>
            )}
          </div>

          {/* Brief Snippet */}
          <p className="text-xs text-[#747B86] line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Price & Dual CTAs */}
        <div className="pt-3 border-t border-[#E5DFD3]/70 space-y-3">
          <div className="space-y-0.5">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-[#747B86] font-medium uppercase tracking-wider">
                {property.startingPrice || property.pricePerSqFt ? "Indicative Price" : "Pricing"}
              </span>
              <span className="text-base font-bold text-[#0B1630]">
                {property.priceDisplay}
              </span>
            </div>
            {property.priceDisclaimer && (
              <p className="text-[10px] text-[#747B86] text-right">
                {property.priceDisclaimer}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href={`/properties/${property.slug}`}
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border border-[#0B1630] text-[#0B1630] hover:bg-[#0B1630] hover:text-white text-xs font-semibold transition-colors"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={`/properties/${property.slug}#enquiry-section`}
              className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-[#C9A25B] hover:bg-[#B08B45] text-[#0B1630] text-xs font-bold transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
