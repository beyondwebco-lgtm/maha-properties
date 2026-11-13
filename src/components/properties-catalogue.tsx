"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { getPublishedProperties, getFilterOptions } from "../data/properties";
import { PropertyCard } from "./property-card";
import { Search, Filter, RotateCcw, Home } from "lucide-react";

export function PropertiesCatalogue() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialLocation = searchParams.get("location") || "";
  const initialBhk = searchParams.get("bhk") || "";
  const initialBudget = searchParams.get("budget") || "";
  const initialStatus = searchParams.get("status") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState<string>(initialLocation);
  const [selectedBhk, setSelectedBhk] = useState<string>(initialBhk);
  const [selectedBudget, setSelectedBudget] = useState<string>(initialBudget);
  const [selectedStatus, setSelectedStatus] = useState<string>(initialStatus);

  const publishedProperties = useMemo(() => getPublishedProperties(), []);
  const filterOptions = useMemo(() => getFilterOptions(), []);

  const filteredProperties = useMemo(() => {
    return publishedProperties.filter((prop) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          prop.name.toLowerCase().includes(q) ||
          prop.location.toLowerCase().includes(q) ||
          prop.description.toLowerCase().includes(q) ||
          prop.typeLabel.toLowerCase().includes(q);
        if (!matches) return false;
      }

      if (selectedCategory && prop.propertyType !== selectedCategory) {
        return false;
      }

      if (
        selectedLocation &&
        prop.locationArea.toLowerCase() !== selectedLocation.toLowerCase() &&
        !prop.location.toLowerCase().includes(selectedLocation.toLowerCase())
      ) {
        return false;
      }

      if (selectedBhk) {
        const matchesBhk = prop.bhkOptions.some((b) =>
          b.toLowerCase().includes(selectedBhk.toLowerCase())
        );
        if (!matchesBhk) return false;
      }

      if (selectedBudget) {
        if (selectedBudget === "under-1cr") {
          if (!prop.startingPrice || prop.startingPrice >= 10000000) return false;
        } else if (selectedBudget === "1cr-3cr") {
          if (!prop.startingPrice || prop.startingPrice < 10000000 || prop.startingPrice > 30000000) {
            return false;
          }
        } else if (selectedBudget === "above-3cr") {
          if (!prop.startingPrice || prop.startingPrice <= 30000000) return false;
        } else if (selectedBudget === "price-on-request") {
          if (prop.startingPrice !== undefined) return false;
        }
      }

      if (selectedStatus && prop.constructionStatus !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [
    publishedProperties,
    searchQuery,
    selectedCategory,
    selectedLocation,
    selectedBhk,
    selectedBudget,
    selectedStatus,
  ]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedLocation("");
    setSelectedBhk("");
    setSelectedBudget("");
    setSelectedStatus("");
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
      selectedCategory ||
      selectedLocation ||
      selectedBhk ||
      selectedBudget ||
      selectedStatus
  );

  return (
    <div className="bg-[#F7F2E9]/40 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A6823F]">
            Curated Residential Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1630]">
            Properties in Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-[#747B86] max-w-2xl">
            Explore approved apartments, gated communities, and luxury villas across Hyderabad with personalized guidance from MAHA Properties.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E5DFD3] shadow-sm mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#747B86] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by project name, location (e.g. Chandanagar, Patancheru, Neopolis)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-16 py-3 rounded-2xl border border-[#E5DFD3] text-sm text-[#171C26] placeholder-gray-400 bg-[#F7F2E9]/30 focus:bg-white focus:outline-none focus:border-[#C9A25B]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#747B86] hover:text-[#0B1630]"
                aria-label="Clear search input"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold text-[#747B86] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#C9A25B]" />
              Property Type:
            </span>
            {[
              { id: "", label: "All Properties" },
              { id: "apartments", label: "Apartments" },
              { id: "villas", label: "Villas" },
            ].map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id || "all"}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#0B1630] text-white shadow-sm"
                      : "bg-[#F7F2E9] text-[#171C26] hover:bg-[#EFE8DA]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Multi-filter Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-[#E5DFD3]/70">
            <div>
              <label htmlFor="location-filter" className="block text-[11px] font-bold text-[#747B86] uppercase mb-1">
                Location
              </label>
              <select
                id="location-filter"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">All Locations</option>
                {filterOptions.locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="bhk-filter" className="block text-[11px] font-bold text-[#747B86] uppercase mb-1">
                BHK Configuration
              </label>
              <select
                id="bhk-filter"
                value={selectedBhk}
                onChange={(e) => setSelectedBhk(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">All Configurations</option>
                {filterOptions.bhkOptions.map((bhk) => (
                  <option key={bhk} value={bhk}>
                    {bhk}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget-filter" className="block text-[11px] font-bold text-[#747B86] uppercase mb-1">
                Budget
              </label>
              <select
                id="budget-filter"
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">Any Budget</option>
                <option value="under-1cr">Under ₹1 Cr (Confirmed Base)</option>
                <option value="1cr-3cr">₹1 Cr – ₹3 Cr (Confirmed Base)</option>
                <option value="above-3cr">Above ₹3 Cr (Confirmed Base)</option>
                <option value="price-on-request">Price on Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="status-filter" className="block text-[11px] font-bold text-[#747B86] uppercase mb-1">
                Status
              </label>
              <select
                id="status-filter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#E5DFD3] text-xs text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">All Statuses</option>
                {filterOptions.statuses.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Results Counter + Reset */}
          <div className="flex items-center justify-between pt-2 text-xs text-[#747B86]">
            <span>
              Showing <strong className="text-[#0B1630]">{filteredProperties.length}</strong> of{" "}
              {publishedProperties.length} residential projects
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1630] hover:text-[#C9A25B]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E5DFD3] shadow-sm max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F7F2E9] flex items-center justify-center mx-auto text-[#0B1630]">
              <Home className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#0B1630]">
              No matching properties found
            </h2>
            <p className="text-sm text-[#747B86]">
              No published listings match your current filter combination. Reset filters to view all approved properties.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1630] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#132347] transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-[#C9A25B]" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
