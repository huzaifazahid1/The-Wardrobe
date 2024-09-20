const products = {
    all: [
      { name: "Elegant Summer Dress", image: "/static/Assets/img/products/f6.jpg", description: "Perfect for warm summer evenings." },
      { name: "Classic White Tee", image: "/static/Assets/img/products/f5.jpg", description: "Timeless fashion essential." },
      { name: "Leather Boots", image: "/static/Assets/img/products/n1.jpg", description: "Durable and stylish boots." },
      { name: "Floral Skirt", image: "/static/Assets/img/products/n2.jpg", description: "Flirty and fun for summer." },
      { name: "Slim Fit Jeans", image: "/static/Assets/img/products/n3.jpg", description: "Comfortable yet stylish." },
      { name: "Leather Wallet", image: "/static/Assets/img/products/n7.jpg", description: "Compact and durable wallet." },
      { name: "Sunglasses", image: "/static/Assets/img/products/n8.jpg", description: "Stylish sunglasses for sunny days." }
    ],
    women: [
      { name: "Elegant Summer Dress", image: "/static/Assets/img/products/f6.jpg", description: "Perfect for warm summer evenings." },
      { name: "Floral Skirt", image: "/static/Assets/img/products/n2.jpg", description: "Flirty and fun for summer." }
    ],
    men: [
      { name: "Classic White Tee", image: "/static/Assets/img/products/f5.jpg", description: "Timeless fashion essential." },
      { name: "Slim Fit Jeans", image: "/static/Assets/img/products/n3.jpg", description: "Comfortable yet stylish." }
    ],
    accessories: [
      { name: "Leather Wallet", image: "/static/Assets/img/products/n7.jpg", description: "Compact and durable wallet." },
      { name: "Sunglasses", image: "/static/Assets/img/products/n8.jpg", description: "Stylish sunglasses for sunny days." }
    ]
  };

  // Select category buttons and product container
  const categoryButtons = document.querySelectorAll(".grid.grid-cols-4 button");
  const productContainer = document.querySelector(".grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4");

  // Add click event listeners to each category button
  categoryButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove("border-blue-600", "border-b-2"));

      // Add active class to the clicked button
      button.classList.add("border-blue-600", "border-b-2");

      // Determine the selected category based on the button index
      const selectedCategory = ["all", "women", "men", "accessories"][index];

      // Update the product container with products from the selected category
      updateProducts(selectedCategory);
    });
  });

  // Function to update products
  function updateProducts(category) {
    productContainer.innerHTML = ""; // Clear current products

    // Loop through the selected category products and add them to the container
    products[category].forEach(product => {
      const productHTML = `
        <div class="group border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg">
          <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-t-lg" />
          <div class="p-6">
            <h4 class="text-xl mb-2">${product.name}</h4>
            <p>${product.description}</p>
          </div>
          <div class="p-6 pt-0">
            <button class="w-full border border-gray-300 px-4 py-2 hover:bg-blue-600 hover:text-white">
              Shop Now <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>`;
      
      productContainer.insertAdjacentHTML("beforeend", productHTML);
    });
  }

  // Initialize by displaying "all" category products
  updateProducts("all");