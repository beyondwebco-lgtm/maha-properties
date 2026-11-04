export interface CompanyInfo {
  name: string;
  tagline: string;
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
  categories: {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "MAHA PROPERTIES",
  tagline: "Your Property Journey, Our Priority",
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
  categories: [
    {
      id: "villas",
      name: "Villas",
      slug: "villas",
      description: "Independent luxury villas crafted for upscale living with modern amenities.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "apartments",
      name: "Apartments",
      slug: "apartments",
      description: "Premium high-rise & gated community apartments in strategic Hyderabad hubs.",
      image: "/properties/chandanagar/project-img-1.jpg",
    },
    {
      id: "open-plots",
      name: "Open Plots",
      slug: "open-plots",
      description: "HMDA & DTCP approved layout residential plots with high appreciation potential.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "lands",
      name: "Lands",
      slug: "lands",
      description: "Commercial, agricultural, and prospective development parcels across growth corridors.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

