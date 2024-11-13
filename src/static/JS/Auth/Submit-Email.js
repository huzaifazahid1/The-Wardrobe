const SEND = document.getElementById("submitOTP");
const Email = document.getElementById("email");

SEND.addEventListener("click", () => {
    const emailValue = Email.value.trim();
    
    if (emailValue !== "" && emailValue.includes("@") && emailValue.endsWith(".com")) {
        fetch("http://localhost:8000/auth/password-reset/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: emailValue }),
        })
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            if (data.otpToken) {
                window.localStorage.setItem("otpToken", data.otpToken); 
                window.location.href = "/Auth/Reset/Submit/OTP";
            } else {
                window.localStorage.removeItem("otpToken");
                alert("Failed to retrieve OTP. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error sending OTP:", error);
            window.localStorage.removeItem("otpToken");
            alert("An error occurred while sending OTP. Please try again later.");
        });
    } else {
        alert("Please enter a valid email address!");
    }
});
