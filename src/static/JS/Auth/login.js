document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint
        const emailInput = isLargeScreen ? document.getElementById('email2') : document.getElementById('email');
        const passwordInput = isLargeScreen ? document.getElementById('password2') : document.getElementById('password');

        let hasEmptyFields = false;

        if (!emailInput.value.trim()) {
            emailInput.classList.add('error-placeholder');
            emailInput.placeholder = 'Kindly provide the required information';
            hasEmptyFields = true;
        } else {
            emailInput.classList.remove('error-placeholder');
        }

        if (!passwordInput.value.trim()) {
            passwordInput.classList.add('error-placeholder');
            passwordInput.placeholder = 'Kindly provide the required information';
            hasEmptyFields = true;
        } else {
            passwordInput.classList.remove('error-placeholder');
        }

        if (hasEmptyFields) return;

        fetch("http://192.168.1.3:8000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email: emailInput.value.trim(), 
                password: passwordInput.value.trim() 
            }),
        }) // Replace with your actual IPv4 Address, you can find it by running ipconfig in cmd
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
            emailInput.value = '';
            passwordInput.value = '';
            emailInput.classList.add('error-placeholder');
            passwordInput.classList.add('error-placeholder');
            emailInput.placeholder = 'Invalid credentials';
            passwordInput.placeholder = 'Invalid credentials';
        });
    });
});
