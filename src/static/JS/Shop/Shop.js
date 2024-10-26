document.addEventListener("DOMContentLoaded", () => {

    const token = window.localStorage.getItem('jwtToken');
    const menCard = document.getElementById("Men_product-card")
    const womenCard = document.getElementById("category-women")
    const AccessoriesCard = document.getElementById("category-Accessories")
    const WearablesCard = document.getElementById("category-wearables")

    if (token) {
        fetch("http://192.168.1.4:8000/auth/verify-token", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    console.error('Token invalid');
                    window.localStorage.removeItem('jwtToken');
                    window.location.href = '/Auth/login';
                    return; // Exit the function
                }
                return response.json();
            })
            .then(data => {
                if (!data.valid) {
                    console.error('Token expired or invalid');
                    window.localStorage.removeItem('jwtToken');
                    window.location.href = '/Auth/login';
                    return; // Exit the function
                }
                // Do nothing if everything is fine
            })
            .catch(error => {
                console.error('Error verifying token:', error);
                window.localStorage.removeItem('jwtToken');
                window.location.href = '/Auth/login';
            });
    } else {
        // Redirect to login if token is missing
        window.location.href = '/Auth/login';
    }


    menCard.addEventListener("click", () => {
        window.location.href = "/shop/Collection/Categories/Mens"
    })

    womenCard.addEventListener("click", () => {
        window.location.href = "/shop/Collection/Categories/Womens"
    })

    AccessoriesCard.addEventListener("click", () => {
        window.location.href = "/shop/Collection/Categories/Accessories"
    })

    WearablesCard.addEventListener("click", () => {
        window.location.href = "/shop/Collection/Categories/Wearables"
    })
})