import { Property } from "../types/property";

export const propertiesData: Property[] = [
  // =========================================================================
  // 1. SAI KEERTHI LAKE VIEW (PUBLISHED)
  // =========================================================================
  {
    id: "MP-SKLV-01",
    slug: "sai-keerthi-lake-view",
    name: "Sai Keerthi Lake View",
    title: "Sai Keerthi Lake View",
    subtitle: "Luxury Gated Community Apartments near Gangaram Lake, Chandanagar",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury Gated Community Apartments",
    location: "Chandanagar, near Gangaram Lake, Hyderabad",
    locationArea: "Chandanagar",
    address: "Chandanagar, near Gangaram Lake, Hyderabad, Telangana",
    bhkOptions: ["2 BHK", "3 BHK"],
    sizeRange: "1,270 – 1,980 sq.ft",
    startingPrice: 8888730,
    priceDisplay: "₹6,999 / sq.ft*",
    priceUnit: "per sq.ft",
    pricePerSqFt: 6999,
    constructionStatus: "Ready to Move",
    status: "Ready to Move",
    featured: true,
    published: true,
    verificationStatus:
      "Base price ₹6,999/sq.ft and core specifications confirmed; project-specific HMDA/RERA approval numbers subject to verification.",
    supportsFacingPreference: true,
    projectOverview: {
      totalArea: "2.2 Acres",
      totalTowers: 3,
      towerConfiguration: "2 C+S + 10 Floors",
      totalUnits: 180,
      communityType: "Luxury Gated Community Apartments",
      possession: "Ready to Move",
    },
    approvalInfo: {
      status: "HMDA & RERA Approved (Subject to Verification)",
      note: "Advertised as HMDA & RERA approved, subject to verification of project-specific approval details. MAHA Properties operates strictly as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "sklv-2bhk-1270",
        name: "2 BHK Residence",
        type: "2 BHK",
        sizeSqFt: 1270,
        sizeLabel: "1,270 sq.ft",
        facing: ["West"],
        basePricePerSqFt: 6999,
        basePriceTotal: 8888730,
        amenitiesCharges: 700000,
        description: "Thoughtfully planned 2 BHK apartment layout with West-facing entry.",
      },
      {
        id: "sklv-3bhk-1590",
        name: "3 BHK Residence (Standard)",
        type: "3 BHK",
        sizeSqFt: 1590,
        sizeLabel: "1,590 sq.ft",
        facing: ["East", "West"],
        basePricePerSqFt: 6999,
        basePriceTotal: 11128410,
        amenitiesCharges: 800000,
        description: "Spacious 3 BHK apartment available in East and West facing orientations.",
      },
      {
        id: "sklv-3bhk-1980",
        name: "3 BHK Residence (Large)",
        type: "3 BHK",
        sizeSqFt: 1980,
        sizeLabel: "1,980 sq.ft",
        facing: ["East", "West"],
        basePricePerSqFt: 6999,
        basePriceTotal: 13858020,
        amenitiesCharges: 800000,
        description: "Expansive 3 BHK residence in 1,590–1,980 sq.ft range with East and West facing choices.",
      },
    ],
    pricingRules: {
      basePricePerSqFt: 6999,
      amenitiesCharges2BHK: 700000,
      amenitiesCharges3BHK: 800000,
      floorRisingPerSqFtFromFloor5: 25,
      floorRisingStartFloor: 5,
      eastFacingPremiumPerSqFt: 100,
      cornerFlatPremiumPerSqFt: 100,
      corpusFundPerSqFt: 50,
      maintenancePerSqFt: 70,
      infrastructureChargesPerSqFt: 50,
      bookingAmount: 500000,
      agreementPercent: 20,
      bankLoanPercent: 80,
    },
    description:
      "Sai Keerthi Lake View is a ready-to-move luxury gated apartment community located in Chandanagar near Gangaram Lake, Hyderabad. Spread across 2.2 acres with 3 residential towers and 180 residences, the community offers 2 BHK (1,270 sq.ft) and 3 BHK (1,590–1,980 sq.ft) homes along with a dedicated clubhouse, swimming pool, and landscaped outdoor spaces.",
    highlights: [
      "2.2 Acres gated residential community",
      "3 Towers with 180 Residences",
      "Ready to Move 2 & 3 BHK Apartments",
      "2 BHK: 1,270 sq.ft (West Facing)",
      "3 BHK: 1,590–1,980 sq.ft (East & West Facing)",
      "HMDA & RERA approved, subject to verification of project-specific approval details",
    ],
    amenities: [
      { name: "Swimming Pool", icon: "Waves" },
      { name: "Clubhouse", icon: "Building2" },
      { name: "Fully Equipped Gym", icon: "Dumbbell" },
      { name: "Amphitheatre", icon: "Sparkles" },
      { name: "Yoga and Aerobics", icon: "Activity" },
      { name: "Jogging Track", icon: "Footprints" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "Indoor Games", icon: "Gamepad2" },
      { name: "CCTV and Security", icon: "ShieldCheck" },
      { name: "Intercom", icon: "PhoneCall" },
      { name: "Landscaped Surroundings", icon: "Trees" },
    ],
    locationConnectivity: {
      distanceNote: "Located in Chandanagar near Gangaram Lake with access to Mumbai Highway (NH 65).",
      points: [
        "Proximity to Gangaram Lake, Chandanagar",
        "Access to Chandanagar Bus Stop & Mumbai Highway (NH 65)",
        "Connectivity to Lingampally MMTS & Miyapur Metro Corridor",
        "Nearby schools, hospitals, and retail centers in Chandanagar & Madeenaguda",
      ],
      mapQuery: "Gangaram+Lake+Chandanagar+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Gangaram+Lake+Chandanagar+Hyderabad",
    },
    images: [
      {
        src: "/properties/chandanagar/project-img-1.jpg",
        alt: "Sai Keerthi Lake View Chandanagar aerial exterior view near Gangaram Lake",
        caption: "Sai Keerthi Lake View — 2.2 Acres Gated Community in Chandanagar",
        category: "hero",
      },
      {
        src: "/properties/chandanagar/project-img-4.jpg",
        alt: "Sai Keerthi Lake View entrance elevation and landscaped frontage",
        caption: "Gated Community Entrance & Landscaped Frontage",
        category: "exterior",
      },
      {
        src: "/properties/chandanagar/project-img-6.jpg",
        alt: "Sai Keerthi Lake View clubhouse and recreation zone",
        caption: "Resident Clubhouse & Recreation Amenities",
        category: "amenities",
      },
      {
        src: "/properties/chandanagar/project-img-2.jpg",
        alt: "Sai Keerthi Lake View residential tower facade Chandanagar",
        caption: "Residential Tower Facade",
        category: "exterior",
      },
      {
        src: "/properties/chandanagar/project-img-3.jpg",
        alt: "Sai Keerthi Lake View landscaped walking and jogging track",
        caption: "Landscaped Surroundings & Jogging Track",
        category: "amenities",
      },
      {
        src: "/properties/chandanagar/project-img-8.jpg",
        alt: "Sai Keerthi Lake View apartment interior living room render",
        caption: "Spacious Living & Dining Interior",
        category: "interior",
      },
    ],
    brochureUrl: "/documents/chandanagar-brochure.pdf",
    createdAt: "2026-11-04",
  },

  // =========================================================================
  // 2. ADITI MITRA VILLAS (PUBLISHED)
  // =========================================================================
  {
    id: "MP-AMV-02",
    slug: "aditi-mitra-villas",
    name: "Aditi Mitra Villas",
    title: "Aditi Mitra Villas",
    subtitle: "4 BHK G+2 Triplex Luxury Gated Villa Community in Patancheru, Hyderabad",
    propertyType: "villas",
    type: "villas",
    typeLabel: "Luxury Gated Villa Community",
    location: "Patancheru, Hyderabad",
    locationArea: "Patancheru",
    address: "Patancheru, near ORR Exit No. 3, Hyderabad, Telangana",
    bhkOptions: ["4 BHK"],
    sizeRange: "2,409 sq.ft Built-up • 150–200 Sq. Yds. Plots",
    priceDisplay: "Price on Request",
    constructionStatus: "Available",
    status: "Available",
    featured: true,
    published: true,
    verificationStatus:
      "Project specifications confirmed from supplied material; final pricing pending client confirmation before public display.",
    supportsFacingPreference: true,
    projectOverview: {
      totalTowers: undefined,
      towerConfiguration: "G+2 Triplex Villas",
      totalUnits: 42,
      communityType: "Luxury Gated Villa Community",
    },
    approvalInfo: {
      status: "HMDA Approved Community (Subject to Verification)",
      note: "HMDA Approved Community, subject to verification of project-specific approval numbers. 100% Vaastu Compliant as stated in supplied project material. MAHA Properties acts as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "amv-4bhk-triplex",
        name: "4 BHK Triplex Villa",
        type: "4 BHK",
        sizeSqFt: 2409,
        sizeLabel: "2,409 sq.ft Built-up Area (150–200 Sq. Yds. Plot)",
        facing: ["East", "West"],
        description:
          "G+2 Triplex 4 BHK villa on 150–200 Sq. Yds. plot sizes with East and West facing options.",
      },
    ],
    description:
      "Aditi Mitra Villas is an exclusive 42-villa gated community in Patancheru, Hyderabad, offering 4 BHK G+2 triplex residences. Designed on 150–200 Sq. Yds. plots with 2,409 sq.ft built-up area, the community combines East and West facing Vaastu-compliant planning with landscaped open spaces, a banquet hall, swimming pool, and quick connectivity to ORR Exit No. 3.",
    highlights: [
      "42 Exclusive G+2 Triplex Villas",
      "150–200 Sq. Yds. Plot Sizes with 2,409 sq.ft Built-up Area",
      "East and West Facing Options",
      "100% Vaastu Compliant (as stated in supplied project material)",
      "HMDA Approved Community, subject to verification",
      "Connectivity to Patancheru and ORR Exit No. 3",
    ],
    amenities: [
      { name: "Swimming Pool", icon: "Waves" },
      { name: "Fully Equipped Gym", icon: "Dumbbell" },
      { name: "Banquet Hall", icon: "Building2" },
      { name: "Indoor Games", icon: "Gamepad2" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "Landscaped Open Spaces", icon: "Trees" },
      { name: "CCTV and Security", icon: "ShieldCheck" },
      { name: "Common Area Power Backup", icon: "Sun" },
      { name: "Underground Electrical Cabling", icon: "Layers" },
    ],
    locationConnectivity: {
      distanceNote: "Strategic connectivity to Patancheru and Outer Ring Road (ORR) Exit No. 3.",
      points: [
        "Direct connectivity to Patancheru and Mumbai Highway",
        "Quick access to ORR Exit No. 3 for Financial District & HITEC City",
        "Proximity to industrial, educational, and healthcare hubs in West Hyderabad",
      ],
      mapQuery: "Patancheru+ORR+Exit+3+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Patancheru+ORR+Exit+3+Hyderabad",
    },
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 3. BRIGADE BARCELONA (PUBLISHED)
  // =========================================================================
  {
    id: "MP-BRG-BCL-03",
    slug: "brigade-barcelona-neopolis",
    name: "Brigade Barcelona",
    title: "Brigade Barcelona",
    subtitle: "Spanish-Inspired High-Rise 3 & 4 Bedroom Residences in Neopolis, Hyderabad",
    developerName: "Brigade Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Premium High-Rise Apartments",
    location: "Neopolis, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Hyderabad, Telangana",
    bhkOptions: ["3 BHK", "4 BHK"],
    priceDisplay: "Price on Request",
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: true,
    published: true,
    verificationStatus:
      "Highlights verified from supplied marketing information; pricing and exact unit dimensions pending official confirmation.",
    supportsFacingPreference: false,
    projectOverview: {
      communityType: "Premium High-Rise Apartments",
    },
    approvalInfo: {
      status: "Developer Project — Verification in Progress",
      note: "Developed by Brigade Group. Unit dimensions, pricing, and project-specific RERA details are shared upon official developer confirmation. MAHA Properties acts as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "bcl-3bhk",
        name: "3 Bedroom Residence",
        type: "3 BHK",
        description: "Spacious 3 Bedroom residence with expansive private deck and panoramic views.",
      },
      {
        id: "bcl-4bhk",
        name: "4 Bedroom Residence",
        type: "4 BHK",
        description: "Elevated 4 Bedroom residence crafted for privacy, natural light, and open air.",
      },
    ],
    description:
      "Brigade Barcelona brings Spanish-inspired high-rise living to Neopolis, Hyderabad. Featuring 3 & 4 bedroom residences with expansive private decks and panoramic views, the development includes a multi-level clubhouse, Eco Deck, Sky Deck, meditation lawn, and an infinity pool.",
    highlights: [
      "Barcelona-inspired architecture in Neopolis, Hyderabad",
      "3 & 4 Bedroom Residences",
      "Expansive private decks with panoramic views",
      "Multi-level clubhouse with curated lifestyle spaces",
      "Dedicated Eco Deck & Sky Deck",
      "Meditation Lawn & Infinity Pool",
    ],
    amenities: [
      { name: "Multi-level Clubhouse", icon: "Building2" },
      { name: "Eco Deck", icon: "Trees" },
      { name: "Sky Deck", icon: "Sparkles" },
      { name: "Meditation Lawn", icon: "HeartHandshake" },
      { name: "Infinity Pool", icon: "Waves" },
      { name: "Private Decks", icon: "Compass" },
    ],
    locationConnectivity: {
      distanceNote: "Situated in Neopolis, Kokapet, Hyderabad's premier high-rise corridor.",
      points: [
        "Direct access to Outer Ring Road (ORR) & Kokapet",
        "Close to Financial District, HITEC City, and international schools",
        "Seamless expressway transit to Rajiv Gandhi International Airport",
      ],
      mapQuery: "Neopolis+Kokapet+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Neopolis+Kokapet+Hyderabad",
    },
    images: [
      {
        src: "/properties/brigade-barcelona/barcelona-skydeck.jpg",
        alt: "Brigade Barcelona Neopolis Hyderabad rooftop sky deck and landscaped terrace",
        caption: "Brigade Barcelona — Sky Deck & Elevated Living at Neopolis",
        category: "hero",
      },
    ],
    createdAt: "2026-11-04",
  },

  // =========================================================================
  // 4. BRIGADE GATEWAY (PUBLISHED)
  // =========================================================================
  {
    id: "MP-BRG-GTW-04",
    slug: "brigade-gateway-neopolis",
    name: "Brigade Gateway",
    title: "Brigade Gateway",
    subtitle: "Ultra-Luxury 3 & 4 Bed Residences and 5 & 6 Bed Sky Duplexes in Neopolis, Hyderabad",
    developerName: "Brigade Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Ultra-Luxury Residences",
    location: "Neopolis, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Hyderabad, Telangana",
    bhkOptions: ["3 BHK", "4 BHK", "5 & 6 BHK Sky Duplex"],
    priceDisplay: "Price on Request",
    constructionStatus: "Under Construction",
    status: "Under Construction",
    featured: true,
    published: true,
    verificationStatus:
      "TG RERA P02400009142 verified on supplied creative; current pricing (previously shared ₹4.90 Cr onwards) and inventory subject to reconfirmation.",
    supportsFacingPreference: false,
    projectOverview: {
      communityType: "Ultra-Luxury Residences & Integrated Development",
    },
    approvalInfo: {
      status: "TG RERA Approved (Reg. No. P02400009142)",
      note: "Project RERA Reg. No: P02400009142 (details available at rera.telangana.gov.in). Developed by Brigade Group. MAHA Properties operates as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: true,
      projectReraNumber: "P02400009142",
    },
    configurations: [
      {
        id: "gtw-3-4bhk",
        name: "3 & 4 Bedroom Signature Residences",
        type: "3 & 4 BHK",
        description: "Signature ultra-luxury residences designed for elevated city living in Neopolis.",
      },
      {
        id: "gtw-5-6bhk",
        name: "5 & 6 Bedroom Sky Duplexes",
        type: "5 & 6 BHK Sky Duplex",
        description: "Exclusive high-floor sky duplex residences with expansive views.",
      },
    ],
    description:
      "Brigade Gateway in Neopolis, Hyderabad is an ultra-luxury residential development offering 3 & 4 bedroom signature residences and 5 & 6 bedroom sky duplexes. Complemented by a grand clubhouse and premium lifestyle amenities, it delivers an elevated residential experience in Hyderabad's Neopolis corridor.",
    highlights: [
      "Ultra-luxury residential development in Neopolis, Hyderabad",
      "3 & 4 Bedroom Signature Residences",
      "5 & 6 Bedroom Sky Duplexes",
      "Grand Clubhouse & premium lifestyle amenities",
      "TG RERA Registered Project: P02400009142",
    ],
    amenities: [
      { name: "Grand Clubhouse", icon: "Building2" },
      { name: "Premium Lifestyle Amenities", icon: "Sparkles" },
      { name: "Swimming Pool", icon: "Waves" },
      { name: "Fitness & Wellness Zone", icon: "Dumbbell" },
      { name: "24/7 Security", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Located in Neopolis, Kokapet with direct Outer Ring Road connectivity.",
      points: [
        "Direct connectivity to ORR Exit 1 & 2",
        "Close to Financial District, Kokapet Golden Mile & HITEC City",
        "Easy access to Rajiv Gandhi International Airport via ORR",
      ],
      mapQuery: "Neopolis+Kokapet+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Neopolis+Kokapet+Hyderabad",
    },
    images: [
      {
        src: "/properties/brigade-gateway/gateway-hero.jpg",
        alt: "Brigade Gateway Neopolis Hyderabad luxury residential towers",
        caption: "Brigade Gateway — Ultra-Luxury Residences at Neopolis, Hyderabad",
        category: "hero",
      },
      {
        src: "/properties/brigade-gateway/gateway-overview.jpg",
        alt: "Brigade Gateway Neopolis Imperial Residences overview and amenities",
        caption: "Brigade Gateway — Imperial Residences & Integrated Lifestyle",
        category: "exterior",
      },
    ],
    createdAt: "2026-11-04",
  },

  // =========================================================================
  // 5. MSN LUXURY RESIDENTIAL DEVELOPMENT (UNPUBLISHED CANDIDATE)
  // =========================================================================
  {
    id: "MP-MSN-LUX-05",
    slug: "msn-luxury-residential-neopolis",
    name: "MSN Luxury Residential Development",
    title: "MSN Luxury Residential Development (Name Pending Confirmation)",
    developerName: "MSN Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury High-Rise Apartments",
    location: "Neopolis, Kokapet, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Hyderabad, Telangana",
    bhkOptions: ["3 BHK", "4 BHK"],
    sizeRange: "2,424 – 4,545 sq.ft",
    priceDisplay: "Price Pending Confirmation",
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: false,
    published: false,
    verificationStatus:
      "Unpublished candidate: exact public project name and previously supplied base rates (Tower A ₹10,699/sq.ft, Towers B & C ₹10,499/sq.ft) require client confirmation.",
    projectOverview: {
      totalArea: "7 Acres",
      totalTowers: 3,
      towerConfiguration: "56 Floors",
      communityType: "Ultra-Luxury High-Rise",
    },
    approvalInfo: {
      status: "Pending Confirmation",
      note: "Unpublished candidate awaiting public project name, rate, and approval confirmation.",
      reraVerified: false,
    },
    configurations: [
      {
        id: "msn-lux-3bhk",
        name: "3 BHK",
        type: "3 BHK",
        sizeLabel: "2,424 / 2,666 / 2,828 sq.ft",
      },
      {
        id: "msn-lux-4bhk",
        name: "4 BHK",
        type: "4 BHK",
        sizeLabel: "3,111 – 4,545 sq.ft",
      },
    ],
    description:
      "High-rise residential development in Neopolis, Kokapet spanning 7 acres across 3 towers of 56 floors with 8 Sky Pavilions and 2,30,000 sq.ft of stated clubhouse and amenity space.",
    highlights: [
      "7 Acres • 3 Towers • 56 Floors",
      "8 Sky Pavilions",
      "2,30,000 sq.ft stated clubhouse and amenity space",
      "3 BHK: 2,424 / 2,666 / 2,828 sq.ft; 4 BHK: 3,111–4,545 sq.ft",
    ],
    amenities: [],
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 6. ONE BY MSN (UNPUBLISHED CANDIDATE)
  // =========================================================================
  {
    id: "MP-ONE-MSN-06",
    slug: "one-by-msn-neopolis",
    name: "One by MSN",
    title: "One by MSN",
    developerName: "MSN Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Ultra-Luxury Apartments",
    location: "Neopolis Plot 1, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis Plot 1, Kokapet, Hyderabad, Telangana",
    bhkOptions: ["4 BHK"],
    sizeRange: "5,250 – 7,460 sq.ft",
    priceDisplay: "Price Pending Confirmation",
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: false,
    published: false,
    verificationStatus:
      "Unpublished candidate: verify project details and marketing authorization before publishing.",
    projectOverview: {
      totalArea: "7.7 Acres",
      totalTowers: 5,
      towerConfiguration: "55 Floors",
      totalUnits: 655,
      communityType: "Ultra-Luxury Apartments",
    },
    approvalInfo: {
      status: "Pending Verification & Marketing Authorization",
      note: "Details and marketing authorization must be verified before publishing.",
      reraVerified: false,
    },
    configurations: [
      {
        id: "one-msn-4bhk",
        name: "4 BHK Ultra-Luxury Residence",
        type: "4 BHK",
        sizeLabel: "5,250 – 7,460 sq.ft",
      },
    ],
    description:
      "Ultra-luxury 4 BHK apartment community at Neopolis Plot 1, Hyderabad featuring 5 towers of 55 floors across 7.7 acres with 655 residences, 1,80,000 sq.ft stated amenity space, and Osman Sagar lake views.",
    highlights: [
      "7.7 Acres • 5 Towers • 55 Floors • 655 Residences",
      "5,250–7,460 sq.ft 4 BHK Residences",
      "1,80,000 sq.ft stated amenity space",
      "Osman Sagar lake views",
    ],
    amenities: [],
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 7. RAJAPUSHPA SKYRA (UNPUBLISHED CANDIDATE)
  // =========================================================================
  {
    id: "MP-RP-SKY-07",
    slug: "rajapushpa-skyra",
    name: "Rajapushpa Skyra",
    title: "Rajapushpa Skyra",
    developerName: "Rajapushpa Properties",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury Apartments",
    location: "Hyderabad",
    locationArea: "Hyderabad",
    address: "Hyderabad, Telangana",
    bhkOptions: [],
    priceDisplay: "Pending Confirmation",
    featured: false,
    published: false,
    verificationStatus:
      "Unpublished candidate: client shared brochure and price sheet reference; specifications, pricing, images, and availability awaiting confirmation.",
    approvalInfo: {
      status: "Unpublished Candidate",
      note: "Awaiting verified project specifications and marketing approval.",
      reraVerified: false,
    },
    description: "Unpublished project candidate pending verified specifications and assets.",
    highlights: [],
    amenities: [],
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 8. RAJAPUSHPA CASA LUXURA (UNPUBLISHED CANDIDATE)
  // =========================================================================
  {
    id: "MP-RP-CAS-08",
    slug: "rajapushpa-casa-luxura",
    name: "Rajapushpa Casa Luxura",
    title: "Rajapushpa Casa Luxura",
    developerName: "Rajapushpa Properties",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury Residences",
    location: "Hyderabad",
    locationArea: "Hyderabad",
    address: "Hyderabad, Telangana",
    bhkOptions: [],
    priceDisplay: "Pending Confirmation",
    featured: false,
    published: false,
    verificationStatus:
      "Unpublished candidate: client shared brochure and price sheet reference; specifications, pricing, images, and availability awaiting confirmation.",
    approvalInfo: {
      status: "Unpublished Candidate",
      note: "Awaiting verified project specifications and marketing approval.",
      reraVerified: false,
    },
    description: "Unpublished project candidate pending verified specifications and assets.",
    highlights: [],
    amenities: [],
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 9. PRESTIGE PROJECT — UNPUBLISHED CANDIDATE
  // =========================================================================
  {
    id: "MP-PRS-09",
    slug: "prestige-project-candidate",
    name: "Prestige Project (Name Pending Confirmation)",
    title: "Prestige Project (Name Pending Confirmation)",
    developerName: "Prestige Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Residential Project",
    location: "Hyderabad",
    locationArea: "Hyderabad",
    address: "Hyderabad, Telangana",
    bhkOptions: [],
    priceDisplay: "Pending Confirmation",
    featured: false,
    published: false,
    verificationStatus:
      "Unpublished candidate: exact public project name and details need confirmation before publishing.",
    approvalInfo: {
      status: "Unpublished Candidate",
      note: "Exact public project name and details pending confirmation.",
      reraVerified: false,
    },
    description: "Unpublished project candidate pending public project name and detail confirmation.",
    highlights: [],
    amenities: [],
    images: [],
    createdAt: "2026-11-12",
  },
];

export function getAllProperties(): Property[] {
  return propertiesData.filter((p) => p.published);
}

export function getPublishedProperties(): Property[] {
  return propertiesData.filter((p) => p.published);
}

export function getUnpublishedProperties(): Property[] {
  return propertiesData.filter((p) => !p.published);
}

export function getFeaturedProperties(): Property[] {
  return propertiesData.filter((p) => p.featured && p.published);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return propertiesData.find((p) => p.slug === slug && p.published);
}

export function getFilterOptions() {
  const published = getPublishedProperties();
  const locations = Array.from(new Set(published.map((p) => p.locationArea))).sort();
  const bhkSet = new Set<string>();
  published.forEach((p) => p.bhkOptions.forEach((b) => bhkSet.add(b)));
  const bhkOptions = Array.from(bhkSet);
  const statuses = Array.from(
    new Set(published.map((p) => p.constructionStatus).filter((s): s is NonNullable<typeof s> => Boolean(s)))
  );
  const propertyTypes = Array.from(new Set(published.map((p) => p.propertyType)));

  return {
    locations,
    bhkOptions,
    statuses,
    propertyTypes,
  };
}
