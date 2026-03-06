
function renderHeader() {
  return `
    <header class="header">
      <div class="logo">
        <a href="./index.html" style="text-decoration: none; color: inherit;">LOGO</a>
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
        <a href="./src/pages/Cart/cart.html" class="icon-btn" style="color: inherit;">
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

function renderOffer() {
  return `
    <section class="offer-banner">
      <div class="offer-content">
        <h1>New Year Sales</h1>
        <h2>25% off</h2>
        <div class="countdown">
          <div class="timer-box"><p>02 D</p></div>
          <div class="timer-box"><p>09 H</p></div>
          <div class="timer-box"><p>24 M</p></div>
        </div>
      </div>
      <div class="offer-image">
        <div class="offer-image-inner">
          <img src="/src/assets/offer-people.png" alt="Offer Image">
        </div>
      </div>
    </section>
  `;
}

function renderProductCard(product) {
  return `
    <a class="product-card-link" href="/src/pages/Item-Details/Item-Details.html?id=${product.id}">
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="" onerror="this.style.opacity='0'">
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

function renderSection(title, products) {
  return `
    <div class="grid-header">
      <h2 class="section-title">${title}</h2>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="product-grid">
      ${products.map(product => renderProductCard(product)).join('')}
    </div>
  `;
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

async function init() {
  const app = document.getElementById('app');

  // Load products directly from public/data.json
  const res = await fetch('./data.json');
  const products = await res.json();

  const fashionProducts = products.filter(p => p.tags.includes('Apparel') || p.tags.includes('Dress') || p.tags.includes('Cotton'));
  const shoeProducts = products.filter(p => p.tags.includes('Footwear'));
  const trendingProducts = products.slice(0, 4); // First 4 as trending for demo
  const trendingShoes = shoeProducts.slice(0, 4);

  app.innerHTML = `
    ${renderHeader()}
    ${renderOffer()}
    ${renderSection('New Fashion', fashionProducts.slice(0, 4))}
    ${renderSection('New Shoes', shoeProducts.slice(0, 4))}
    ${renderSection('Trending Fashion', trendingProducts)}
    ${renderSection('Trending Shoes', trendingShoes)}
  `;

  // Initialize Lucide icons (lucide global is set by CDN script in index.html)
  lucide.createIcons();
  updateCartBadge();

  // Add listeners for add to cart buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card-link');
      const url = new URL(card.href);
      const id = parseInt(url.searchParams.get('id'));
      const product = products.find(p => p.id === id);
      if (product) {
        // Default choices for quick add on home page
        addToCart(product, product.colors[0], 'M');
      }
    });
  });
}

init();
