// Initial wishlist data
const initialWishlist = [
    {
        id: 1,
        name: "Vintage Leather Backpack",
        price: 129.99,
        image: "https://placehold.co/600x400",
        category: "Accessories",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Cozy Knit Sweater",
        price: 79.99,
        image: "https://placehold.co/600x400",
        category: "Clothing",
        rating: 4.2,
        inStock: false
    },
    {
        id: 3,
        name: "Smart Fitness Watch",
        price: 199.99,
        image: "https://placehold.co/600x400",
        category: "Electronics",
        rating: 4.8,
        inStock: true
    }
];

let wishlist = [...initialWishlist];
let searchTerm = "";

function renderWishlistItems() {
    const wishlistItemsDiv = document.getElementById('wishlist-items');
    const emptyWishlistDiv = document.getElementById('empty-wishlist');

    const filteredWishlist = wishlist.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredWishlist.length > 0) {
        wishlistItemsDiv.innerHTML = '';
        emptyWishlistDiv.classList.add('hidden');

        filteredWishlist.forEach(item => {
            const cardHTML = `
        <div class="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="relative">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover" />
                <div class="absolute top-2 right-2 ${item.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} p-1 rounded-full text-xs">${item.inStock ? "In Stock" : "Out of Stock"}</div>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-lg text-gray-800 mb-2">${item.name}</h3>
                <p class="text-sm text-gray-500 mb-2">${item.category}</p>
                <div class="flex items-center mb-2">
                    ${Array(5).fill().map((_, i) => `<i class="fas fa-star h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}"></i>`).join('')}
                    <span class="ml-2 text-sm text-gray-600">${item.rating.toFixed(1)}</span>
                </div>
                <p class="font-bold text-blue-600 text-xl mb-4">$${item.price.toFixed(2)}</p>
                <div class="flex justify-between items-center">
                    <button class="flex items-center space-x-2 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-200">
                        <i class="fas fa-shopping-cart h-4 w-4"></i>
                        <span>Add to Cart</span>
                    </button>
                    <button onclick="removeFromWishlist(${item.id})" class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <i class="fas fa-trash-alt h-5 w-5 text-red-500"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
            wishlistItemsDiv.insertAdjacentHTML('beforeend', cardHTML);
        });
    } else {
        wishlistItemsDiv.innerHTML = '';
        emptyWishlistDiv.classList.remove('hidden');
    }
}

function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    renderWishlistItems();
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function (e) {
        searchTerm = e.target.value.trim().toLowerCase();
        renderWishlistItems();
    });

    renderWishlistItems();
});