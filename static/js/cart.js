// cart.js - Updated version
// Shopping Cart Data
let cartItems = [];

// Initialize cart
function initCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    try {
      cartItems = JSON.parse(savedCart);
    } catch (e) {
      console.error('Error parsing cart data:', e);
      cartItems = [];
    }
  }
  updateCartUI();
}

// Add item to cart
function addToCart(productId, quantity = 1, productData = null) {
  // If we have product data from the product card
  if (productData) {
    const existingItem = cartItems.find(item => item.id == productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        image: productData.image,
        description: productData.description,
        quantity: quantity
      });
    }
  } else {
    // Try to get product from products object
    const product = window.products ? window.products[productId] : null;
    if (!product) {
      console.error('Product not found:', productId);
      return;
    }

    const existingItem = cartItems.find(item => item.id == productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        quantity: quantity
      });
    }
  }

  saveCart();
  updateCartUI();

  // Show notification if available
  if (typeof showToast === 'function') {
    showToast('Item added to cart!');
  }
}

// Remove item
function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id != productId);
  saveCart();
  updateCartUI();
}

// Update quantity
function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(item => item.id == productId);
  if (item) {
    item.quantity = Math.max(1, Math.min(10, newQuantity));
  }
  saveCart();
  updateCartUI();
}

// Save to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Totals
function calculateCartTotals() {
  let subtotal = 0;
  let itemCount = 0;

  cartItems.forEach(cartItem => {
    subtotal += cartItem.price * cartItem.quantity;
    itemCount += cartItem.quantity;
  });

  const shipping = subtotal > 100 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return {
    itemCount,
    subtotal: subtotal.toFixed(2),
    shipping: shipping.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
}

// Update UI (only runs if elements exist on the page)
function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartTabCount = document.getElementById('cart-tab-count');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const orderSummary = document.getElementById('order-summary');
  const checkoutBtn = document.getElementById('checkout-btn');

  const totals = calculateCartTotals();

  // Update cart counts
  if (cartCount) cartCount.textContent = totals.itemCount;
  if (cartTabCount) cartTabCount.textContent = totals.itemCount;

  // Render cart items
  if (cartItemsContainer) {
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <h3 class="text-xl font-serif mb-4">Your cart is empty</h3>
          <p class="text-gray-600 mb-6">Browse our collections and add some items to your cart</p>
          <a href="index.html" class="minimal-btn px-6 py-3 rounded-sm inline-block">
            Continue Shopping
          </a>
        </div>
      `;
    } else {
      let cartItemsHTML = '';

      cartItems.forEach(cartItem => {
        cartItemsHTML += `
          <div class="cart-item flex items-start" data-id="${cartItem.id}">
            <div class="w-24 h-24 flex-shrink-0 mr-6 image-container">
              <img src="${cartItem.image}" alt="${cartItem.name}" class="w-full h-full object-cover image-highlight">
            </div>
            <div class="flex-grow">
              <h3 class="font-medium text-lg mb-1">${cartItem.name}</h3>
              <p class="text-sm text-gray-600 mb-3">${cartItem.description}</p>
              <p class="text-gray-900 font-medium text-lg mb-3">$${cartItem.price.toFixed(2)}</p>
              <div class="flex items-center">
                <div class="flex items-center mr-8">
                  <button class="quantity-btn" onclick="updateQuantity(${cartItem.id}, ${cartItem.quantity - 1})">-</button>
                  <input type="text" class="quantity-input" value="${cartItem.quantity}"
                         onchange="updateQuantity(${cartItem.id}, parseInt(this.value))">
                  <button class="quantity-btn" onclick="updateQuantity(${cartItem.id}, ${cartItem.quantity + 1})">+</button>
                </div>
                <button class="text-sri-red hover:text-red-800" onclick="removeFromCart(${cartItem.id})">
                  <i class="fas fa-trash mr-1"></i> Remove
                </button>
              </div>
            </div>
          </div>
        `;
      });

      cartItemsContainer.innerHTML = cartItemsHTML;
    }
  }

  // Order summary (only on cart.html)
  if (orderSummary) {
    orderSummary.innerHTML = `
      <div class="flex justify-between">
        <span class="text-gray-600">Subtotal</span>
        <span class="font-medium">$${totals.subtotal}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600">Shipping</span>
        <span class="font-medium">$${totals.shipping}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600">Tax</span>
        <span class="font-medium">$${totals.tax}</span>
      </div>
      <div class="flex justify-between pt-3 border-t border-gray-200 mt-3">
        <span class="text-lg font-bold">Total</span>
        <span class="text-lg font-bold text-sri-green">$${totals.total}</span>
      </div>
    `;
  }

  // Checkout button
  if (checkoutBtn) {
    if (cartItems.length > 0) {
      checkoutBtn.disabled = false;
      checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
      checkoutBtn.disabled = true;
      checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
  }
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-sri-green text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 opacity-0 translate-y-[-20px]';
  notification.textContent = message;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove('opacity-0', 'translate-y-[-20px]');
    notification.classList.add('opacity-100', 'translate-y-0');
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('opacity-100', 'translate-y-0');
    notification.classList.add('opacity-0', 'translate-y-[-20px]');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Tab switching functionality
function setupTabSwitching() {
  const tabs = document.querySelectorAll('.tab');
  const pages = document.querySelectorAll('.page-content');

  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');

        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show active page
        pages.forEach(page => {
          page.classList.remove('active');
          if (page.id === tabName) {
            page.classList.add('active');
          }
        });
      });
    });
  }
}

// Expose globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.initCart = initCart;
window.updateCartUI = updateCartUI;



// Init on load
document.addEventListener('DOMContentLoaded', function() {
  initCart();
  setupTabSwitching();
});
