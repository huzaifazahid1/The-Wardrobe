// Filter Functionality
const searchInput = document.getElementById('search');
const statusFilter = document.getElementById('statusFilter');
const ordersList = document.getElementById('ordersList');
const orders = [
  {
    id: "WD001",
    date: "2023-06-15",
    status: "Delivered",
    total: "$245.00",
    items: [
      { name: "Floral Dress", price: "$120.00", quantity: 1 },
      { name: "Leather Handbag", price: "$125.00", quantity: 1 },
    ],
  },
  {
    id: "WD002",
    date: "2023-07-02",
    status: "In Transit",
    total: "$180.00",
    items: [
      { name: "Denim Jacket", price: "$85.00", quantity: 1 },
      { name: "Sunglasses", price: "$95.00", quantity: 1 },
    ],
  },
  {
    id: "WD003",
    date: "2023-07-10",
    status: "Processing",
    total: "$75.00",
    items: [
      { name: "Summer Scarf", price: "$35.00", quantity: 1 },
      { name: "Straw Hat", price: "$40.00", quantity: 1 },
    ],
  },
];

// Function to render orders
function renderOrders(filteredOrders) {
  ordersList.innerHTML = '';
  if (filteredOrders.length === 0) {
    ordersList.innerHTML = '<p class="text-gray-700">No orders found.</p>';
    return;
  }
  filteredOrders.forEach(order => {
    const statusClass = order.status === "Delivered" ? "bg-green-500" :
      order.status === "In Transit" ? "bg-yellow-500" :
        "bg-gray-500";

    const orderDiv = document.createElement('div');
    orderDiv.className = "bg-gray-50 p-6 rounded-lg shadow";

    orderDiv.innerHTML = `
      <div class="flex flex-wrap justify-between items-center mb-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-900">Order #${order.id}</h3>
          <p class="text-sm text-gray-500">${order.date}</p>
        </div>
        <span class="px-2 py-1 text-sm text-white ${statusClass} rounded">${order.status}</span>
      </div>
      <div class="border-t border-gray-200 my-4"></div>
      <div class="space-y-2">
        ${order.items.map(item => `
          <div class="flex justify-between items-center">
            <span class="text-gray-700">${item.name} (x${item.quantity})</span>
            <span class="text-gray-900 font-medium">${item.price}</span>
          </div>
        `).join('')}
      </div>
      <div class="border-t border-gray-200 my-4"></div>
      <div class="flex justify-between items-center">
        <span class="text-gray-700 font-semibold">Total</span>
        <span class="text-gray-900 font-bold">${order.total}</span>
      </div>
      <div class="mt-4 flex justify-end">
        <button class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
          <i class="fas fa-box mr-2"></i> Track Order
        </button>
      </div>
    `;
    ordersList.appendChild(orderDiv);
  });
}

// Initial render
renderOrders(orders);

// Search and Filter Event Listeners
searchInput.addEventListener('input', applyFilters);
statusFilter.addEventListener('change', applyFilters);

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const status = statusFilter.value;

  const filtered = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm) ||
      order.items.some(item => item.name.toLowerCase().includes(searchTerm));
    const matchesStatus = status === "all" ? true : order.status.toLowerCase() === status.replace('-', ' ');
    return matchesSearch && matchesStatus;
  });

  renderOrders(filtered);
}