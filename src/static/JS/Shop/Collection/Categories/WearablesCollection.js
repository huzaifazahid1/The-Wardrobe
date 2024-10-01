const cart = document.getElementById("cart-icon")
const shop = document.getElementById("ShopBtn")
const ProfileButton = document.getElementById("User-icon") 

cart.addEventListener("click", () => {
    window.location.href = "/cart"
})

shop.addEventListener("click", () => {
    window.location.href = "/shop"
})

ProfileButton.addEventListener("click", ()=>{
    window.location.href = "/User/Profile/"
})