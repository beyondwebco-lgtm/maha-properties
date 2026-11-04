export type PropertyType = "villas" | "apartments" | "open-plots" | "lands";
export type PropertyStatus = "Ready to Move" | "Under Construction" | "Available" | "Sold Out" | "Upcoming";

export interface PropertyConfiguration {
  id: string;
  name: string;
  type: string;
  sizeSqFt: number;
  facing: string[];
  basePricePerSqFt: number;
  basePriceTotal: number;
  amenitiesCharges: number;
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

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  type: PropertyType;
  typeLabel: string;
  location: string;
  address: string;
  startingPrice: number;
  priceDisplay: string;
  pricePerSqFt?: number;
  areaRange: string;
  status: PropertyStatus;
  featured: boolean;
  published: boolean;
  isDemo: boolean;
  
  // Specific project details
  projectOverview?: {
    totalArea: string;
    totalTowers: number;
    towerConfiguration: string;
    totalUnits: number;
    communityType: string;
    possession: string;
  };

  approvalInfo: {
    status: string;
    note: string;
    reraVerified: boolean;
    reraNumber?: string;
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
  };

  paymentMilestones?: {
    bookingAmount: string;
    agreement: string;
    bankLoan: string;
    note: string;
  };

  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];

  brochureUrl?: string;
  createdAt: string;
}

