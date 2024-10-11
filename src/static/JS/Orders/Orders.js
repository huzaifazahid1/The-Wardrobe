let orders = [];
let filteredOrders = [];

// Fetch the orders data from the JSON file
fetch('/static/JSON/Orders_Data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load Orders_Data.json: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    orders = data.orders;
    filteredOrders = [...orders];
    renderOrders();
  })
  .catch(error => {
    console.error('Error fetching order data:', error);
  });

function toggleDetails(sectionElement, toggleIcon) {
  sectionElement.classList.toggle('hidden');
  toggleIcon.querySelector('svg').classList.toggle('rotate-180');
}

function createProductElement(product) {
  const template = document.getElementById('productItemTemplate');
  const productElement = template.content.cloneNode(true);

  productElement.querySelector('.product-image').src = product.image;
  productElement.querySelector('.product-image').alt = product.productName;
  productElement.querySelector('.product-name').textContent = product.productName;
  productElement.querySelector('.product-size').textContent = `Size: ${product.size}`;
  productElement.querySelector('.product-quantity').textContent = `Qty: ${product.quantity}`;

  return productElement;
}

function handleTrackOrder(orderId) {
  window.location.href = `/User/Orders/Track/`;
}

function createOrderElement(order) {
  const template = document.getElementById('orderItemTemplate');
  const orderElement = template.content.cloneNode(true);

  orderElement.querySelector('.order-date').textContent = `Placed on: ${order.date}`;
  const statusElement = orderElement.querySelector('.order-status');
  statusElement.textContent = order.status;
  statusElement.classList.add(`bg-${order.statusColor}-100`, `text-${order.statusColor}-600`);

  orderElement.querySelector('.order-id').textContent = `Order ID: ${order.id}`;
  orderElement.querySelector('.order-paymentMethod').textContent = order.paymentMethod;
  orderElement.querySelector('.order-totalAmount').textContent = order.totalAmount;

  const productsList = orderElement.querySelector('.products-list');

  order.products.forEach(product => {
    const productElement = createProductElement(product);
    productsList.appendChild(productElement);
  });

  const additionalDetails = orderElement.querySelector('.additional-details');
  const expandButton = orderElement.querySelector('.expand-btn');

  const orderDetailsButton = orderElement.querySelector('.details-btn');
  [expandButton, orderDetailsButton].forEach(button => {
    button.addEventListener('click', () => toggleDetails(additionalDetails, expandButton));
  });

  const trackButton = orderElement.querySelector('.track-btn');
  trackButton.addEventListener('click', () => handleTrackOrder(order.id));

  return orderElement;
}

function renderOrders() {
  const ordersContainer = document.getElementById('ordersList');
  ordersContainer.innerHTML = '';

  filteredOrders.forEach(order => {
    const orderElement = createOrderElement(order);
    ordersContainer.appendChild(orderElement);
  });
}

function filterOrders() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  filteredOrders = orders.filter(order =>
    order.products.some(product =>
      product.productName.toLowerCase().includes(searchInput) ||
      order.status.toLowerCase().includes(searchInput) ||
      order.shippingAddress.toLowerCase().includes(searchInput) ||
      order.id.toString().includes(searchInput)
    )
  );
  renderOrders();
}

function setupEventListeners() {
  const searchInputElement = document.getElementById('searchInput');
  if (searchInputElement) {
    searchInputElement.addEventListener('input', filterOrders);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});