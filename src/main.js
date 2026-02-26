async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3001/api/products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

function renderHeader() {
  return `
    <header class="header">
      <div class="logo">LOGO</div>
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
        <div class="icon-btn">
          <i data-lucide="shopping-cart" class="icon-nav"></i>
        </div>
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
          <span>Welcome Mohamed Ehab</span>
        </div>
        <div style="margin-left: 5px;">
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
        <button class="add-to-cart">Add to cart</button>
      </div>
    </div>
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

async function init() {
  const app = document.getElementById('app');
  const products = await fetchProducts();

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

  // Initialize Lucide icons
  lucide.createIcons();
}

init();
