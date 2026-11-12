export type PropertyType = "apartments" | "villas";
export type PropertyStatus = "Ready to Move" | "Under Construction" | "Available" | "New Launch";

export interface PropertyConfiguration {
  id: string;
  name: string;
  type: string; // e.g., "2 BHK", "3 BHK", "4 BHK", "5 & 6 BHK Sky Duplex"
  sizeSqFt?: number; // Only set when verified
  sizeLabel?: string; // e.g., "1,270 sq.ft" or "2,409 sq.ft Built-up (150–200 Sq. Yds. Plot)"
  facing?: string[];
  basePricePerSqFt?: number;
  basePriceTotal?: number;
  amenitiesCharges?: number;
  description?: string;
  floorPlanImage?: string;
}

export interface PricingRules {
  basePricePerSqFt: number;
  amenitiesCharges2BHK: number;
  amenitiesCharges3BHK: number;
  floorRisingPerSqFtFromFloor5: number;
  floorRisingStartFloor: number;
  eastFacingPremiumPerSqFt: number;
  cornerFlatPremiumPerSqFt: number;
  corpusFundPerSqFt: number;
  maintenancePerSqFt: number;
  infrastructureChargesPerSqFt: number;
  bookingAmount: number;
  agreementPercent: number;
  bankLoanPercent: number;
}

export interface PropertyImage {
  src: string;
  alt: string;
  caption?: string;
  category?: "hero" | "exterior" | "interior" | "amenities" | "site-layout" | "floor-plan";
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  title: string; // Display heading
  subtitle?: string;
  developerName?: string;
  propertyType: PropertyType;
  type: PropertyType;
  typeLabel: string;
  location: string;
  locationArea: string; // Canonical area for clean filtering, e.g. "Chandanagar", "Patancheru", "Neopolis"
  address: string;
  bhkOptions: string[]; // e.g. ["2 BHK", "3 BHK"]
  sizeRange?: string; // Only when confirmed
  startingPrice?: number; // Only when confirmed, in INR
  priceDisplay: string; // e.g. "₹6,999 / sq.ft*" or "Price on Request"
  priceUnit?: string; // e.g. "per sq.ft" or "total"
  pricePerSqFt?: number;
  constructionStatus?: PropertyStatus;
  status?: PropertyStatus;
  featured: boolean;
  published: boolean;
  verificationStatus: string;
  supportsFacingPreference?: boolean;

  projectOverview?: {
    totalArea?: string;
    totalTowers?: number;
    towerConfiguration?: string;
    totalUnits?: number;
    communityType?: string;
    possession?: string;
  };

  approvalInfo: {
    status: string;
    note: string;
    reraVerified: boolean;
    projectReraNumber?: string;
  };

  configurations?: PropertyConfiguration[];
  pricingRules?: PricingRules;

  description: string;
  highlights: string[];
  amenities: {
    name: string;
    icon: string;
  }[];

  locationConnectivity?: {
    distanceNote: string;
    points: string[];
    mapQuery: string;
    locationUrl: string;
  };

  paymentMilestones?: {
    bookingAmount: string;
    agreement: string;
    bankLoan: string;
    note: string;
  };

  images: PropertyImage[];
  brochureUrl?: string;
  createdAt: string;
}
