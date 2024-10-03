// Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        // Remove active classes
        tabButtons.forEach(btn => {
            btn.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
        });
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Add active classes to the clicked tab
        button.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
        document.getElementById(target).classList.remove('hidden');
    });
});

// Set default active tab
document.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.tab-button');
    firstTab.click();
});

// Edit Button Functionality
const editButton = document.getElementById('editButton');
const inputs = document.querySelectorAll('#personal input');

editButton.addEventListener('click', () => {
    const isReadOnly = inputs[0].hasAttribute('readonly');
    inputs.forEach(input => {
        if (isReadOnly) {
            input.removeAttribute('readonly');
            input.classList.remove('bg-gray-50');
            input.classList.add('bg-white');
        } else {
            input.setAttribute('readonly', true);
            input.classList.remove('bg-white');
            input.classList.add('bg-gray-50');
        }
    });
    // Toggle button text and icon
    if (isReadOnly) {
        editButton.innerHTML = '<i class="fas fa-save mr-2"></i> Save';
    } else {
        editButton.innerHTML = '<i class="fas fa-edit mr-2"></i> Edit';
    }
});