const Store = {
  getCart() { return JSON.parse(localStorage.getItem("aabrooh_cart") || "[]"); },
  setCart(cart) { localStorage.setItem("aabrooh_cart", JSON.stringify(cart)); renderCartBadge(); },
  getWishlist() { return JSON.parse(localStorage.getItem("aabrooh_wishlist") || "[]"); },
  setWishlist(list) { localStorage.setItem("aabrooh_wishlist", JSON.stringify(list)); renderWishlistBadge(); }
};

function addToCart(productId, qty = 1) {
  const cart = Store.getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ id: productId, qty });
  Store.setCart(cart);
  showToast("Added to cart");
  renderCartDrawer();
}

function removeFromCart(productId) {
  const cart = Store.getCart().filter(i => i.id !== productId);
  Store.setCart(cart);
  renderCartDrawer();
}

function toggleWishlist(productId, btn) {
  let list = Store.getWishlist();
  if (list.includes(productId)) {
    list = list.filter(id => id !== productId);
    if (btn) btn.classList.remove("active");
    showToast("Removed from wishlist");
  } else {
    list.push(productId);
    if (btn) btn.classList.add("active");
    showToast("Added to wishlist");
  }
  Store.setWishlist(list);
}

function renderCartBadge() {
  const count = Store.getCart().reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = count);
}

function renderWishlistBadge() {
  const count = Store.getWishlist().length;
  document.querySelectorAll(".wishlist-count").forEach(el => el.textContent = count);
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function loadProductImages() {
  const exts = ["jpg", "jpeg", "png", "webp"];
  document.querySelectorAll("[data-img-id]").forEach(el => {
    const id = el.getAttribute("data-img-id");
    tryExtensions(id, exts, 0, (url) => {
      el.style.backgroundImage = `url('${url}')`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
    });
  });
}
function tryExtensions(id, exts, i, onFound) {
  if (i >= exts.length) return;
  const url = `images/${id}.${exts[i]}`;
  const img = new Image();
  img.onload = () => onFound(url);
  img.onerror = () => tryExtensions(id, exts, i + 1, onFound);
  img.src = url;
}

function renderCartDrawer() {
  const body = document.getElementById("drawerBody");
  const footer = document.getElementById("drawerFoot");
  if (!body || typeof PRODUCTS === "undefined") return;

  const cart = Store.getCart();
  if (cart.length === 0) {
    body.innerHTML = `<div class="empty-state">Your bag is empty.<br>Explore the collection and add something beautiful.</div>`;
    footer.innerHTML = "";
    return;
  }

  let total = 0;
  body.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return "";
    total += p.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-img"></div>
        <div class="cart-item-info">
          <div class="name">${p.name}</div>
          <div class="meta">Qty: ${item.qty} · ₹${p.price}</div>
          <div class="row">
            <span style="font-weight:600;">₹${p.price * item.qty}</span>
            <button class="cart-remove" onclick="removeFromCart('${p.id}')">Remove</button>
          </div>
        </div>
      </div>`;
  }).join("");

  footer.innerHTML = `
    <div class="row"><span>Subtotal</span><span style="font-weight:600;">₹${total}</span></div>
    <a href="${cartWhatsappLink(cart)}" target="_blank" class="btn btn-primary btn-block">Checkout on WhatsApp</a>
  `;
}

function cartWhatsappLink(cart) {
  if (typeof PRODUCTS === "undefined") return "#";
  let text = "Hi AABROOH, I'd like to order:%0A";
  let total = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return;
    total += p.price * item.qty;
    text += `%0A${p.name} x${item.qty} - ₹${p.price * item.qty}`;
  });
  text += `%0A%0ATotal: ₹${total}%0A%0APlease confirm availability and share payment details.`;
  return `https://wa.me/${typeof WHATSAPP_NUMBER !== "undefined" ? WHATSAPP_NUMBER : "917237028850"}?text=${text}`;
}

function openDrawer() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
  renderCartDrawer();
}
function closeDrawer() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartBadge();
  renderWishlistBadge();

  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) cartBtn.addEventListener("click", openDrawer);

  const closeBtn = document.getElementById("drawerClose");
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  const overlay = document.getElementById("overlay");
  if (overlay) overlay.addEventListener("click", closeDrawer);

  const navToggle = document.getElementById("navToggle");
  if (navToggle) navToggle.addEventListener("click", toggleMobileMenu);

  const newsForm = document.getElementById("newsletterForm");
  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Welcome to the AABROOH family ✨");
      newsForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Message sent — we'll reply within 24 hours");
      contactForm.reset();
    });
  }

  const searchInput = document.getElementById("navSearch");
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && searchInput.value.trim()) {
        window.location.href = `shop.html?search=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
});
