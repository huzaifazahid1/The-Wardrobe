document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signupBtn');
    
    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const getInputValue = (id1, id2) => {
            return document.getElementById(id1).offsetParent !== null 
                ? document.getElementById(id1).value.trim() 
                : document.getElementById(id2).value.trim();
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
        const emptyFields = requiredFields.filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            alert('Please fill in all required fields: ' + emptyFields.join(', '));
            return;
        }

        // Proceed with signup logic
        fetch('http://192.168.1.3:8000/auth/signup' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })  // Replace with your actual IPv4 Address endpoint, you can find it by running ipconfig in cmd
        .then(response => response.json())
        .then(data => {
            if (data.userId) {
                window.location.href = '/Auth/Login';
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
