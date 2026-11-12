import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { companyData } from "../../data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | MAHA Properties Hyderabad",
  description:
    "Privacy Policy for MAHA Properties, a TSRERA registered real estate consultancy (Reg No: A02500004914) in Kukatpally, Hyderabad.",
  alternates: {
    canonical: `${companyData.websiteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0B1630] text-white py-14 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A25B]">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-300">
            Last updated: November 2026
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#171C26] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1630]">
              1. Who We Are
            </h2>
            <p className="text-[#747B86]">
              MAHA Properties is a real estate consultancy operating from {companyData.address.full} (TSRERA Registered Agent Reg. No. {companyData.rera.agentRegistrationNumber}, Registered Agent: {companyData.rera.registeredAgent}). We act as an intermediary connecting property buyers with residential projects across Hyderabad.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1630]">
              2. Information You Provide
            </h2>
            <p className="text-[#747B86]">
              When you submit a property enquiry or initiate a WhatsApp / phone consultation, you voluntarily share contact details such as your full name, mobile number, preferred property, configuration, budget, and preferred site visit date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1630]">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[#747B86]">
              <li>To respond to your enquiry regarding specific residential projects.</li>
              <li>To share project details, availability, and pricing information requested by you.</li>
              <li>To coordinate site visits and connect you with the relevant developer sales team when you request assistance.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1630]">
              4. Third-Party Services
            </h2>
            <p className="text-[#747B86]">
              Enquiry forms on this website prepare a direct WhatsApp message to our verified business number ({companyData.primaryPhoneFormatted}). Clicking to send opens WhatsApp, which is governed by WhatsApp&apos;s own privacy policy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1630]">
              5. Contact Us
            </h2>
            <p className="text-[#747B86]">
              For any questions regarding your privacy or to request removal of your contact details from our records, please reach us at{" "}
              <a href={`mailto:${companyData.email}`} className="text-[#0B1630] font-semibold underline">
                {companyData.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${companyData.primaryPhone}`} className="text-[#0B1630] font-semibold underline">
                {companyData.primaryPhoneFormatted}
              </a>.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5DFD3]">
            <Link
              href="/properties"
              className="text-xs font-semibold text-[#0B1630] hover:text-[#C9A25B] underline"
            >
              ← Back to Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

