import"./style-DIFPrF_W.js";function m(){return`
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
  `}function g(){return`
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
  `}function $(a){return`
    <a class="product-card-link" href="/src/pages/Item-Details/Item-Details.html?id=${a.id}">
      <div class="product-card">
        <div class="product-image-container">
          <img src="${a.image}" alt="" onerror="this.style.opacity='0'">
          <button class="favorite-btn">
            <i data-lucide="heart" class="icon-heart"></i>
          </button>
        </div>
        <div class="product-info">
          <p class="product-price">${a.price}$</p>
          <div class="product-rating">
            <i data-lucide="star" class="icon-star"></i>
            <span>${a.rating||"4.5"}</span>
          </div>
        </div>
        <div class="product-footer">
          <p class="product-name" title="${a.name}">${a.name}</p>
          <button class="add-to-cart" onclick="event.preventDefault()">Add to cart</button>
        </div>
      </div>
    </a>
  `}function o(a,e){return`
    <div class="grid-header">
      <h2 class="section-title">${a}</h2>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="product-grid">
      ${e.map(t=>$(t)).join("")}
    </div>
  `}function l(){const a=JSON.parse(localStorage.getItem("cart")||"[]"),e=document.querySelector(".notification-badge");e&&(e.style.display=a.length>0?"block":"none")}function b(a){let e=document.querySelector(".toast");e||(e=document.createElement("div"),e.className="toast",document.body.appendChild(e)),e.innerHTML=`
    <div class="toast-icon">
      <i data-lucide="shopping-cart" style="width: 18px; height: 18px;"></i>
    </div>
    <span class="toast-message">${a}</span>
  `,lucide.createIcons(),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show")},3e3)}function y(a,e,t){let i=JSON.parse(localStorage.getItem("cart")||"[]");const c=`${a.id}-${e}-${t}`,n=i.find(d=>d.cartItemId===c);n?n.quantity=(n.quantity||1)+1:i.push({...a,cartItemId:c,selectedColor:e,selectedSize:t,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),l(),b(`${a.name} (${e}, ${t}) added to cart!`)}async function w(){const a=document.getElementById("app"),t=await(await fetch("./data.json")).json(),i=t.filter(s=>s.tags.includes("Apparel")||s.tags.includes("Dress")||s.tags.includes("Cotton")),c=t.filter(s=>s.tags.includes("Footwear")),n=t.slice(0,4),d=c.slice(0,4);a.innerHTML=`
    ${m()}
    ${g()}
    ${o("New Fashion",i.slice(0,4))}
    ${o("New Shoes",c.slice(0,4))}
    ${o("Trending Fashion",n)}
    ${o("Trending Shoes",d)}
  `,lucide.createIcons(),l(),document.querySelectorAll(".add-to-cart").forEach(s=>{s.addEventListener("click",v=>{v.preventDefault();const u=s.closest(".product-card-link"),p=new URL(u.href),f=parseInt(p.searchParams.get("id")),r=t.find(h=>h.id===f);r&&y(r,r.colors[0],"M")})})}w();
