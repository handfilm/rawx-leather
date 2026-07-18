/* ============================================================
   RAWx LAB — APP.JS
   পেজ জুড়ে শেয়ার হওয়া সব ইন্টারঅ্যাকশন এখানে।
   নোট: এটি একটি স্ট্যাটিক প্রোটোটাইপ — cart মেমরিতে থাকে,
   পেজ রিলোড করলে রিসেট হয়ে যাবে (কোনো ব্যাকএন্ড নেই)।
   ============================================================ */

const RAWX_CART = { count: 0 };

/* ---------- boot / sidebar / topbar wiring, runs on every page ---------- */
function rawxInitChrome(activeCategoryId){
  const menuBtn = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  if(menuBtn && sidebar && overlay){
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    });
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    });
  }

  const navEl = document.getElementById("side-nav-list");
  if(navEl){
    navEl.innerHTML = RAWX_CATEGORIES.map(c => `
      <a class="side-link${c.id===activeCategoryId ? ' active':''}" href="shop.html?cat=${c.id}">
        <span class="side-link-idx">${c.code}</span>
        <span class="side-link-name">${c.name}</span>
      </a>
    `).join("");
  }

  const statTotal = document.getElementById("stat-total");
  if(statTotal) statTotal.textContent = RAWX_PRODUCTS.length;
  const statCats = document.getElementById("stat-cats");
  if(statCats) statCats.textContent = RAWX_CATEGORIES.length;

  updateCartBadge();
}

function updateCartBadge(){
  document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = RAWX_CART.count);
}

function rawxAddToCart(name){
  RAWX_CART.count += 1;
  updateCartBadge();
  rawxToast(`${name.toUpperCase()} — বোর্ডে যোগ হয়েছে`);
}

function rawxToast(msg){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(rawxToast._t);
  rawxToast._t = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- image fallback: if a real photo isn't present at the given
   path yet, quietly hide the <img> and let the CSS swatch texture behind
   it show through instead — no broken-image icon. ---------- */
function rawxImgFail(imgEl){
  imgEl.style.display = "none";
  const parent = imgEl.closest("[data-media]");
  if(parent) parent.classList.add("img-fallback");
}

/* ---------- hero slider (6 slides, autoplay + dots + arrows) ---------- */
function rawxInitHeroSlider(containerId, slides){
  const root = document.getElementById(containerId);
  if(!root || !slides || !slides.length) return;

  root.innerHTML = `
    <div class="hero-slides">
      ${slides.map((s,i) => `
        <div class="hero-slide${i===0 ? ' active':''}" data-media style="--sw1:${s.swatch[0]};--sw2:${s.swatch[1]}">
          <img src="${s.image}" alt="" onerror="rawxImgFail(this)">
          <div class="hero-slide-scrim"></div>
          <div class="hero-slide-copy wrap">
            <div class="hero-tag">${s.tag}</div>
            <h1 class="hero-title">${s.title}</h1>
            <p class="hero-sub">${s.sub}</p>
            <div class="hero-cta-row">
              <a href="${s.ctaHref}" class="btn btn-primary">${s.ctaText} <span class="arrow">→</span></a>
              <a href="about.html" class="btn btn-ghost">The Workshop <span class="arrow">→</span></a>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="hero-arrows">
      <button class="hero-arrow" id="hero-prev" aria-label="Previous slide">←</button>
      <button class="hero-arrow" id="hero-next" aria-label="Next slide">→</button>
    </div>
    <div class="hero-dots" id="hero-dots">
      ${slides.map((s,i) => `<button class="hero-dot${i===0?' active':''}" data-idx="${i}" aria-label="Slide ${i+1}"></button>`).join("")}
    </div>
  `;

  const slideEls = root.querySelectorAll(".hero-slide");
  const dotEls = root.querySelectorAll(".hero-dot");
  let current = 0;
  let timer = null;
  const AUTOPLAY_MS = 6000;

  function go(idx){
    current = (idx + slideEls.length) % slideEls.length;
    slideEls.forEach((el,i) => el.classList.toggle("active", i===current));
    dotEls.forEach((el,i) => el.classList.toggle("active", i===current));
  }
  function next(){ go(current+1); }
  function prev(){ go(current-1); }
  function start(){ stop(); timer = setInterval(next, AUTOPLAY_MS); }
  function stop(){ if(timer) clearInterval(timer); }

  root.querySelector("#hero-next").addEventListener("click", () => { next(); start(); });
  root.querySelector("#hero-prev").addEventListener("click", () => { prev(); start(); });
  dotEls.forEach(dot => dot.addEventListener("click", () => { go(Number(dot.dataset.idx)); start(); }));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);

  start();
}

/* ---------- hide-tag card renderer (signature product card) ---------- */
function rawxTagCard(p){
  const [sw1, sw2] = p.swatch;
  return `
    <div class="hide-tag">
      <a class="hide-tag-link" href="product.html?id=${p.id}" aria-label="${p.name}"></a>
      <div class="hide-tag-head">
        <span class="hide-tag-code">${p.batch}</span>
        <span>${p.colorway}</span>
      </div>
      <div class="hide-tag-swatch" data-media style="--sw1:${sw1};--sw2:${sw2}">
        <img src="${p.image}" alt="" onerror="rawxImgFail(this)">
        <span>${rawxCategoryLabel(p.category)}</span>
      </div>
      <div class="hide-tag-name">${p.name}</div>
      <div class="hide-tag-spec">
        <div><b>Material —</b> ${p.material}</div>
        <div><b>Origin —</b> ${p.origin}</div>
      </div>
      <div class="hide-tag-foot">
        <span class="hide-tag-price">৳${p.price.toLocaleString('en-IN')}</span>
        <button class="hide-tag-btn" onclick="rawxAddToCart('${p.name.replace(/'/g,"")}')">+ BOARD</button>
      </div>
    </div>
  `;
}

function rawxRenderGrid(el, list){
  if(!el) return;
  if(!list.length){
    el.outerHTML = `<div class="empty-state" id="${el.id}">NO ITEMS MATCH THIS FILTER // চেষ্টা করুন ভিন্ন ক্যাটাগরি বা সার্চ টার্ম দিয়ে</div>`;
    return;
  }
  el.innerHTML = list.map(rawxTagCard).join("");
}
