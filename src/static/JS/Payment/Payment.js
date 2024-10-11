const requiredFields = ['phone', 'locality', 'area', 'street'];
let selectedPaymentMethod = null;

function validateAddressStep() {
    const allFieldsFilled = requiredFields.every(field => document.getElementById(field).value.trim() !== '');
    const continueButton = document.getElementById('continueToPayment');

    if (allFieldsFilled) {
        continueButton.classList.remove('bg-gray-300', 'cursor-not-allowed');
        continueButton.classList.add('bg-[#3b82f6]', 'hover:bg-blue-700');
        continueButton.disabled = false;
    } else {
        continueButton.classList.add('bg-gray-300', 'cursor-not-allowed');
        continueButton.classList.remove('bg-[#3b82f6]', 'hover:bg-blue-700');
        continueButton.disabled = true;
    }
}

requiredFields.forEach(field => {
    document.getElementById(field).addEventListener('input', validateAddressStep);
});

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    updatePaymentDetails(method);
    validatePaymentStep();
}

function updatePaymentDetails(method) {
    const paymentDetails = document.getElementById('paymentDetails');
    paymentDetails.innerHTML = '';
    paymentDetails.classList.remove('hidden');

    switch(method) {
        case 'creditCard':
            paymentDetails.innerHTML = `
                <div class="space-y-4">
                    <div>
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="cardNumber">
                            Card Number *
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber" type="text" required>
                    </div>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="expiryDate">
                                Expiry Date *
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiryDate" type="text" placeholder="MM/YY" required>
                        </div>
                        <div class="w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="cvv">
                                CVV *
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" required>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'netBanking':
            paymentDetails.innerHTML = `
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bankSelect">
                        Select Your Bank *
                    </label>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bankSelect" required>
                        <option value="">Choose a bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                    </select>
                </div>
            `;
            break;
        case 'upi':
            paymentDetails.innerHTML = `
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="upiId">
                        UPI ID *
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="upiId" type="text" placeholder="yourname@upi" required>
                </div>
            `;
            break;
        default:
            paymentDetails.classList.add('hidden');
            break;
    }

    // Add event listeners to new input fields
    const newInputs = paymentDetails.querySelectorAll('input, select');
    newInputs.forEach(input => {
        input.addEventListener('input', validatePaymentStep);
    });
}

function validatePaymentStep() {
    const completePaymentButton = document.getElementById('completePayment');
    let isValid = false;

    if (selectedPaymentMethod) {
        const paymentDetails = document.getElementById('paymentDetails');
        const requiredInputs = paymentDetails.querySelectorAll('input[required], select[required]');
        isValid = Array.from(requiredInputs).every(input => input.value.trim() !== '');
    }

    if (isValid) {
        completePaymentButton.classList.remove('bg-gray-300', 'cursor-not-allowed');
        completePaymentButton.classList.add('bg-[#3b82f6]', 'hover:bg-blue-700');
        completePaymentButton.disabled = false;
    } else {
        completePaymentButton.classList.add('bg-gray-300', 'cursor-not-allowed');
        completePaymentButton.classList.remove('bg-[#3b82f6]', 'hover:bg-blue-700');
        completePaymentButton.disabled = true;
    }
}

function nextStep(step) {
    document.getElementById('addressStep').classList.add('hidden');
    document.getElementById('paymentStep').classList.add('hidden');
    document.getElementById('successStep').classList.add('hidden');
    document.getElementById(step + 'Step').classList.remove('hidden');

    if (step === 'payment') {
        validatePaymentStep();
    }
}

function processPayment() {
    if (selectedPaymentMethod) {
        document.getElementById('completePayment').textContent = 'Processing...';
        document.getElementById('completePayment').disabled = true;
        setTimeout(() => {
            const orderSummary = generateOrderSummary();
            document.getElementById('orderSummary').innerHTML = orderSummary;
            nextStep('success');
        }, 1500);
    }
}

function generateOrderSummary() {
    const orderItems = [
        { name: 'T-Shirt', price: 19.99, quantity: 2 },
        { name: 'Jeans', price: 49.99, quantity: 1 },
    ];
    
    let summaryHTML = `
        <div class="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
            <h3 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Order Summary</h3>
            <div class="space-y-4">
    `;
    
    let subtotal = 0;
    orderItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        summaryHTML += `
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="font-semibold text-gray-700">${item.name}</h4>
                    <p class="text-sm text-gray-500">Qty: ${item.quantity} x $${item.price.toFixed(2)}</p>
                </div>
                <p class="font-medium text-gray-700">$${itemTotal.toFixed(2)}</p>
            </div>
        `;
    });
    
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    summaryHTML += `
            <div class="border-t mt-4 pt-4">
                <div class="flex justify-between items-center mb-2">
                    <p class="text-gray-600">Subtotal</p>
                    <p class="font-medium text-gray-700">$${subtotal.toFixed(2)}</p>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <p class="text-gray-600">Tax (10%)</p>
                    <p class="font-medium text-gray-700">$${tax.toFixed(2)}</p>
                </div>
                <div class="flex justify-between items-center font-bold text-lg mt-4 border-t pt-4">
                    <p class="text-gray-800">Total</p>
                    <p class="text-[#3b82f6]">$${total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    
    return summaryHTML;
}


function resetForm() {
    document.getElementById('checkoutForm').reset();
    selectedPaymentMethod = null;
    nextStep('address');
    validateAddressStep();
    document.getElementById('completePayment').classList.add('bg-gray-300', 'cursor-not-allowed');
    document.getElementById('completePayment').classList.remove('bg-[#3b82f6]', 'hover:bg-blue-700');
    document.getElementById('completePayment').disabled = true;
    document.getElementById('paymentDetails').classList.add('hidden');
}

// Event listeners
document.getElementById('continueToPayment').addEventListener('click', () => nextStep('payment'));
document.getElementById('completePayment').addEventListener('click', processPayment);

// Initialize form validation on page load
validateAddressStep();

