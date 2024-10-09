const cart = document.getElementById("cart-icon")
const shop = document.getElementById("ShopBtn")
const ProfileButton = document.getElementById("User-icon") 
const wishlistButton = document.querySelector('.fas.fa-heart');
const productCards = document.querySelectorAll('.product-card');

wishlistButton.addEventListener("click", () => {
    window.location.href = "/User/Profile/Wishlist";
});


cart.addEventListener("click", ()=>{
    window.location.href = "/cart"
})

shop.addEventListener("click", ()=>{
    window.location.href = "/shop"
})

ProfileButton.addEventListener("click", ()=>{
    window.location.href = "/User/Profile/"
})

productCards.forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
            e.preventDefault();
            window.location.href = '/Product/Product1';
        }
    });
});