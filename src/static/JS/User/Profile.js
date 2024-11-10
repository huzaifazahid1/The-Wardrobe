document.addEventListener('DOMContentLoaded', async () => {
    const displayFields = {
        name: document.getElementById('displayName'),
        email: document.getElementById('displayEmail'),
        phone: document.getElementById('displayPhone'),
        locality: document.getElementById('displayLocality'),
        roadName: document.getElementById('displayRoadName'),
        houseNumber: document.getElementById('displayHouseNumber'),
        landmark: document.getElementById('displayLandmark'),
    };

    async function getUserProfile() {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            window.location.href = '/login';
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/profile/get/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "UserId": userId
                })
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    }

    function updateDisplayFields(userData) {
        const fields = {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            locality: userData.locality,
            roadName: userData.road,
            houseNumber: userData.house,
            landmark: userData.landmark,
        };

        Object.keys(fields).forEach(field => {
            displayFields[field].textContent = fields[field] || '';
        });
    }


    // Initial load
    try {
        const profileData = await getUserProfile();
        updateDisplayFields(profileData.user);
    } catch (error) {
        console.error('Failed to load user profile:', error);
    }
});
