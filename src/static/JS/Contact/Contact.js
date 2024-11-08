document.getElementById('SubmitBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Check if any field is empty
    for (let field in formData) {
        if (!formData[field]) {
            alert(`Please fill in the ${field} field`);
            return;
        }
    }

    // Validate email format
    if (!formData.email.includes('@') || !formData.email.endsWith('.com')) {
        alert('Please enter a valid email address ending with .com');
        return;
    }

    // Send form data to the server
    try {
        fetch('http://localhost:8000/Contact/email/acknowledgment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: formData.name,
                Email: formData.email,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Email Sent Successfully") {
                fetch('http://localhost:8000/Contact/email/notify-support', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Name: formData.name,
                        Email: formData.email,
                        Subject: formData.subject,
                        Message: formData.message
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message === "Email Sent Successfully") {
                        alert('Email sent successfully');
                    } else {
                        alert('Failed to send email');
                    }
                })
                .catch(error => {
                    console.error('Error sending email:', error);
                });
                alert('Email sent successfully');
            } else {
                alert('Failed to send email');
            }
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
});
