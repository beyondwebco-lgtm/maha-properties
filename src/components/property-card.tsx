import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "../types/property";
import { MapPin, Home, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  featuredOnly?: boolean;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const mainImage = property.images[0]?.src || "/properties/chandanagar/project-img-1.jpg";

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
          src={mainImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Dark overlay subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#141414]/90 text-white backdrop-blur-sm shadow">
            {property.typeLabel}
          </span>
          <div className="flex items-center gap-1.5">
            {property.isDemo ? (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500 text-white shadow">
                Demo Preview
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-emerald-600 text-white shadow flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {property.status}
              </span>
            )}
          </div>
        </div>

        {/* Bottom image overlay metadata */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 drop-shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="truncate max-w-[200px]">{property.location}</span>
          </div>
          {property.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#D4AF37] text-[#141414] font-bold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 fill-current" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Title */}
          <Link href={`/properties/${property.slug}`}>
            <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>

          {/* Quick Specs / Configurations */}
          <div className="flex items-center gap-3 text-xs text-gray-600 py-1 border-y border-gray-100">
            <div className="flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-gray-400" />
              <span>{property.areaRange}</span>
            </div>
            {property.projectOverview?.towerConfiguration && (
              <span className="text-gray-300">•</span>
            )}
            {property.projectOverview?.towerConfiguration && (
              <span className="truncate">{property.projectOverview.towerConfiguration}</span>
            )}
          </div>

          {/* Brief Snippet */}
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Price & CTA */}
        <div className="pt-4 mt-3 border-t border-gray-100 flex items-end justify-between">
          <div>
            <div className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">
              Starting Base Price
            </div>
            <div className="text-xl font-extrabold text-[#141414]">
              {property.priceDisplay}
            </div>
            <div className="text-[10px] text-gray-400 italic">
              *Additional charges apply
            </div>
          </div>

          <Link
            href={`/properties/${property.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141414] group-hover:bg-[#D4AF37] text-white group-hover:text-[#141414] text-xs font-bold transition-all duration-300 shadow-sm"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

