// Product Data
const products = [
  {
    id: 1,
    name: "Elegant Summer Dress",
    image: "/static/Assets/img/products/n1.jpg",
    description: "Perfect for warm summer evenings.",
    categories: ["all", "women"],
    price: "$59.99",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Classic White Tee",
    image: "/static/Assets/img/products/n2.jpg",
    description: "Timeless fashion essential.",
    categories: ["all", "women"],
    price: "$29.99",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Leather Boots",
    image: "/static/Assets/img/products/n3.jpg",
    description: "Durable and stylish boots.",
    categories: ["all", "men", "women"],
    price: "$89.99",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Floral Skirt",
    image: "/static/Assets/img/products/n4.jpg",
    description: "Flirty and fun for summer.",
    categories: ["all", "women"],
    price: "$39.99",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    image: "/static/Assets/img/products/n5.jpg",
    description: "Comfortable yet stylish.",
    categories: ["all", "men"],
    price: "$49.99",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Leather Wallet",
    image: "/static/Assets/img/products/n6.jpg",
    description: "Compact and durable wallet.",
    categories: ["all", "men", "accessories"],
    price: "$19.99",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Sunglasses",
    image: "/static/Assets/img/products/n7.jpg",
    description: "Stylish sunglasses for sunny days.",
    categories: ["all", "accessories"],
    price: "$34.99",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Woolen Scarf",
    image: "/static/Assets/img/products/n8.jpg",
    description: "Warm and comfortable for winter.",
    categories: ["all", "accessories"],
    price: "$24.99",
    rating: 4.5,
  },
];

const categoryButtons = document.querySelectorAll(".grid.grid-cols-4 button");
const productContainer = document.querySelector(
  ".grid.grid-cols-2.md\\:grid-cols-2.lg\\:grid-cols-4"
);

const CATEGORIES = ["all", "women", "men", "accessories"];

document.addEventListener("DOMContentLoaded", () => {
  initializeCategoryButtons();
  updateProducts("all");
});

// Functions
function initializeCategoryButtons() {
  const categoryContainer = document.querySelector(".grid.grid-cols-4");
  categoryContainer.addEventListener("click", handleCategoryClick);
}

function handleCategoryClick(event) {
  if (event.target.tagName === "BUTTON") {
    updateActiveButton(event.target);
    const selectedCategory = getCategoryFromButton(event.target);
    updateProducts(selectedCategory);
  }
}

function updateActiveButton(clickedButton) {
  categoryButtons.forEach((btn) =>
    btn.classList.remove("border-blue-600", "border-b-2")
  );
  clickedButton.classList.add("border-blue-600", "border-b-2");
}

function getCategoryFromButton(button) {
  return CATEGORIES[Array.from(categoryButtons).indexOf(button)];
}

function updateProducts(category) {
  const filteredProducts = filterProductsByCategory(category);
  renderProducts(filteredProducts);
}

function filterProductsByCategory(category) {
  return products.filter((product) => product.categories.includes(category));
}

function renderProducts(productsToRender) {
  productContainer.innerHTML = "";
  productsToRender.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add(
    "group",
    "border",
    "border-gray-300",
    "rounded-lg",
    "overflow-hidden",
    "hover:shadow-lg"
  );

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-t-lg">
    <div class="p-6">
      <h4 class="text-xl mb-2">${product.name}</h4>
      <p>${product.description}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="font-bold">${product.price}</span>
        <span class="text-yellow-500">★ ${product.rating}</span>
      </div>
    </div>
    <div class="p-6 pt-0">
      <button class="w-full border border-gray-300 px-4 py-2 hover:bg-blue-600 hover:text-white">
        Shop Now <i class="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  `;

  return card;
}

// Utility Functions
function debounce(func, delay = 250) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedUpdateProducts = debounce(updateProducts);
