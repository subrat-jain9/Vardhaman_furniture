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
    name: 'Luxury Sofa',
    category: 'Sofas',
    description: 'Spacious L-shaped sofa with premium velvet upholstery and high-density foam cushions. Perfect for large living rooms.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=75',
    rating: 5,
    badge: 'Bestseller',
    specs: {
      dimensions: '280cm (L) × 180cm (W) × 90cm (H)',
      seatHeight: '45 cm',
      seatDepth: '60 cm',
      weight: '85 kg',
      material: 'Premium Velvet Fabric',
      frame: 'Solid Sheesham Wood',
      foam: 'High-Density 40D Foam',
      color: 'Available in 8 colors',
      seating: '5–6 persons',
      functionalities: ['Reversible chaise', 'Storage ottoman option', 'Anti-sag springs', 'Removable covers'],
      warranty: '1 Year'
    }
  },
  {
    id: 2,
    name: 'Classic Wooden Sofa Set',
    category: 'Sofas',
    description: 'Traditional 3+2+1 sofa set with solid sheesham wood frame and rich fabric upholstery. Timeless elegance.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=75',
    rating: 4,
    badge: 'Classic',
    specs: {
      dimensions: '3-seater: 210cm × 85cm × 92cm',
      seatHeight: '42 cm',
      seatDepth: '55 cm',
      weight: '60 kg',
      material: 'Cotton Blend Fabric',
      frame: 'Solid Sheesham Wood (hand-carved)',
      foam: 'Medium-Density 32D Foam',
      color: 'Available in 5 colors',
      seating: '6 persons (3+2+1 set)',
      functionalities: ['Hand-carved wooden arms', 'Cushioned back support', 'Anti-termite treated wood', 'Easy assembly'],
      warranty: '1 Year'
    }
  },
  {
    id: 3,
    name: 'Modern Recliner Sofa',
    category: 'Recliners',
    description: 'recliner sofa with push-back mechanism and plush cushioning. Ultimate comfort at your fingertips.',
    image: 'Recliner sofa.png',
    rating: 5,
    badge: 'New',
    specs: {
      dimensions: '160cm (W) × 95cm (D) × 102cm (H)',
      seatHeight: '48 cm',
      seatDepth: '58 cm',
      weight: '72 kg',
      material: 'Premium Leatherette',
      frame: 'Steel + Solid Wood Frame',
      foam: 'Memory Foam + HR Foam',
      color: 'Black, Brown, Grey',
      seating: '2 persons',
      functionalities: ['Push-back recline', 'Adjustable headrest', 'Cup holder armrests', 'Footrest extension'],
      warranty: '1 Year'
  }
  },
  {
    id: 4,
    name: 'Executive high back Chair',
    category: 'Chairs',
    description: 'High-back executive chair with lumbar support, adjustable height, and premium leatherette finish. Built for long hours.',
    image: 'Executive high back.png',
    rating: 4,
    badge: null,
    specs: {
      dimensions: '66cm (W) × 70cm (D) × 115–125cm (H)',
      seatHeight: '46–56 cm (adjustable)',
      seatDepth: '52 cm',
      weight: '18 kg',
      material: 'PU Leatherette',
      frame: 'Heavy-duty Nylon Base (5-star)',
      foam: 'High-Resilience Foam',
      color: 'Black',
      seating: '1 person (max 120 kg)',
      functionalities: ['Pneumatic height adjust', 'Lumbar support', '360° swivel', 'Tilt lock mechanism', 'Padded armrests', 'Smooth-roll casters'],
      warranty: '1 Year'
    }
  },
  {
    id: 5,
    name: 'Premium Recliner Chair',
    category: 'Recliners',
    description: 'Single-seater push-back recliner with solid wooden base and breathable fabric. Your personal relaxation throne.',
    image: 'recliner chair.png',
    rating: 5,
    badge: 'Premium',
    specs: {
      dimensions: '88cm (W) × 96cm (D) × 106cm (H)',
      seatHeight: '46 cm',
      seatDepth: '56 cm',
      weight: '48 kg',
      material: 'Premium Microfibre Fabric',
      frame: 'Solid Teak Wood Base',
      foam: '45D High-Density Foam',
      color: 'Available in 6 colors',
      seating: '1 person (max 130 kg)',
      functionalities: ['Manual push-back recline (135°)', 'Extendable footrest', 'Padded headrest', 'Solid wooden armrests', 'Non-slip rubber feet'],
      warranty: '1 Year'
    }
  },
  {
    id: 6,
    name: 'Executive low back Chair',
    category: 'Chairs',
    description: 'Mid-back ergonomic mesh chair with adjustable armrests and breathable back support. Perfect for home offices.',
    image: 'Executive low back.png',
    rating: 4,
    badge: null,
    specs: {
      dimensions: '62cm (W) × 65cm (D) × 95–108cm (H)',
      seatHeight: '44–57 cm (adjustable)',
      seatDepth: '48 cm',
      weight: '14 kg',
      material: 'Breathable Mesh Back + Fabric Seat',
      frame: 'Aluminium Alloy 5-star Base',
      foam: 'Medium-Density Seat Foam',
      color: 'Black, Grey',
      seating: '1 person (max 110 kg)',
      functionalities: ['Adjustable armrests (4D)', 'Lumbar curve support', 'Tilt tension control', 'Synchro tilt mechanism', 'Headrest included', 'PU casters'],
      warranty: '1 Year'
    }
  },
  {
    id: 7,
    name: 'Compact 2-Seater Sofa',
    category: 'Sofas',
    description: 'Space-saving loveseat sofa with tufted back design and solid wood legs. Ideal for apartments and cozy corners.',
    image: '2 seater sofa.png',
    rating: 4,
    badge: null,
    specs: {
      dimensions: '148cm (W) × 82cm (D) × 86cm (H)',
      seatHeight: '44 cm',
      seatDepth: '54 cm',
      weight: '38 kg',
      material: 'Linen Blend Fabric',
      frame: 'Solid Rubber Wood Legs',
      foam: '32D Foam with Fibre Top',
      color: 'Available in 4 colors',
      seating: '2 persons',
      functionalities: ['Button-tufted back', 'Removable cushion covers', 'Solid wood legs', 'Compact footprint'],
      warranty: '1 Year'
    }
  },
  // {
  //   id: 8,
  //   name: 'Wooden Accent Chair',
  //   category: 'Chairs',
  //   description: 'Elegant accent chair with hand-carved wooden frame and premium cushioned seat. Adds character to any room.',
  //   image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&auto=format&fit=crop&q=75',
  //   rating: 5,
  //   badge: 'Handcrafted',
    // specs: {
    //   dimensions: '72cm (W) × 78cm (D) × 94cm (H)',
    //   seatHeight: '46 cm',
    //   seatDepth: '50 cm',
    //   weight: '12 kg',
    //   material: 'Velvet Cushion + Sheesham Wood Frame',
    //   frame: 'Hand-carved Solid Sheesham Wood',
    //   foam: 'High-Resilience 36D Foam',
    //   color: 'Available in 3 colors',
    //   seating: '1 person (max 100 kg)',
    //   functionalities: ['Hand-carved wooden frame', 'High-back support', 'Anti-termite treated', 'Easy to move'],
    //   warranty: '1 Year'
    // }
  // },
  {
    id: 9,
    name: 'Power Recliner Sofa',
    category: 'Recliners',
    description: 'power recliner with USB charging port, memory foam headrest, and smooth motorised mechanism.',
    image: 'Modern recliner sofa.png',
    rating: 5,
    badge: 'Premium',
    specs: {
      dimensions: '185cm (W) × 98cm (D) × 108cm (H)',
      seatHeight: '47 cm',
      seatDepth: '60 cm',
      weight: '95 kg',
      material: 'Top-Grain Genuine Leather',
      frame: 'Steel Motorised Frame',
      foam: 'Memory Foam + Pocket Spring',
      color: 'Black, Cognac Brown',
      seating: '2 persons',
      functionalities: ['Electric recline motor', 'USB Type-A & C ports', 'Memory foam headrest', 'Power lumbar support', 'Adjustable footrest', 'Massage mode (3 zones)', 'Wall-hugger design'],
      warranty: '1 Year'
    }
  }
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
    text: 'Bought the wooden sofa set for my parents\' home. They are extremely happy with it. Very sturdy and comfortable. Will definitely order again.',
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