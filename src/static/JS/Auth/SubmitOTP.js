const Verify = document.getElementById("VerifyBtn");
const otpInputs = document.querySelectorAll('input[type="text"]');

Verify.addEventListener("click", () => {
  let otpNumber = "";
  let isValid = true;

  otpInputs.forEach((input) => {
    if (!input.value || isNaN(input.value)) {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = ""; // Reset border color
      otpNumber += input.value;
    }
  });

  if (!isValid) {
    return; // Stop execution if validation fails
  }

  const finalOTP = Number(otpNumber);
  window.localStorage.setItem("otp", finalOTP);
  window.location.href = "/Auth/Reset/Password/";
});

otpInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    // Validate input is number only
    if (!/^\d*$/.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
      input.style.borderColor = "red";
      return;
    }

    input.style.borderColor = ""; // Reset border color
    
    if (e.target.value && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  // Handle backspace
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});
