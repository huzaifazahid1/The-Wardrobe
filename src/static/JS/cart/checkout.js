let currentStep = 1;
const steps = ['shippingStep', 'paymentStep', 'reviewStep'];

function updateSteps() {
    document.querySelectorAll('.step-circle, .step-text').forEach((el, index) => {
        if (index + 1 <= currentStep) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    steps.forEach((step, index) => {
        const el = document.getElementById(step);
        if (index + 1 === currentStep) {
            el.classList.remove('hidden');
            el.classList.add('fade-in');
        } else {
            el.classList.add('hidden');
            el.classList.remove('fade-in');
        }
    });

    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    backButton.style.display = currentStep > 1 ? 'inline-block' : 'none';
    nextButton.textContent = currentStep === 3 ? 'Place Order' : 'Next';
    nextButton.innerHTML = currentStep === 3 ? 'Place Order' : 'Next <i class="fas fa-arrow-right"></i>';
}

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentStep < 3) {
        currentStep++;
        updateSteps();
    } else {
        alert('Order placed!');
    }
});

document.getElementById('backButton').addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateSteps();
    }
});

document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const creditCardDetails = document.getElementById('creditCardDetails');
        if (e.target.value === 'credit-card') {
            creditCardDetails.classList.remove('hidden');
            creditCardDetails.classList.add('fade-in');
        } else {
            creditCardDetails.classList.add('hidden');
            creditCardDetails.classList.remove('fade-in');
        }
    });
});

updateSteps();