const loginButton = document.getElementById("loginBtn")
const SignupBtn = document.getElementById("SignupBtn")

loginButton.addEventListener("click", ()=>{
    window.location.href = "/Auth/Login"
})

SignupBtn.addEventListener("click", ()=>{
    window.location.href = "/Auth/Register"
})