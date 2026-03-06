import"./style-DIFPrF_W.js";function f(){return`
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
  `}const y={Black:"#2C3E50",White:"#FFFFFF",Navy:"#001F5B",Brown:"#6B3F21",Red:"#E74C3C",Grey:"#9B9B9B",Blue:"#1F54EB","Light Blue":"#26B5CE","Dark Blue":"#003580",Yellow:"#F1C40F",Floral:"#E91E8C",Olive:"#6B7A3B",Khaki:"#C3A882",Purple:"#8E44AD",Green:"#27AE60",Pink:"#FF69B4",Gold:"#FFD700",Straw:"#D2A96A",Beige:"#F5F0E1",Tan:"#D2B48C","Light Grey":"#D3D3D3"};function b(e){const t=e.colors&&e.colors.length?e.colors:["Black","White","Grey"],i=["S","M","L"],s=t.map((a,r)=>`
      <div
        class="color-swatch ${r===0?"active":""}"
        style="background:${y[a]||"#ccc"};"
        title="${a}"
        data-color="${a}"
      ></div>`).join(""),n=i.map(a=>`
      <button class="size-btn ${a==="M"?"active":""}" data-size="${a}">${a}</button>`).join(""),c=[e.image,e.image].map((a,r)=>`
      <div class="item-thumbnail ${r===0?"active":""}" data-index="${r}">
        <img src="${a}" alt="Thumbnail ${r+1}" onerror="this.style.opacity='0'">
      </div>`).join("");return`
    <div class="item-detail-section">

      <!-- Left: Images -->
      <div class="item-images">
        <div class="item-main-image">
          <img id="main-product-img" src="${e.image}" alt="${e.name}" onerror="this.style.opacity='0'">
        </div>
        <div class="item-thumbnails">
          ${c}
        </div>
      </div>

      <!-- Right: Info -->
      <div class="item-info">
        <div class="item-title-row">
          <h1 class="item-name">${e.name}</h1>
          <button class="item-wishlist-btn" aria-label="Add to Wishlist">
            <i data-lucide="heart"></i>
          </button>
        </div>

        <div class="item-price-row">
          <span class="item-price">${e.price}$</span>
          <div class="item-seller-avatar">
            <img src="${e.image}" alt="Seller" onerror="this.parentElement.style.background='#ccc'">
          </div>
        </div>

        <!-- Color & Size -->
        <div class="item-options-row">
          <div class="item-option-group">
            <span class="item-option-label">Color</span>
            <div class="color-swatches" id="color-swatches">
              ${s}
            </div>
          </div>
          <span class="check-size-link">(Check your size)</span>
          <div class="item-option-group">
            <span class="item-option-label">Size</span>
            <div class="size-options" id="size-options">
              ${n}
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="item-description-block">
          <div class="item-desc-title-row">
            <h2 class="item-desc-title">Description</h2>
            <div class="item-rating-badge">
              <i data-lucide="star" class="star-icon"></i>
              <strong>${e.rating||"4.5"}</strong>
              <span style="color:#aaa;">(122 Reviews)</span>
            </div>
          </div>
          <p class="item-desc-text">
            ${e.description||"Lorem ipsum dolor sit amet consectetur. Lacus tempor elementum montes nibh eu eget et lacus. Elementum placerat aenean non euismod non aliquet bibendum amet. Massa ultrices volutpat dignissim id aliquam. Neque id commodo aenean sagittis risus et odio auctor.Lorem ipsum dolor sit amet consectetur. Lacus tempor elementum montes nibh eu eget et lacus. Elementum placerat aenean"}
          </p>
        </div>

        <!-- Buttons -->
        <div class="item-action-btns">
          <button class="btn-add-cart">Add to cart</button>
          <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>

    </div>
  `}function $(e){return`
    <a class="product-card-link" href="./Item-Details.html?id=${e.id}">
      <div class="product-card">
        <div class="product-image-container">
          <img src="${e.image}" alt="${e.name}" onerror="this.style.opacity='0'">
          <button class="favorite-btn">
            <i data-lucide="heart" class="icon-heart"></i>
          </button>
        </div>
        <div class="product-info">
          <p class="product-price">${e.price}$</p>
          <div class="product-rating">
            <i data-lucide="star" class="icon-star"></i>
            <span>${e.rating||"4.5"}</span>
          </div>
        </div>
        <div class="product-footer">
          <p class="product-name" title="${e.name}">${e.name}</p>
          <button class="add-to-cart" onclick="event.preventDefault()">Add to cart</button>
        </div>
      </div>
    </a>
  `}function w(e){return`
    <div class="related-section">
      <div class="section-header">
        <h2 class="section-title">Related Items</h2>
        <a href="#" class="view-all">View All</a>
      </div>
      <div class="related-items-grid">
        ${e.map($).join("")}
      </div>
    </div>
  `}function E({name:e,avatar:t,rating:i,text:s}){const n=Array.from({length:5},(c,a)=>'<i data-lucide="star"></i>').join("");return`
    <div class="review-card">
      <div class="review-avatar">
        <img src="${t}" alt="${e}" onerror="this.parentElement.style.background='#ccc'">
      </div>
      <div class="review-content">
        <span class="review-name">${e}</span>
        <div class="review-stars">${n}</div>
        <p class="review-text">${s}</p>
      </div>
    </div>
  `}function L(e){return`
    <div class="reviews-section">
      <div class="section-header">
        <h2 class="section-title">Reviews</h2>
        <a href="#" class="view-all">View All</a>
      </div>
      ${e.map(E).join("")}
    </div>
  `}function S(){document.querySelectorAll(".color-swatch").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".color-swatch").forEach(t=>t.classList.remove("active")),e.classList.add("active")})}),document.querySelectorAll(".size-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".size-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active")})}),document.querySelectorAll(".item-thumbnail").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".item-thumbnail").forEach(s=>s.classList.remove("active")),e.classList.add("active");const t=e.querySelector("img")?.src,i=document.getElementById("main-product-img");i&&t&&(i.src=t)})}),document.querySelector(".item-wishlist-btn")?.addEventListener("click",function(){this.classList.toggle("active"),this.querySelector("i")?.setAttribute("fill",this.classList.contains("active")?"#e74c3c":"none")})}function v(){const e=JSON.parse(localStorage.getItem("cart")||"[]"),t=document.querySelector(".notification-badge");t&&(t.style.display=e.length>0?"block":"none")}function B(e){let t=document.querySelector(".toast");t||(t=document.createElement("div"),t.className="toast",document.body.appendChild(t)),t.innerHTML=`
    <div class="toast-icon">
      <i data-lucide="shopping-cart" style="width: 18px; height: 18px;"></i>
    </div>
    <span class="toast-message">${e}</span>
  `,lucide.createIcons(),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show")},3e3)}function m(e,t,i){let s=JSON.parse(localStorage.getItem("cart")||"[]");const n=`${e.id}-${t}-${i}`,c=s.find(a=>a.cartItemId===n);c?c.quantity=(c.quantity||1)+1:s.push({...e,cartItemId:n,selectedColor:t,selectedSize:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(s)),v(),B(`${e.name} (${t}, ${i}) added to cart!`)}async function k(){const e=document.getElementById("app"),i=await(await fetch("../../../data.json")).json(),s=new URLSearchParams(window.location.search),n=parseInt(s.get("id"),10),c=n&&i.find(o=>o.id===n)||i[0],a=i.filter(o=>o.id!==c.id).slice(0,4),r=[{name:"assistant",avatar:"../../assets/offer-people.png",rating:5,text:"Very Good Product"},{name:"assistant",avatar:"../../assets/offer-people.png",rating:5,text:"Very Good Product"}];e.innerHTML=`
    ${f()}
    ${b(c)}
    ${w(a)}
    ${L(r)}
  `,lucide.createIcons(),v(),S(),document.querySelector(".btn-add-cart")?.addEventListener("click",()=>{const o=document.querySelector(".color-swatch.active")?.dataset.color||c.colors[0],l=document.querySelector(".size-btn.active")?.dataset.size||"M";m(c,o,l)}),document.querySelectorAll(".add-to-cart").forEach(o=>{o.addEventListener("click",l=>{l.preventDefault();const u=o.closest(".product-card-link"),p=new URL(u.href),h=parseInt(p.searchParams.get("id")),d=i.find(g=>g.id===h);d&&m(d,d.colors[0],"M")})})}k();
