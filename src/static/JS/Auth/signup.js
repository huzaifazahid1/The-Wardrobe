document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signupBtn');
    
    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value,
            locality: document.getElementById('locality').value,
            road: document.getElementById('road').value,
            house: document.getElementById('house').value,
            landmark: document.getElementById('landmark').value
        };

        fetch('http://localhost:8000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.userId) {
                alert('Signup successful! User ID: ' + data.userId);
                // Redirect to login page or dashboard
            } else {
                alert('Signup failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred during signup');
        });
    });
});
