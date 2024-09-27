const menCard = document.getElementById("Men_product-card")
const womenCard = document.getElementById("category-women")
const AccessoriesCard = document.getElementById("category-Accessories")
const WearablesCard = document.getElementById("category-wearables")

menCard.addEventListener("click", ()=>{
    window.location.href = "/shop/Collection/Categories/Mens"
})

womenCard.addEventListener("click", ()=>{
    window.location.href = "/shop/Collection/Categories/Womens"
})

AccessoriesCard.addEventListener("click", ()=>{
    window.location.href = "/shop/Collection/Categories/Accessories"
})

WearablesCard.addEventListener("click", ()=>{
    window.location.href = "/shop/Collection/Categories/Wearables"
})