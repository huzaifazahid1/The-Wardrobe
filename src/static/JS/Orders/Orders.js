const orders = [
  {
    id: 1,
    date: '2024-10-04',
    status: 'In Transit',
    statusColor: 'blue',
    estimatedDelivery: '2024-10-08',
    shippingAddress: '123 Main St, City',
    paymentMethod: 'Credit Card',
    totalAmount: '299.97',
    products: [
      {
        productName: 'Slim Fit Denim Jacket',
        size: 'M',
        quantity: 1,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      },
      {
        productName: 'Cotton Crew Neck T-shirt',
        size: 'L',
        quantity: 2,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      },
      {
        productName: 'Leather Ankle Boots',
        size: '42',
        quantity: 1,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      }
    ]
  },
  {
    id: 2,
    date: '2024-10-02',
    status: 'Delivered',
    statusColor: 'green',
    estimatedDelivery: '2024-10-05',
    shippingAddress: '456 Another St, City',
    paymentMethod: 'PayPal',
    totalAmount: '199.98',
    products: [
      {
        productName: 'Classic Black Hoodie',
        size: 'L',
        quantity: 2,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      },
      {
        productName: 'Distressed Blue Jeans',
        size: '32',
        quantity: 1,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      }
    ]
  },
  {
    id: 3,
    date: '2024-10-01',
    status: 'Processing',
    statusColor: 'yellow',
    estimatedDelivery: '2024-10-07',
    shippingAddress: '789 New St, City',
    paymentMethod: 'Debit Card',
    totalAmount: '299.97',
    products: [
      {
        productName: 'Woolen Scarf',
        size: 'One Size',
        quantity: 1,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      },
      {
        productName: 'Leather Gloves',
        size: 'L',
        quantity: 1,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      },
      {
        productName: 'Suede Chelsea Boots',
        size: '44',
        quantity: 1,
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458',
      }
    ]
  }
];

let filteredOrders = [...orders];

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
  renderOrders();
  setupEventListeners();
});
