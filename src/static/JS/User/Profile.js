document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('editButton');
    const editForm = document.getElementById('editForm');
    const displaySection = document.getElementById('displaySection');
    const cancelButton = document.getElementById('cancelButton');

    // Elements to display user information
    const displayFields = {
        name: document.getElementById('displayName'),
        email: document.getElementById('displayEmail'),
        phone: document.getElementById('displayPhone'),
        locality: document.getElementById('displayLocality'),
        roadName: document.getElementById('displayRoadName'),
        houseNumber: document.getElementById('displayHouseNumber'),
        landmark: document.getElementById('displayLandmark'),
    };

    // Handle Edit Button Click
    editButton.addEventListener('click', () => {
        displaySection.classList.add('hidden');
        editForm.classList.remove('hidden');
        editButton.classList.add('hidden');
    });

    // Handle Cancel Button Click
    cancelButton.addEventListener('click', () => {
        editForm.reset(); // Reset form to original values
        displaySection.classList.remove('hidden');
        editForm.classList.add('hidden');
        editButton.classList.remove('hidden');
    });

    // Handle Form Submission
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Gather form data
        const updatedData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            locality: document.getElementById('locality').value.trim(),
            roadName: document.getElementById('roadName').value.trim(),
            houseNumber: document.getElementById('houseNumber').value.trim(),
            landmark: document.getElementById('landmark').value.trim(),
        };

        // Simple validation (you can enhance this as needed)
        if (!updatedData.name || !updatedData.email) {
            alert('Name and Email are required fields.');
            return;
        }

        // Update display fields with new data
        for (let key in displayFields) {
            displayFields[key].textContent = updatedData[key];
        }

        // Toggle visibility
        displaySection.classList.remove('hidden');
        editForm.classList.add('hidden');
        editButton.classList.remove('hidden');
    });
});