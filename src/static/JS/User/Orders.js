// Order data initialization
const orders = [
  {
    id: 1,
    date: '2024-10-04',
    status: 'In Transit',
    statusColor: 'blue',
    productName: 'Product Name',
    size: 'M',
    quantity: 1,
    estimatedDelivery: '2024-10-08',
    shippingAddress: '123 Main St, City',
    image: 'https://th.bing.com/th?id=OIP.IvJa_5_2DRCDHUZFngzmnAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
    paymentMethod: 'Credit Card',
    totalAmount: '99.99'
  },
  {
    id: 2,
    date: '2024-10-02',
    status: 'Delivered',
    statusColor: 'green',
    productName: 'Another Product',
    size: 'L',
    quantity: 2,
    estimatedDelivery: '2024-10-05',
    shippingAddress: '456 Another St, City',
    image: 'https://th.bing.com/th?id=OIP.IvJa_5_2DRCDHUZFngzmnAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
    paymentMethod: 'PayPal',
    totalAmount: '199.98'
  },
  {
    id: 3,
    date: '2024-10-01',
    status: 'Processing',
    statusColor: 'yellow',
    productName: 'Third Product',
    size: 'XL',
    quantity: 3,
    estimatedDelivery: '2024-10-07',
    shippingAddress: '789 New St, City',
    image: 'https://th.bing.com/th?id=OIP.IvJa_5_2DRCDHUZFngzmnAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
    paymentMethod: 'Debit Card',
    totalAmount: '299.97'
  }
];

let filteredOrders = [...orders]; // Start with all orders

// Function to toggle the visibility of order details
function toggleDetails(sectionElement, toggleIcon) {
  sectionElement.classList.toggle('hidden');
  toggleIcon.querySelector('svg').classList.toggle('rotate-180');
}

// Function to create individual order items
function createOrderElement(order) {
  const template = document.getElementById('orderItemTemplate');
  const orderElement = template.content.cloneNode(true);

  // Populate the order details
  orderElement.querySelector('.order-date').textContent = `Placed on: ${order.date}`;
  orderElement.querySelector('.order-status').textContent = order.status;
  orderElement.querySelector('.order-status').classList.add(`bg-${order.statusColor}-100`, `text-${order.statusColor}-600`);
  orderElement.querySelector('.order-image').src = order.image;
  orderElement.querySelector('.order-image').alt = order.productName;
  orderElement.querySelector('.order-product').textContent = order.productName;
  orderElement.querySelector('.order-size').textContent = `Size: ${order.size}`;
  orderElement.querySelector('.order-quantity').textContent = `Qty: ${order.quantity}`;
  orderElement.querySelector('.order-delivery').textContent = `Estimated Delivery: ${order.estimatedDelivery}`;
  orderElement.querySelector('.order-address').textContent = `Shipping Address: ${order.shippingAddress}`;
  orderElement.querySelector('.order-id').textContent = `Order ID: ${order.id}`;
  orderElement.querySelector('.additional-details .order-id').textContent = `Order ID: ${order.id}`;
  orderElement.querySelector('.additional-details .text-gray-600:nth-child(2)').textContent = `Payment Method: ${order.paymentMethod}`;
  orderElement.querySelector('.additional-details .text-gray-600:nth-child(3)').textContent = `Total Amount: $${order.totalAmount}`;

  const additionalDetails = orderElement.querySelector('.additional-details');
  const expandButton = orderElement.querySelector('.expand-btn');

  // Set up toggle for both expand button and "Order Details" button
  const orderDetailsButton = orderElement.querySelector('.details-btn');
  [expandButton, orderDetailsButton].forEach(button => {
    button.addEventListener('click', () => toggleDetails(additionalDetails, expandButton));
  });

  return orderElement;
}

// Function to render the filtered orders
function renderOrders() {
  const ordersContainer = document.getElementById('ordersList');
  ordersContainer.innerHTML = ''; // Clear existing orders

  filteredOrders.forEach(order => {
    const orderElement = createOrderElement(order);
    ordersContainer.appendChild(orderElement);
  });
}

// Function to filter orders based on the search input
function filterOrders() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  filteredOrders = orders.filter(order =>
    order.productName.toLowerCase().includes(searchInput) ||
    order.status.toLowerCase().includes(searchInput) ||
    order.shippingAddress.toLowerCase().includes(searchInput) ||
    order.id.toString().includes(searchInput)
  );
  renderOrders(); // Re-render the orders after filtering
}

// Event listeners for search functionality
function setupEventListeners() {
  const searchInputElement = document.getElementById('searchInput');
  if (searchInputElement) {
    searchInputElement.addEventListener('input', filterOrders);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderOrders();
  setupEventListeners(); // Attach event listeners once the DOM is fully loaded
});