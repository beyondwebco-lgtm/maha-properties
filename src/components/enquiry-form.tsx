"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MessageCircle, Phone, AlertCircle, Calendar, ExternalLink } from "lucide-react";
import { companyData } from "../data/company";
import { getPublishedProperties } from "../data/properties";

interface EnquiryFormProps {
  propertySlug?: string;
  propertyTitle?: string;
  lockProperty?: boolean;
  heading?: string;
}

export function EnquiryForm({
  propertySlug,
  propertyTitle,
  lockProperty = false,
  heading = "Enquire About This Property",
}: EnquiryFormProps) {
  const publishedProperties = useMemo(() => getPublishedProperties(), []);

  const initialSlug =
    propertySlug ||
    publishedProperties.find((p) => p.name === propertyTitle)?.slug ||
    publishedProperties[0]?.slug ||
    "";

  const [selectedSlug, setSelectedSlug] = useState(initialSlug);

  const activeProperty = useMemo(
    () => publishedProperties.find((p) => p.slug === selectedSlug) || publishedProperties[0],
    [publishedProperties, selectedSlug]
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    configuration: "",
    budget: "",
    facing: "",
    siteVisitDate: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const showFacing = Boolean(activeProperty?.supportsFacingPreference);
  const configOptions = activeProperty?.configurations || [];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }
    const phoneClean = formData.phone.replace(/[\s\-+]/g, "");
    if (!/^\d{10,12}$/.test(phoneClean)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.consent) {
      newErrors.consent = "Please accept the Privacy Policy to continue";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const projectName = activeProperty?.name || propertyTitle || "Hyderabad Residential Property";

    const lines = [
      `Hello MAHA Properties, I am interested in ${projectName}. Please share the latest pricing, availability and site visit details.`,
      "",
      `Name: ${formData.name.trim()}`,
      `Mobile: ${formData.phone.trim()}`,
      `Interested Property: ${projectName}`,
    ];

    if (formData.configuration) lines.push(`Configuration: ${formData.configuration}`);
    if (formData.budget.trim()) lines.push(`Approximate Budget: ${formData.budget.trim()}`);
    if (showFacing && formData.facing) lines.push(`Preferred Facing: ${formData.facing}`);
    if (formData.siteVisitDate) lines.push(`Preferred Site Visit Date: ${formData.siteVisitDate}`);
    if (formData.message.trim()) lines.push(`Message: ${formData.message.trim()}`);

    const url = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="enquiry-section"
      className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DFD3] shadow-lg scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-[#0B1630] text-[#C9A25B]">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#171C26]">
            {heading}
          </h3>
          <p className="text-xs text-[#747B86]">
            Prepared for direct WhatsApp delivery to {companyData.contactPerson} (TSRERA Agent: {companyData.rera.agentRegistrationNumber})
          </p>
        </div>
      </div>

      {preparedUrl ? (
        <div className="p-6 rounded-2xl bg-[#F7F2E9] border border-[#C9A25B]/40 text-center space-y-4">
          <MessageCircle className="w-10 h-10 text-emerald-700 mx-auto" />
          <h4 className="text-lg font-bold text-[#0B1630] font-serif">
            Your WhatsApp Enquiry Is Ready
          </h4>
          <p className="text-xs text-[#747B86] leading-relaxed max-w-md mx-auto">
            Your enquiry has been formatted for WhatsApp. Please send the pre-filled message in WhatsApp to complete your enquiry with our advisor ({companyData.primaryPhoneFormatted}).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <a
              href={preparedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors"
            >
              <span>Open WhatsApp Again</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:${companyData.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1630] text-white text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A25B]" />
              <span>Call {companyData.primaryPhoneFormatted}</span>
            </a>
          </div>
          <button
            type="button"
            onClick={() => setPreparedUrl(null)}
            className="text-xs text-[#747B86] hover:text-[#0B1630] underline pt-1"
          >
            Edit enquiry details
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Full Name (Required) */}
          <div>
            <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
              Full Name *
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171C26] placeholder-gray-400 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-400 focus:ring-red-200"
                  : "border-[#E5DFD3] focus:border-[#C9A25B] focus:ring-[#C9A25B]/20"
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Mobile Number (Required) */}
          <div>
            <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
              Mobile Number *
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#747B86]">
                +91
              </span>
              <input
                id="enquiry-phone"
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm text-[#171C26] placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-200"
                    : "border-[#E5DFD3] focus:border-[#C9A25B] focus:ring-[#C9A25B]/20"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Interested Property */}
          <div>
            <label htmlFor="enquiry-property" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
              Interested Property
            </label>
            {lockProperty && activeProperty ? (
              <input
                id="enquiry-property"
                type="text"
                readOnly
                value={activeProperty.name}
                className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm font-semibold text-[#0B1630] bg-[#F7F2E9]/70"
              />
            ) : (
              <select
                id="enquiry-property"
                value={selectedSlug}
                onChange={(e) => {
                  setSelectedSlug(e.target.value);
                  setFormData((prev) => ({ ...prev, configuration: "", facing: "" }));
                }}
                className="w-full px-3.5 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
              >
                {publishedProperties.map((prop) => (
                  <option key={prop.id} value={prop.slug}>
                    {prop.name} — {prop.locationArea}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Configuration & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="enquiry-config" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
                Configuration (Optional)
              </label>
              <select
                id="enquiry-config"
                value={formData.configuration}
                onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
              >
                <option value="">Select Configuration</option>
                {configOptions.map((cfg) => (
                  <option key={cfg.id} value={cfg.sizeLabel ? `${cfg.name} (${cfg.sizeLabel})` : cfg.name}>
                    {cfg.name}{cfg.sizeLabel ? ` (${cfg.sizeLabel})` : ""}
                  </option>
                ))}
                <option value="Open to Advisor Recommendation">Open to Recommendation</option>
              </select>
            </div>

            <div>
              <label htmlFor="enquiry-budget" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
                Approx. Budget (Optional)
              </label>
              <input
                id="enquiry-budget"
                type="text"
                placeholder="e.g. ₹90 Lakhs – ₹1.5 Cr"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#171C26] placeholder-gray-400 focus:outline-none focus:border-[#C9A25B]"
              />
            </div>
          </div>

          {/* Conditional Facing & Site Visit Date */}
          <div className={`grid grid-cols-1 ${showFacing ? "sm:grid-cols-2" : ""} gap-3`}>
            {showFacing && (
              <div>
                <label htmlFor="enquiry-facing" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
                  Preferred Facing (Optional)
                </label>
                <select
                  id="enquiry-facing"
                  value={formData.facing}
                  onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
                >
                  <option value="">No Preference</option>
                  <option value="East Facing">East Facing</option>
                  <option value="West Facing">West Facing</option>
                  <option value="Either Facing">Either Facing</option>
                </select>
              </div>
            )}

            <div>
              <label htmlFor="enquiry-date" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
                Preferred Site Visit Date (Optional)
              </label>
              <div className="relative">
                <input
                  id="enquiry-date"
                  type="date"
                  value={formData.siteVisitDate}
                  onChange={(e) => setFormData({ ...formData, siteVisitDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#171C26] bg-white focus:outline-none focus:border-[#C9A25B]"
                />
                <Calendar className="w-4 h-4 text-[#747B86] pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-[#171C26] mb-1.5">
              Message (Optional)
            </label>
            <textarea
              id="enquiry-message"
              rows={2}
              placeholder="Share any specific questions or preferred time to connect..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E5DFD3] text-sm text-[#171C26] focus:outline-none focus:border-[#C9A25B]"
            />
          </div>

          {/* Privacy Consent */}
          <div className="space-y-1">
            <label className="flex items-start gap-2.5 text-xs text-[#747B86] cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 rounded border-gray-300 text-[#0B1630] focus:ring-[#C9A25B]"
              />
              <span>
                I agree to share my enquiry details with MAHA Properties in accordance with the{" "}
                <Link href="/privacy-policy" className="text-[#0B1630] font-semibold underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.consent && (
              <p className="text-[11px] text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.consent}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Enquiry via WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-[#747B86]">
            Or call directly at{" "}
            <a href={`tel:${companyData.primaryPhone}`} className="font-semibold text-[#0B1630] underline">
              {companyData.primaryPhoneFormatted}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
