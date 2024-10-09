const buttonActions = {
    loginBtn: "/Auth/Login",
    SignupBtn: "/Auth/Register",
    shopBtn: "/Shop",
    "ShopBtn-Secendory": "/Shop",
    ExpBtn: "/shop/Collection/Categories/",
    Women: "/shop/Collection/Categories/Womens",
    Men: "/Shop/Collection/Categories/Mens",
    Accessories: "/Shop/Collection/Categories/Accessories",
};

Object.keys(buttonActions).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            window.location.href = buttonActions[id];
        });
    }
});