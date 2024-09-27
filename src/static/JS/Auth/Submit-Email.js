const SEND = document.getElementById("submitOTP");
const Email = document.getElementById("email");

SEND.addEventListener("click", () => {
    const emailValue = Email.value.trim();
    
    if (emailValue !== "" && emailValue.includes("@") && emailValue.endsWith(".com")) {
        window.location.href = "/Auth/Reset/Submit/OTP";
    } else {
        alert("Please enter a valid email address!");
    }
});
