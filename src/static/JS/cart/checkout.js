let currentStep = 1;
const steps = ['shippingStep', 'paymentStep', 'reviewStep'];

function loadAndDisplayCartData() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let subtotal = 0;
    let itemsHtml = '';

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        itemsHtml += `
            <div class="flex justify-between mb-2">
                <span>${item.name} (${item.quantity})</span>
                <span>₹${itemTotal}</span>
            </div>`;
    });

    const discount = 200; // This could be calculated based on some logic
    const total = subtotal - discount;

    document.getElementById('reviewStep').innerHTML = `
        <h2 class="text-xl mb-4">
            <i class="fas fa-receipt mr-2"></i> Order Summary
        </h2>
        <div class="border border-border rounded-lg p-4">
            ${itemsHtml}
            <div class="flex justify-between mb-2 mt-4 pt-2 border-t border-border">
                <span>Subtotal</span>
                <span>₹${subtotal}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span>Discount</span>
                <span class="text-green-500">-₹${discount}</span>
            </div>
            <div class="flex justify-between font-bold">
                <span>Total</span>
                <span>₹${total}</span>
            </div>
        </div>
    `;
}


function updateSteps() {
    document.querySelectorAll('.w-10').forEach((el, index) => {
        if (index + 1 <= currentStep) {
            el.classList.remove('border-muted', 'text-muted-foreground');
            el.classList.add('border-primary', 'bg-primary');
        } else {
            el.classList.add('border-muted', 'text-muted-foreground');
            el.classList.remove('border-primary', 'bg-primary');
        }
    });

    document.querySelectorAll('.text-sm').forEach((el, index) => {
        if (index + 1 <= currentStep) {
            el.classList.remove('text-muted-foreground');
            el.classList.add('text-primary');
        } else {
            el.classList.add('text-muted-foreground');
            el.classList.remove('text-primary');
        }
    });

    steps.forEach((step, index) => {
        const el = document.getElementById(step);
        if (index + 1 === currentStep) {
            el.classList.remove('hidden');
            el.classList.add('animate-fade-in');
        } else {
            el.classList.add('hidden');
            el.classList.remove('animate-fade-in');
        }
    });

    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    backButton.classList.toggle('hidden', currentStep <= 1);
    nextButton.textContent = currentStep === 3 ? 'Place Order' : 'Next';

    if (currentStep === 3) {
        loadAndDisplayCartData();
    }
}


document.getElementById('nextButton').addEventListener('click', () => {
    if (currentStep < 3) {
        currentStep++;
        updateSteps();
    } else {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Clear the cart after successful order placement
        localStorage.removeItem('cartItems');
        // Redirect to a confirmation page or back to the shop
        window.location.href = '/User/Orders/';
    }
});


document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const creditCardDetails = document.getElementById('creditCardDetails');
        if (e.target.value === 'credit-card') {
            creditCardDetails.classList.remove('hidden');
            creditCardDetails.classList.add('animate-fade-in');
        } else {
            creditCardDetails.classList.add('hidden');
            creditCardDetails.classList.remove('animate-fade-in');
        }
    });
});

updateSteps();
