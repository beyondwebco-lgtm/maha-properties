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
    subtitle: "Ready-to-Move Gated Community Apartments in Chandanagar near Gangaram Lake",
    developerName: "Sai Keerthi Constructions",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Gated Community Apartments",
    location: "Chandanagar, near Gangaram Lake, Hyderabad",
    locationArea: "Chandanagar",
    address: "Near Gangaram Lake, Chandanagar, Hyderabad, Telangana 500050",
    bhkOptions: ["2 BHK", "3 BHK"],
    sizeRange: "1,270 – 1,980 sq.ft",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "Ready to Move",
    status: "Ready to Move",
    featured: true,
    published: true,
    verificationStatus:
      "Core specifications, ready-to-move status, and community amenities confirmed. Pricing and availability provided on direct enquiry.",
    supportsFacingPreference: true,
    facingOptions: ["East Facing", "West Facing", "Either Facing"],
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Sai Keerthi Lake View located in Chandanagar, near Gangaram Lake, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Approx. 2.2 Acres",
      totalTowers: 3,
      towerConfiguration: "2 C+S + 10 Floors",
      totalUnits: 180,
      communityType: "Gated Community Apartments",
      possession: "Ready to Move",
    },
    approvalInfo: {
      status: "HMDA & RERA Approved (Subject to Verification)",
      note: "Advertised as HMDA & RERA approved; project-specific approval numbers subject to verification. MAHA Properties operates strictly as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "sklv-2bhk-1270",
        name: "2 BHK Residence",
        type: "2 BHK",
        sizeLabel: "1,270 sq.ft",
        facing: ["West"],
        description: "Thoughtfully planned 2 BHK apartment layout with West-facing entrance and optimal natural light.",
      },
      {
        id: "sklv-3bhk-1590",
        name: "3 BHK Residence (Standard)",
        type: "3 BHK",
        sizeLabel: "1,590 sq.ft",
        facing: ["East", "West"],
        description: "Well-proportioned 3 BHK apartment available in East and West facing orientations.",
      },
      {
        id: "sklv-3bhk-1980",
        name: "3 BHK Residence (Large)",
        type: "3 BHK",
        sizeLabel: "1,980 sq.ft",
        facing: ["East", "West"],
        description: "Expansive 3 BHK residence with generous living and dining zones, available in East and West facing layouts.",
      },
    ],
    description:
      "Sai Keerthi Lake View is a gated residential apartment community located in Chandanagar, near Gangaram Lake, Hyderabad. The development offers 2 and 3 BHK residences within a planned residential environment, providing access to everyday urban conveniences and community lifestyle amenities.",
    highlights: [
      "Approx. 2.2 Acres Gated Residential Community",
      "3 Residential Towers with 180 Total Residences",
      "Ready to Move 2 & 3 BHK Apartments",
      "2 BHK: 1,270 sq.ft (West Facing)",
      "3 BHK: 1,590–1,980 sq.ft (East & West Facing)",
      "Dedicated Resident Clubhouse, Swimming Pool & Landscaped Grounds",
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
    subtitle: "Luxury 4 BHK Triplex Gated Community Villas in Patancheru, Hyderabad",
    developerName: "Aditi Constructions",
    propertyType: "villas",
    type: "villas",
    typeLabel: "Luxury Gated Community Villas",
    location: "Patancheru, Hyderabad",
    locationArea: "Patancheru",
    address: "Near ORR Exit No. 3, Patancheru, Hyderabad, Telangana",
    bhkOptions: ["4 BHK"],
    sizeRange: "2,409 sq.ft Built-up • 150–200 sq.yd Plots",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "Available",
    status: "Available",
    featured: true,
    published: true,
    verificationStatus:
      "Villa dimensions, G+2 triplex structure, plot sizes, and community amenities verified. Pricing available on request.",
    supportsFacingPreference: true,
    facingOptions: ["East Facing", "West Facing"],
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Aditi Mitra Villas located in Patancheru, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Exclusive Villa Community",
      totalUnits: 42,
      towerConfiguration: "G+2 Triplex Villas",
      communityType: "Luxury Gated Community Villas",
      possession: "Ready / Available",
    },
    approvalInfo: {
      status: "Gated Community Villa Approvals in Place",
      note: "Project approvals and layout sanctions subject to developer documentation review. MAHA Properties operates as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "amv-4bhk-triplex",
        name: "4 BHK Triplex Villa",
        type: "4 BHK",
        sizeLabel: "2,409 sq.ft Built-up (150–200 sq.yd Plot)",
        facing: ["East Facing", "West Facing"],
        description: "G+2 triplex villa featuring 4 spacious bedrooms, private terrace, family lounge, and covered car parking.",
      },
    ],
    description:
      "Aditi Mitra Villas is a gated villa development in Patancheru, Hyderabad, offering spacious 4 BHK triplex residences. Designed for families seeking independent villa living within a community environment, the project combines functional residential layouts with lifestyle facilities and access to major road networks.",
    highlights: [
      "42 Exclusive 4 BHK Triplex Luxury Villas",
      "G+2 Triplex Configuration (Approx. 2,409 sq.ft Built-up Area)",
      "Plot Sizes: 150–200 sq.yd with East & West Facing Options",
      "Resident Clubhouse with Swimming Pool & Fully Equipped Gym",
      "Banquet Hall, Children's Play Area & Landscaped Open Spaces",
      "Strategic Location near Outer Ring Road Exit No. 3",
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
      distanceNote: "Situated in Patancheru with swift access to Outer Ring Road Exit No. 3.",
      points: [
        "Immediate proximity to Outer Ring Road (ORR Exit No. 3)",
        "Direct highway connectivity to BHEL, Chandanagar & Miyapur",
        "Convenient access to Financial District & Gachibowli via ORR",
        "Close to educational institutions, supermarkets, and healthcare facilities",
      ],
      mapQuery: "Patancheru+Outer+Ring+Road+Exit+3+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Patancheru+Outer+Ring+Road+Exit+3+Hyderabad",
    },
    images: [],
    createdAt: "2026-11-04",
  },

  // =========================================================================
  // 3. BRIGADE BARCELONA
  // =========================================================================
  {
    id: "MP-BRG-BCL-03",
    slug: "brigade-barcelona-neopolis",
    name: "Brigade Barcelona",
    title: "Brigade Barcelona",
    subtitle: "Spanish-Inspired Luxury High-Rise 3 & 4 BHK Residences in Neopolis Phase III, Kokapet",
    developerName: "Brigade Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury High-Rise Apartments",
    location: "Plot No. 20, Neopolis Phase III, Kokapet, Gandipet, Hyderabad",
    locationArea: "Neopolis",
    address: "Plot No. 20, Neopolis Phase III, Kokapet, Gandipet, Hyderabad, Telangana",
    bhkOptions: ["3 BHK", "4 BHK"],
    sizeRange: "Residences starting from approx. 2,781 sq.ft",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: true,
    published: true,
    verificationStatus:
      "Approx. 4.04 acres, 52 floors single-tower landmark, and TG RERA P02400011156 confirmed. Pricing and availability on direct enquiry.",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Brigade Barcelona located in Neopolis Phase III, Kokapet, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Approx. 4.04 Acres",
      totalTowers: 1,
      towerConfiguration: "52 Floors (Single Residential Tower)",
      communityType: "Luxury High-Rise Apartments",
    },
    approvalInfo: {
      status: "TG RERA Approved (Reg. No. P02400011156)",
      note: "Registered with Telangana RERA under Reg. No: P02400011156 for single-tower luxury project at Neopolis Phase III, Kokapet. Developed by Brigade Group. MAHA Properties operates as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: true,
      projectReraNumber: "P02400011156",
    },
    configurations: [
      {
        id: "bcl-3bhk",
        name: "3 BHK Luxury Residence",
        type: "3 BHK",
        sizeLabel: "Starting from approx. 2,781 sq.ft",
        description: "Luxurious 3 Bedroom residences crafted for privacy, natural light, and open air, featuring expansive private decks.",
      },
      {
        id: "bcl-4bhk",
        name: "4 BHK Luxury Residence",
        type: "4 BHK",
        sizeLabel: "Spacious 4 BHK Layouts",
        description: "Elevated 4 Bedroom residences offering panoramic 270° views across the Hyderabad skyline.",
      },
    ],
    description:
      "Brigade Barcelona is a luxury high-rise residential development by Brigade Group in Neopolis Phase III, Kokapet. The project brings together contemporary architectural design, spacious residential layouts, and a selection of lifestyle amenities within Hyderabad's growing western residential corridor. Offering 3 and 4 BHK residences, the development is positioned for homebuyers seeking premium urban living with access to major employment destinations and modern infrastructure.",
    highlights: [
      "Approx. 4.04 Acres Landmark in Neopolis Phase III, Kokapet",
      "Single Iconic Residential Tower Rising 52 Floors",
      "Spacious 3 & 4 BHK Residences starting from approx. 2,781 sq.ft",
      "Spanish-Inspired Contemporary Architecture by Ricardo E Bofill",
      "Expansive Private Decks Offering Breathtaking 270° Panoramic Views",
      "Multi-Level Clubhouse, Lush Eco Deck & Serene Sky Deck (190m above city)",
      "Official TG RERA Registered Project: P02400011156",
    ],
    amenities: [
      { name: "Multi-level Clubhouse", icon: "Building2" },
      { name: "Eco Deck", icon: "Trees" },
      { name: "Sky Deck", icon: "Sparkles" },
      { name: "Meditation Lawn", icon: "Activity" },
      { name: "Infinity Pool", icon: "Waves" },
      { name: "Fitness Centre", icon: "Dumbbell" },
      { name: "Indoor Recreation", icon: "Gamepad2" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "24/7 Gated Security", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Situated at Plot No. 20, Neopolis Phase III, Kokapet, Gandipet, Hyderabad.",
      points: [
        "Prime Neopolis Phase III high-rise residential corridor",
        "Direct access to Outer Ring Road (ORR) Exit 1 & 2",
        "5–10 minutes to Financial District (Nanakramguda) & Gachibowli",
        "Convenient access to HITEC City, Knowledge City & IT corridors",
        "Seamless signal-free connectivity to Rajiv Gandhi International Airport via ORR",
      ],
      mapQuery: "Neopolis+Phase+III+Kokapet+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Neopolis+Phase+III+Kokapet+Hyderabad",
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
    subtitle: "Ultra-Luxury Integrated Residential Development at Neopolis, Kokapet",
    developerName: "Brigade Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Ultra-Luxury Integrated Development",
    location: "Neopolis, Kokapet, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Hyderabad, Telangana 500075",
    bhkOptions: ["3 BHK", "4 BHK", "5 & 6 BHK Sky Duplex"],
    sizeRange: "3 & 4 BHK Signature Residences • 5 & 6 Bed Sky Duplexes",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "Under Construction",
    status: "Under Construction",
    featured: true,
    published: true,
    verificationStatus:
      "Approx. 9.7-acre integrated development, G+53 to 57 floors high-rise towers, and TG RERA P02400009142 confirmed. Pricing and availability on direct enquiry.",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Brigade Gateway located in Neopolis, Kokapet, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Approx. 9.7 Acres",
      totalTowers: 2,
      towerConfiguration: "G+53 to 57 Floors (Including Imperial Residences)",
      communityType: "Ultra-Luxury Integrated Mixed-Use Development",
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
        name: "3 & 4 Bed Signature Residences",
        type: "3 & 4 BHK",
        description: "Iconic 3 & 4 Bed signature luxury residences designed for high-rise urban living with expansive floor layouts and panoramic views.",
      },
      {
        id: "gtw-5-6bhk",
        name: "5 & 6 Bed Sky Duplexes",
        type: "5 & 6 BHK Sky Duplex",
        description: "Ultra-luxury sky duplex penthouses located on upper floors with double-height living areas and private sky decks.",
      },
    ],
    description:
      "Brigade Gateway at Neopolis is a landmark integrated development bringing together premium residences, commercial spaces, hospitality, and retail experiences. Designed as a distinctive mixed-use destination, the project includes luxury residential towers alongside planned commercial and lifestyle infrastructure, creating a contemporary urban environment. The development is associated with the World Trade Center, InterContinental Hotel, and Orion Mall components within the integrated master plan.",
    highlights: [
      "Approx. 9.7-Acre Integrated Mixed-Use Landmark at Neopolis",
      "Residential Towers Rising G+53 to 57 Floors (Imperial Residences)",
      "3 & 4 Bed Signature Residences & Exclusive 5 & 6 Bed Sky Duplexes",
      "Integrated with World Trade Center Hyderabad, InterContinental Hotel & Orion Mall",
      "51,000+ sq.ft Grand Clubhouse with Exclusive 33rd Floor Oasis Deck",
      "Rooftop Sky Deck with Panoramic Skyline Views & Helipad",
      "Official TG RERA Registered Project: P02400009142",
    ],
    amenities: [
      { name: "Grand Clubhouse (51,000+ sq.ft)", icon: "Building2" },
      { name: "33rd Floor Oasis Deck", icon: "Sparkles" },
      { name: "Rooftop Sky Deck & Helipad", icon: "Trees" },
      { name: "Swimming Pools & Sun Deck", icon: "Waves" },
      { name: "Fitness Centre & Wellness Zone", icon: "Dumbbell" },
      { name: "Landscaped Green Forecourt", icon: "Trees" },
      { name: "Children's Play Zones", icon: "Smile" },
      { name: "24/7 High-Tech Security", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Located in Neopolis, Kokapet, Hyderabad with direct Outer Ring Road connectivity.",
      points: [
        "Direct connectivity to Outer Ring Road (ORR) Exit 1 & 2",
        "Minutes from Financial District (Nanakramguda), Kokapet Golden Mile & Gachibowli",
        "Quick access to HITEC City and top corporate headquarters",
        "Proximity to premier international schools, healthcare facilities, and commercial centres",
        "Seamless 20-minute expressway transit to Rajiv Gandhi International Airport via ORR",
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
    subtitle: "Proposed 3 & 4 BHK Luxury High-Rise Residences in Neopolis, Kokapet",
    developerName: "MSN Realty",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Luxury High-Rise Apartments",
    location: "Neopolis, Kokapet, Hyderabad",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Hyderabad, Telangana",
    bhkOptions: ["3 BHK", "4 BHK"],
    sizeRange: "2,424 – 4,545 sq.ft",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: false,
    published: true,
    verificationStatus:
      "Proposed 7-acre development with 3 towers, 56 floors, and 2,30,000 sq.ft clubhouse. Approval verification in progress; pricing available on direct enquiry.",
    statusNotice: "Pre-Launch / Approval Verification in Progress",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in MSN Luxury Residential Development located in Neopolis, Kokapet, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Approx. 7 Acres",
      totalTowers: 3,
      towerConfiguration: "56 Floors • 8 Sky Pavilions",
      communityType: "Luxury High-Rise Apartments",
    },
    approvalInfo: {
      status: "Pre-Launch / Approval Verification in Progress",
      note: "Project is in pre-launch stage as reported in public information. Regulatory approval details, tower sanctions, and final specifications are subject to verification from official developer documentation. MAHA Properties acts as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [
      {
        id: "msn-lux-3bhk",
        name: "3 BHK Luxury Residences",
        type: "3 BHK",
        sizeLabel: "2,424 | 2,666 | 2,828 sq.ft",
        description: "Spacious 3 BHK apartment layouts designed for modern living with generous natural light and ventilation.",
      },
      {
        id: "msn-lux-4bhk",
        name: "4 BHK Luxury Residences",
        type: "4 BHK",
        sizeLabel: "3,111 – 4,545 sq.ft",
        description: "Expansive 4 BHK apartment options ranging from 3,111 sq.ft up to 4,545 sq.ft with grand living areas.",
      },
    ],
    specifications: [
      "Tower A: 11.4 ft floor-to-floor height",
      "Towers B & C: 10.5 ft floor-to-floor height",
      "Engineered Marble Flooring",
      "Delta CP Fittings or equivalent",
      "TOTO Sanitaryware or equivalent",
    ],
    description:
      "This proposed MSN Realty luxury residential development in Neopolis, Kokapet, is planned around spacious high-rise residences, contemporary architecture, and premium lifestyle facilities. The project is associated with 3 and 4 BHK residential configurations and a master plan incorporating landscaped spaces, sky-level recreational facilities, and clubhouse amenities. Its location in West Hyderabad provides access to major commercial and employment hubs, including the Financial District and Gachibowli.",
    highlights: [
      "Approx. 7 Acres of Prime Land in Neopolis, Kokapet",
      "3 High-Rise Residential Towers Rising 56 Floors",
      "8 Sky Pavilions & Approx. 2,30,000 sq.ft of Clubhouse & Amenities",
      "Spacious 3 & 4 BHK Residences (2,424–4,545 sq.ft)",
      "Tower A: 11.4 ft Floor-to-Floor Height | Towers B & C: 10.5 ft",
      "Engineered Marble Flooring, Delta CP & TOTO Sanitary Fittings (or equivalent)",
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
    subtitle: "Ultra-Luxury 4 BHK Residences at Plot No. 1, Neopolis, Kokapet",
    developerName: "MSN Realty",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Ultra-Luxury Residential Apartments",
    location: "Plot No. 1, Neopolis, Kokapet, Hyderabad, Telangana 500075",
    locationArea: "Neopolis",
    address: "Plot No. 1, Neopolis, Kokapet, Hyderabad, Telangana 500075",
    bhkOptions: ["4 BHK"],
    sizeRange: "5,250 – 7,460 sq.ft",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "New Launch",
    status: "New Launch",
    featured: false,
    published: true,
    verificationStatus:
      "Approx. 7.7 acres, 5 towers rising 55 floors, 3 towers connected by sky bridge, and 4 BHK residences (5,250–7,460 sq.ft) documented; registration details subject to official verification.",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in One by MSN located in Plot No. 1, Neopolis, Kokapet, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Approx. 7.7 Acres",
      totalTowers: 5,
      towerConfiguration: "55 Floors (3 Towers Connected by a Sky Bridge)",
      totalUnits: 655,
      communityType: "Ultra-Luxury 4 BHK Residences",
    },
    approvalInfo: {
      status: "TG RERA Registration Awaiting Official Verification",
      note: "Project regulatory registration details are currently subject to official verification on the Telangana RERA portal. Contact MAHA Properties (TSRERA Agent Reg. No. A02500004914) for verified approval documentation.",
      reraVerified: false,
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
      "One by MSN is a luxury residential development situated in the prestigious Neopolis corridor of Kokapet, Hyderabad. The project offers expansive 4 BHK residences designed for sophisticated urban living, with generous interiors, elevated leisure spaces, and views towards Osman Sagar Lake from select residences. The development combines contemporary architectural design with premium residential facilities and convenient access to Hyderabad's leading business and technology destinations.",
    highlights: [
      "Approx. 7.7 Acres of Prime Real Estate at Plot No. 1, Neopolis, Kokapet",
      "55 Floors, 5 Iconic Towers with 655 Uber-Luxury Residences",
      "3 Towers Connected by a Visionary Sky Bridge",
      "Spacious 4 BHK Residences Ranging from 5,250 to 7,460 sq.ft",
      "Approx. 1,80,000 sq.ft of World-Class Amenities across Clubhouse, Stilt & Sky Park",
      "Breathtaking Views of Osman Sagar Lake from Select Residences",
      "Direct Expressway Connectivity to ORR, Financial District & HITEC City",
    ],
    amenities: [
      { name: "Premium Clubhouse", icon: "Building2" },
      { name: "Sky Park & Sky Bridge", icon: "Sparkles" },
      { name: "Landscaped Outdoor Spaces", icon: "Trees" },
      { name: "Swimming Pool", icon: "Waves" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "Leisure Lounges", icon: "Gamepad2" },
      { name: "Family Gathering Spaces", icon: "Smile" },
      { name: "24/7 Gated Security", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Situated at Plot No. 1, Neopolis, Kokapet, Hyderabad, Telangana 500075.",
      points: [
        "Prime Plot No. 1 address in Neopolis, Kokapet",
        "Tranquil surroundings overlooking the Osman Sagar Lake corridor",
        "Direct expressway connectivity to Nehru Outer Ring Road (ORR)",
        "Minutes from Financial District (Nanakramguda), Gachibowli & HITEC City",
        "Fast signal-free airport transit via ORR",
      ],
      mapQuery: "Plot+1+Neopolis+Kokapet+Hyderabad",
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
    subtitle: "Ultra-Luxury 3 & 4 BHK High-Rise Apartments at Neopolis, Kokapet",
    developerName: "Rajapushpa Properties",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Ultra-Luxury High-Rise Apartments",
    location: "Neopolis, Kokapet, Gandipet, Hyderabad, Telangana 500075",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Gandipet, Hyderabad, Telangana 500075",
    bhkOptions: ["3 BHK", "4 BHK"],
    sizeRange: "3,140 – 5,235 sq.ft",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "Under Construction",
    status: "Under Construction",
    featured: true,
    published: true,
    verificationStatus:
      "Approx. 6.5 acres land extent, 3 towers G+55 floors, 3 & 4 BHK configurations, and TG RERA P02400009520 verified against official developer records.",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Rajapushpa Skyra located in Neopolis, Kokapet, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Approx. 6.5 Acres",
      totalTowers: 3,
      towerConfiguration: "G+55 Floors",
      communityType: "Ultra-Luxury High-Rise Apartments",
    },
    approvalInfo: {
      status: "TG RERA Approved (Reg. No. P02400009520)",
      note: "Registered with Telangana RERA under Reg. No: P02400009520. Developed by Rajapushpa Properties. MAHA Properties operates as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: true,
      projectReraNumber: "P02400009520",
    },
    configurations: [
      {
        id: "skyra-3bhk",
        name: "3 BHK Ultra-Luxury Residence",
        type: "3 BHK",
        sizeLabel: "3,140 – 4,115 sq.ft",
        description: "Generous 3 BHK residences designed with expansive living spaces, high ceilings, natural ventilation, and panoramic views.",
      },
      {
        id: "skyra-4bhk",
        name: "4 BHK Ultra-Luxury Residence",
        type: "4 BHK",
        sizeLabel: "4,400 – 5,235 sq.ft",
        description: "Extravagant 4 BHK homes with palatial living halls, private staff quarters, and elevated skyline decks.",
      },
    ],
    description:
      "Rajapushpa Skyra is an ultra-luxury residential development situated in Neopolis, Kokapet, one of West Hyderabad's prominent premium residential destinations. Featuring three impressive high-rise towers, the project offers expansive 3 and 4 BHK residences designed around contemporary architecture, open living spaces, natural light, and elevated lifestyle experiences. The development combines thoughtfully planned residences with multi-level leisure facilities, landscaped surroundings, and convenient access to Hyderabad's major business districts.",
    highlights: [
      "Approx. 6.5 Acres of Prime Land in Neopolis, Kokapet",
      "3 Iconic Residential Towers Rising G+55 Floors",
      "Expansive 3 & 4 BHK Residences (3,140–5,235 sq.ft)",
      "Approx. 60,000 sq.ft Grand Clubhouse with Multi-Tier Lifestyle Amenities",
      "Approx. 30,000 sq.ft Stilt-Level & 25,000 sq.ft Sky-Level Amenities",
      "Sky Cinema, Amphitheatre, Mini Golf & Landscaped Sky Gardens",
      "Official TG RERA Registered Project: P02400009520",
    ],
    amenities: [
      { name: "Grand Clubhouse (~60,000 sq.ft)", icon: "Building2" },
      { name: "Sky-Level Fitness Facilities", icon: "Dumbbell" },
      { name: "Yoga & Meditation Spaces", icon: "Activity" },
      { name: "Sky Cinema & Amphitheatre", icon: "Sparkles" },
      { name: "Mini Golf & Sports", icon: "Gamepad2" },
      { name: "Terrace Party Lawn", icon: "Trees" },
      { name: "Children's Play Areas", icon: "Smile" },
      { name: "Senior Citizens' Lounge", icon: "HeartHandshake" },
      { name: "Café & Leisure Lounges", icon: "Building2" },
      { name: "Study & Work Zones", icon: "Compass" },
      { name: "24/7 Security & Access Control", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Situated in Neopolis, Kokapet, Gandipet, Hyderabad, Telangana 500075.",
      points: [
        "Prime Neopolis, Kokapet location in West Hyderabad",
        "Direct access to Outer Ring Road (ORR) at Kokapet / Exit 1",
        "5–10 minutes to Financial District (Nanakramguda) & Gachibowli",
        "Quick connectivity to HITEC City business corridor & Knowledge City",
        "Near leading international schools, healthcare centres & entertainment zones",
        "Seamless 20-minute drive to Rajiv Gandhi International Airport via ORR",
      ],
      mapQuery: "Neopolis+Kokapet+Gandipet+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Neopolis+Kokapet+Hyderabad",
    },
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
    subtitle: "Exclusive 4 BHK Ultra-Luxury High-Rise Residences in Neopolis, Kokapet",
    developerName: "Rajapushpa Properties",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Ultra-Luxury Residential Apartments",
    location: "Neopolis, Kokapet, Hyderabad, Telangana 500075",
    locationArea: "Neopolis",
    address: "Neopolis, Kokapet, Hyderabad, Telangana 500075",
    bhkOptions: ["4 BHK"],
    sizeRange: "5,735 – 7,790 sq.ft",
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    constructionStatus: "Under Construction",
    status: "Under Construction",
    featured: true,
    published: true,
    verificationStatus:
      "Approx. 7.7 acres, 5 residential towers with ~50 floors, 4 BHK residences (5,735–7,790 sq.ft), and TG RERA P02400007302 confirmed from official developer sources.",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Rajapushpa Casa Luxura located in Neopolis, Kokapet, Hyderabad. Please share the latest availability, pricing details, and site visit information.",
    projectOverview: {
      totalArea: "Approx. 7.7 Acres",
      totalTowers: 5,
      towerConfiguration: "Approx. 50 Floors per Tower",
      communityType: "Ultra-Luxury Residential Apartments",
    },
    approvalInfo: {
      status: "TG RERA Approved (Reg. No. P02400007302)",
      note: "Registered with Telangana RERA under Reg. No: P02400007302. Developed by Rajapushpa Properties. MAHA Properties operates as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: true,
      projectReraNumber: "P02400007302",
    },
    configurations: [
      {
        id: "casa-lux-4bhk",
        name: "4 BHK Palatial Residence",
        type: "4 BHK",
        sizeLabel: "5,735 – 7,790 sq.ft",
        description: "Ultra-spacious 4 BHK residences designed for privacy, architectural elegance, expansive family living, and unobstructed views.",
      },
    ],
    description:
      "Rajapushpa Casa Luxura is an exclusive high-rise residential development in Neopolis, Kokapet, offering exceptionally spacious 4 BHK residences. The project emphasizes privacy, architectural elegance, generous living areas, and an elevated residential lifestyle. Set within a premium gated community, Casa Luxura offers extensive recreational amenities, landscaped outdoor spaces, and convenient connectivity to Hyderabad's Financial District and surrounding technology hubs.",
    highlights: [
      "Approx. 7.7 Acres Exclusive Gated Community in Neopolis, Kokapet",
      "5 Residential Towers Soaring Approx. 50 Floors Each",
      "Palatial 4 BHK Ultra-Luxury Residences (5,735–7,790 sq.ft)",
      "Approx. 60,000 sq.ft Grand Clubhouse with Curated Leisure Facilities",
      "Sky-Level Leisure Areas & Landscaped Outdoor Gardens",
      "Outdoor Sports Courts, Swimming Pools & Indoor Games",
      "Official TG RERA Registered Project: P02400007302",
    ],
    amenities: [
      { name: "Grand Clubhouse (~60,000 sq.ft)", icon: "Building2" },
      { name: "Swimming Pools", icon: "Waves" },
      { name: "Sky-Level Leisure Areas", icon: "Sparkles" },
      { name: "Fitness & Wellness Facilities", icon: "Dumbbell" },
      { name: "Landscaped Gardens & Lawns", icon: "Trees" },
      { name: "Children's Play Areas", icon: "Smile" },
      { name: "Indoor Games & Sports Facilities", icon: "Gamepad2" },
      { name: "Yoga & Meditation Areas", icon: "Activity" },
      { name: "Multipurpose Gathering Spaces", icon: "Building2" },
      { name: "Gated Community Security & Surveillance", icon: "ShieldCheck" },
    ],
    locationConnectivity: {
      distanceNote: "Located in Neopolis, Kokapet, Hyderabad, Telangana 500075.",
      points: [
        "Prime Neopolis, Kokapet corridor in West Hyderabad",
        "Immediate access to Outer Ring Road (ORR) Exit 1",
        "Minutes from Financial District (Nanakramguda), Gachibowli & HITEC City",
        "Proximity to top-tier educational institutions & healthcare infrastructure",
        "Direct 20-minute signal-free highway route to Rajiv Gandhi International Airport via ORR",
      ],
      mapQuery: "Neopolis+Kokapet+Hyderabad",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Neopolis+Kokapet+Hyderabad",
    },
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
    subtitle: "Residential Opportunities Associated with Prestige Group in Hyderabad",
    developerName: "Prestige Group",
    propertyType: "apartments",
    type: "apartments",
    typeLabel: "Residential Development",
    location: "Hyderabad, Telangana",
    locationArea: "Hyderabad",
    address: "Hyderabad, Telangana — exact project location awaiting confirmation",
    bhkOptions: [],
    priceDisplay: "Contact MAHA Properties for Pricing & Availability",
    published: true,
    featured: false,
    verificationStatus:
      "Project Identity Awaiting Confirmation — Official project name, exact site coordinates, configurations, and RERA approval details undergoing confirmation.",
    statusNotice: "Official Project Details Awaiting Developer Confirmation",
    supportsFacingPreference: false,
    whatsappMessage:
      "Hello MAHA Properties, I am interested in Prestige Residential Project in Hyderabad. Please share the confirmed project details, availability, and site visit information as soon as they become available.",
    projectOverview: {
      communityType: "Residential Development",
    },
    approvalInfo: {
      status: "Project RERA Awaiting Verification",
      note: "Official project identification and regulatory approval verification are in progress. MAHA Properties operates as a registered real estate consultancy (TSRERA Agent Reg. No. A02500004914).",
      reraVerified: false,
    },
    configurations: [],
    description:
      "Explore residential opportunities associated with Prestige Group, a real estate developer with projects across major Indian cities. MAHA Properties can assist interested buyers with enquiries regarding the specific Hyderabad residential development, official project information, available configurations, and site visits once the project identity is confirmed.",
    highlights: [
      "Developer: Prestige Group",
      "Property Category: Residential Development",
      "Official Project Name: Awaiting Confirmation",
      "Residential Configurations: Awaiting Confirmation",
      "Amenities & Master Plan: Awaiting Confirmation",
      "Project RERA Registration: Awaiting Verification",
    ],
    amenities: [],
    locationConnectivity: {
      distanceNote: "Hyderabad, Telangana — exact project location awaiting confirmation.",
      points: [
        "Residential development in the Hyderabad metropolitan region",
        "Detailed site address and micro-market connectivity will be published upon official confirmation",
        "Connect with MAHA Properties for real-time updates regarding Prestige Group developments",
      ],
      mapQuery: "Hyderabad+Telangana",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Hyderabad+Telangana",
    },
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
