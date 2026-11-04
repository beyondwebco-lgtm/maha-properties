# MAHA PROPERTIES — Premium Real Estate Web Platform

A modern, fast, production-ready real estate web application built for **MAHA PROPERTIES**, a premier real estate consultancy based in Kukatpally, Hyderabad.

**TSRERA Real Estate Agent Registration No:** `A02500004914`  
**Registered Agent:** Nallamekala Surendra  
**Validity:** 04/03/2026 to 03/03/2031  

---

## 🚀 Key Features

1. **Brand Identity & Logo:**
   - Bespoke vector logo featuring architectural roofline, window motif, and foundation curve.
   - Elegant color palette: Charcoal (`#141414`), Rich Gold (`#D4AF37`), Ivory (`#F8F6F0`), and Pure White.
   - Dynamic favicon and Open Graph social preview cards.

2. **Featured Gated Community Project — Chandanagar:**
   - Dedicated route at `/properties/premium-gated-community-chandanagar`.
   - 2.2 Acres, 3 Towers, 180 Residences, 2 C+S + 10 Floors.
   - Interactive high-resolution gallery extracted directly from client architectural renders.
   - Official 28 MB digital brochure download (`/documents/chandanagar-brochure.pdf`).
   - Detailed specifications for 2 BHK (1,270 sq.ft) and 3 BHK (1,590 & 1,980 sq.ft).

3. **Interactive Price Estimator:**
   - Configurable live calculator based on client pricing rules:
     - Base rate: ₹6,999 / sq.ft
     - Amenities charge: ₹7,00,000 (2 BHK) / ₹8,00,000 (3 BHK)
     - Floor rising: ₹25 / sq.ft (from 5th floor)
     - East facing premium: ₹100 / sq.ft
     - Corner flat premium: ₹100 / sq.ft
     - Corpus fund: ₹50 / sq.ft (2 years)
     - Maintenance: ₹70 / sq.ft (2 years)
     - Infrastructure charges: ₹50 / sq.ft
   - Generates itemized breakdown and one-click pre-filled WhatsApp quotation.

4. **Product Catalogue & Multi-filter Architecture:**
   - Route `/properties` with instant search and live filters:
     - Category: Villas, Apartments, Open Plots, Lands
     - Location: Chandanagar, Kukatpally, Kompally, Mokila, Kollur
     - Status: Ready to Move, Under Construction, Available
     - Price sorting (Low to High, High to Low, Spotlight)
   - Separates production listings from illustrative demo records.

5. **Direct Lead Generation & WhatsApp Integration:**
   - Persistent floating WhatsApp action connected to `+91 7799884849`.
   - Mobile-optimized sticky bottom action bar (Call | WhatsApp | Enquire).
   - Validated enquiry forms with direct WhatsApp dispatch fallback.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router, Server Components & Static Site Generation)
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS v4 & PostCSS
- **Icons:** Lucide React
- **Optimization:** Next.js Image with AVIF/WebP support

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js `v20.x` or higher
- npm `v10.x` or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
maha_properties/
├── public/
│   ├── documents/
│   │   └── chandanagar-brochure.pdf   # Client brochure (28 MB)
│   └── properties/
│       └── chandanagar/               # 18 high-res extracted project renders
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with SEO & global WhatsApp button
│   │   ├── page.tsx                   # Homepage (Hero, Search, Featured, Categories, About, Trust)
│   │   ├── properties/
│   │   │   ├── page.tsx               # Product catalogue with instant filters & search
│   │   │   └── [slug]/page.tsx        # Dedicated detail page, gallery & calculator
│   │   ├── services/page.tsx          # Villas, Apartments, Open Plots, Lands advisory
│   │   ├── about/page.tsx             # Company introduction & TSRERA credentials
│   │   ├── contact/page.tsx           # Contact form, direct phone links, Google Maps
│   │   ├── sitemap.ts                 # Dynamic XML sitemap
│   │   ├── robots.ts                  # Web crawler instructions
│   │   └── icon.tsx                   # Dynamic branded favicon
│   ├── components/
│   │   ├── logo.tsx                   # Brand SVG logo (Horizontal, Compact, Light/Dark)
│   │   ├── navbar.tsx                 # Sticky navigation with mobile drawer
│   │   ├── footer.tsx                 # Footers with TSRERA agent credentials & links
│   │   ├── property-card.tsx          # Reusable catalogue card
│   │   ├── price-calculator.tsx       # Interactive price estimator & WhatsApp quote
│   │   ├── image-gallery.tsx          # Full-screen lightbox & thumbnail strip
│   │   ├── enquiry-form.tsx           # Validation & direct WhatsApp fallback
│   │   ├── whatsapp-button.tsx        # Floating WhatsApp button
│   │   └── mobile-sticky-bar.tsx      # Mobile bottom contact bar
│   ├── data/
│   │   ├── company.ts                 # Central business details & TSRERA registration
│   │   └── properties.ts              # Scalable property catalog & pricing schema
│   └── types/
│       └── property.ts                # TypeScript interfaces for property schema
```

---

## 📝 How to Add a New Property

To add a new villa, apartment, plot, or land listing, simply add an object to the `propertiesData` array in [`src/data/properties.ts`](file:///c:/Users/Arun/Documents/GitHub/maha_properties/src/data/properties.ts):

```typescript
{
  id: "MP-NEW-01",
  slug: "luxury-villa-gandipet",
  title: "Bespoke 4 BHK Lakeview Villa",
  subtitle: "Contemporary villa with private pool near Gandipet",
  type: "villas",
  typeLabel: "Villa",
  location: "Gandipet, Hyderabad",
  address: "Near Ocean Park, Gandipet, Hyderabad",
  startingPrice: 42500000,
  priceDisplay: "₹4.25 Cr*",
  areaRange: "4,500 sq.ft",
  status: "Under Construction",
  featured: true,
  published: true,
  isDemo: false,
  approvalInfo: {
    status: "HMDA & RERA Approved",
    note: "Project approved under TSRERA P0240000xxxx.",
    reraVerified: true,
  },
  images: [
    { src: "/properties/gandipet/front.jpg", alt: "Villa front elevation" }
  ],
  // ... configurations, highlights, amenities
}
```

The system will automatically generate:
- The property card on `/properties`
- A dedicated statically generated detail page at `/properties/luxury-villa-gandipet`
- Proper sitemap entry in `/sitemap.xml`

---

## 📞 How to Update Business Information

All business details, phone numbers, email, addresses, and TSRERA registration parameters are centralized in [`src/data/company.ts`](file:///c:/Users/Arun/Documents/GitHub/maha_properties/src/data/company.ts). Updating values in that file will automatically propagate across the entire website (Navbar, Footer, Contact page, About page, WhatsApp buttons, and Meta tags).

---

## 🌐 Vercel Deployment Guide

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Complete MAHA Properties website with Chandanagar listing"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New..."** -> **"Project"**.
3. Select the `maha_properties` repository.
4. Next.js presets will be detected automatically.
5. Click **"Deploy"**.

---

## 🔌 Future Sanity CMS Connection

The schema in `src/types/property.ts` is designed for direct 1:1 mapping to Sanity Studio document types (`property`, `configuration`, `amenity`). When the client is ready:
1. Run `npm install next-sanity @sanity/image-url`
2. Add a `sanity.config.ts` file in the root
3. Update `src/data/properties.ts` to fetch from `client.fetch(groq`*[_type == "property"]`)` with fallback to local static data.

