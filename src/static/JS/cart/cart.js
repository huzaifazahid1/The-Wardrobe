// Sample cart data (in a real application, this would come from a backend or local storage)
let cartItems = [
    { id: 1, name: 'Classic White T-shirt', size: 'M', color: 'White', price: 599, quantity: 1, image: '/static/Assets/img/blog/Gemini_Generated_Image_cnod3vcnod3vcnod.jpeg' },
    { id: 2, name: 'Denim Jeans', size: '32', color: 'Blue', price: 1299, quantity: 2, image: '/static/Assets/img/blog/Gemini_Generated_Image_1380nq1380nq1380.jpeg' }
];

const cartItemsContainer = document.getElementById('cart-items');
const orderSummaryContainer = document.getElementById('order-summary');
const checkoutButton = document.getElementById('checkout-btn');

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


function updateCart() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex justify-between items-center mb-5 pb-4 border-b border-gray-200';
        itemElement.innerHTML = `
            <div class="flex gap-4 items-center">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                <div>
                    <h3 class="text-lg font-semibold mb-1 text-black">${item.name}</h3>
                    <p class="text-gray-600">Size: ${item.size}, Color: ${item.color}</p>
                    <p class="text-base font-bold text-black">₹${item.price}</p>
                </div>
            </div>
            <div class="flex items-center gap-2.5">
                <button class="decrease-quantity bg-gray-200 px-2 py-1 rounded text-black hover:bg-gray-300" data-id="${item.id}">-</button>
                <span class="text-black">${item.quantity}</span>
                <button class="increase-quantity bg-gray-200 px-2 py-1 rounded text-black hover:bg-gray-300" data-id="${item.id}">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    attachQuantityListeners();
    updateOrderSummary();
}

function attachQuantityListeners() {
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', () => updateQuantity(button.dataset.id, -1));
    });
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', () => updateQuantity(button.dataset.id, 1));
    });
}

function updateQuantity(itemId, change) {
    const item = cartItems.find(item => item.id == itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cartItems = cartItems.filter(item => item.id != itemId);
        }
        updateCart();
    }
}

function updateOrderSummary() {
    let subtotal = 0;
    let itemsHtml = '';

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        itemsHtml += `
            <div class="flex justify-between text-gray-600">
                <span>${item.name} (${item.quantity}):</span>
                <span>₹${itemTotal}</span>
            </div>`;
    });

    const discount = 200; // This could be calculated based on some logic
    const total = subtotal - discount;

    orderSummaryContainer.innerHTML = `
        <div class="space-y-2 mb-4">
            ${itemsHtml}
        </div>
        <div class="border-t border-gray-200 pt-4 space-y-2">
            <div class="flex justify-between font-bold text-black">
                <span>Subtotal:</span>
                <span>₹${subtotal}</span>
            </div>
            <div class="flex justify-between text-gray-600">
                <span>Discount:</span>
                <span>-₹${discount}</span>
            </div>
            <div class="flex justify-between font-bold text-lg text-black">
                <span>Total:</span>
                <span>₹${total}</span>
            </div>
        </div>
    `;

    saveCartToLocalStorage();
}

checkoutButton.addEventListener('click', () => {
    window.location.href = '/cart/checkout';
});

// Initialize the cart
updateCart();