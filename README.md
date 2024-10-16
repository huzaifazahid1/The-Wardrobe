# The Wardrobe

## About

This repository contains the source code for "The Wardrobe," an e-commerce web application designed for a seamless online shopping experience. The project is currently **under heavy development,** and many features are yet to be implemented. 

**Note:** This README is intended for developers working on the project. 

## Current Features

- **Basic Front-End Structure:** A functional front-end skeleton with HTML, CSS, and minimal JavaScript is in place.
- **Landing Page:**  The home page showcases the brand, featured products, and collections.
- **Static Content Pages:**  Includes an "About Us" and "Contact Us" page.
- **Login Page:** A basic login page with a form is implemented.
- **Signup page:** A basic signup page with a form is implemented 
- **Profile Page:** An static Profile page is implemented
- **Shopping page:** A general shopping page is implemented
- **Product page:** An static Product page is implemented
- **Cart page:** An static cart page is implemented
- **Checkout page:** An static Checkout page is implemented
- **Payment Page:** An static Payment page is implemented
- **Mens collection page:** An static Mens collection page with some JavaScript is implemented 
- **Womens collection page:** An static Womens collection page  with some JavaScript is implemented
- **Accessories collection page:** An static Accessories collection page with some JavaScript is implemented
- **Wearables Collection page:** An static Wearables Collection pag with some JavaScript is implemented
- **Collection page:** An partially dynamic collection page is implemented
- **Orders Page:** An Dynamic Orders page is implemented
- **Wishlist Page:** An Dynamic Wishlist page is implemented
- **Track Orders page:** An Dynamic Track Orders page is implemented
- **Submit Email page:** An static Submit Email page is implemented with some JavaScript, for reset password process
- **Verify OTP page:** An static Verify OTP page is implemented with some JavaScript, for reset password process
- **Reset Password page:** An static Reset Password page is implemented with some JavaScript, for reset password process
- **Node.js Server:** A simple server using Express.js serves static files and handles routing.


## Technologies Used

- **HTML**
- **CSS**
- **Tailwind CSS**
- **JavaScript**
- **Node.js** 
- **Express.js** 

## Project Setup (For Developers)

1. **Clone the Repository:** 
   ```bash
   git clone https://github.com/GitCoder052023/The-Wardrobe.git
   ```

2. **Navigate to Project Directory:**
   ```bash
   cd the-wardrobe 
   ```

3. **Install Dependencies:**
   ```bash
   npm i
   ```

4. **Run the Server:**
   ```bash
   npm run start
   ```

5. **Access the Application:**  Open your web browser and go to `http://localhost:3000`.

## System Architecture

```bash
The-Wardrobe
|   .gitignore
|   .env
|   CODE_OF_CONDUCT.md
|   CONTRIBUTING.md
|   package-lock.json
|   package.json
|   tailwind.config.js
|   README.md
│
└───src
    │   app.js
    │
    ├───routes
    │       auth.js
    │       cart.js
    │       Collection.js
    │       info.js
    │       main.js
    │       Orders.js
    │       Payments.js
    │       Product.js
    │       shop.js
    │       User.js
    │
    ├───static
    │   ├───Assets
    │   │   ├───img
    │   │   │
    │   │   └───Videos
    │   ├───CSS
    │   │   │   main.css
    │   │   │   output.css
    │   │   │
    │   │   └───Shop
    │   │           Shop.css
    │   │
    │   ├───JS
    │   │   │   LandingPage.js
    │   │   │
    │   │   ├───Auth
    │   │   │       Reset-Password.js
    │   │   │       Submit-Email.js
    │   │   │       SubmitOTP.js
    │   │   │
    │   │   ├───cart
    │   │   │       cart.js
    │   │   │       checkout.js
    │   │   │
    │   │   ├───Orders
    │   │   │       Orders.js
    │   │   │       TrackOrders.js
    │   │   │
    │   │   ├───Payment
    │   │   │       Payment.js
    │   │   │
    │   │   ├───Shop
    │   │   │   │   Shop.js
    │   │   │   │
    │   │   │   └───Collection
    │   │   │       │   Collection.js
    │   │   │       │
    │   │   │       └───Product
    │   │   │               Product.js
    │   │   │
    │   │   └───User
    │   │           Profile.js
    │   │           Wishlist.js
    │   │
    │   ├───JSON
    │   │       Collection_Products.json
    │   │       Orders_Data.json
    │   │       Tracking_Data.json
    │   │       Wishlist_Products.json
    │   │
    │   └───Utilities
    │           CategoriesCollection.js
    │
    └───templates
        │   LandingPage.html
        │
        ├───Auth
        │       login.html
        │       Reset-Password.html
        │       signup.html
        │       Submit-Email.html
        │       SubmitOTP.html
        │
        ├───cart
        │       cart.html
        │       checkout.html
        │
        ├───info
        │       About.html
        │       Contact.html
        │
        ├───Orders
        │       Orders.html
        │       TrackOrders.html
        │
        ├───Payments
        │       Payment.html
        │
        ├───Shop
        │   │   Shop.html
        │   │
        │   └───Collections
        │       │   Collection.html
        │       │
        │       ├───Categories
        │       │       AccessoriesCollection.html
        │       │       MenCollection.html
        │       │       WearablesCollection.html
        │       │       WomenCollection.html
        │       │
        │       └───Product
        │               Product.html
        │
        └───User
                Profile.html
                Wishlist.html
```

## Contributing

We welcome contributions! If you'd like to contribute to "The Wardrobe," please Checkout the [CONTRIBUTING](https://github.com/GitCoder052023/The-Wardrobe/blob/main/CONTRIBUTING.md) file, and follow the steps.

## License

**The Wardrobe** © 2024 by **GitCoder052023** is licensed under **CC BY-NC 4.0.**
  
To view a copy of this license, visit [https://creativecommons.org/licenses/by-nc/4.0/](https://creativecommons.org/licenses/by-nc/4.0/)