const loginButton = document.getElementById("loginBtn")
const SignupBtn = document.getElementById("SignupBtn")
const shopButton = document.getElementById("shopBtn")
const shopButton_Secondery = document.getElementById("ShopBtn-Secendory")
const ExploreButton = document.getElementById("ExpBtn")

loginButton.addEventListener("click", ()=>{
    window.location.href = "/Auth/Login"
})

SignupBtn.addEventListener("click", ()=>{
    window.location.href = "/Auth/Register"
})

shopButton.addEventListener("click", ()=>{
    window.location.href = "/Shop"
})

shopButton_Secondery.addEventListener("click", ()=>{
    window.location.href = "/Shop"
})

ExploreButton.addEventListener("click", ()=>{
    window.location.href = "/shop/Collection/Categories/"
})