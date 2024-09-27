const cart = document.getElementById("cart-icon")
const shop = document.getElementById("ShopBtn")

cart.addEventListener("click", () => {
    window.location.href = "/cart"
})

shop.addEventListener("click", () => {
    window.location.href = "/shop"
})
