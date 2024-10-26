document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const rememberCheckbox = document.getElementById('remember');
    const token = window.localStorage.getItem('jwtToken');

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
                throw new Error('Token invalid');
            }
            return response.json();
        })
        .then(data => {
            if (data.valid) {
                window.location.href = '/Shop';
            } else {
                window.localStorage.removeItem('jwtToken');
            }
        })
        .catch(error => {
            console.error('Error verifying token:', error);
            window.localStorage.removeItem('jwtToken');
        });
    }

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

        fetch("http://192.168.1.4:8000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email: emailInput.value.trim(), 
                password: passwordInput.value.trim() 
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                if (rememberCheckbox.checked) {
                    window.localStorage.setItem('jwtToken', data.token);
                }
                window.location.href = '/Shop';
            } else {
                throw new Error(data.message || 'Login failed');
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
