export interface CompanyInfo {
  name: string;
  tagline: string;
  supportingCopy: string;
  websiteUrl: string;
  contactPerson: string;
  primaryPhone: string;
  primaryPhoneFormatted: string;
  secondaryPhone: string;
  secondaryPhoneFormatted: string;
  email: string;
  whatsappNumber: string;
  whatsappLink: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    full: string;
  };
  rera: {
    agentRegistrationNumber: string;
    registeredAgent: string;
    validityStart: string;
    validityEnd: string;
    authority: string;
  };
}

export const companyData: CompanyInfo = {
  name: "MAHA PROPERTIES",
  tagline: "Your Property Journey, Our Priority.",
  supportingCopy:
    "Discover thoughtfully selected apartments, luxury villas and premium residential communities across Hyderabad with personalized guidance from MAHA Properties.",
  websiteUrl: "https://www.mahapropertys.com",
  contactPerson: "N. Surendra",
  primaryPhone: "+917799884849",
  primaryPhoneFormatted: "+91 7799884849",
  secondaryPhone: "+919030493397",
  secondaryPhoneFormatted: "+91 9030493397",
  email: "mahaproperties16@gmail.com",
  whatsappNumber: "917799884849",
  whatsappLink: "https://wa.me/917799884849",
  address: {
    line1: "Plot No. 12, Flat No. 101",
    line2: "SLN Heights, Tulasi Nagar",
    area: "Kukatpally",
    city: "Hyderabad",
    pincode: "500072",
    state: "Telangana",
    country: "India",
    full: "Plot No. 12, Flat No. 101, SLN Heights, Tulasi Nagar, Kukatpally, Hyderabad – 500072, Telangana, India.",
  },
  rera: {
    agentRegistrationNumber: "A02500004914",
    registeredAgent: "Nallamekala Surendra",
    validityStart: "04/03/2026",
    validityEnd: "03/03/2031",
    authority: "Telangana Real Estate Regulatory Authority (TSRERA)",
  },
};

export function getPropertyWhatsAppUrl(projectName?: string): string {
  const text = projectName
    ? `Hello MAHA Properties, I am interested in ${projectName}. Please share the latest pricing, availability and site visit details.`
    : "Hello MAHA Properties, I would like to enquire about residential properties in Hyderabad. Please share available options and site visit details.";
  return `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
