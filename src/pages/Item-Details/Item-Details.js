
function renderHeader() {
  return `
    <header class="header">
      <div class="logo">
        <a href="../../../index.html" style="text-decoration: none; color: inherit;">LOGO</a>
      </div>
      <div class="search-bar">
        <div class="icon-btn">
          <i data-lucide="search" class="icon-search"></i>
        </div>
        <input type="text" placeholder="Search for clothes and shoes">
      </div>
      <div class="nav-icons">
        <div class="icon-btn">
          <i data-lucide="heart" class="icon-nav"></i>
        </div>
        <a href="../Cart/cart.html" class="icon-btn" style="color: inherit;">
          <i data-lucide="shopping-cart" class="icon-nav"></i>
        </a>
        <div class="icon-btn">
          <i data-lucide="bell" class="icon-nav"></i>
          <div class="notification-badge"></div>
        </div>
      </div>
      <div class="profile-section">
        <div class="profile-pic">
          <i data-lucide="user" class="icon-profile"></i>
        </div>
        <div class="profile-info">
          <div class="profile-text">
            <span class="welcome-text">Welcome Back</span>
            <span class="user-name">Mohamed Ehab</span>
          </div>
          <i data-lucide="chevron-down" class="icon-arrow"></i>
        </div>
      </div>
    </header>
  `;
}

// Colour name → hex lookup (extend as needed)
const COLOR_MAP = {
  Black: '#2C3E50', White: '#FFFFFF', Navy: '#001F5B',
  Brown: '#6B3F21', Red: '#E74C3C', Grey: '#9B9B9B',
  Blue: '#1F54EB', 'Light Blue': '#26B5CE', 'Dark Blue': '#003580',
  Yellow: '#F1C40F', Floral: '#E91E8C', Olive: '#6B7A3B',
  Khaki: '#C3A882', Purple: '#8E44AD', Green: '#27AE60',
  Pink: '#FF69B4', Gold: '#FFD700', Straw: '#D2A96A',
  Beige: '#F5F0E1', Tan: '#D2B48C', 'Light Grey': '#D3D3D3',
};

// ---- Product Detail ----
function renderItemDetail(product) {
  // Build colour swatches from the product's colours array
  const productColors = (product.colors && product.colors.length)
    ? product.colors
    : ['Black', 'White', 'Grey'];

  const sizes = ['S', 'M', 'L'];

  const colorSwatches = productColors
    .map(
      (label, i) => `
      <div
        class="color-swatch ${i === 0 ? 'active' : ''}"
        style="background:${COLOR_MAP[label] || '#ccc'};"
        title="${label}"
        data-color="${label}"
      ></div>`
    )
    .join('');

  const sizeButtons = sizes
    .map(
      (s) => `
      <button class="size-btn ${s === 'M' ? 'active' : ''}" data-size="${s}">${s}</button>`
    )
    .join('');

  const thumbnails = [product.image, product.image]
    .map(
      (src, i) => `
      <div class="item-thumbnail ${i === 0 ? 'active' : ''}" data-index="${i}">
        <img src="${src}" alt="Thumbnail ${i + 1}" onerror="this.style.opacity='0'">
      </div>`
    )
    .join('');

  return `
    <div class="item-detail-section">

      <!-- Left: Images -->
      <div class="item-images">
        <div class="item-main-image">
          <img id="main-product-img" src="${product.image}" alt="${product.name}" onerror="this.style.opacity='0'">
        </div>
        <div class="item-thumbnails">
          ${thumbnails}
        </div>
      </div>

      <!-- Right: Info -->
      <div class="item-info">
        <div class="item-title-row">
          <h1 class="item-name">${product.name}</h1>
          <button class="item-wishlist-btn" aria-label="Add to Wishlist">
            <i data-lucide="heart"></i>
          </button>
        </div>

        <div class="item-price-row">
          <span class="item-price">${product.price}$</span>
          <div class="item-seller-avatar">
            <img src="${product.image}" alt="Seller" onerror="this.parentElement.style.background='#ccc'">
          </div>
        </div>

        <!-- Color & Size -->
        <div class="item-options-row">
          <div class="item-option-group">
            <span class="item-option-label">Color</span>
            <div class="color-swatches" id="color-swatches">
              ${colorSwatches}
            </div>
          </div>
          <span class="check-size-link">(Check your size)</span>
          <div class="item-option-group">
            <span class="item-option-label">Size</span>
            <div class="size-options" id="size-options">
              ${sizeButtons}
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="item-description-block">
          <div class="item-desc-title-row">
            <h2 class="item-desc-title">Description</h2>
            <div class="item-rating-badge">
              <i data-lucide="star" class="star-icon"></i>
              <strong>${product.rating || '4.5'}</strong>
              <span style="color:#aaa;">(122 Reviews)</span>
            </div>
          </div>
          <p class="item-desc-text">
            ${product.description ||
              'Lorem ipsum dolor sit amet consectetur. Lacus tempor elementum montes nibh eu eget et lacus. Elementum placerat aenean non euismod non aliquet bibendum amet. Massa ultrices volutpat dignissim id aliquam. Neque id commodo aenean sagittis risus et odio auctor.Lorem ipsum dolor sit amet consectetur. Lacus tempor elementum montes nibh eu eget et lacus. Elementum placerat aenean'}
          </p>
        </div>

        <!-- Buttons -->
        <div class="item-action-btns">
          <button class="btn-add-cart">Add to cart</button>
          <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>

    </div>
  `;
}

// ---- Related Product Card (compact) ----
function renderRelatedCard(product) {
  return `
    <a class="product-card-link" href="/src/pages/Item-Details/Item-Details.html?id=${product.id}">
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" onerror="this.style.opacity='0'">
          <button class="favorite-btn">
            <i data-lucide="heart" class="icon-heart"></i>
          </button>
        </div>
        <div class="product-info">
          <p class="product-price">${product.price}$</p>
          <div class="product-rating">
            <i data-lucide="star" class="icon-star"></i>
            <span>${product.rating || '4.5'}</span>
          </div>
        </div>
        <div class="product-footer">
          <p class="product-name" title="${product.name}">${product.name}</p>
          <button class="add-to-cart" onclick="event.preventDefault()">Add to cart</button>
        </div>
      </div>
    </a>
  `;
}

// ---- Related Items Section ----
function renderRelatedItems(products) {
  const cards = products.map(renderRelatedCard).join('');
  return `
    <div class="related-section">
      <div class="section-header">
        <h2 class="section-title">Related Items</h2>
        <a href="#" class="view-all">View All</a>
      </div>
      <div class="related-items-grid">
        ${cards}
      </div>
    </div>
  `;
}

// ---- Review Card ----
function renderReviewCard({ name, avatar, rating, text }) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    `<i data-lucide="star"></i>`
  ).join('');

  return `
    <div class="review-card">
      <div class="review-avatar">
        <img src="${avatar}" alt="${name}" onerror="this.parentElement.style.background='#ccc'">
      </div>
      <div class="review-content">
        <span class="review-name">${name}</span>
        <div class="review-stars">${stars}</div>
        <p class="review-text">${text}</p>
      </div>
    </div>
  `;
}

// ---- Reviews Section ----
function renderReviews(reviews) {
  const cards = reviews.map(renderReviewCard).join('');
  return `
    <div class="reviews-section">
      <div class="section-header">
        <h2 class="section-title">Reviews</h2>
        <a href="#" class="view-all">View All</a>
      </div>
      ${cards}
    </div>
  `;
}

// ---- Interactivity ----
function attachInteractivity() {
  // Color swatches
  document.querySelectorAll('.color-swatch').forEach((swatch) => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch').forEach((s) => s.classList.remove('active'));
      swatch.classList.add('active');
    });
  });

  // Size buttons
  document.querySelectorAll('.size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Thumbnails
  document.querySelectorAll('.item-thumbnail').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.item-thumbnail').forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
      const imgSrc = thumb.querySelector('img')?.src;
      const mainImg = document.getElementById('main-product-img');
      if (mainImg && imgSrc) {
        mainImg.src = imgSrc;
      }
    });
  });

  // Wishlist heart toggle
  document.querySelector('.item-wishlist-btn')?.addEventListener('click', function () {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    icon?.setAttribute('fill', this.classList.contains('active') ? '#e74c3c' : 'none');
  });
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const badge = document.querySelector('.notification-badge');
  if (badge) {
    badge.style.display = cart.length > 0 ? 'block' : 'none';
  }
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `
    <div class="toast-icon">
      <i data-lucide="shopping-cart" style="width: 18px; height: 18px;"></i>
    </div>
    <span class="toast-message">${message}</span>
  `;
  
  lucide.createIcons();
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Hide toast after 3s
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function addToCart(product, selectedColor, selectedSize) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Create a unique key for the item based on ID, color, and size
  const cartItemId = `${product.id}-${selectedColor}-${selectedSize}`;
  
  const existing = cart.find(item => item.cartItemId === cartItemId);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ 
      ...product, 
      cartItemId,
      selectedColor, 
      selectedSize, 
      quantity: 1 
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`${product.name} (${selectedColor}, ${selectedSize}) added to cart!`);
}

// ---- INIT ----
async function init() {
  const app = document.getElementById('app');

  // Load products directly from public/data.json
  const res = await fetch('./data.json');
  const products = await res.json();

  // Read product ID from URL: ?id=3
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);

  // Find the matching product; fall back to first if ID not found
  const product = (id && products.find(p => p.id === id)) || products[0];

  // Related: up to 4 products that are NOT the current one
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  // Mock reviews
  const reviews = [
    {
      name: 'assistant',
      avatar: './src/assets/offer-people.png',
      rating: 5,
      text: 'Very Good Product',
    },
    {
      name: 'assistant',
      avatar: './src/assets/offer-people.png',
      rating: 5,
      text: 'Very Good Product',
    },
  ];

  app.innerHTML = `
    ${renderHeader()}
    ${renderItemDetail(product)}
    ${renderRelatedItems(related)}
    ${renderReviews(reviews)}
  `;

  // Initialize Lucide icons (lucide global is set by CDN script in Item-Details.html)
  lucide.createIcons();
  updateCartBadge();

  // Attach interactive behaviour
  attachInteractivity();

  // Add to cart listeners
  document.querySelector('.btn-add-cart')?.addEventListener('click', () => {
    const selectedColor = document.querySelector('.color-swatch.active')?.dataset.color || product.colors[0];
    const selectedSize = document.querySelector('.size-btn.active')?.dataset.size || 'M';
    addToCart(product, selectedColor, selectedSize);
  });
  
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card-link');
      const url = new URL(card.href);
      const prodId = parseInt(url.searchParams.get('id'));
      const prod = products.find(p => p.id === prodId);
      if (prod) {
        // Default choices for quick add
        addToCart(prod, prod.colors[0], 'M');
      }
    });
  });
}

init();
