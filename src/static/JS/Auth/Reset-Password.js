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

    alert("Password reset successful!");
    // password reset logic here
});
