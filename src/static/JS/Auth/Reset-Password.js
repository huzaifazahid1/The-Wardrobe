const newPassword = document.getElementById("new-password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.getElementById("submitBtn");

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;
    return regex.test(password);
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (newPassword.value === "" || confirmPassword.value === "") {
        alert("Both password fields must be filled out.");
        return;
    }

    if (newPassword.value !== confirmPassword.value) {
        alert("Passwords does not match.");
        return;
    }

    if (!validatePassword(newPassword.value)) {
        alert("Password does not meet the requirements.");
        return;
    }

    try {
        const otp = window.localStorage.getItem("otp");
        const otpToken = window.localStorage.getItem("otpToken");

       fetch("http://192.168.1.5:8000/auth/reset-password-with-otp", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${otpToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                otp: otp,
                newPassword: newPassword.value,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Password reset successful") {
                window.localStorage.removeItem("otp");
                window.localStorage.removeItem("otpToken");
                window.location.href = "/Auth/Login";
            } else {
                window.localStorage.removeItem("otp");
                window.localStorage.removeItem("otpToken");
                alert("Password reset failed. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            window.localStorage.removeItem("otp");
            window.localStorage.removeItem("otpToken");
            alert("An error occurred while resetting the password. Please try again later.");
        });
    }
    catch (error) {
        console.error("Error:", error);
        window.localStorage.removeItem("otp");
        window.localStorage.removeItem("otpToken");
        alert("An error occurred while resetting the password. Please try again later.");
        return;
    }
});
