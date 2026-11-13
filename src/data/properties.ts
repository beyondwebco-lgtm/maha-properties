import { Property } from "../types/property";

export const propertiesData: Property[] = [
  // =========================================================================
  // 1. SAI KEERTHI LAKE VIEW
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
    startingPrice: 9144000,
    priceDisplay: "₹7,200 / sq.ft*",
    priceDisclaimer: "*Price subject to availability and applicable charges.",
    priceUnit: "per sq.ft",
    pricePerSqFt: 7200,
    constructionStatus: "Ready to Move",
    status: "Ready to Move",
    featured: true,
    published: true,
    verificationStatus:
      "Base price ₹7,200/sq.ft and core specifications confirmed; project-specific HMDA/RERA approval numbers subject to verification.",
    supportsFacingPreference: true,
    facingOptions: ["East Facing", "West Facing", "Either Facing"],
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Sai Keerthi Lake View at Chandanagar. Please share the latest availability, pricing and site visit details.",
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
        basePricePerSqFt: 7200,
        basePriceTotal: 9144000,
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
        basePricePerSqFt: 7200,
        basePriceTotal: 11448000,
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
        basePricePerSqFt: 7200,
        basePriceTotal: 14256000,
        amenitiesCharges: 800000,
        description: "Expansive 3 BHK residence in 1,590–1,980 sq.ft range with East and West facing choices.",
      },
    ],
    pricingRules: {
      basePricePerSqFt: 7200,
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
  // 2. ADITI MITRA VILLAS
  // =========================================================================
  {
    id: "MP-AMV-02",
    slug: "aditi-mitra-villas",
    name: "Aditi Mitra Villas",
    title: "Aditi Mitra Villas",
    subtitle: "4 BHK G+2 Triplex Luxury Gated Community Villas in Patancheru, Hyderabad",
    propertyType: "villas",
    type: "villas",
    typeLabel: "Luxury Gated Community Villas",
    location: "Patancheru, Hyderabad",
    locationArea: "Patancheru",
    address: "Patancheru, near ORR Exit No. 3, Hyderabad, Telangana",
    bhkOptions: ["4 BHK"],
    sizeRange: "2,409 sq.ft Built-up • 150–200 sq.yd Plots",
    startingPrice: 18500000,
    priceDisplay: "Starting from ₹1.85 Cr*",
    priceDisclaimer: "*Price subject to availability and applicable charges.",
    priceUnit: "total",
    constructionStatus: "Available",
    status: "Available",
    featured: true,
    published: true,
    verificationStatus:
      "Starting price ₹1.85 Cr and 4 BHK G+2 triplex villa specs confirmed; project-specific HMDA approval numbers and official villa photography pending.",
    statusNotice: "Details Being Updated — Project Photography Awaited",
    supportsFacingPreference: true,
    facingOptions: ["East Facing", "West Facing"],
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Aditi Mitra Villas. Please share the latest villa availability, pricing and site visit details.",
    projectOverview: {
      towerConfiguration: "G+2 Triplex Villas",
      totalUnits: 42,
      communityType: "Luxury Gated Community Villas",
    },
    approvalInfo: {
      status: "HMDA Approved Community (Subject to Verification)",
      note: "HMDA Approved Community, subject to verification of project-specific approval details. 100% Vaastu Compliant as stated in supplied project material. MAHA Properties acts as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "amv-4bhk-triplex",
        name: "4 BHK Triplex Villa",
        type: "4 BHK",
        sizeSqFt: 2409,
        sizeLabel: "2,409 sq.ft built-up area (150–200 sq.yd plot sizes)",
        facing: ["East Facing", "West Facing"],
        description:
          "G+2 Triplex 4 BHK villa on 150–200 sq.yd plot sizes, available in East Facing and West Facing options.",
      },
    ],
    description:
      "Aditi Mitra Villas is a gated community of 42 luxury 4 BHK G+2 triplex villas in Patancheru, Hyderabad. With 2,409 sq.ft built-up area on 150–200 sq.yd plot sizes, the community offers East Facing and West Facing villas alongside a swimming pool, gym, banquet hall, landscaped open spaces, security, and convenient connectivity to Patancheru and ORR Exit No. 3.",
    highlights: [
      "42 Luxury 4 BHK G+2 Triplex Villas",
      "2,409 sq.ft built-up area on 150–200 sq.yd plot sizes",
      "East Facing and West Facing options",
      "100% Vaastu Compliant (as stated in supplied project material)",
      "HMDA Approved Community, subject to verification",
      "Connectivity to Patancheru and ORR Exit No. 3",
    ],
    amenities: [
      { name: "Swimming Pool", icon: "Waves" },
      { name: "Gym", icon: "Dumbbell" },
      { name: "Banquet Hall", icon: "Building2" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "Landscaped Open Spaces", icon: "Trees" },
      { name: "Security", icon: "ShieldCheck" },
      { name: "Indoor Games", icon: "Gamepad2" },
      { name: "Common Area Power Backup", icon: "Sun" },
      { name: "Underground Electrical Cabling", icon: "Layers" },
    ],
    locationConnectivity: {
      distanceNote: "Connectivity to Patancheru and Outer Ring Road (ORR) Exit No. 3.",
      points: [
        "Direct connectivity to Patancheru and Mumbai Highway",
        "Quick access to ORR Exit No. 3 for Financial District & HITEC City",
        "Proximity to educational, healthcare, and employment hubs in West Hyderabad",
      ],
      mapQuery: "Patancheru+ORR+Exit+3+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Patancheru+ORR+Exit+3+Hyderabad",
    },
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 3. BRIGADE BARCELONA
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
      "Highlights verified from supplied marketing information; pricing, unit dimensions, and RERA number pending confirmation.",
    statusNotice: "Details Being Updated — Pricing & Unit Dimensions Pending Confirmation",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Brigade Barcelona at Neopolis, Hyderabad. Please share the latest pricing, availability and site visit details.",
    projectOverview: {
      communityType: "Premium High-Rise Apartments",
    },
    approvalInfo: {
      status: "Details Being Updated",
      note: "Developed by Brigade Group. Unit dimensions, pricing, and project-specific RERA details will be shared upon official developer confirmation. MAHA Properties acts as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
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
  // 4. BRIGADE GATEWAY
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
    startingPrice: 49000000,
    priceDisplay: "Starting from ₹4.90 Cr*",
    priceDisclaimer: "*Limited-period festive offer. Spot Booking Benefit available. T&C apply.",
    priceUnit: "total",
    constructionStatus: "Under Construction",
    status: "Under Construction",
    featured: true,
    published: true,
    verificationStatus:
      "TG RERA P02400009142 confirmed; luxury residences starting from ₹4.90 Cr onwards with exclusive festive spot booking benefit.",
    statusNotice: "✨ Exclusive Spot Booking Benefit Available — Starting from ₹4.90 Cr*",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Brigade Gateway at Neopolis. Please share the exclusive spot booking benefits, 3 & 4 Bed / Sky Duplex availability, pricing and schedule a site visit.",
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
        description: "Iconic 3 & 4 Bed signature ultra-luxury residences designed for elevated living in Neopolis.",
      },
      {
        id: "gtw-5-6bhk",
        name: "5 & 6 Bedroom Sky Duplexes",
        type: "5 & 6 BHK Sky Duplex",
        description: "Exclusive high-floor sky duplex residences with private decks and panoramic city vistas.",
      },
    ],
    description:
      "Celebrate the audacity to have it all at Brigade Gateway! Discover an extraordinary lifestyle at Neopolis, Hyderabad, with iconic 3 & 4 Bed Signature Residences and exclusive 5 & 6 Bed Sky Duplexes. Starting from ₹4.90 Cr onwards with exclusive spot booking benefits, Brigade Gateway redefines luxury living in Hyderabad's premier Neopolis corridor.",
    highlights: [
      "Iconic 3 & 4 Bed Signature Residences",
      "Exclusive 5 & 6 Bed Sky Duplexes",
      "Luxury residences starting from ₹4.90 Cr. onwards",
      "Exclusive Spot Booking Benefit (Limited-period festive offer)",
      "Grand Clubhouse & elevated lifestyle amenities",
      "Official TG RERA Registered Project: P02400009142",
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
        src: "/properties/brigade-gateway/gateway-exterior.jpg",
        alt: "Brigade Gateway Neopolis integrated commercial and residential arrival plaza",
        caption: "Brigade Gateway — Integrated Mixed-Use Precinct View",
        category: "exterior",
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
  // 5. MSN LUXURY RESIDENTIAL DEVELOPMENT
  // =========================================================================
  {
    id: "MP-MSN-LUX-05",
    slug: "msn-luxury-residential-neopolis",
    name: "MSN Luxury Residential Development",
    title: "MSN Luxury Residential Development",
    subtitle: "3 & 4 BHK Luxury High-Rise Residential Apartments in Neopolis, Kokapet, Hyderabad",
    developerName: "MSN Realty",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury High-Rise Residential Apartments",
    location: "Neopolis, Kokapet, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Hyderabad, Telangana",
    bhkOptions: ["3 BHK", "4 BHK"],
    sizeRange: "2,424 – 4,545 sq.ft",
    priceDisplay: "From ₹10,499 / sq.ft*",
    priceDisclaimer:
      "Base prices are indicative and subject to availability, applicable charges and confirmation.",
    priceUnit: "per sq.ft",
    pricePerSqFt: 10499,
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: false,
    published: true,
    verificationStatus:
      "Project highlights, unit sizes, specifications, tower-wise base prices, and 20:20:20:20:20 payment plan updated from supplied MSN material; exact public project name and RERA number pending confirmation.",
    statusNotice: "Details Being Updated — Official Public Project Name & RERA Number Pending",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in the MSN Luxury Residential Development at Neopolis, Kokapet. Please share available 3 & 4 BHK options, pricing and site visit details.",
    projectOverview: {
      totalArea: "7 Acres",
      totalTowers: 3,
      towerConfiguration: "56 Floors • 8 Sky Pavilions",
      communityType: "Luxury High-Rise Residential Apartments",
    },
    approvalInfo: {
      status: "Details Being Updated",
      note: "Developed by MSN Realty. Official project registration details and confirmed final cost sheets will be provided through MAHA Properties (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "msn-lux-3bhk",
        name: "3 BHK Luxury Residences",
        type: "3 BHK",
        sizeLabel: "2,424 | 2,666 | 2,828 sq.ft",
        description: "Spacious 3 BHK apartment options across 2,424, 2,666, and 2,828 sq.ft.",
      },
      {
        id: "msn-lux-4bhk",
        name: "4 BHK Luxury Residences",
        type: "4 BHK",
        sizeLabel:
          "3,111 | 3,150 | 3,175 | 3,200 | 3,600 | 3,888 | 4,141 | 4,300 | 4,401 | 4,500 | 4,545 sq.ft",
        description:
          "Expansive 4 BHK apartment layouts ranging from 3,111 sq.ft up to 4,545 sq.ft.",
      },
    ],
    towerPricing: [
      { tower: "Tower A", rate: "₹10,699 per sq.ft" },
      { tower: "Towers B & C", rate: "₹10,499 per sq.ft" },
    ],
    specifications: [
      "Tower A: 11.4 ft floor-to-floor height",
      "Towers B & C: 10.5 ft floor-to-floor height",
      "Engineered Marble Flooring",
      "Delta CP Fittings or equivalent",
      "TOTO Sanitaryware or equivalent",
    ],
    paymentPlan: {
      title: "20:20:20:20:20 Payment Plan",
      summary:
        "Five instalments of 20% each. The supplied information indicates payments beginning within 30 days of DOB and extending up to the fourth year.",
    },
    description:
      "A premium residential development in Neopolis, Kokapet, featuring spacious 3 and 4 BHK luxury residences, three residential towers rising 56 floors across 7 acres, 8 Sky Pavilions, and 2,30,000 sq.ft of clubhouse and lifestyle amenities.",
    highlights: [
      "Total Land Area: 7 Acres",
      "3 Towers • 56 Floors • 8 Sky Pavilions",
      "3 & 4 BHK Residences (2,424–4,545 sq.ft)",
      "Iconic Clubhouse & Amenities: 2,30,000 sq.ft",
      "Tower A: 11.4 ft floor-to-floor height | Towers B & C: 10.5 ft",
      "Engineered Marble Flooring, Delta CP Fittings & TOTO Sanitaryware (or equivalent)",
    ],
    amenities: [
      { name: "2,30,000 sq.ft Clubhouse", icon: "Building2" },
      { name: "8 Sky Pavilions", icon: "Sparkles" },
      { name: "Landscaped Grounds", icon: "Trees" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "Swimming Pool", icon: "Waves" },
      { name: "24/7 Security", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Located in Neopolis, Kokapet, Hyderabad.",
      points: [
        "Prime Neopolis, Kokapet address with ORR connectivity",
        "Close to Financial District & HITEC City corridors",
        "Easy access to Rajiv Gandhi International Airport via ORR",
      ],
      mapQuery: "Neopolis+Kokapet+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Neopolis+Kokapet+Hyderabad",
    },
    images: [
      {
        src: "/properties/msn-luxury/msn-highlights.jpg",
        alt: "MSN Luxury Residential Development Neopolis Kokapet project highlights and specifications",
        caption: "MSN Neopolis — 7 Acres, 3 Towers, 56 Floors, 2,30,000 sq.ft Clubhouse",
        category: "hero",
      },
    ],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 6. ONE BY MSN
  // =========================================================================
  {
    id: "MP-ONE-MSN-06",
    slug: "one-by-msn-neopolis",
    name: "One by MSN",
    title: "One by MSN",
    subtitle: "Ultra-Luxury 4 BHK Residences at Neopolis Plot 1, Hyderabad",
    developerName: "MSN Realty",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Ultra-Luxury Apartments",
    location: "Neopolis Plot 1, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis Plot 1, Kokapet, Hyderabad, Telangana",
    bhkOptions: ["4 BHK"],
    sizeRange: "5,250 – 7,460 sq.ft",
    priceDisplay: "Price on Request",
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: false,
    published: true,
    verificationStatus:
      "Supplied project facts & creative (TG RERA P02400009393, HMDA 011159/BP/HMDA/2925) recorded; pricing pending confirmation.",
    statusNotice: "Details Being Updated — Pricing Pending Confirmation",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in One by MSN at Neopolis Plot 1, Hyderabad. Please share the latest 4 BHK availability, pricing and site visit details.",
    projectOverview: {
      totalArea: "7.7 Acres",
      totalTowers: 5,
      towerConfiguration: "55 Floors, 5 Towers (3 Towers Connected by a Sky Bridge)",
      totalUnits: 655,
      communityType: "Ultra-Luxury 4 BHK Residences",
    },
    approvalInfo: {
      status: "TG RERA No: P02400009393 • HMDA No: 011159/BP/HMDA/2925",
      note: "TG RERA No: P02400009393 & HMDA No: 011159/BP/HMDA/2925 as stated on supplied MSN Realty creative. MAHA Properties acts as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: true,
      projectReraNumber: "P02400009393",
    },
    configurations: [
      {
        id: "one-msn-4bhk",
        name: "4 BHK Uber-Luxury Residence",
        type: "4 BHK",
        sizeLabel: "5,250 – 7,460 sq.ft",
        description: "Expansive 4 BHK residences ranging from 5,250 to 7,460 sq.ft with panoramic Osman Sagar lake views.",
      },
    ],
    description:
      "Experience unmatched luxury living at One by MSN, Neopolis Plot 1, Hyderabad. Nestled across 7.7 acres of prime real estate in one of Hyderabad's most prestigious addresses, this iconic landmark features 55 floors across 5 towers, with 3 towers connected by a visionary sky bridge. Offering 655 uber-luxury 4 BHK residences ranging from 5,250 to 7,460 sq.ft, residents enjoy 1,80,000 sq.ft of world-class amenities spread across the clubhouse, stilt, and sky park, complemented by breathtaking panoramic vistas of the tranquil Osman Sagar Lake.",
    highlights: [
      "7.7 Acres of Prime Real Estate at Neopolis Plot 1, Kokapet",
      "55 Floors, 5 Iconic Towers with 655 Uber-Luxury Residences",
      "3 Towers Connected by a Sky Bridge — visionary architectural design",
      "Spacious 4 BHK Residences ranging from 5,250 to 7,460 Sq. Ft.",
      "1,80,000 Sq. Ft. of World-Class Amenities across clubhouse, stilt & sky park",
      "Breathtaking panoramic views of the serene Osman Sagar Lake",
      "Official TG RERA No: P02400009393 • HMDA No: 011159/BP/HMDA/2925",
    ],
    amenities: [
      { name: "1,80,000 sq.ft Amenities", icon: "Building2" },
      { name: "Osman Sagar Lake Views", icon: "Compass" },
      { name: "Sky Bridge Connection", icon: "Sparkles" },
      { name: "Clubhouse & Sky Park", icon: "Trees" },
      { name: "Swimming Pools", icon: "Waves" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "24/7 Security", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Situated at Neopolis Plot 1, Kokapet, Hyderabad.",
      points: [
        "Prime Plot 1 address in Neopolis, Kokapet",
        "Overlooking tranquil Osman Sagar Lake waters",
        "Direct expressway connectivity to ORR, Financial District & HITEC City",
      ],
      mapQuery: "Neopolis+Kokapet+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Neopolis+Kokapet+Hyderabad",
    },
    images: [
      {
        src: "/properties/one-by-msn/one-by-msn-hero.jpg",
        alt: "One by MSN Neopolis Plot 1 Hyderabad 4 BHK ultra-luxury towers",
        caption: "One by MSN — 4 BHK Residences (5,250–7,460 sq.ft) at Neopolis Plot 1",
        category: "hero",
      },
      {
        src: "/properties/one-by-msn/one-by-msn-lakeview.jpg",
        alt: "One by MSN Neopolis Plot 1 panoramic Osman Sagar lake view from luxury residence",
        caption: "A Vision Beyond Luxury — Breathtaking Osman Sagar Lake Views at Neopolis Plot 1",
        category: "exterior",
      },
    ],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 7. RAJAPUSHPA SKYRA
  // =========================================================================
  {
    id: "MP-RP-SKY-07",
    slug: "rajapushpa-skyra",
    name: "Rajapushpa Skyra",
    title: "Rajapushpa Skyra",
    subtitle: "Residential Apartments by Rajapushpa Properties",
    developerName: "Rajapushpa Properties",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Residential Apartments",
    location: "Hyderabad",
    locationArea: "Hyderabad",
    address: "Hyderabad, Telangana",
    bhkOptions: [],
    priceDisplay: "Price on Request",
    published: true,
    featured: false,
    verificationStatus:
      "Project Details Being Updated — Brochure/price sheet reference shared; specifications, pricing, images, and availability awaiting confirmation.",
    statusNotice: "Project Details Being Updated",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Rajapushpa Skyra. Please share the latest project details, pricing, availability and site visit details.",
    approvalInfo: {
      status: "Project Details Being Updated",
      note: "Project specifications, sizes, and RERA details are currently being updated. Contact MAHA Properties (TSRERA Agent Reg. No. A02500004914) for the latest verified information.",
      reraVerified: false,
    },
    description:
      "Rajapushpa Skyra is a residential apartment project by Rajapushpa Properties. Project details, configurations, pricing, and visual assets are currently being updated. Connect with MAHA Properties directly for the latest confirmed availability and project documentation.",
    highlights: [],
    amenities: [],
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 8. RAJAPUSHPA CASA LUXURA
  // =========================================================================
  {
    id: "MP-RP-CAS-08",
    slug: "rajapushpa-casa-luxura",
    name: "Rajapushpa Casa Luxura",
    title: "Rajapushpa Casa Luxura",
    subtitle: "Luxury Residential Project by Rajapushpa Properties",
    developerName: "Rajapushpa Properties",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury Residences",
    location: "Hyderabad",
    locationArea: "Hyderabad",
    address: "Hyderabad, Telangana",
    bhkOptions: [],
    priceDisplay: "Price on Request",
    published: true,
    featured: false,
    verificationStatus:
      "Additional Project Information Coming Soon — Brochure/price sheet reference shared; specifications, pricing, images, and availability awaiting confirmation.",
    statusNotice: "Additional Project Information Coming Soon",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Rajapushpa Casa Luxura. Please share the latest project details, pricing, availability and site visit details.",
    approvalInfo: {
      status: "Additional Project Information Coming Soon",
      note: "Additional project information, unit sizes, and RERA details are coming soon. Contact MAHA Properties (TSRERA Agent Reg. No. A02500004914) for verified updates.",
      reraVerified: false,
    },
    description:
      "Rajapushpa Casa Luxura is a luxury residential development by Rajapushpa Properties. Additional project information, configurations, pricing, and photographs are coming soon. Reach out to MAHA Properties for confirmed availability and guidance.",
    highlights: [],
    amenities: [],
    images: [],
    createdAt: "2026-11-12",
  },

  // =========================================================================
  // 9. PRESTIGE RESIDENTIAL PROJECT
  // =========================================================================
  {
    id: "MP-PRS-09",
    slug: "prestige-project-candidate",
    name: "Prestige Residential Project",
    title: "Prestige Residential Project",
    subtitle: "Upcoming Residential Project by Prestige Group — Project Information Being Updated",
    developerName: "Prestige Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Residential Apartments",
    location: "Hyderabad",
    locationArea: "Hyderabad",
    address: "Hyderabad, Telangana",
    bhkOptions: [],
    priceDisplay: "Price on Request",
    published: true,
    featured: false,
    verificationStatus:
      "Project Information Being Updated — Exact public project name, location, configurations, pricing, and assets awaiting confirmation.",
    statusNotice: "Project Information Being Updated",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in the Prestige Residential Project. Please share the latest confirmed project details, availability and site visit information.",
    approvalInfo: {
      status: "Project Information Being Updated",
      note: "Official public project name, location, configurations, and approval details are currently being updated. Contact MAHA Properties (TSRERA Agent Reg. No. A02500004914) for verified updates.",
      reraVerified: false,
    },
    description:
      "Prestige Residential Project is an upcoming residential offering by Prestige Group. Project information, including official project name, location, configurations, pricing, and photography, is currently being updated.",
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

export function getFeaturedProperties(): Property[] {
  return propertiesData.filter((p) => p.featured && p.published);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return propertiesData.find((p) => p.slug === slug && p.published);
}

export function getFilterOptions() {
  const published = getPublishedProperties();
  const locations = Array.from(
    new Set(published.map((p) => p.locationArea).filter((loc) => loc !== "Hyderabad"))
  ).sort();
  const bhkSet = new Set<string>();
  published.forEach((p) => p.bhkOptions.forEach((b) => bhkSet.add(b)));
  const bhkOptions = Array.from(bhkSet);
  const statuses = Array.from(
    new Set(
      published
        .map((p) => p.constructionStatus)
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
    )
  );
  const propertyTypes = Array.from(new Set(published.map((p) => p.propertyType)));

  return {
    locations,
    bhkOptions,
    statuses,
    propertyTypes,
  };
}
