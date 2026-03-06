import"./style-DIFPrF_W.js";const f={Black:"#2C3E50",White:"#FFFFFF",Navy:"#001F5B",Brown:"#6B3F21",Red:"#E74C3C",Grey:"#9B9B9B",Blue:"#1F54EB","Light Blue":"#26B5CE","Dark Blue":"#003580",Yellow:"#F1C40F",Floral:"#E91E8C",Olive:"#6B7A3B",Khaki:"#C3A882",Purple:"#8E44AD",Green:"#27AE60",Pink:"#FF69B4",Gold:"#FFD700",Straw:"#D2A96A",Beige:"#F5F0E1",Tan:"#D2B48C","Light Grey":"#D3D3D3"};function m(){return`
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
  `}function I(t){const c=t.colors||["Black","White","Grey"],l=["S","M","L"],o=c.map(e=>`
    <div 
      class="cart-color-dot ${t.selectedColor===e?"active":""}" 
      style="background-color: ${f[e]||"#ccc"};"
      data-id="${t.cartItemId}"
      data-color="${e}"
      title="${e}"
    ></div>
  `).join(""),u=l.map(e=>`
    <div 
      class="cart-size-badge ${t.selectedSize===e?"active":""}"
      data-id="${t.cartItemId}"
      data-size="${e}"
    >${e}</div>
  `).join("");return`
    <div class="cart-item" data-id="${t.cartItemId}">
      <div class="item-main-info">
        <div class="item-image-container">
          <img src="${t.image}" alt="${t.name}">
          <div class="brand-logo">
             <img src="../../../assets/offer-people.png" alt="brand" style="width: 100%; height: 100%; border-radius: 50%;">
          </div>
        </div>
        <div class="item-details">
          <h3 class="item-name">${t.name}</h3>
          <p class="item-price">$${t.price.toFixed(2)}</p>
          <div class="item-options-selection">
            <div class="item-option-row">
              <span class="option-label">Color:</span>
              <div class="cart-color-swatches">${o}</div>
            </div>
            <div class="item-option-row">
              <span class="option-label">Size:</span>
              <div class="cart-size-options">${u}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quantity-controls">
        <button class="qty-btn plus" data-id="${t.cartItemId}">
          <i data-lucide="plus"></i>
        </button>
        <span class="qty-value">${t.quantity||1}</span>
        <button class="qty-btn minus" data-id="${t.cartItemId}">
          <i data-lucide="minus"></i>
        </button>
      </div>
    </div>
  `}function b(){return`
    <div class="cart-page-header">
      <h1 class="page-title">Cart</h1>
    </div>
    <div class="empty-cart-container" style="padding: 50px 0;">
      <div class="empty-state-visual" style="max-width: 516px; margin: 0 auto;">
        <img src="../../../assets/no-orders.png" alt="No orders" style="width: 100%; height: auto;">
      </div>
      <h1 class="no-orders-text">No orders</h1>
      <button class="btn-continue-shopping" onclick="window.location.href='../../../index.html'" style="margin-top: 20px; padding: 15px 40px; border-radius: 40px; background: var(--primary); color: white; border: none; font-size: 24px; font-weight: 700; cursor: pointer;">Start Shopping</button>
    </div>
  `}function S(t){if(t.length===0)return b();const c=t.reduce((e,a)=>e+a.price*(a.quantity||1),0),l=5.99,o=c+l,u=t.map(e=>`
    <div class="detail-row item-summary-line">
      <span class="item-name-qty">${e.name} x${e.quantity||1}</span>
      <span class="value">$${(e.price*(e.quantity||1)).toFixed(2)}</span>
    </div>
  `).join("");return`
    <div class="cart-page-header">
      <h1 class="page-title">Cart</h1>
      <span class="items-count">${t.length} items at cart</span>
    </div>
    <div class="cart-layout">
      <div class="cart-items-list">
        ${t.map(I).join("")}
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
          <div class="items-detailed-list">
            ${u}
          </div>
          <hr class="summary-divider">
          <div class="detail-row">
            <span>Sub Total Product</span>
            <span class="value">$${c.toFixed(2)}</span>
          </div>
          <div class="detail-row">
            <span>Shiping</span>
            <span class="value">$${l.toFixed(2)}</span>
          </div>
          <hr class="summary-divider">
          <div class="detail-row total">
            <span>Total</span>
            <span class="value total-value">$${o.toFixed(2)}</span>
          </div>
        </div>
        <div class="summary-actions">
          <button class="btn-continue">Continue Shopping</button>
          <button class="btn-pay">Pay Now</button>
        </div>
      </div>
    </div>
  `}function $(){return localStorage.removeItem("cart"),`
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
  `}function h(){const t=JSON.parse(localStorage.getItem("cart")||"[]"),c=document.querySelector(".notification-badge");c&&(c.style.display=t.length>0?"block":"none")}async function w(){const t=document.getElementById("app");function c(){const o=JSON.parse(localStorage.getItem("cart")||"[]");t.innerHTML=`
      ${m()}
      ${S(o)}
      <div class="floating-chat">
        <i data-lucide="message-square-more"></i>
      </div>
    `,lucide.createIcons(),h(),l()}function l(){const o=document.querySelector(".btn-pay");o&&o.addEventListener("click",()=>{t.innerHTML=`
          ${m()}
          ${$()}
        `,lucide.createIcons(),h()}),document.querySelectorAll(".btn-continue").forEach(a=>{a.addEventListener("click",()=>{window.location.href="../../../index.html"})}),document.querySelectorAll(".cart-color-dot").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.id,s=a.dataset.color;e(n,"selectedColor",s)})}),document.querySelectorAll(".cart-size-badge").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.id,s=a.dataset.size;e(n,"selectedSize",s)})});function e(a,n,s){let i=JSON.parse(localStorage.getItem("cart")||"[]");const d=i.findIndex(r=>r.cartItemId===a);if(d>-1){const r=i[d];r[n]=s;const p=`${r.id}-${r.selectedColor}-${r.selectedSize}`,v=i.findIndex((g,y)=>g.cartItemId===p&&y!==d);v>-1?(i[v].quantity+=r.quantity,i.splice(d,1)):r.cartItemId=p,localStorage.setItem("cart",JSON.stringify(i)),c()}}document.querySelectorAll(".qty-btn.plus").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.id;let s=JSON.parse(localStorage.getItem("cart")||"[]");const i=s.find(d=>d.cartItemId===n);i&&(i.quantity=(i.quantity||1)+1,localStorage.setItem("cart",JSON.stringify(s)),c())})}),document.querySelectorAll(".qty-btn.minus").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.id;let s=JSON.parse(localStorage.getItem("cart")||"[]");const i=s.findIndex(d=>d.cartItemId===n);i>-1&&((s[i].quantity||1)>1?s[i].quantity--:s.splice(i,1),localStorage.setItem("cart",JSON.stringify(s)),c())})})}c()}w();
