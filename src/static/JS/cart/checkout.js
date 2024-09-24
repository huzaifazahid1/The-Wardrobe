let currentStep = 1;
const steps = ['shippingStep', 'paymentStep', 'reviewStep'];

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
            creditCardDetails.classList.add('animate-fade-in');
        } else {
            creditCardDetails.classList.add('hidden');
            creditCardDetails.classList.remove('animate-fade-in');
        }
    });
});

updateSteps();

