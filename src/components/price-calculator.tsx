"use client";

import React, { useState, useMemo } from "react";
import { Calculator, MessageCircle, Info, ShieldCheck, Check } from "lucide-react";
import { companyData } from "../data/company";

interface PriceCalculatorProps {
  propertyTitle?: string;
}

export function PriceCalculator({
  propertyTitle = "Sai Keerthi Lake View",
}: PriceCalculatorProps) {
  // Available configurations
  const configurations = [
    {
      id: "2bhk-1270",
      type: "2 BHK",
      sizeSqFt: 1270,
      amenities: 700000,
      facings: ["West"],
      label: "2 BHK — 1,270 sq.ft (West)",
    },
    {
      id: "3bhk-1590",
      type: "3 BHK",
      sizeSqFt: 1590,
      amenities: 800000,
      facings: ["West", "East"],
      label: "3 BHK — 1,590 sq.ft (East / West)",
    },
    {
      id: "3bhk-1980",
      type: "3 BHK",
      sizeSqFt: 1980,
      amenities: 800000,
      facings: ["West", "East"],
      label: "3 BHK — 1,980 sq.ft (East / West)",
    },
  ];

  // States
  const [selectedConfigId, setSelectedConfigId] = useState("2bhk-1270");
  const [floorNumber, setFloorNumber] = useState(1);
  const [facing, setFacing] = useState("West");
  const [isCorner, setIsCorner] = useState(false);

  const selectedConfig =
    configurations.find((c) => c.id === selectedConfigId) || configurations[0];

  // Update facing if not available in current config
  const availableFacings = selectedConfig.facings;

  // Pricing constants (provided by client)
  const BASE_RATE = 7200; // ₹/sq.ft
  const EAST_PREMIUM_RATE = 100; // ₹/sq.ft
  const CORNER_PREMIUM_RATE = 100; // ₹/sq.ft
  const CORPUS_FUND_RATE = 50; // ₹/sq.ft (for 2 years)
  const MAINTENANCE_RATE = 70; // ₹/sq.ft (for 2 years)
  const INFRASTRUCTURE_RATE = 50; // ₹/sq.ft
  const FLOOR_RISING_RATE = 25; // ₹/sq.ft from 5th floor

  // Calculations
  const calculations = useMemo(() => {
    const size = selectedConfig.sizeSqFt;

    // 1. Base Apartment Price
    const basePrice = size * BASE_RATE;

    // 2. Facing Premium
    const facingPremium = facing === "East" ? size * EAST_PREMIUM_RATE : 0;

    // 3. Corner Premium
    const cornerPremium = isCorner ? size * CORNER_PREMIUM_RATE : 0;

    // 4. Floor Rising: applies from 5th floor
    // Incremental: (floor - 4) * 25/sq.ft
    const floorRisingMultiplier = floorNumber >= 5 ? floorNumber - 4 : 0;
    const floorRisingCharges = floorRisingMultiplier * FLOOR_RISING_RATE * size;

    // 5. Amenities
    const amenitiesCharges = selectedConfig.amenities;

    // 6. Corpus Fund
    const corpusFund = size * CORPUS_FUND_RATE;

    // 7. Maintenance (2 years)
    const maintenance = size * MAINTENANCE_RATE;

    // 8. Infrastructure
    const infrastructure = size * INFRASTRUCTURE_RATE;

    // Total Estimated Price
    const totalEstimated =
      basePrice +
      facingPremium +
      cornerPremium +
      floorRisingCharges +
      amenitiesCharges +
      corpusFund +
      maintenance +
      infrastructure;

    return {
      size,
      basePrice,
      facingPremium,
      cornerPremium,
      floorRisingMultiplier,
      floorRisingCharges,
      amenitiesCharges,
      corpusFund,
      maintenance,
      infrastructure,
      totalEstimated,
    };
  }, [selectedConfig, floorNumber, facing, isCorner]);

  // Formatter for Indian Rupees
  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatLakhCrore = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const msg = `*Price Enquiry — MAHA Properties*
Project: ${propertyTitle}
Configuration: ${selectedConfig.type} (${selectedConfig.sizeSqFt} sq.ft)
Floor: ${floorNumber}th Floor
Facing: ${facing}
Corner Unit: ${isCorner ? "Yes" : "No"}

*Itemized Estimate:*
• Base Price (₹7,200/sq.ft): ${formatINR(calculations.basePrice)}
• Facing Premium: ${calculations.facingPremium > 0 ? formatINR(calculations.facingPremium) : "₹0"}
• Corner Premium: ${calculations.cornerPremium > 0 ? formatINR(calculations.cornerPremium) : "₹0"}
• Floor Rising Charge: ${calculations.floorRisingCharges > 0 ? formatINR(calculations.floorRisingCharges) : "₹0"}
• Amenities Charges: ${formatINR(calculations.amenitiesCharges)}
• Corpus Fund (2 Yrs): ${formatINR(calculations.corpusFund)}
• Maintenance (2 Yrs): ${formatINR(calculations.maintenance)}
• Infrastructure Charges: ${formatINR(calculations.infrastructure)}
*Estimated Total:* ${formatINR(calculations.totalEstimated)} (${formatLakhCrore(calculations.totalEstimated)})

Please share availability, floor plans, and the final payment schedule.`;

    return encodeURIComponent(msg);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-[#141414] p-6 text-white border-b border-gray-800">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-800 text-[#D4AF37] border border-[#D4AF37]/30">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Interactive Price Estimator
              </h3>
              <p className="text-xs text-gray-400">
                Transparent itemized breakdown based on confirmed developer pricing rules
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
            Base: ₹7,200 / sq.ft
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Apartment Configuration */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              1. Select Apartment Configuration
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {configurations.map((cfg) => {
                const isSelected = cfg.id === selectedConfigId;
                return (
                  <button
                    key={cfg.id}
                    type="button"
                    onClick={() => {
                      setSelectedConfigId(cfg.id);
                      if (!cfg.facings.includes(facing)) {
                        setFacing(cfg.facings[0]);
                      }
                    }}
                    className={`p-3.5 rounded-2xl text-left border-2 transition-all ${
                      isSelected
                        ? "border-[#D4AF37] bg-[#F8F6F0] shadow-sm ring-1 ring-[#D4AF37]"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900">
                        {cfg.type}
                      </span>
                      {isSelected && (
                        <span className="w-4 h-4 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-[10px]">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-[#D4AF37] mt-0.5">
                      {cfg.sizeSqFt.toLocaleString()} sq.ft
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">
                      Amenities: ₹{cfg.amenities / 100000} Lakhs
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Floor Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                2. Floor Number: <span className="text-black font-extrabold">{floorNumber}</span> / 10
              </label>
              <span className="text-[11px] text-gray-500">
                {floorNumber >= 5
                  ? `Floor rising: +₹${(floorNumber - 4) * FLOOR_RISING_RATE}/sq.ft (from 5th floor)`
                  : "No floor rising charges up to 4th floor"}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={floorNumber}
              onChange={(e) => setFloorNumber(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#141414]"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1.5 font-mono">
              <span>1st (Base)</span>
              <span>4th</span>
              <span>5th (+₹25)</span>
              <span>8th (+₹100)</span>
              <span>10th (+₹150)</span>
            </div>
          </div>

          {/* 3. Facing & Corner Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Facing */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                3. Facing Direction
              </label>
              <div className="flex gap-2">
                {availableFacings.map((dir) => (
                  <button
                    key={dir}
                    type="button"
                    onClick={() => setFacing(dir)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      facing === dir
                        ? "border-[#141414] bg-[#141414] text-white"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {dir} {dir === "East" ? "(+₹100/sq.ft)" : "(Standard)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Flat */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                4. Corner Flat
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsCorner(false)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    !isCorner
                      ? "border-[#141414] bg-[#141414] text-white"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setIsCorner(true)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    isCorner
                      ? "border-[#141414] bg-[#141414] text-white"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Corner (+₹100/sq.ft)
                </button>
              </div>
            </div>
          </div>

          {/* Payment Terms Summary */}
          <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-[#D4AF37]/30 text-xs space-y-1.5">
            <div className="font-bold text-gray-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Confirmed Payment Milestones</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-gray-700">
              <div className="p-2 rounded-lg bg-white border border-gray-200">
                <span className="block text-[10px] text-gray-400 font-bold uppercase">Booking</span>
                <span className="font-semibold text-gray-900">₹5,00,000</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-gray-200">
                <span className="block text-[10px] text-gray-400 font-bold uppercase">Agreement</span>
                <span className="font-semibold text-gray-900">20% of Cost</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-gray-200">
                <span className="block text-[10px] text-gray-400 font-bold uppercase">Bank Loan</span>
                <span className="font-semibold text-gray-900">80% Financing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Itemized Summary & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <div>
            <h4 className="font-serif text-base font-bold text-gray-900 pb-3 border-b border-gray-200">
              Itemized Cost Breakdown
            </h4>

            <div className="py-3 space-y-2.5 text-xs text-gray-600">
              <div className="flex justify-between items-center">
                <span>Base Price ({calculations.size} sq.ft × ₹{BASE_RATE})</span>
                <span className="font-semibold text-gray-900">
                  {formatINR(calculations.basePrice)}
                </span>
              </div>

              {calculations.facingPremium > 0 && (
                <div className="flex justify-between items-center text-amber-900">
                  <span>East Facing Premium (+₹{EAST_PREMIUM_RATE}/sq.ft)</span>
                  <span className="font-semibold">{formatINR(calculations.facingPremium)}</span>
                </div>
              )}

              {calculations.cornerPremium > 0 && (
                <div className="flex justify-between items-center text-amber-900">
                  <span>Corner Flat Premium (+₹{CORNER_PREMIUM_RATE}/sq.ft)</span>
                  <span className="font-semibold">{formatINR(calculations.cornerPremium)}</span>
                </div>
              )}

              {calculations.floorRisingCharges > 0 && (
                <div className="flex justify-between items-center text-amber-900">
                  <span>
                    Floor Rising ({floorNumber}th floor, +₹{calculations.floorRisingMultiplier * FLOOR_RISING_RATE}/sq.ft)
                  </span>
                  <span className="font-semibold">{formatINR(calculations.floorRisingCharges)}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span>Amenities Charges (Clubhouse, Pool, etc.)</span>
                <span className="font-semibold text-gray-900">
                  {formatINR(calculations.amenitiesCharges)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span>Corpus Fund (₹50/sq.ft for 2 years)</span>
                <span className="font-semibold text-gray-900">
                  {formatINR(calculations.corpusFund)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span>Maintenance (₹70/sq.ft for 2 years)</span>
                <span className="font-semibold text-gray-900">
                  {formatINR(calculations.maintenance)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span>Infrastructure Charges (₹50/sq.ft)</span>
                <span className="font-semibold text-gray-900">
                  {formatINR(calculations.infrastructure)}
                </span>
              </div>
            </div>

            {/* Total Estimated Box */}
            <div className="pt-4 border-t-2 border-dashed border-gray-300">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Estimated Total
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#141414]">
                    {formatINR(calculations.totalEstimated)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">Approx.</span>
                  <span className="text-sm font-bold text-[#D4AF37]">
                    {formatLakhCrore(calculations.totalEstimated)}
                  </span>
                </div>
              </div>
            </div>

            {/* Exact Required Disclaimer */}
            <div className="mt-4 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
              <span>
                <strong>Disclaimer:</strong> Prices are indicative and subject to availability, applicable taxes, registration charges, and final confirmation by MAHA Properties.
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-2">
            <a
              href={`https://wa.me/${companyData.whatsappNumber}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get Exact Price Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

