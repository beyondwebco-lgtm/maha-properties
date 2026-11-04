"use client";

import React, { useState } from "react";
import { Send, MessageCircle, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { companyData } from "../data/company";

interface EnquiryFormProps {
  propertyTitle?: string;
  defaultConfig?: string;
}

export function EnquiryForm({
  propertyTitle = "Premium Luxury Gated Community – Chandanagar",
  defaultConfig = "2 BHK (1,270 sq.ft)",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: defaultConfig,
    budget: "",
    message: `Hello MAHA Properties, I'm interested in ${propertyTitle}. Please share availability, floor plans, and the latest pricing.`,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `*New Property Enquiry — MAHA Properties*
Name: ${formData.name.trim()}
Mobile: ${formData.phone.trim()}
Property: ${propertyTitle}
Configuration: ${formData.propertyType}
Budget: ${formData.budget || "Not Specified"}
Message: ${formData.message}`;

    const url = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    setSubmitted(true);
    // Redirect to WhatsApp
    window.open(url, "_blank");
  };

  return (
    <div
      id="enquiry-section"
      className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-[#141414] text-[#D4AF37]">
          <Send className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
            Request Property Details
          </h3>
          <p className="text-xs text-gray-500">
            Direct consultation with N. Surendra (Registered TSRERA Agent)
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-950 font-serif">
            Opening WhatsApp Enquiry...
          </h4>
          <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
            Your enquiry details have been prepared for direct delivery to N. Surendra at <strong>{companyData.primaryPhoneFormatted}</strong>. If WhatsApp did not open automatically, click below:
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href={`tel:${companyData.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 text-xs text-gray-600 hover:text-black underline"
            >
              Send another enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Ramesh Kumar"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Mobile Number (WhatsApp Preferred) *
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">
                +91
              </span>
              <input
                type="tel"
                placeholder="98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
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

          {/* Configuration / Property Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Preferred Size / Type
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) =>
                  setFormData({ ...formData, propertyType: e.target.value })
                }
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="2 BHK (1,270 sq.ft)">2 BHK – 1,270 sq.ft</option>
                <option value="3 BHK (1,590 sq.ft)">3 BHK – 1,590 sq.ft</option>
                <option value="3 BHK (1,980 sq.ft)">3 BHK – 1,980 sq.ft</option>
                <option value="Flexible / Needs Consultation">Flexible / Needs Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Approx. Budget (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. ₹90 Lakhs – ₹1.2 Cr"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Specific Query / Requirement
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Connect via WhatsApp</span>
            </button>

            <a
              href={`tel:${companyData.primaryPhone}`}
              className="w-full py-3 px-4 rounded-2xl bg-[#141414] hover:bg-black text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Or Call {companyData.primaryPhoneFormatted}</span>
            </a>
          </div>

          <p className="text-[11px] text-gray-400 text-center pt-1">
            Zero spam guarantee. Enquiries route directly to registered agent N. Surendra.
          </p>
        </form>
      )}
    </div>
  );
}

