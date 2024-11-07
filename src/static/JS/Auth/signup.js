document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signupBtn');
    
    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const getInputValue = (id1, id2) => {
            return document.getElementById(id1).offsetParent !== null 
                ? document.getElementById(id1)
                : document.getElementById(id2);
        };
        
        const formData = {
            name: getInputValue('name', 'name2'),
            email: getInputValue('email', 'email2'),
            password: getInputValue('password', 'password2'),
            phone: getInputValue('phone', 'phone2'),
            locality: getInputValue('locality', 'locality2'),
            road: getInputValue('road', 'road2'),
            house: getInputValue('house', 'house2'),
            landmark: getInputValue('landmark', 'landmark2')
        };

        const requiredFields = ['name', 'email', 'password', 'phone', 'locality', 'road', 'house'];
        let allFieldsFilled = true;

        requiredFields.forEach(field => {
            if (!formData[field].value.trim()) {
                formData[field].placeholder = "Please fill in all required fields";
                formData[field].classList.add('error-placeholder');
                allFieldsFilled = false;
            } else {
                formData[field].classList.remove('error-placeholder');
            }
        });

        if (!allFieldsFilled) {
            return;
        }

        // Proceed with signup logic
        const signupData = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [key, value.value.trim()])
        );

        fetch('http://localhost:8000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.userId) {
                window.location.href = '/Auth/Login';
            } else {
                if (data.message.includes('User already exists')) {
                    formData.email.value = '';
                    formData.email.placeholder = 'User already exists, try to login';
                    formData.email.classList.add('error-placeholder');
                } else {
                    const errorField = formData[Object.keys(formData).find(key => data.message.toLowerCase().includes(key))];
                    if (errorField) {
                        errorField.value = '';
                        errorField.placeholder = data.message;
                        errorField.classList.add('error-placeholder');
                    } else {
                        formData.name.value = '';
                        formData.name.placeholder = data.message;
                        formData.name.classList.add('error-placeholder');
                    }
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            formData.name.value = '';
            formData.name.placeholder = 'An error occurred during signup';
            formData.name.classList.add('error-placeholder');
        });
    });
});
