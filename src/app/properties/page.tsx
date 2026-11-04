"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getAllProperties } from "../../data/properties";
import { PropertyCard } from "../../components/property-card";
import { PropertyType, PropertyStatus } from "../../types/property";
import {
  Search,
  Filter,
  RotateCcw,
  SlidersHorizontal,
  Home,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function PropertiesCatalogue() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialLocation = searchParams.get("location") || "";
  const initialStatus = searchParams.get("status") || "";

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState<string>(initialLocation);
  const [selectedStatus, setSelectedStatus] = useState<string>(initialStatus);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  const [showDemoOnly, setShowDemoOnly] = useState(false);

  const allProperties = useMemo(() => getAllProperties(), []);

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return allProperties
      .filter((prop) => {
        // Search query (title, location, description)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matches =
            prop.title.toLowerCase().includes(q) ||
            prop.location.toLowerCase().includes(q) ||
            prop.description.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // Category filter
        if (selectedCategory && prop.type !== selectedCategory) {
          return false;
        }

        // Location filter
        if (
          selectedLocation &&
          !prop.location.toLowerCase().includes(selectedLocation.toLowerCase())
        ) {
          return false;
        }

        // Status filter
        if (selectedStatus && prop.status !== selectedStatus) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") {
          return a.startingPrice - b.startingPrice;
        }
        if (sortBy === "price-desc") {
          return b.startingPrice - a.startingPrice;
        }
        // default: featured first, then real properties first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (!a.isDemo && b.isDemo) return -1;
        if (a.isDemo && !b.isDemo) return 1;
        return 0;
      });
  }, [allProperties, searchQuery, selectedCategory, selectedLocation, selectedStatus, sortBy]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedLocation("");
    setSelectedStatus("");
    setSortBy("default");
  };

  const hasActiveFilters =
    Boolean(searchQuery || selectedCategory || selectedLocation || selectedStatus || sortBy !== "default");

  return (
    <div className="bg-gray-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Online Property Catalogue
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Properties in Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            Explore ready-to-move luxury apartments, premium villas, open plots, and investment lands with verified project details.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200/80 shadow-md mb-8 space-y-4">
          {/* Top row: Search and Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by property title, area, or keywords (e.g. Chandanagar, Villa, Lake)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#D4AF37]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="md:col-span-4 flex items-center gap-2">
              <label className="text-xs text-gray-500 font-bold shrink-0">Sort:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-3 rounded-2xl border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="default">Featured & Spotlight First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Quick Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {[
              { id: "", label: "All Properties" },
              { id: "apartments", label: "Apartments" },
              { id: "villas", label: "Villas" },
              { id: "open-plots", label: "Open Plots" },
              { id: "lands", label: "Lands" },
            ].map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#141414] text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sub Filters: Location & Status & Reset */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Location dropdown */}
            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                Filter by Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs text-gray-800 bg-gray-50 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="">All Locations</option>
                <option value="Neopolis">Neopolis / Kokapet</option>
                <option value="Chandanagar">Chandanagar</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="Kompally">Kompally</option>
                <option value="Mokila">Mokila</option>
                <option value="Kollur">Kollur</option>
              </select>
            </div>

            {/* Status dropdown */}
            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                Filter by Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs text-gray-800 bg-gray-50 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="">All Statuses</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Available">Available</option>
              </select>
            </div>

            {/* Reset Filter Button */}
            <div className="flex items-end">
              {hasActiveFilters && (
                <button
                  onClick={handleReset}
                  type="button"
                  className="w-full py-2 px-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter & Info */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-600">
          <div>
            Showing <strong className="text-gray-900 font-bold">{filteredProperties.length}</strong> {filteredProperties.length === 1 ? "property" : "properties"}
            {selectedCategory && (
              <span> in <strong className="text-[#D4AF37] capitalize">{selectedCategory}</strong></span>
            )}
          </div>
          <div className="text-[11px] text-gray-400">
            *Pricing and availability subject to developer verification
          </div>
        </div>

        {/* Property Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 text-center bg-white rounded-3xl border border-gray-200 shadow-sm max-w-lg mx-auto space-y-4">
            <Home className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-gray-800">
              No Properties Found
            </h3>
            <p className="text-xs text-gray-500">
              We couldn't find any listings matching your search criteria. Try loosening your filters or explore our featured gated community in Chandanagar.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#141414] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF37]" />
        </div>
      }
    >
      <PropertiesCatalogue />
    </Suspense>
  );
}

