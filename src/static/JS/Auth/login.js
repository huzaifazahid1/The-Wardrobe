document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Check for inputs based on screen size
        const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint
        const email = isLargeScreen 
            ? document.getElementById('email2').value.trim() 
            : document.getElementById('email').value.trim();
        const password = isLargeScreen 
            ? document.getElementById('password2').value.trim() 
            : document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('Please fill in all required fields.');
            return;
        }

        // Rest of the login logic remains the same
        fetch('http://192.168.1.3:8000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }) // Replace with your actual IPv4 Address endpoint, you can find it by running ipconfig in cmd
        .then(response => {
            if (response.ok) {
                window.location.href = '/Shop';
            } else {
                return response.json().then(data => {
                    throw new Error(data.message || 'Login failed');
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Login failed: ' + error.message);
        });
    });
});
