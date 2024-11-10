document.addEventListener('DOMContentLoaded', function () {

    // Select navbar items and dropdown menus
    const categoriesLink = document.getElementById('cat');
    const accountLink = document.getElementById('acc');
    const dropdownMenu2 = document.getElementById('dropdown-menu2');
    const dropdownMenu3 = document.getElementById('dropdown-menu3');

    // Toggle dropdown on click for Categories
    categoriesLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const isVisible = dropdownMenu3.style.opacity === '1';
        dropdownMenu3.style.opacity = isVisible ? '0' : '1';
        dropdownMenu3.style.visibility = isVisible ? 'hidden' : 'visible';
    });

    // Toggle dropdown on click for Account
    accountLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const isVisible = dropdownMenu2.style.opacity === '1';
        dropdownMenu2.style.opacity = isVisible ? '0' : '1';
        dropdownMenu2.style.visibility = isVisible ? 'hidden' : 'visible';
    });

    // Hide the dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!categoriesLink.contains(event.target) && !dropdownMenu3.contains(event.target)) {
            dropdownMenu3.style.opacity = '0';
            dropdownMenu3.style.visibility = 'hidden';
        }
        if (!accountLink.contains(event.target) && !dropdownMenu2.contains(event.target)) {
            dropdownMenu2.style.opacity = '0';
            dropdownMenu2.style.visibility = 'hidden';
        }
    });
});

