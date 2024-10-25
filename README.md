# 🛍️ The Wardrobe

![Status](https://img.shields.io/badge/Status-Under_Development-yellow?style=flat-square)
![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue?style=flat-square)
![Contributors](https://img.shields.io/github/contributors/GitCoder052023/The-Wardrobe?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-16.x-green?style=flat-square)
![Express.js](https://img.shields.io/badge/Express.js-4.x-brightgreen?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-5.x-darkgreen?style=flat-square)
![JWT](https://img.shields.io/badge/JWT-JSON_Web_Tokens-red?style=flat-square)

## 📖 About

**The Wardrobe** is an elegant and luxurious e-commerce web application providing a seamless online shopping experience. The project is currently **under heavy development**, and many features are yet to be implemented.

> **Note:** This README is primarily for developers contributing to this project.

## 🌟 Current Features

- **Front-End:**
  - 🎨 **Landing Page:** A modern home page showcasing featured products and collections.
  - 📄 **Static Pages:** Includes "About Us" and "Contact Us" sections.
  - 🔐 **Login & Signup Pages:** Basic forms for user authentication.
  - 🛒 **Shopping & Product Pages:** General shopping pages for browsing products.
  - 🛍️ **Cart, Checkout, and Payment Pages:** Includes static interfaces for cart review and payment methods.
  - 🧑‍💼 **Profile & Wishlist Pages:** User profile and wishlist functionalities with dynamic content.
  - 🚚 **Order & Track Order Pages:** Dynamic order tracking pages with interactive features.
  - 🔄 **Password Reset Flow:** A secure multi-step process with email and OTP verification.

- **Back-End:**
  - 🌐 **Node.js & Express:** Serving static files and handling routing efficiently.
  - 🗃️ **MongoDB:** Storing user data and product information.
  - 🔑 **JWT Authentication:** JSON Web Tokens for secure, stateless user authentication and session management.

## 💻 Tech Stack

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat-square)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square)
- ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat-square)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=flat-square)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square)
- ![JWT](https://img.shields.io/badge/JWT-JSON_Web_Tokens-red?style=flat-square)

## 🛠️ Project Setup (For Developers)

### Step 1: Clone the Repository
```bash
git clone https://github.com/GitCoder052023/The-Wardrobe.git
```

### Step 2: Navigate to the Project Directory
```bash
cd the-wardrobe
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
```

### Step 5: Run the Application
```bash
npm run dev
```

### Step 6: Access the Application
Open your browser and go to `http://localhost:3000`.

## 🏗️ System Architecture

```bash
The-Wardrobe
|   .gitignore
|   .env.example
|   CODE_OF_CONDUCT.md
|   CONTRIBUTING.md
|   package-lock.json
|   package.json
|   tailwind.config.js
|   README.md
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
    ├───Server
    │   │   server.js
    │   │
    │   ├───config
    │   │       db.js
    │   │
    │   ├───controllers
    │   │       authController.js
    │   │
    │   ├───models
    │   │       User.js
    │   │
    │   ├───routes
    │   │       authRoutes.js
    │   │
    │   └───utils
    │           authUtils.js
    │           passwordUtils.js
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
    │   │   │       login.js
    │   │   │       Reset-Password.js
    │   │   │       signup.js
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
        │   404.html
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

## 🤝 Contributing

We welcome contributions! Please review our [CONTRIBUTING](https://github.com/GitCoder052023/The-Wardrobe/blob/main/CONTRIBUTING.md) guide for more details on how to contribute.

## 📜 License

**The Wardrobe** © 2024 by **GitCoder052023** is licensed under **CC BY-NC 4.0**.  
To view a copy of this license, visit [here](https://creativecommons.org/licenses/by-nc/4.0/).