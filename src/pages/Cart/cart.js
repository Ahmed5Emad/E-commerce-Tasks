
const COLOR_MAP = {
  Black: '#2C3E50', White: '#FFFFFF', Navy: '#001F5B',
  Brown: '#6B3F21', Red: '#E74C3C', Grey: '#9B9B9B',
  Blue: '#1F54EB', 'Light Blue': '#26B5CE', 'Dark Blue': '#003580',
  Yellow: '#F1C40F', Floral: '#E91E8C', Olive: '#6B7A3B',
  Khaki: '#C3A882', Purple: '#8E44AD', Green: '#27AE60',
  Pink: '#FF69B4', Gold: '#FFD700', Straw: '#D2A96A',
  Beige: '#F5F0E1', Tan: '#D2B48C', 'Light Grey': '#D3D3D3',
};

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
        <a href="./cart.html" class="icon-btn" style="color: inherit;">
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

function renderCartItem(item) {
  const productColors = item.colors || ['Black', 'White', 'Grey'];
  const sizes = ['S', 'M', 'L'];

  const colorSwatches = productColors.map(color => `
    <div 
      class="cart-color-dot ${item.selectedColor === color ? 'active' : ''}" 
      style="background-color: ${COLOR_MAP[color] || '#ccc'};"
      data-id="${item.cartItemId}"
      data-color="${color}"
      title="${color}"
    ></div>
  `).join('');

  const sizeBadges = sizes.map(size => `
    <div 
      class="cart-size-badge ${item.selectedSize === size ? 'active' : ''}"
      data-id="${item.cartItemId}"
      data-size="${size}"
    >${size}</div>
  `).join('');

  return `
    <div class="cart-item" data-id="${item.cartItemId}">
      <div class="item-main-info">
        <div class="item-image-container">
          <img src="${item.image}" alt="${item.name}">
          <div class="brand-logo">
             <img src="../../assets/offer-people.png" alt="brand" style="width: 100%; height: 100%; border-radius: 50%;">
          </div>
        </div>
        <div class="item-details">
          <h3 class="item-name">${item.name}</h3>
          <p class="item-price">$${item.price.toFixed(2)}</p>
          <div class="item-options-selection">
            <div class="item-option-row">
              <span class="option-label">Color:</span>
              <div class="cart-color-swatches">${colorSwatches}</div>
            </div>
            <div class="item-option-row">
              <span class="option-label">Size:</span>
              <div class="cart-size-options">${sizeBadges}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quantity-controls">
        <button class="qty-btn plus" data-id="${item.cartItemId}">
          <i data-lucide="plus"></i>
        </button>
        <span class="qty-value">${item.quantity || 1}</span>
        <button class="qty-btn minus" data-id="${item.cartItemId}">
          <i data-lucide="minus"></i>
        </button>
      </div>
    </div>
  `;
}

function renderEmptyCart() {
  return `
    <div class="cart-page-header">
      <h1 class="page-title">Cart</h1>
    </div>
    <div class="empty-cart-container" style="padding: 50px 0;">
      <div class="empty-state-visual" style="max-width: 516px; margin: 0 auto;">
        <img src="../../assets/no-orders.png" alt="No orders" style="width: 100%; height: auto;">
      </div>
      <h1 class="no-orders-text">No orders</h1>
      <button class="btn-continue-shopping" onclick="window.location.href='../../../index.html'" style="margin-top: 20px; padding: 15px 40px; border-radius: 40px; background: var(--primary); color: white; border: none; font-size: 24px; font-weight: 700; cursor: pointer;">Start Shopping</button>
    </div>
  `;
}

function renderCartContent(items) {
  if (items.length === 0) return renderEmptyCart();

  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return `
    <div class="cart-page-header">
      <h1 class="page-title">Cart</h1>
      <span class="items-count">${items.length} items at cart</span>
    </div>
    <div class="cart-layout">
      <div class="cart-items-list">
        ${items.map(renderCartItem).join('')}
      </div>
      <div class="cart-summary">
        <div class="summary-section">
          <h2 class="section-title">Shipping adress</h2>
          <div class="address-row">
            <div class="address-info">
              <i data-lucide="map-pin" class="icon-location"></i>
              <span>USA , New York</span>
            </div>
            <i data-lucide="chevron-right" class="icon-chevron"></i>
          </div>
        </div>
        <div class="summary-section">
          <h2 class="section-title">Payment details</h2>
          <div class="detail-row">
            <span>Sub Total Product</span>
            <span class="value">$${subtotal.toFixed(2)}</span>
          </div>
          <div class="detail-row">
            <span>Shiping</span>
            <span class="value">$${shipping.toFixed(2)}</span>
          </div>
          <hr class="summary-divider">
          <div class="detail-row total">
            <span>Total</span>
            <span class="value total-value">$${total.toFixed(2)}</span>
          </div>
        </div>
        <div class="summary-actions">
          <button class="btn-continue">Continue Shopping</button>
          <button class="btn-pay">Pay Now</button>
        </div>
      </div>
    </div>
  `;
}

function renderOrderConfirmed() {
  localStorage.removeItem('cart');
  return `
    <div class="confirmed-container">
      <div class="confirmed-icon">
        <i data-lucide="check-circle" class="check-icon"></i>
      </div>
      <h1 class="confirmed-title">Order Confirmed</h1>
      <div class="confirmed-actions">
        <button class="btn-track">Track Your Order</button>
        <button class="btn-continue-shopping" onclick="window.location.href='../../../index.html'">Continue Shopping</button>
      </div>
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

async function init() {
  const app = document.getElementById('app');
  
  function refreshPage() {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    app.innerHTML = `
      ${renderHeader()}
      ${renderCartContent(cartItems)}
      <div class="floating-chat">
        <i data-lucide="message-square-more"></i>
      </div>
    `;
    lucide.createIcons();
    updateCartBadge();
    attachListeners();
  }

  function attachListeners() {
    const payBtn = document.querySelector('.btn-pay');
    if (payBtn) {
      payBtn.addEventListener('click', () => {
        app.innerHTML = `
          ${renderHeader()}
          ${renderOrderConfirmed()}
        `;
        lucide.createIcons();
        updateCartBadge();
      });
    }

    const continueBtns = document.querySelectorAll('.btn-continue');
    continueBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = '../../../index.html';
      });
    });

    // Color Selection in Cart
    document.querySelectorAll('.cart-color-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const cartItemId = dot.dataset.id;
        const newColor = dot.dataset.color;
        updateCartItemOption(cartItemId, 'selectedColor', newColor);
      });
    });

    // Size Selection in Cart
    document.querySelectorAll('.cart-size-badge').forEach(badge => {
      badge.addEventListener('click', () => {
        const cartItemId = badge.dataset.id;
        const newSize = badge.dataset.size;
        updateCartItemOption(cartItemId, 'selectedSize', newSize);
      });
    });

    function updateCartItemOption(oldCartItemId, optionKey, newValue) {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const itemIndex = cart.findIndex(i => i.cartItemId === oldCartItemId);
      if (itemIndex > -1) {
        const item = cart[itemIndex];
        item[optionKey] = newValue;
        
        // Update the cartItemId since color/size changed
        const newCartItemId = `${item.id}-${item.selectedColor}-${item.selectedSize}`;
        
        // Check if we already have an item with this new configuration
        const existingIndex = cart.findIndex((i, idx) => i.cartItemId === newCartItemId && idx !== itemIndex);
        
        if (existingIndex > -1) {
          // Merge quantities
          cart[existingIndex].quantity += item.quantity;
          cart.splice(itemIndex, 1);
        } else {
          item.cartItemId = newCartItemId;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        refreshPage();
      }
    }

    // Quantity buttons
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const item = cart.find(i => i.id === id || i.cartItemId === id);
        if (item) {
          item.quantity = (item.quantity || 1) + 1;
          localStorage.setItem('cart', JSON.stringify(cart));
          refreshPage();
        }
      });
    });

    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const itemIndex = cart.findIndex(i => i.id === id || i.cartItemId === id);
        if (itemIndex > -1) {
          if ((cart[itemIndex].quantity || 1) > 1) {
            cart[itemIndex].quantity--;
          } else {
            cart.splice(itemIndex, 1);
          }
          localStorage.setItem('cart', JSON.stringify(cart));
          refreshPage();
        }
      });
    });
  }

  refreshPage();
}

init();
