/**
 * ============================================================
 * VARDHAMAN FURNITURES — script.js
 * Modular vanilla JavaScript
 * Future-proof: replace static arrays with fetch('/api/...') calls
 * ============================================================
 */

'use strict';

/* ============================================================
   DATA LAYER
   Replace these arrays with API calls when backend is ready:
   e.g. const products = await fetch('/api/products').then(r => r.json())
   ============================================================ */

const PRODUCTS_DATA = [
  {
  id: 1,
  name: 'Luxury 2-Seater Sofa',
  category: 'Sofas',
  description: 'Modern 2-seater sofa with premium fabric upholstery, elegant gold accent detailing, plush cushioning, and a contemporary luxury design.',
  image: 'images/2 seater golden strip.png',
  rating: 5,
  badge: 'Luxury',
  specs: {
    dimensions: '6 ft 2 in (W) × 3 ft 0 in (D) × 2 ft 10 in (H)',
    seatHeight: '1 ft 6 in',
    seatDepth: '2 ft 0 in',
    weight: '65 kg',
    material: 'Premium Velvet Fabric',
    frame: 'Solid Wood Frame',
    foam: 'High-Density Foam',
    color: 'Ivory White / Cream',
    seating: '2 persons',
    functionalities: [
      'Soft cushioned backrest',
      'Premium fabric upholstery',
      'Decorative gold side strips',
      'Modern box armrests',
      'Metallic gold-finish legs',
      'Luxury contemporary design'
    ],
    warranty: '1 Year'
  }
  },
  {
    id: 2,
    name: 'Premium 3-Seater Designer Sofa',
    category: 'Sofas',
    description: 'Elegant 3-seater sofa featuring dual-tone upholstery, deep cushioned seating, designer printed back cushions, and a modern premium finish.',
    image: 'images/3 seater kit kat.png',
    rating: 5,
    badge: 'Best Seller',
    specs: {
      dimensions: '7 ft 0 in (W) × 3 ft 2 in (D) × 3 ft 0 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 1 in',
      weight: '85 kg',
      material: 'Premium Suede Fabric + Sweat Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Beige + Dark Brown',
      seating: '3 persons',
      functionalities: [
        'Deep cushioned seating',
        'Designer printed back cushions',
        'Dual-tone upholstery finish',
        'Wide padded armrests',
        'Tufted seat design',
        'Rust-resistant metal legs',
        'Premium contemporary styling'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 3,
    name: 'Soft Corner 3-Seater Sofa',
    category: 'Sofas',
    description: 'Stylish 3-seater sofa featuring smooth curved edges, premium velvet upholstery, vertical channel stitching, and designer printed cushions for a modern luxury look.',
    image: 'images/3 seater soft corner.png',
    rating: 5,
    badge: 'Trending',
    specs: {
      dimensions: '7 ft 2 in (W) × 3 ft 1 in (D) × 3 ft 0 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '78 kg',
      material: 'Premium Velvet Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Mustard Yellow',
      seating: '3 persons',
      functionalities: [
        'Curved corner armrest design',
        'Soft plush seating',
        'Vertical channel stitched upholstery',
        'Designer printed cushions',
        'Scratch-resistant bottom legs',
        'Modern luxury styling',
        'Comfort-focused ergonomic design'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 4,
    name: 'Modern Accent Lounge Chair',
    category: 'Chairs',
    description: 'Elegant accent lounge chair featuring a curved wraparound design, premium textured upholstery, plush seating, and a sturdy metal base for modern interiors.',
    image: 'images/accent chair.png',
    rating: 5,
    badge: 'New Arrival',
    specs: {
      dimensions: '2 ft 8 in (W) × 2 ft 6 in (D) × 2 ft 10 in (H)',
      seatHeight: '1 ft 5 in',
      seatDepth: '1 ft 9 in',
      weight: '22 kg',
      material: 'Premium Textured Fabric',
      frame: 'Solid Wood + Metal Frame',
      foam: 'High-Density Foam',
      color: 'Light Grey',
      seating: '1 person',
      functionalities: [
        'Curved wraparound backrest',
        'Soft plush seating',
        'Ergonomic support design',
        'Premium textured upholstery',
        'Matte black metal base',
        'Compact space-saving design',
        'Ideal for living room or lounge areas'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 5,
    name: 'Atlantic Corner Sofa',
    category: 'L shape',
    description: 'Premium L-shaped corner sofa featuring dual-tone upholstery, deep cushioned seating, adjustable headrests, and designer floral cushions for a luxurious living room setup.',
    image: 'images/atlantic corner.png',
    rating: 5,
    badge: 'Luxury',
    specs: {
      dimensions: '9 ft 0 in (W) × 8 ft 0 in (D) × 3 ft 2 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '145 kg',
      material: 'Premium Suede Fabric + Sweat Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Beige + Walnut Brown',
      seating: '5–6 persons',
      functionalities: [
        'L-shaped corner configuration',
        'Adjustable cushioned headrests',
        'Deep tufted seating',
        'Designer floral back cushions',
        'Extra-wide padded armrests',
        'Premium dual-tone upholstery',
        'Rust-resistant metal legs',
        'Family-sized comfort seating'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 6,
    name: 'Atlantic Lounger Sofa',
    category: 'Lounger',
    description: 'Luxury L-shaped lounger sofa featuring dual-tone upholstery, deep tufted seating, adjustable headrests, and a spacious chaise extension for premium comfort.',
    image: 'images/atlantic lounger.png',
    rating: 5,
    badge: 'Premium',
    specs: {
      dimensions: '9 ft 2 in (W) × 6 ft 0 in (D) × 3 ft 2 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '135 kg',
      material: 'Premium Suede Fabric + Sweat Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Beige + Walnut Brown',
      seating: '4–5 persons',
      functionalities: [
        'L-shaped lounger configuration',
        'Extended chaise lounge section',
        'Adjustable cushioned headrests',
        'Deep tufted seating',
        'Designer accent cushions',
        'Wide padded armrests',
        'Premium dual-tone upholstery',
        'Rust-resistant metal legs'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 7,
    name: 'Berlin Sofa Sets',
    category: 'Sofa Setss',
    description: 'Premium 3+1 Sofa Sets featuring soft Fabric upholstery, ergonomic high-back support, plush armrests, and a modern minimalist design for luxurious living spaces.',
    image: 'images/berlin model.png',
    rating: 5,
    badge: 'Premium',
    specs: {
      dimensions: '3 Seater: 7 ft 2 in (W) × 3 ft 0 in (D) × 3 ft 2 in (H), Single Seater: 3 ft 2 in (W) × 3 ft 0 in (D) × 3 ft 2 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '115 kg',
      material: 'Premium Sweat Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Resilience Foam',
      color: 'Ocean Teal',
      seating: '4 persons',
      functionalities: [
        '3+1 Sofa Sets configuration',
        'Ergonomic high-back support',
        'Soft padded armrests',
        'Deep cushioned seating',
        'Premium stitched upholstery',
        'Sleek tapered metal legs',
        'Modern luxury styling'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 8,
    name: 'Calio Lounger Sofa',
    category: 'Lounger',
    description: 'Luxury L-shaped lounger sofa featuring premium Sweat Fabric upholstery, quilted back cushioning, adjustable headrests, and a spacious chaise extension for modern living spaces.',
    image: 'images/calio lounger cream.png',
    rating: 5,
    badge: 'Luxury',
    specs: {
      dimensions: '8 ft 8 in (W) × 6 ft 2 in (D) × 3 ft 1 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '128 kg',
      material: 'Premium Sweat Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Resilience Foam',
      color: 'Cream Beige',
      seating: '4–5 persons',
      functionalities: [
        'L-shaped lounger configuration',
        'Extended chaise lounge section',
        'Adjustable headrests',
        'Diamond quilted backrest design',
        'Soft cushioned seating',
        'Curved padded armrests',
        'Chrome-finish metal legs',
        'Modern premium styling'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 9,
    name: 'Calio Modular Lounger Sofa',
    category: 'Lounger',
    description: 'Luxury modular L-shaped lounger sofa featuring premium fabric upholstery, adjustable headrests, integrated cup holders, a spacious chaise section, and a matching ottoman for modern living spaces.',
    image: 'images/calio lounger.png',
    rating: 5,
    badge: 'Premium',
    specs: {
      dimensions: '10 ft 0 in (W) × 7 ft 0 in (D) × 3 ft 1 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 1 in',
      weight: '155 kg',
      material: 'Premium Velvet Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Resilience Foam',
      color: 'Deep Ocean Blue',
      seating: '5–6 persons',
      functionalities: [
        'L-shaped modular configuration',
        'Extended chaise lounge section',
        'Adjustable cushioned headrests',
        'Built-in center console',
        'Dual cup holder storage',
        'Matching ottoman included',
        'Deep tufted seating',
        'Chrome-finish designer legs'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 10,
    name: 'Modern Revolving Office Chair',
    category: 'Chairs',
    description: 'Ergonomic office chair featuring a breathable mesh backrest, cushioned seating, smooth 360° swivel movement, and sturdy caster wheels for everyday comfort and productivity.',
    image: 'images/chairs 1.png',
    rating: 5,
    badge: 'Best Seller',
    specs: {
      dimensions: '2 ft 0 in (W) × 2 ft 1 in (D) × 3 ft 4 in (H)',
      seatHeight: '1 ft 6 in – 1 ft 10 in (Adjustable)',
      seatDepth: '1 ft 6 in',
      weight: '14 kg',
      material: 'Breathable Mesh + Fabric Cushion',
      frame: 'Reinforced Nylon Frame',
      foam: 'High-Density Foam',
      color: 'Matte Black',
      seating: '1 person',
      functionalities: [
        '360° smooth swivel rotation',
        'Breathable mesh backrest',
        'Ergonomic lumbar support',
        'Soft cushioned seat',
        'Fixed designer armrests',
        'Height adjustment mechanism',
        'Smooth caster wheels',
        'Scratch-resistant base'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 11,
    name: '3-Seater Visitor Chair',
    category: 'Chairs',
    description: 'Modern 3-seater visitor chair featuring perforated metal seating, premium chrome-finish frame, ergonomic armrests, and heavy-duty construction for office and reception spaces.',
    image: 'images/chairs 2.png',
    rating: 5,
    badge: 'Commercial',
    specs: {
      dimensions: '5 ft 2 in (W) × 2 ft 0 in (D) × 2 ft 10 in (H)',
      seatHeight: '1 ft 5 in',
      seatDepth: '1 ft 6 in',
      weight: '38 kg',
      material: 'Perforated Stainless Steel',
      frame: 'Heavy-Duty Chrome Metal Frame',
      foam: 'No Cushion (Metal Seating)',
      color: 'Silver Chrome',
      seating: '3 persons',
      functionalities: [
        '3-seater waiting chair design',
        'Breathable perforated metal backrest',
        'Rust-resistant chrome finish',
        'Heavy-duty support structure',
        'Integrated ergonomic armrests',
        'Anti-slip support legs',
        'Easy to clean and maintain',
        'Suitable for office and reception areas'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 12,
    name: 'Executive Revolving Office Chair',
    category: 'Chairs',
    description: 'Premium ergonomic office chair featuring breathable mesh upholstery, adjustable headrest, lumbar support, 360° swivel movement, and heavy-duty caster base for professional workspaces.',
    image: 'images/chairs 3.png',
    rating: 5,
    badge: 'New Arrival',
    specs: {
      dimensions: '2 ft 2 in (W) × 2 ft 3 in (D) × 4 ft 2 in (H)',
      seatHeight: '1 ft 6 in – 1 ft 11 in (Adjustable)',
      seatDepth: '1 ft 7 in',
      weight: '18 kg',
      material: 'Breathable Mesh + Fabric Cushion',
      frame: 'Reinforced Nylon + Chrome Steel Base',
      foam: 'High-Density Foam',
      color: 'Matte Black',
      seating: '1 person',
      functionalities: [
        '360° smooth swivel rotation',
        'Adjustable headrest support',
        'Ergonomic lumbar support',
        'Breathable mesh backrest',
        'Height adjustment mechanism',
        'Adjustable armrests',
        'Heavy-duty caster wheels',
        'Chrome-finish 5-star base'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 13,
    name: 'Modern Office Chair',
    category: 'Chairs',
    description: 'Comfort-focused ergonomic office chair featuring a breathable mesh backrest, cushioned seat, smooth swivel movement, and sturdy caster wheels for everyday office use.',
    image: 'images/chairs 4.png',
    rating: 5,
    badge: 'Popular',
    specs: {
      dimensions: '2 ft 0 in (W) × 2 ft 1 in (D) × 3 ft 5 in (H)',
      seatHeight: '1 ft 6 in – 1 ft 10 in (Adjustable)',
      seatDepth: '1 ft 6 in',
      weight: '13 kg',
      material: 'Breathable Mesh + Fabric Cushion',
      frame: 'Reinforced Nylon Frame',
      foam: 'High-Density Foam',
      color: 'Matte Black',
      seating: '1 person',
      functionalities: [
        '360° smooth swivel rotation',
        'Breathable mesh backrest',
        'Ergonomic posture support',
        'Soft cushioned seating',
        'Fixed curved armrests',
        'Height adjustment mechanism',
        'Smooth caster wheels',
        'Durable 5-star base'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 14,
    name: 'Modern Designer Chair',
    category: 'Chairs',
    description: 'Stylish modern chair featuring a curved shell design, breathable open-back pattern, soft cushioned seating, and sturdy designer legs—perfect for dining spaces, cafés, and contemporary interiors.',
    image: 'images/chairs 5.png',
    rating: 5,
    badge: 'New Arrival',
    specs: {
      dimensions: '1 ft 10 in (W) × 1 ft 11 in (D) × 2 ft 10 in (H)',
      seatHeight: '1 ft 5 in',
      seatDepth: '1 ft 5 in',
      weight: '8 kg',
      material: 'Premium Polypropylene Shell + Fabric Cushion',
      frame: 'Reinforced Wooden-Look Legs',
      foam: 'High-Density Foam',
      color: 'White, Grey, Pink',
      seating: '1 person',
      functionalities: [
        'Curved ergonomic shell design',
        'Open spindle backrest',
        'Soft detachable seat cushion',
        'Lightweight yet sturdy build',
        'Scratch-resistant legs',
        'Easy to clean surface',
        'Suitable for dining and café use',
        'Available in multiple colors'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 15,
    name: 'Modern Workstation Chair',
    category: 'Chairs',
    description: 'Ergonomic workstation chair featuring a breathable mesh backrest, cushioned fabric seat, smooth swivel movement, and sturdy caster wheels for daily office comfort.',
    image: 'images/chairs 6.png',
    rating: 5,
    badge: 'Work Essentials',
    specs: {
      dimensions: '2 ft 0 in (W) × 2 ft 1 in (D) × 3 ft 6 in (H)',
      seatHeight: '1 ft 6 in – 1 ft 10 in (Adjustable)',
      seatDepth: '1 ft 6 in',
      weight: '12 kg',
      material: 'Breathable Mesh + Fabric Cushion',
      frame: 'Reinforced Nylon Frame',
      foam: 'High-Density Foam',
      color: 'Charcoal Black + Grey',
      seating: '1 person',
      functionalities: [
        '360° swivel rotation',
        'Breathable mesh backrest',
        'Ergonomic posture support',
        'Soft cushioned seating',
        'Fixed curved armrests',
        'Height adjustment mechanism',
        'Smooth caster wheels',
        'Durable 5-star nylon base'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 16,
    name: 'Executive Visitor Chair',
    category: 'Chairs',
    description: 'Modern visitor chair featuring a breathable mesh backrest, cushioned seating, ergonomic armrests, and a premium chrome cantilever frame—ideal for conference rooms, cabins, and reception areas.',
    image: 'images/chairs 7.png',
    rating: 5,
    badge: 'Professional',
    specs: {
      dimensions: '2 ft 1 in (W) × 2 ft 2 in (D) × 3 ft 4 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '1 ft 6 in',
      weight: '11 kg',
      material: 'Breathable Mesh + Fabric Cushion',
      frame: 'Heavy-Duty Chrome Cantilever Frame',
      foam: 'High-Density Foam',
      color: 'Black / Grey',
      seating: '1 person',
      functionalities: [
        'Ergonomic visitor chair design',
        'Breathable mesh backrest',
        'Soft cushioned seating',
        'Premium chrome cantilever frame',
        'Fixed ergonomic armrests',
        'Anti-slip floor protectors',
        'Durable commercial construction',
        'Ideal for offices and meeting rooms'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 17,
    name: 'Premium Mesh Visitor Chair',
    category: 'Chairs',
    description: 'Professional visitor chair featuring a breathable mesh backrest, cushioned seating, ergonomic armrests, and a chrome cantilever base—ideal for offices, meeting rooms, and executive cabins.',
    image: 'images/chairs 8.png',
    rating: 5,
    badge: 'New Arrival',
    specs: {
      dimensions: '2 ft 1 in (W) × 2 ft 2 in (D) × 3 ft 5 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '1 ft 6 in',
      weight: '12 kg',
      material: 'Breathable Mesh + Fabric Cushion',
      frame: 'Heavy-Duty Chrome Cantilever Frame',
      foam: 'High-Density Foam',
      color: 'Black + Grey',
      seating: '1 person',
      functionalities: [
        'Executive visitor chair design',
        'Breathable mesh backrest',
        'Soft cushioned seating',
        'Premium chrome sled base',
        'Fixed ergonomic armrests',
        'Anti-slip floor protectors',
        'Durable commercial construction',
        'Ideal for office and conference use'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 18,
    name: 'Luxury Chaise Lounge',
    category: 'Sofas',
    description: 'Elegant chaise lounge featuring a sculpted asymmetrical silhouette, premium velvet upholstery, wraparound backrest, and plush lounging comfort for modern interiors.',
    image: 'images/chaise lounge.png',
    rating: 5,
    badge: 'Luxury',
    specs: {
      dimensions: '6 ft 8 in (W) × 2 ft 8 in (D) × 2 ft 8 in (H)',
      seatHeight: '1 ft 5 in',
      seatDepth: '2 ft 4 in',
      weight: '52 kg',
      material: 'Premium Velvet Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Dusty Mauve / Taupe',
      seating: '1–2 persons',
      functionalities: [
        'Chaise lounge daybed design',
        'Asymmetrical sculpted body',
        'Curved wraparound backrest',
        'Soft plush lounging surface',
        'Premium velvet upholstery',
        'Compact metal support legs',
        'Ideal for lounge and luxury interiors',
        'Modern artistic styling'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 19,
    name: 'Executive High-Back Office Chair',
    category: 'Chairs',
    description: 'Premium ergonomic executive chair featuring a high-back mesh design, adjustable headrest, lumbar contour support, and chrome caster base for superior workplace comfort.',
    image: 'images/Executive high back.png',
    rating: 5,
    badge: 'Executive',
    specs: {
      dimensions: '2 ft 3 in (W) × 2 ft 4 in (D) × 4 ft 8 in (H)',
      seatHeight: '1 ft 6 in – 2 ft 0 in (Adjustable)',
      seatDepth: '1 ft 8 in',
      weight: '19 kg',
      material: 'Breathable Mesh + Premium Fabric Cushion',
      frame: 'Reinforced Nylon + Chrome Steel Base',
      foam: 'High-Resilience Foam',
      color: 'Grey + Black',
      seating: '1 person',
      functionalities: [
        'High-back executive design',
        'Adjustable headrest support',
        'Ergonomic lumbar contour',
        'Breathable mesh backrest',
        'Height adjustment mechanism',
        'Adjustable armrests',
        '360° swivel movement',
        'Chrome 5-star caster base'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 20,
    name: 'Executive Low-Back Office Chair',
    category: 'Chairs',
    description: 'Modern ergonomic office chair featuring a ventilated perforated backrest, lumbar support, adjustable armrests, and cushioned seating for all-day workplace comfort.',
    image: 'images/Executive low back.png',
    rating: 5,
    badge: 'Executive',
    specs: {
      dimensions: '2 ft 2 in (W) × 2 ft 2 in (D) × 3 ft 8 in (H)',
      seatHeight: '1 ft 6 in – 1 ft 10 in (Adjustable)',
      seatDepth: '1 ft 7 in',
      weight: '15 kg',
      material: 'Perforated Polymer Back + Fabric Cushion',
      frame: 'Reinforced Nylon Frame',
      foam: 'High-Resilience Foam',
      color: 'White + Charcoal Grey',
      seating: '1 person',
      functionalities: [
        'Low-back executive design',
        'Ventilated perforated backrest',
        'Built-in lumbar support',
        'Adjustable armrests',
        'Height adjustment mechanism',
        '360° swivel movement',
        'Smooth caster wheels',
        'Durable 5-star nylon base'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 21,
    name: 'FF Corner Sofa',
    category: 'L shape',
    description: 'Luxury L-shaped corner sofa featuring dual-tone upholstery, diamond-tufted backrest, deep cushioned seating, and spacious family comfort for modern living rooms.',
    image: 'images/ff corner.png',
    rating: 5,
    badge: 'Premium',
    specs: {
      dimensions: '8 ft 10 in (W) × 8 ft 0 in (D) × 3 ft 2 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '142 kg',
      material: 'Premium Suede Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Royal Blue + Pearl Grey',
      seating: '5–6 persons',
      functionalities: [
        'L-shaped corner configuration',
        'Diamond-tufted wraparound backrest',
        'Deep cushioned seating',
        'Dual-tone premium upholstery',
        'Wide padded armrests',
        'Family-sized comfort seating',
        'Chrome-finish support legs',
        'Modern luxury styling'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 22,
    name: 'Home Town Sofa Sets',
    category: 'Sofa Setss',
    description: 'Luxury modular Sofa Sets featuring premium dual-tone upholstery, spacious seating, matching ottomans, and a multifunction center table—designed for elegant modern living spaces.',
    image: 'images/home town model.png',
    rating: 5,
    badge: 'Luxury',
    specs: {
      dimensions: 'Overall Setup: 11 ft 0 in (W) × 9 ft 0 in (D) × 3 ft 0 in (H)',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '185 kg',
      material: 'Premium Fabric + Suede Finish',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Ivory White + Walnut Brown',
      seating: '6–7 persons',
      functionalities: [
        '3+2+chaise modular configuration',
        'Matching dual ottomans included',
        'Center tufted ottoman table',
        'Dual-tone premium upholstery',
        'Wide box armrests',
        'Extra plush back cushions',
        'Space-saving modular layout',
        'Ideal for family living rooms'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 23,
    name: 'Kit Kat Sofa Sets',
    category: 'Sofa Setss',
    description: 'Elegant 3+1+1 Sofa Sets featuring dual-tone upholstery, deep cushioned seating, floral designer back cushions, and premium comfort for modern living spaces.',
    image: 'images/kit kat 3+1+1.png',
    rating: 5,
    badge: 'Best Seller',
    specs: {
      dimensions: '3 Seater: 7 ft 0 in (W), Single Seater: 3 ft 0 in (W) each',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '155 kg',
      material: 'Premium Suede Fabric + Sweat Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Beige + Walnut Brown',
      seating: '5 persons',
      functionalities: [
        '3+1+1 Sofa Sets configuration',
        'Designer floral back cushions',
        'Deep tufted seating',
        'Dual-tone premium upholstery',
        'Wide padded armrests',
        'Chrome-finish support legs',
        'Family comfort seating',
        'Modern living room styling'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 24,
    name: 'Kit Kat Modular Sofa Sets',
    category: 'Sofa Setss',
    description: 'Luxury modular Sofa Sets featuring a 3-seater, chaise lounge, 2-seater, center table, ottomans, and designer floral cushions—crafted for stylish and spacious living rooms.',
    image: 'images/Kit kat center table.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: 'Overall Setup: 11 ft x 8 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 0 in',
      weight: '185 kg',
      material: 'Premium Suede Fabric + Sweat Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Ivory Beige + Teal Blue',
      seating: '6–7 persons',
      functionalities: [
        '3-seater sofa',
        '2-seater sofa',
        'Chaise lounge section',
        'Matching center table',
        '2 ottoman stools',
        'Designer floral back cushions',
        'Dual-tone premium upholstery',
        'Tufted seating design',
        'Luxury living room setup'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 25,
    name: 'L-Shape Premium Corner Sofa',
    category: 'L shape',
    description: 'Elegant L-shape corner sofa crafted with premium upholstery, high-back cushioned support, and stylish metallic legs—perfect for modern living spaces.',
    image: 'images/L shape blue.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '9 ft x 9 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 2 in',
      weight: '140 kg',
      material: 'Premium Suede Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Royal Blue',
      seating: '5–6 persons',
      functionalities: [
        'L-shape corner design',
        'Extra cushioned back support',
        'Wide armrests',
        'Premium stitching finish',
        'Metallic designer legs',
        'Spacious family seating',
        'Modern living room style'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 26,
    name: 'Luxury L-Shape Designer Sofa',
    category: 'L shape',
    description: 'Premium L-shape designer sofa featuring quilted back cushions, velvet upholstery, elegant gold accent strips, and metallic legs—crafted for luxurious modern interiors.',
    image: 'images/L shape goldenstrips grey.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '9 ft x 8 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 2 in',
      weight: '145 kg',
      material: 'Premium Velvet Fabric',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Charcoal Grey',
      seating: '5–6 persons',
      functionalities: [
        'L-shape corner layout',
        'Quilted premium back cushions',
        'Gold accent detailing',
        'Metallic designer legs',
        'Wide armrest design',
        'Luxury stitching finish',
        'Deep comfort seating',
        'Modern premium interior styling'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 27,
    name: 'Premium L-Shape Sectional Sofa',
    category: 'L shape',
    description: 'Elegant L-shape sectional sofa featuring deep seating comfort, adjustable headrests, plush cushions, and premium upholstery—designed for modern luxury interiors.',
    image: 'images/L shape grey.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '10 ft x 8 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 4 in',
      weight: '155 kg',
      material: 'Premium Sweat Fabric + Soft Fabric Cushions',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Ash Grey',
      seating: '5–6 persons',
      functionalities: [
        'L-shape sectional layout',
        'Adjustable headrests',
        'Deep comfort seating',
        'Premium loose back cushions',
        'Wide armrest design',
        'Luxury stitching finish',
        'Modern minimalist styling',
        'Spacious family seating'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 28,
    name: 'Kit Kat L-Type Sofa Sets',
    category: 'L shape',
    description: 'Luxury L-type Sofa Sets featuring floral designer cushions, dual-tone upholstery, deep cushioned seating, matching ottomans, and designer center tables—perfect for elegant family spaces.',
    image: 'images/L type kit kat.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: '10 ft x 8 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 2 in',
      weight: '165 kg',
      material: 'Premium Sweat Fabric + Fabric Cushions',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Beige + Olive Green',
      seating: '5–6 persons',
      functionalities: [
        'L-type corner layout',
        'Designer floral back cushions',
        'Dual-tone premium upholstery',
        'Deep cushioned seating',
        '2 matching ottomans',
        'Twin marble-top center tables',
        'Wide armrest design',
        'Modern family living setup',
        'Premium stitched finish'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 29,
    name: 'Sleek Lounger Sofa',
    category: 'Lounger',
    description: 'Contemporary L-shape lounger sofa featuring minimalist styling, premium dual-tone upholstery, deep seating comfort, and elegant gold metallic legs—perfect for modern interiors.',
    image: 'images/lounger sleek model.png',
    rating: 5,
    badge: 'Modern Collection',
    specs: {
      dimensions: '8 ft x 6 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft 3 in',
      weight: '130 kg',
      material: 'Premium Sweat Fabric + Soft Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Foam',
      color: 'Ivory Beige + Cognac Brown',
      seating: '4–5 persons',
      functionalities: [
        'L-shape chaise lounge layout',
        'Minimalist modern design',
        'Deep comfort seating',
        'Soft oversized back cushions',
        'Dual-tone premium upholstery',
        'Gold metallic designer legs',
        'Wide armrest styling',
        'Luxury compact living setup'
      ],
      warranty: '1 Year'
    }
  },
  // {
  //   id: 30,
  //   name: 'Modern Recliner Chaise Sofa',
  //   category: 'Sofa Setss',
  //   description: 'Luxury modern sofa featuring chaise lounge comfort, built-in recliner footrest, premium upholstery, and elegant contemporary styling—designed for ultimate relaxation.',
  //   image: 'images/Modern recliner sofa.png',
  //   rating: 5,
  //   badge: 'Luxury Collection',
  //   specs: {
  //     dimensions: '9 ft x 6 ft ',
  //     seatHeight: '1 ft 6 in',
  //     seatDepth: '2 ft 4 in',
  //     weight: '150 kg',
  //     material: 'Premium Sweat Fabric / Soft Fabric Upholstery',
  //     frame: 'Solid Wood + Metal Recliner Mechanism',
  //     foam: 'High-Density Foam',
  //     color: 'Ivory Beige',
  //     seating: '4–5 persons',
  //     functionalities: [
  //       'L-shape chaise lounge design',
  //       'Built-in manual recliner footrest',
  //       'Premium quilted back cushions',
  //       'Deep comfort seating',
  //       'Soft armrest support',
  //       'Minimalist luxury styling',
  //       'Wooden designer legs',
  //       'Ideal for family relaxation'
  //     ],
  //     warranty: '1 Year'
  //   }
  // },
  {
    id: 31,
    name: 'Executive Office Sofa Sets',
    category: 'Sofas',
    description: 'Premium executive office Sofa Sets featuring modern box-style construction, luxurious Sweat Fabric upholstery, and clean minimalist aesthetics—perfect for cabins, reception areas, and lounges.',
    image: 'images/office sofa 2.png',
    rating: 5,
    badge: 'Executive Collection',
    specs: {
      dimensions: '3+1 Seater Set',
      sofaDimensions: '6 ft x 2.8 ft ',
      chairDimensions: '3 ft x 2.8 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft',
      weight: '110 kg',
      material: 'Premium Sweat Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Jet Black',
      seating: '4 persons',
      functionalities: [
        'Modern box-arm design',
        'Executive office styling',
        'Soft premium cushioning',
        'Wide armrest support',
        'Durable commercial-grade build',
        'Scratch-resistant upholstery',
        'Metal support legs',
        'Ideal for office cabins and reception areas'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 32,
    name: 'Modern Lounge Office Sofa',
    category: 'Sofas',
    description: 'Elegant contemporary office sofa featuring curved side arms, channel-tufted backrest, premium soft upholstery, and a compact luxury design—ideal for office cabins, reception areas, lounges, and studio spaces.',
    image: 'images/office sofa.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: '2 Seater',
      sofaDimensions: '5.5 ft x 2.6 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft',
      weight: '65 kg',
      material: 'Premium Velvet/Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Slate Grey',
      seating: '2 persons',
      functionalities: [
        'Curved armrest design',
        'Vertical channel-tufted backrest',
        'Soft premium cushioning',
        'Compact space-saving design',
        'Modern minimalist aesthetics',
        'Heavy-duty wooden frame',
        'Metal support legs',
        'Suitable for office, lounge, reception, and home interiors'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 33,
    name: 'Premium Recliner Sofa',
    category: 'Recliners',
    description: 'Luxury 2-seater recliner sofa designed for ultimate comfort, featuring plush cushioning, padded armrests, center console cup holders, and smooth reclining functionality—perfect for home theaters, lounges, and premium living spaces.',
    image: 'images/reclinear 2 seater.png',
    rating: 5,
    badge: 'Luxury Recliner Collection',
    specs: {
      dimensions: '2 Seater',
      sofaDimensions: '6.2 ft x 3.2 ft ',
      seatHeight: '1 ft 7 in',
      seatDepth: '2.2 ft',
      weight: '95 kg',
      material: 'Premium Sweat Fabric/Fabric Upholstery',
      frame: 'Solid Wood + Metal Recliner Mechanism',
      foam: 'High-Density Memory Foam',
      color: 'Sky Blue',
      seating: '2 persons',
      functionalities: [
        'Manual reclining seats',
        'Center console with cup holders',
        'Extra padded headrest support',
        'Wide cushioned armrests',
        'Premium lumbar support',
        'Cinema-style seating comfort',
        'Smooth reclining mechanism',
        'Perfect for home theater and lounge use'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 34,
    name: 'Luxury Recliner Sofa Sets',
    category: 'Recliners',
    description: 'Premium 3+1+1 recliner Sofa Sets crafted for luxurious comfort, featuring plush cushioning, wide armrests, ergonomic back support, and smooth reclining functionality—ideal for premium living rooms, lounges, and entertainment spaces.',
    image: 'images/reclinear 3+1 dummy.png',
    rating: 5,
    badge: 'Luxury Recliner Collection',
    specs: {
      dimensions: '3+1+1 Seater Set',
      sofaDimensions: '7 ft x 3.2 ft ',
      chairDimensions: '3.5 ft x 3.2 ft ',
      seatHeight: '1 ft 7 in',
      seatDepth: '2.2 ft',
      weight: '165 kg',
      material: 'Premium Sweat Fabric Upholstery',
      frame: 'Solid Wood + Metal Recliner Mechanism',
      foam: 'High-Density Memory Foam',
      color: 'Midnight Black',
      seating: '5 persons',
      functionalities: [
        'Manual reclining seats',
        'Plush padded headrest',
        'Ergonomic lumbar support',
        'Extra wide cushioned armrests',
        'Premium stitching design',
        'Smooth reclining mechanism',
        'Luxury home theater comfort',
        'Ideal for living room and entertainment spaces'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 35,
    name: 'Premium Recliner Chair',
    category: 'Recliners',
    description: 'Luxury single-seater recliner chair crafted for superior comfort, featuring plush cushioning, ergonomic back support, wide padded armrests, and a smooth reclining mechanism—perfect for living rooms, home theaters, lounges, and personal relaxation spaces.',
    image: 'images/recliner rrr.png',
    rating: 5,
    badge: 'Luxury Recliner Collection',
    specs: {
      dimensions: '1 Seater',
      chairDimensions: '3.2 ft x 3.4 ft ',
      fullyReclinedLength: '5.5 ft ',
      seatHeight: '1 ft 7 in',
      seatDepth: '2.2 ft',
      weight: '55 kg',
      material: 'Premium Sweat Fabric Upholstery',
      frame: 'Solid Wood + Metal Recliner Mechanism',
      foam: 'High-Density Memory Foam',
      color: 'Sky Blue',
      seating: '1 person',
      functionalities: [
        'Smooth manual reclining mechanism',
        'Extended footrest support',
        'Ergonomic head and lumbar support',
        'Extra wide padded armrests',
        'Premium stitched detailing',
        'Soft plush seating comfort',
        'Heavy-duty frame construction',
        'Ideal for home theater, lounge, and relaxation use'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 36,
    name: 'Luxury Recliner Sofa',
    category: 'Recliners',
    description: 'Premium 3-seater recliner sofa designed for ultimate relaxation, featuring dual reclining seats, plush cushioning, ergonomic back support, built-in cup holders, and luxurious upholstery—perfect for home theaters, lounges, and premium living spaces.',
    image: 'images/Recliner sofa.png',
    rating: 5,
    badge: 'Luxury Recliner Collection',
    specs: {
      dimensions: '3 Seater',
      sofaDimensions: '7.2 ft x 3.4 ft ',
      fullyReclinedLength: '5.8 ft ',
      seatHeight: '1 ft 7 in',
      seatDepth: '2.2 ft',
      weight: '125 kg',
      material: 'Premium Velvet/Fabric Upholstery',
      frame: 'Solid Wood + Metal Recliner Mechanism',
      foam: 'High-Density Memory Foam',
      color: 'Turquoise Blue',
      seating: '3 persons',
      functionalities: [
        'Dual manual reclining seats',
        'Built-in cup holders',
        'Extended footrest support',
        'Ergonomic head and lumbar support',
        'Extra wide padded armrests',
        'Premium home theater comfort',
        'Smooth reclining mechanism',
        'Ideal for luxury living rooms and entertainment spaces'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 37,
    name: 'Modern RJ Sofa Sets',
    category: 'Sofa Setss',
    description: 'Premium 3+1+1 Sofa Sets featuring sleek contemporary styling, soft plush cushioning, premium upholstery, and a minimalist silhouette—perfect for modern living rooms, office lounges, reception areas, and premium interiors.',
    image: 'images/RJ model.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: '3+1+1 Seater Set',
      sofaDimensions: '6.8 ft x 3 ft ',
      chairDimensions: '3.2 ft x 3 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft',
      weight: '135 kg',
      material: 'Premium Sweat Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Sage Green',
      seating: '5 persons',
      functionalities: [
        'Modern minimalist design',
        'Wide cushioned seating',
        'Soft ergonomic back support',
        'Compact padded armrests',
        'Premium stitching finish',
        'Strong metal support legs',
        'Heavy-duty frame construction',
        'Ideal for home, office, and lounge spaces'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 38,
    name: 'Sleek Luxury Sofa',
    category: 'Sofas',
    description: 'Elegant modern 3-seater sofa featuring a stylish dual-tone design, premium upholstery, plush cushioning, and sleek curved armrests. Designed to elevate contemporary living spaces with comfort and sophistication.',
    image: 'images/sleek model.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '7 ft x 3 ft ',
      seatHeight: '1 ft 6 in',
      seatDepth: '2 ft',
      weight: '65 kg',
      material: 'Premium Sweat Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Beige & Teal Green',
      seating: '3 persons',
      functionalities: [
        'Modern dual-tone design',
        'Soft plush back cushions',
        'Wide comfortable seating',
        'Curved premium armrests',
        'Elegant metallic legs',
        'Premium stitching finish',
        'Strong durable frame',
        'Perfect for luxury homes, lounges, and office spaces'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 39,
    name: 'Sober Lounger Premium Sofa',
    category: 'Lounger',
    description: 'Luxury L-shaped chaise sofa crafted with premium velvet upholstery, quilted designer backrests, deep seating comfort, and elegant metallic accents. Perfect for modern luxury living spaces.',
    image: 'images/sober lounger 2.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: '9 ft x 6 ft ',
      seatHeight: '1 ft 6 in',
      chaiseDepth: '5 ft',
      weight: '95 kg',
      material: 'Premium Velvet Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Deep Teal Blue',
      seating: '4–5 persons',
      functionalities: [
        'L-shaped chaise lounge design',
        'Diamond quilted premium backrest',
        'Soft plush cushioning',
        'Deep comfortable seating',
        'Premium gold metallic legs',
        'Luxury designer stitching',
        'Wide armrest with side wooden panel',
        'Ideal for luxury homes, lounges, and premium interiors'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 40,
    name: 'Sober Lounger Designer Sofa',
    category: 'Lounger',
    description: 'Elegant L-shaped designer sofa crafted with premium velvet upholstery, deep seating comfort, diamond quilted backrests, and luxurious metallic accents. Built to add sophistication and comfort to modern interiors.',
    image: 'images/Sober lounger.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '9 ft x 6 ft ',
      seatHeight: '1 ft 6 in',
      chaiseDepth: '5 ft',
      weight: '92 kg',
      material: 'Premium Velvet Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Emerald Teal Green',
      seating: '4–5 persons',
      functionalities: [
        'L-shaped chaise lounge design',
        'Diamond quilted premium backrest',
        'Soft plush deep seating',
        'Premium velvet finish',
        'Elegant gold metallic legs',
        'Luxury stitching detailing',
        'Side wooden accent armrests',
        'Perfect for luxury homes, lounges, and designer interiors'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 41,
    name: 'Premium Sofa Cum Bed',
    category: 'Sofas',
    description: 'Multi-functional premium sofa cum bed designed with elegant Sweat Fabric upholstery, vertical stitched backrest, pull-out bed mechanism, and spacious hidden storage. Perfect for modern homes where style meets functionality.',
    image: 'images/sofa cum bed.png',
    rating: 5,
    badge: 'Space Saver',
    specs: {
      dimensions: '6.5 ft x 3 ft  (Sofa Mode)',
      bedDimensions: '6.5 ft x 5 ft  (Bed Mode)',
      seatHeight: '1 ft 6 in',
      weight: '85 kg',
      material: 'Premium Sweat Fabric Upholstery',
      frame: 'Solid Wood & Metal Support Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Vintage Brown',
      seating: '3 persons',
      sleepingCapacity: '2 persons',
      functionalities: [
        'Convertible sofa to bed design',
        'Smooth pull-out bed mechanism',
        'Hidden storage compartment',
        'Vertical stitched premium backrest',
        'Wide comfortable armrests',
        'Soft high-density cushioning',
        'Space-saving multifunctional furniture',
        'Perfect for apartments, guest rooms, and modern homes'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 42,
    name: 'Soho Lounger Sofa',
    category: 'Lounger',
    description: 'Contemporary L-shaped lounger sofa designed with premium fabric upholstery, deep cushioning, elegant wooden arm accents, and a spacious chaise extension. Crafted for comfort, style, and modern interiors.',
    image: 'images/soho lounger.png',
    rating: 5,
    badge: 'Modern Collection',
    specs: {
      dimensions: '8 ft x 5.5 ft ',
      seatHeight: '1 ft 6 in',
      chaiseDepth: '5 ft',
      weight: '88 kg',
      material: 'Premium Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Sky Blue',
      seating: '4 persons',
      functionalities: [
        'L-shaped chaise lounge design',
        'Soft deep seating comfort',
        'Premium wooden arm accents',
        'Elegant wooden legs',
        'Wide comfortable armrests',
        'Minimal modern stitching finish',
        'Strong durable frame construction',
        'Ideal for homes, lounges, and premium living spaces'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 43,
    name: 'Star Lounger Premium Sofa',
    category: 'Lounger',
    description: 'Luxury L-shaped lounger sofa crafted with premium Sweat Fabric upholstery, adjustable headrests, deep tufted seating, and an integrated utility console. Designed for superior comfort and modern living spaces.',
    image: 'images/star lounger brown.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '9 ft x 6 ft ',
      seatHeight: '1 ft 6 in',
      chaiseDepth: '5 ft',
      weight: '98 kg',
      material: 'Premium Sweat Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Rich Brown',
      seating: '4–5 persons',
      functionalities: [
        'L-shaped chaise lounge design',
        'Adjustable premium headrests',
        'Integrated center utility console',
        'Deep tufted seating comfort',
        'Wide cushioned armrests',
        'Premium Sweat Fabric finish',
        'Strong durable frame construction',
        'Perfect for luxury homes, lounges, and entertainment spaces'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 44,
    name: 'Star Lounger electric Recliner Sofa',
    category: 'Recliners',
    description: 'Modern L-shaped recliner sofa designed with premium fabric upholstery, spacious chaise lounge seating, manual recliner functionality, and elegant designer cushions. Built for luxury comfort and contemporary interiors.',
    image: 'images/Star lounger recliner.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: '9 ft x 6 ft',
      seatHeight: '1 ft 6 in',
      chaiseDepth: '5 ft',
      weight: '100 kg',
      material: 'Premium Fabric Upholstery',
      frame: 'Solid Wood & Metal Recliner Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Ivory Beige',
      seating: '4–5 persons',
      functionalities: [
        'L-shaped chaise lounge design',
        'Built-in manual recliner mechanism',
        'Premium designer back cushions',
        'Soft deep seating comfort',
        'Wide cushioned armrests',
        'Scandinavian modern styling',
        'Strong durable frame construction',
        'Perfect for luxury homes, lounges, and entertainment spaces'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 45,
    name: 'Star Lounger Sofa',
    category: 'Lounger',
    description: 'Premium modular lounger sofa featuring an extended chaise seat, built-in storage/console section, deep cushioned seating, and elegant contemporary styling. Designed for comfort, relaxation, and modern living spaces.',
    image: 'images/star lounger.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '9 ft x 6 ft ',
      seatHeight: '1 ft 6 in',
      chaiseDepth: '5 ft',
      weight: '95 kg',
      material: 'Premium Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Charcoal Grey',
      seating: '4–5 persons',
      functionalities: [
        'Extended chaise lounge seating',
        'Built-in center console/storage unit',
        'Premium detachable cushions',
        'Deep cushioned comfort seating',
        'Wide padded armrests',
        'Modular contemporary design',
        'Strong durable frame construction',
        'Ideal for modern homes, lounges, and premium interiors'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 46,
    name: 'Turkey Model Folding Back Sofa',
    category: 'Sofas',
    description: 'Elegant contemporary sofa featuring a vertically channeled backrest, oversized armrests, plush seating, and premium upholstery. Designed to complement modern living spaces with comfort and luxury.',
    image: 'images/turkey model folding back.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: '7 ft x 3 ft ',
      seatHeight: '1 ft 6 in',
      depth: '3 ft',
      weight: '70 kg',
      material: 'Premium Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Charcoal Grey',
      seating: '3 persons',
      functionalities: [
        'Vertical channel back design',
        'Wide padded armrests',
        'Premium decorative cushions included',
        'Deep cushioned seating',
        'Minimalist luxury styling',
        'Strong durable frame construction',
        'Comfort-focused ergonomic support',
        'Ideal for homes, lounges, and modern interiors'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 47,
    name: 'U Shaped Sofa',
    category: 'L shape',
    description: 'Spacious luxury U-shaped sectional sofa designed for large living spaces. Features an extended chaise section, plush cushioning, premium upholstery, designer back cushions, and elegant contemporary styling for family comfort.',
    image: 'images/u shaped.png',
    rating: 5,
    badge: 'Luxury Collection',
    specs: {
      dimensions: '11 ft x 9 ft ',
      seatHeight: '1 ft 6 in',
      depth: '3 ft',
      chaiseDepth: '5 ft',
      weight: '120 kg',
      material: 'Premium Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Black & Grey',
      seating: '7–8 persons',
      functionalities: [
        'Large U-shaped sectional layout',
        'Extended chaise lounge section',
        'Designer printed premium cushions',
        'Deep cushioned seating',
        'Padded ergonomic back support',
        'Wide designer armrests',
        'Premium metal legs',
        'Ideal for large families, lounges, and luxury interiors'
      ],
      warranty: '1 Year'
    }
  },
  {
    id: 48,
    name: 'Wooden Handle L Type Sofa',
    category: 'L shape',
    description: 'Elegant L-shaped corner sofa featuring premium fabric upholstery, vertical channel detailing, wooden accent armrests, and deep comfort seating. Designed for modern homes with a luxurious and sophisticated look.',
    image: 'images/wodden handel L type.png',
    rating: 5,
    badge: 'Premium Collection',
    specs: {
      dimensions: '9 ft x 7 ft ',
      seatHeight: '1 ft 6 in',
      depth: '3 ft',
      weight: '90 kg',
      material: 'Premium Fabric Upholstery',
      frame: 'Solid Wood Frame',
      foam: 'High-Density Comfort Foam',
      color: 'Sky Blue',
      seating: '5–6 persons',
      functionalities: [
        'L-shaped corner seating',
        'Premium wooden accent armrests',
        'Vertical channel backrest design',
        'Deep cushioned seating',
        'Designer comfort cushions included',
        'Gold-finish metal legs',
        'Strong durable frame construction',
        'Ideal for modern homes, lounges, and premium interiors'
      ],
      warranty: '1 Year'
    }
  },
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Ramesh Reddy',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    text: 'Absolutely love my new L-shaped sofa! The quality is outstanding and it fits perfectly in my living room. Delivery was on time and the team was very professional.',
    initial: 'R'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Jubilee Hills, Hyderabad',
    rating: 5,
    text: 'Got a custom sofa made exactly to my specifications. The craftsmanship is superb — every stitch is perfect. Vardhaman Furnitures is my go-to for all furniture needs.',
    initial: 'P'
  },
  {
    id: 3,
    name: 'Suresh Naidu',
    location: 'Secunderabad',
    rating: 4,
    text: 'Bought the wooden Sofa Sets for my parents\' home. They are extremely happy with it. Very sturdy and comfortable. Will definitely order again.',
    initial: 'S'
  },
  {
    id: 4,
    name: 'Anitha Goud',
    location: 'Kukatpally, Hyderabad',
    rating: 5,
    text: 'The recliner I purchased is absolutely heavenly! After a long day at work, it\'s the best thing to come home to. Excellent quality at a fair price.',
    initial: 'A'
  },
  {
    id: 5,
    name: 'Mohammed Farooq',
    location: 'Tolichowki, Hyderabad',
    rating: 5,
    text: 'I was skeptical at first, but Vardhaman proved me wrong. My office chairs are ergonomic, stylish and very durable. The after-sales service is top-notch too.',
    initial: 'M'
  },
  {
    id: 6,
    name: 'Kavitha Rajan',
    location: 'Madhapur, Hyderabad',
    rating: 4,
    text: 'Beautiful furniture and great customer service. They helped me choose the perfect sofa colour for my living room. Highly recommend visiting their showroom!',
    initial: 'K'
  }
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  activeCategory: 'All',
  reviewIndex: 0,
  reviewsPerPage: 3,
  allProducts: [],
  allReviews: []
};

/* ============================================================
   API / DATA FETCHING
   Future: replace with real fetch calls
   e.g. loadProducts() → fetch('/api/products').then(r => r.json())
   ============================================================ */

/**
 * Simulates an async API call for products.
 * Replace with: return fetch('/api/products').then(r => r.json())
 */
async function fetchProducts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(PRODUCTS_DATA), 150); // simulate network
  });
}

/**
 * Simulates an async API call for reviews.
 * Replace with: return fetch('/api/reviews').then(r => r.json())
 */
async function fetchReviews() {
  return new Promise(resolve => {
    setTimeout(() => resolve(REVIEWS_DATA), 150);
  });
}

/* ============================================================
   PRODUCT RENDERING
   ============================================================ */

/**
 * Generates star HTML for a given rating (1–5)
 */
function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span style="color:${i < rating ? '#E09B44' : '#ddd'}">★</span>`
  ).join('');
}

/**
 * Creates a product card DOM element from a product object.
 */
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('data-category', product.category);

  card.innerHTML = `
    <div class="product-img-wrap">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/400x220/F2EBE1/7B4A2D?text=Vardhaman+Furnitures'"
      />
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
    </div>
    <div class="product-card-body">
      <div class="product-category-tag">${product.category}</div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    </div>
    <div class="product-card-footer">
      <a
        href="https://wa.me/919849943765?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}"
        target="_blank"
        rel="noopener noreferrer"
        class="product-enquire"
        aria-label="Enquire about ${product.name} on WhatsApp"
      >Enquire Now</a>
      <div class="product-rating" title="${product.rating} out of 5 stars">
        ${renderStars(product.rating)}
      </div>
    </div>
    <div class="product-card-details-row">
      <button class="view-details-btn" data-id="${product.id}" aria-label="View details of ${product.name}">
        <i data-feather="info"></i> View Details
      </button>
    </div>
  `;

  // "View Details" opens the modal
  card.querySelector('.view-details-btn').addEventListener('click', () => {
    openProductModal(product);
  });

  return card;
}

/**
 * Renders all products into the grid.
 * Future: call fetchProducts() to get data from API.
 */
async function loadProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Show skeleton loaders while loading
  grid.innerHTML = Array(6).fill(0).map(() => `<div class="product-skeleton"></div>`).join('');

  try {
    const products = await fetchProducts();
    state.allProducts = products;
    renderProducts(products);
  } catch (err) {
    grid.innerHTML = `<p class="load-error">Failed to load products. Please refresh the page.</p>`;
    console.error('Error loading products:', err);
  }
}

/**
 * Renders a given list of products into the grid.
 */
function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="no-products">
        <p>No products found in this category.</p>
      </div>`;
    return;
  }

  products.forEach((product, i) => {
    const card = createProductCard(product);
    card.style.animationDelay = `${i * 0.08}s`;
    grid.appendChild(card);
  });

  // Re-initialise feather icons for dynamically added content
  if (window.feather) feather.replace();
}

/**
 * Filters products by category and re-renders.
 * @param {string} category - 'All', 'Sofas', 'Recliners', 'Chairs'
 */
function filterProducts(category) {
  state.activeCategory = category;

  const filtered = category === 'All'
    ? state.allProducts
    : state.allProducts.filter(p => p.category === category);

  renderProducts(filtered);
  updateFilterButtons(category);
}

/**
 * Updates active state on filter buttons.
 */
function updateFilterButtons(activeCategory) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === activeCategory);
    btn.setAttribute('aria-pressed', btn.dataset.category === activeCategory);
  });
}

/* ============================================================
   REVIEWS / SLIDER
   ============================================================ */

/**
 * Creates a Google-style review card element.
 */
function createReviewCard(review) {
  const card = document.createElement('div');
  card.className = 'review-card';
  card.setAttribute('role', 'article');
  card.setAttribute('aria-label', `Review by ${review.name}`);

  const stars = Array.from({ length: 5 }, (_, i) =>
    `<span style="color:${i < review.rating ? '#F4B942' : '#ddd'}">★</span>`
  ).join('');

  card.innerHTML = `
    <div class="review-card-header">
      <div class="reviewer-info">
        <div class="review-avatar" aria-hidden="true">${review.initial}</div>
        <div class="reviewer-details">
          <strong>${review.name}</strong>
          <span>${review.timeAgo || '1 year ago'}</span>
        </div>
      </div>
      <svg class="google-badge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22" aria-label="Google Review">
        <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.8-11.3-7l-6.5 5C9.7 39.6 16.3 44 24 44z"/>
        <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.7 35.5 44 30.2 44 24c0-1.3-.1-2.7-.4-4z"/>
      </svg>
    </div>
    <div class="review-stars">${stars}</div>
    <p class="review-text">${review.text}</p>
  `;
  return card;
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */

/**
 * Opens the product detail modal and fills it with specs.
 */
function openProductModal(product) {
  const modal   = document.getElementById('productModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const s = product.specs;
  const stars = renderStars(product.rating);
  const functionsList = s.functionalities
    .map(f => `<li><span class="spec-tick">✔</span> ${f}</li>`)
    .join('');

  content.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${product.image}" alt="${product.name}" />
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
    </div>
    <div class="modal-info">
      <div class="modal-category">${product.category}</div>
      <h2 id="modalTitle">${product.name}</h2>
      <div class="modal-rating">${stars}</div>
      <p class="modal-desc">${product.description}</p>

      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-label">📐 Dimensions</span>
          <span class="spec-value">${s.dimensions}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">📏 Seat Height</span>
          <span class="spec-value">${s.seatHeight}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">↔ Seat Depth</span>
          <span class="spec-value">${s.seatDepth}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">⚖ Weight</span>
          <span class="spec-value">${s.weight}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">🪢 Material</span>
          <span class="spec-value">${s.material}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">🪵 Frame</span>
          <span class="spec-value">${s.frame}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">🛋 Foam</span>
          <span class="spec-value">${s.foam}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">🎨 Colors</span>
          <span class="spec-value">${s.color}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">👥 Seating</span>
          <span class="spec-value">${s.seating}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">🛡 Warranty</span>
          <span class="spec-value">${s.warranty}</span>
        </div>
      </div>

      <div class="spec-functionalities">
        <h4>✨ Key Features</h4>
        <ul>${functionsList}</ul>
      </div>

      <a
        href="https://wa.me/919849943765?text=Hi%2C%20I%20want%20details%20about%20${encodeURIComponent(product.name)}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary modal-enquire-btn"
      >
        Enquire on WhatsApp
      </a>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (window.feather) feather.replace();
}

/**
 * Closes the product detail modal.
 */
function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Initialises modal close triggers.
 */
function initModal() {
  const modal     = document.getElementById('productModal');
  const closeBtn  = document.getElementById('modalClose');

  closeBtn?.addEventListener('click', closeProductModal);

  // Click outside modal box closes it
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeProductModal();
  });

  // Escape key closes it
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
}

/* ============================================================
   REVIEWS — simple 3-card hover grid (no slider)
   ============================================================ */

/**
 * Loads and renders the first 3 reviews as hover cards.
 */
async function loadReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  try {
    const reviews = await fetchReviews();
    state.allReviews = reviews;

    grid.innerHTML = '';
    // Show only first 3 reviews
    reviews.slice(0, 3).forEach((review, i) => {
      const card = createReviewCard(review);
      card.classList.add('animate-on-scroll');
      if (i === 1) card.classList.add('delay-1');
      if (i === 2) card.classList.add('delay-2');
      grid.appendChild(card);
    });

    if (window.feather) feather.replace();
    // Trigger scroll animations for newly added cards
    initScrollAnimations();
  } catch (err) {
    console.error('Error loading reviews:', err);
  }
}

/**
 * Sets up the review slider.
 * Card widths are set in PIXELS based on the wrapper's clientWidth so they
 * never overflow — the old CSS percentage approach was relative to the
 * infinite flex track, not the visible viewport.
 */
function setupReviewSlider() {
  const track   = document.getElementById('reviewsTrack');
  const dotsEl  = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevReview');
  const nextBtn = document.getElementById('nextReview');
  const wrapper = document.querySelector('.reviews-slider-wrap'); // visible clipping container

  if (!track || !dotsEl || !prevBtn || !nextBtn || !wrapper) return;

  const GAP = 24;  // px — keep in sync with CSS gap on .reviews-track

  /** How many cards are visible at once */
  function getPerPage() {
    const w = wrapper.clientWidth;
    if (w < 540) return 1;
    if (w < 860) return 2;
    return 3;
  }

  /**
   * Calculate pixel width for each card so exactly `perPage` cards fill the wrapper.
   * Formula: (wrapperWidth - (perPage-1)*gap) / perPage
   */
  function calcCardWidth(perPage) {
    return (wrapper.clientWidth - (perPage - 1) * GAP) / perPage;
  }

  const cards = Array.from(track.querySelectorAll('.review-card'));
  const total = cards.length;

  /** Apply pixel widths to every card */
  function applyCardWidths() {
    const perPage   = getPerPage();
    const cardWidth = calcCardWidth(perPage);
    cards.forEach(card => {
      card.style.width = cardWidth + 'px';
    });
    return { perPage, cardWidth };
  }

  /** Number of slide pages */
  function totalPages(perPage) {
    return Math.ceil(total / perPage);
  }

  /** Build navigation dots */
  function buildDots(perPage) {
    dotsEl.innerHTML = '';
    const n = totalPages(perPage);
    for (let i = 0; i < n; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === state.reviewIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Go to review page ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsEl.appendChild(dot);
    }
  }

  /** Slide to a given page index */
  function goToSlide(index) {
    const { perPage, cardWidth } = applyCardWidths();
    const pages = totalPages(perPage);
    state.reviewIndex = (index + pages) % pages;

    // Offset = page index × (one card width + gap) × cards per page
    const offset = state.reviewIndex * perPage * (cardWidth + GAP);
    track.style.transform = `translateX(-${offset}px)`;

    // Update dot states
    dotsEl.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === state.reviewIndex);
    });
  }

  /** Full reset: re-measure, rebuild dots, snap back to current page */
  function reset() {
    state.reviewIndex = 0;
    const { perPage } = applyCardWidths();
    buildDots(perPage);
    goToSlide(0);
  }

  // Wire up buttons
  prevBtn.addEventListener('click', () => goToSlide(state.reviewIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(state.reviewIndex + 1));

  // Initial render
  reset();

  // Auto-advance every 5 s
  let autoTimer = setInterval(() => goToSlide(state.reviewIndex + 1), 5000);

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.addEventListener('mouseleave', () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goToSlide(state.reviewIndex + 1), 5000);
  });

  // Re-measure on resize (debounced)
  window.addEventListener('resize', debounce(reset, 250));
}



/* ============================================================
   NAVBAR
   ============================================================ */

function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('navOverlay');
  const navClose  = document.getElementById('navClose');
  const links     = navLinks?.querySelectorAll('.nav-link');

  if (!navbar || !hamburger || !navLinks) return;

  // Scroll: add 'scrolled' class + active link highlight
  window.addEventListener('scroll', throttle(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    highlightActiveLink();
  }, 80));

  /** Opens / closes the mobile nav drawer */
  function openNav(isOpen) {
    navLinks.classList.toggle('open', isOpen);
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (overlay) {
      overlay.classList.toggle('show', isOpen);
      overlay.setAttribute('aria-hidden', String(!isOpen));
    }
  }

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    openNav(!navLinks.classList.contains('open'));
  });
  // Close button inside drawer
  navClose?.addEventListener('click', () => openNav(false));

  // Close when a nav link is tapped
  links?.forEach(link => {
    link.addEventListener('click', () => openNav(false));
  });

  // Close when the dark overlay is clicked
  overlay?.addEventListener('click', () => openNav(false));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) openNav(false);
  });
}

/**
 * Highlights the nav link for the section currently in view.
 */
function highlightActiveLink() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const links    = document.querySelectorAll('.nav-link');
  const scrollY  = window.scrollY + 120;

  let current = '';
  sections.forEach(section => {
    if (section.offsetTop <= scrollY) current = section.id;
  });

  links.forEach(link => {
    const href = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

/* ============================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================================ */

function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // once revealed, stop watching
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   FILTER BAR (Furniture Section)
   ============================================================ */

function initFilterBar() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterProducts(btn.dataset.category);
  });

  // Support keyboard navigation
  filterBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const btn = e.target.closest('.filter-btn');
      if (btn) {
        e.preventDefault();
        filterProducts(btn.dataset.category);
      }
    }
  });
}

/* ============================================================
   HERO CATEGORY CARDS (navigate to furniture section + filter)
   ============================================================ */

function initCategoryCards() {
  document.querySelectorAll('.cat-card').forEach(card => {
    const handler = () => {
      const filter = card.dataset.filter;
      const section = document.getElementById('furniture');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => filterProducts(filter), 400);
    };

    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    });
  });
}

/* ============================================================
   SCROLL TO TOP BUTTON
   ============================================================ */

function initScrollToTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', throttle(() => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, 100));

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   UTILITIES
   ============================================================ */

/** Throttle: limit a function to run at most once every `limit` ms */
function throttle(fn, limit) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= limit) { last = now; fn.apply(this, args); }
  };
}

/** Debounce: delay execution until after `delay` ms of inactivity */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ============================================================
   INIT — Run everything after DOM is ready
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  // Initialise Feather icons
  if (window.feather) feather.replace();

  // Core UI
  initNavbar();
  initScrollAnimations();
  initScrollToTop();
  initCategoryCards();
  initModal();

  // Data-driven sections (async)
  await Promise.all([
    loadProducts(),
    loadReviews()
  ]);

  // After data rendered, re-init icons & animations for dynamic content
  if (window.feather) feather.replace();
  initFilterBar();
  // Re-run scroll animations to catch dynamically added elements
  initScrollAnimations();
});