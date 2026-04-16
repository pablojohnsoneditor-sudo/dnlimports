/* ═══════════════════════════════════════
   DANIEL IMPORTS — Shared Store
   Gerencia produtos e carrinho via localStorage
   ═══════════════════════════════════════ */

const Store = (() => {

  // ── PRODUCTS ──────────────────────────
  const PRODUCTS = [
    { id: 1,  name: "Camisa Brasil Copa do Mundo 2026 Home I Titular Torcedor Nike Amarelo", category: "COPA DO MUNDO 2026", brand: "Nike", price: 189.90, oldPrice: 219.90, badge: "Lançamento", badgeType: "badge-destaque", rating: 4.8, reviews: 214, stock: 8,  img: "https://via.placeholder.com/600x600/003087/FFD700?text=Brasil+2026+Home",    tags: ["brasil","seleção","copa","amarelo","nike","torcedor"] },
    { id: 2,  name: "Camisa Brasil Copa do Mundo 2026 Away II Reserva Torcedor Nike Azul", category: "COPA DO MUNDO 2026", brand: "Nike", price: 189.90, oldPrice: 219.90, badge: "Lançamento", badgeType: "badge-destaque", rating: 4.7, reviews: 187, stock: 12, img: "https://via.placeholder.com/600x600/001F6E/00D1F7?text=Brasil+2026+Away",   tags: ["brasil","seleção","copa","azul","nike","torcedor"] },
    { id: 3,  name: "Camisa Brasil Copa do Mundo 2026 Home I Titular Jogador Nike Amarelo", category: "COPA DO MUNDO 2026", brand: "Nike", price: 239.90, oldPrice: 279.90, badge: "Premium",    badgeType: "badge-premium",  rating: 4.9, reviews: 95,  stock: 5,  img: "https://via.placeholder.com/600x600/003087/FFD700?text=Brasil+Jogador",    tags: ["brasil","seleção","copa","amarelo","nike","jogador"] },
    { id: 4,  name: "Camisa Brasil Copa 2026 Away II Jogador Nike Azul e Preto",            category: "COPA DO MUNDO 2026", brand: "Nike", price: 239.90, oldPrice: 279.90, badge: null,         badgeType: null,             rating: 4.8, reviews: 72,  stock: 6,  img: "https://via.placeholder.com/600x600/001229/00D1F7?text=Brasil+Away+Jogador", tags: ["brasil","seleção","copa","azul","nike","jogador"] },
    { id: 5,  name: "Camisa Brasil Copa do Mundo 2026 Home I Feminina Torcedor Nike",       category: "Feminino",          brand: "Nike", price: 189.90, oldPrice: null,    badge: "Feminino",   badgeType: "badge-novo",     rating: 4.7, reviews: 63,  stock: 14, img: "https://via.placeholder.com/600x600/003087/FFD700?text=Brasil+Feminina",   tags: ["brasil","seleção","feminino","amarelo","nike"] },
    { id: 6,  name: "Camisa Brasil Copa do Mundo 2026 Away II Feminina Torcedor Nike Azul", category: "Feminino",          brand: "Nike", price: 189.90, oldPrice: null,    badge: "Feminino",   badgeType: "badge-novo",     rating: 4.6, reviews: 41,  stock: 9,  img: "https://via.placeholder.com/600x600/001F6E/FFFFFF?text=Brasil+Fem+Away",   tags: ["brasil","seleção","feminino","azul","nike"] },
    { id: 7,  name: "Camisa Goleiro Seleção Brasil Copa 2026 Masculino Nike - Verde Água",  category: "COPA DO MUNDO 2026", brand: "Nike", price: 209.90, oldPrice: null,    badge: null,         badgeType: null,             rating: 4.7, reviews: 55,  stock: 7,  img: "https://via.placeholder.com/600x600/00B09B/FFFFFF?text=Goleiro+Brasil",    tags: ["brasil","seleção","goleiro","verde","nike"] },
    { id: 8,  name: "Camisa Brasil Seleção Treinamento 2026/27 Copa do Mundo Jordan",       category: "COPA DO MUNDO 2026", brand: "Nike", price: 209.90, oldPrice: 239.90, badge: "Oferta",     badgeType: "badge-oferta",   rating: 4.5, reviews: 88,  stock: 20, img: "https://via.placeholder.com/600x600/FFD700/003087?text=Brasil+Treino",     tags: ["brasil","seleção","treino","amarelo","jordan","nike"] },
    { id: 9,  name: "Camisa Brasil Treinamento 2026/27 Jordan Preta (TODOS OS PATROCÍNIOS)",category: "COPA DO MUNDO 2026", brand: "Nike", price: 289.90, oldPrice: null,    badge: "Premium",    badgeType: "badge-premium",  rating: 4.9, reviews: 44,  stock: 3,  img: "https://via.placeholder.com/600x600/111111/FFD700?text=Brasil+Jordan+Preta", tags: ["brasil","seleção","treino","preto","jordan","nike","premium"] },
    { id: 10, name: "Camisa Brasil Treinamento 2026/27 Copa do Mundo Jordan Preta",         category: "COPA DO MUNDO 2026", brand: "Nike", price: 209.90, oldPrice: 249.90, badge: null,         badgeType: null,             rating: 4.6, reviews: 67,  stock: 11, img: "https://via.placeholder.com/600x600/1a1a1a/00D1F7?text=Brasil+Jordan+Preta", tags: ["brasil","seleção","treino","preto","jordan","nike"] },
    { id: 11, name: "Camisa Seleção Brasileira Goleiro Manga Longa 2026/27 Torcedor Nike",  category: "Seleções",          brand: "Nike", price: 289.90, oldPrice: 319.90, badge: null,         badgeType: null,             rating: 4.7, reviews: 33,  stock: 4,  img: "https://via.placeholder.com/600x600/006B3C/FFFFFF?text=Goleiro+Manga+Longa", tags: ["brasil","seleção","goleiro","manga longa","nike"] },
    { id: 12, name: "Kit Infantil Brasil Away II Copa 2026/27 - Nike Amarelo (camisa+short)",category: "Infantil",         brand: "Nike", price: 209.90, oldPrice: 239.90, badge: "Infantil",   badgeType: "badge-novo",     rating: 4.8, reviews: 102, stock: 16, img: "https://via.placeholder.com/600x600/FFD700/003087?text=Kit+Infantil+Amarelo", tags: ["brasil","infantil","kit","amarelo","nike"] },
    { id: 13, name: "Kit Infantil Brasil Away II Copa 2026/27 - Nike Azul (camisa+short)",  category: "Infantil",         brand: "Nike", price: 209.90, oldPrice: 239.90, badge: "Infantil",   badgeType: "badge-novo",     rating: 4.8, reviews: 98,  stock: 13, img: "https://via.placeholder.com/600x600/001F6E/FFFFFF?text=Kit+Infantil+Azul",   tags: ["brasil","infantil","kit","azul","nike"] },
    { id: 14, name: "Camisa Brasil Copa do Mundo 2026 Away II Reserva Torcedor Nike Vermelho", category: "Seleções",      brand: "Nike", price: 209.90, oldPrice: null,    badge: "Novo",       badgeType: "badge-novo",     rating: 4.6, reviews: 28,  stock: 18, img: "https://via.placeholder.com/600x600/C8102E/FFFFFF?text=Brasil+Away+Vermelho", tags: ["brasil","seleção","vermelho","nike"] },
  ];

  const SIZES = ['PP', 'P', 'M', 'G', 'GG', 'XGG'];

  // ── CART (localStorage) ───────────────
  const CART_KEY = 'dnl_cart';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    _notifyCartChange();
  }

  function addToCart(productId, size, qty = 1) {
    const cart = getCart();
    const key  = `${productId}_${size}`;
    const existing = cart.find(i => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      const p = getProduct(productId);
      if (!p) return false;
      cart.push({ key, productId, size, qty, name: p.name, price: p.price, img: p.img });
    }
    saveCart(cart);
    return true;
  }

  function removeFromCart(key) {
    const cart = getCart().filter(i => i.key !== key);
    saveCart(cart);
  }

  function updateQty(key, qty) {
    const cart = getCart();
    const item = cart.find(i => i.key === key);
    if (item) { item.qty = Math.max(1, qty); saveCart(cart); }
  }

  function clearCart() { saveCart([]); }

  function getCartTotal() {
    return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function getCartCount() {
    return getCart().reduce((sum, i) => sum + i.qty, 0);
  }

  // ── COUPON ────────────────────────────
  const COUPONS = { 'DNL10': 10, 'FRETE': 0, 'COPA20': 20 };
  function applyCoupon(code) {
    const disc = COUPONS[code.toUpperCase()];
    return disc !== undefined ? disc : null;
  }

  // ── PRODUCT HELPERS ───────────────────
  function getProduct(id) { return PRODUCTS.find(p => p.id === Number(id)); }
  function getAllProducts() { return PRODUCTS; }
  function getRelated(id, n = 4) {
    const p = getProduct(id);
    if (!p) return [];
    return PRODUCTS.filter(x => x.id !== p.id && (x.category === p.category || x.brand === p.brand)).slice(0, n);
  }
  function search(q) {
    const lq = q.toLowerCase();
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(lq) ||
      p.category.toLowerCase().includes(lq) ||
      p.brand.toLowerCase().includes(lq) ||
      p.tags.some(t => t.includes(lq))
    );
  }

  // ── CART CHANGE SUBSCRIBERS ───────────
  const _listeners = [];
  function onCartChange(fn) { _listeners.push(fn); }
  function _notifyCartChange() { _listeners.forEach(fn => fn(getCart())); }

  // ── FORMAT HELPERS ────────────────────
  function fmt(value) { return value.toFixed(2).replace('.', ','); }
  function installment(price, n = 12) { return `12x de R$ ${fmt(price / n)} sem juros`; }
  function discount(price, oldPrice) {
    if (!oldPrice) return null;
    return Math.round((1 - price / oldPrice) * 100);
  }

  // ── RENDER HELPERS ────────────────────
  function renderCard(p, linkPrefix = '') {
    const disc = discount(p.price, p.oldPrice);
    return `
      <div class="product-card">
        <a href="${linkPrefix}produto.html?id=${p.id}">
          <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : ''}
            ${p.stock <= 5 ? `<span class="product-badge badge-oferta" style="top:auto;bottom:10px">Últimas ${p.stock} unid.</span>` : ''}
          </div>
        </a>
        <div class="product-info">
          <div class="product-cat">${p.brand} · ${p.category}</div>
          <a href="${linkPrefix}produto.html?id=${p.id}" class="product-name" title="${p.name}">${p.name}</a>
          <div class="product-stars">★★★★${p.rating >= 4.8 ? '★' : '☆'} <span>(${p.reviews})</span></div>
          <div class="product-price-block">
            <span class="product-price">R$ ${fmt(p.price)}</span>
            ${p.oldPrice ? `<span class="product-price-old">R$ ${fmt(p.oldPrice)}</span>` : ''}
            ${disc ? `<span class="product-discount">-${disc}%</span>` : ''}
          </div>
          <div class="product-installment">${installment(p.price)}</div>
          <div class="product-shipping">🚚 Frete Grátis</div>
          <button class="btn-add" onclick="quickAdd(${p.id}, event)">Adicionar ao Carrinho</button>
        </div>
      </div>`;
  }

  // ── TOAST ─────────────────────────────
  function toast(msg, type = 'success') {
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      el.innerHTML = `<span class="toast-icon">✓</span><span id="toastMsg"></span>`;
      document.body.appendChild(el);
    }
    document.getElementById('toastMsg').textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 3000);
  }

  // ── CART BADGE UPDATE ─────────────────
  function updateBadge() {
    const el = document.getElementById('cartBadge');
    if (el) el.textContent = getCartCount();
  }

  // ── GLOBAL QUICK ADD ──────────────────
  window.quickAdd = function(id, e) {
    if (e) e.preventDefault();
    addToCart(id, 'M'); // tamanho padrão M para quick add
    toast('Produto adicionado ao carrinho!');
    updateBadge();
  };

  // init badge
  document.addEventListener('DOMContentLoaded', updateBadge);

  return {
    PRODUCTS, SIZES,
    getCart, addToCart, removeFromCart, updateQty, clearCart,
    getCartTotal, getCartCount,
    applyCoupon,
    getProduct, getAllProducts, getRelated, search,
    onCartChange, updateBadge,
    fmt, installment, discount,
    renderCard, toast,
  };
})();
