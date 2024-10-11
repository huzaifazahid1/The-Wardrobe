fetch('/static/JSON/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load products.json: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const products = data.products;
    initializeCategoryButtons(products);
    updateProducts('all', products);
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });

const categoryButtons = document.querySelectorAll(".grid.grid-cols-4 button");
const productContainer = document.querySelector(".grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4");
const buttons = [
  { id: "wishlist", url: "/User/Profile/Wishlist" },
  { id: "cart", url: "/cart" },
  { id: "profile", url: "User/Profile/" }
];

buttons.forEach(button => {
  const element = document.getElementById(button.id);
  element.addEventListener("click", () => {
    window.location.href = button.url;
  });
});


function debounce(func, delay = 250) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function initializeCategoryButtons(products) {
  categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const selectedCategory = e.target.dataset.category;
      updateActiveButton(e.target);
      updateProducts(selectedCategory, products);
    });
  });
}

function updateActiveButton(clickedButton) {
  categoryButtons.forEach((btn) =>
    btn.classList.remove("border-blue-600", "border-b-2")
  );
  clickedButton.classList.add("border-blue-600", "border-b-2");
}

function updateProducts(category, products) {
  const filteredProducts = filterProductsByCategory(category, products);
  renderProducts(filteredProducts);
}

function filterProductsByCategory(category, products) {
  return products.filter((product) => product.categories.includes(category));
}

function renderProducts(productsToRender) {
  productContainer.innerHTML = "";
  if (productsToRender.length === 0) {
    productContainer.innerHTML = '<p>No products available in this category.</p>';
    return;
  }

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
      <button class="shop-now-btn w-full border border-gray-300 px-4 py-2 hover:bg-blue-600 hover:text-white">
        Shop Now <i class="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  `;

  const shopNowBtn = card.querySelector('.shop-now-btn');
  shopNowBtn.addEventListener('click', () => {
    window.location.href = "/Product/Product1";
  });

  return card;
}

const debouncedUpdateProducts = debounce(updateProducts);
