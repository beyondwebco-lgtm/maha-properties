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

## ⚡ Performance & Technical SEO Engineering

This repository has undergone a comprehensive Core Web Vitals and technical SEO audit and optimization in accordance with strict production thresholds (Lighthouse Mobile throttled 4G: Performance ≥ 95, SEO 100, Accessibility ≥ 95, Best Practices ≥ 95, LCP < 2.0s, CLS < 0.05, Initial JS < 120 KB gzipped).

### 1. Image Architecture & Guidelines
- **Formats & Serving**: `next.config.mjs` is configured with modern AVIF and WebP delivery (`image/avif`, `image/webp`), tailored responsive `deviceSizes` (`[640, 750, 828, 1080, 1200, 1920]`), and `imageSizes` (`[16, 32, 48, 64, 96, 128, 256, 384]`).
- **Cache-Control**: Static project renders and assets are cached immutably for 1 year (`max-age=31536000, immutable`).
- **Strict Size Budget**: Every asset in `public/properties/` and `public/images/` is compressed to **< 300 KB** (Hero `project-img-1.jpg` optimized from 950 KB to 286 KB).
- **Zero-CLS Blur Placeholders**: Precomputed low-quality base64 image placeholders (`blurDataURL`) are maintained in `src/data/blur-data.ts`.
- **Loading Priorities**: Only above-the-fold Hero/LCP images receive `priority` and `fetchPriority="high"`. All other renders and thumbnails use native `loading="lazy"` with explicit breakpoint `sizes`.

#### When adding new project images:
1. Ensure raw assets are compressed (JPEG quality 80-82% or WebP, max width 1920px, strictly < 300 KB).
2. Generate base64 blur thumbnails (e.g. 16px wide data URL) and register them in [`src/data/blur-data.ts`](file:///c:/Users/Arun/Documents/GitHub/maha_properties/src/data/blur-data.ts).
3. Use `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` on cards; never default to unconstrained `100vw`.

### 2. Code-Splitting & Dynamic Loading
- **Server Components By Default**: Route handlers (`/`, `/properties`, `/properties/[slug]`, `/services`, `/about`, `/contact`) are 100% Server Components generating pure SSG HTML at build time (`generateStaticParams`).
- **Targeted Client Hydration**: Heavy client features are isolated into discrete leaf components and streamed/dynamically imported via `next/dynamic`:
  - `LightboxModal` (loaded only when the gallery modal is invoked)
  - `PriceCalculator` (lazy-streamed below property specifications with skeleton fallback)
  - `EnquiryForm` (lazy-streamed with zero-CLS height reservation)
  - `WhatsAppButton` & `MobileStickyBar` (hydrated post-idle)
- **Viewport Containment**: Long below-the-fold sections utilize `.content-auto` (`content-visibility: auto; contain-intrinsic-size: 1px 650px`) to prevent expensive layout calculations before viewport entry.

### 3. Font & Bundle Hygiene
- **Zero-CLS Typography**: Google Fonts (`Playfair Display` & `Plus Jakarta Sans`) are self-hosted via `next/font/google` with `display: 'swap'`, `adjustFontFallback: true`, and zero render-blocking CSS links.
- **Icon Treeshaking**: Lucide React icons are imported via named imports with `optimizePackageImports: ['lucide-react']` in `next.config.mjs`.
- **Total Initial JS**: First load JS shared by all pages is **~103 KB** (well under the 120 KB gzipped limit).

### 4. Technical SEO & Validated Structured Data (JSON-LD)
- **Standardized Metadata**: Every route declares canonical URLs, OpenGraph (1200x630), Twitter `summary_large_image`, `lang="en-IN"`, and character-optimized titles (≤ 60 chars) and descriptions (≤ 155 chars).
- **TSRERA Compliance & NAP Consistency**: Telangana Real Estate Regulatory Authority agent license (`A02500004914`) and verified phone (`+91 7799884849`) are consistently present across the UI, footer, and machine-readable schema.
- **Server-Rendered JSON-LD**:
  - `RealEstateAgent` on root layout: official legal name, Kukatpally address, geo-coordinates, telephone, and license ID.
  - `ApartmentComplex` / `RealEstateListing` on `/properties/[slug]`: address, developer, project RERA (e.g. `P02400009142`), pricing, and amenities.
  - `BreadcrumbList` on all interior routes for Google rich snippet navigation trails.
- **Automated Sitemap & Robots**: `src/app/sitemap.ts` dynamically indexes published properties with `lastModified` and crawl priorities.

### 5. Automated CI Auditing (Lighthouserc)
A dedicated `.lighthouserc.json` configuration is included to enforce performance budgets in CI/CD:
```bash
# Run Lighthouse CI audit against production build
npx @lhci/cli collect --start-server-command="npm run start" --url="http://localhost:3000" --url="http://localhost:3000/properties/premium-gated-community-chandanagar"
npx @lhci/cli assert
```

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

