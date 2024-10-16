# The Wardrobe E-commerce Website - In-Depth Explanation

This document provides a detailed technical walkthrough of the codebase for "The Wardrobe," an e-commerce website built using Node.js with Express for the backend and HTML, CSS (with Tailwind CSS), and JavaScript for the frontend.

## System Architecture

The project's architecture follows a traditional server-side rendering (SSR) pattern, where the server generates HTML pages on each request and sends them to the client. 

Here's a tree-like representation:

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

* **`templates`:** Contains all HTML templates responsible for the user interface. 
* **`static`:** Houses static assets like CSS, JavaScript files, images, and potentially other resources like fonts.
* **`routes`:** Holds the routing logic, defining how different HTTP requests are handled by the server.

## Detailed Codebase Analysis

### Backend

* **`app.js`:**
    * Initializes the Express application and sets up the server.
    * Loads environment variables from a `.env` file for configuration. 
    * Uses middleware for:
        * `express.json()`: Parses incoming requests with JSON payloads for API interactions.
        * `express.static()`: Serves static assets from the "Static" directory for efficiency.
    * Mounts routes defined in other files (`mainRoutes`, `authRoutes`, `shopRoutes`, etc.) to specific URL paths, creating the application's routing structure.
    * Starts the server on the specified port.

* **`routes/*`:**
    * Each file handles routes related to a specific domain, improving organization.
    * **`auth.js`:** Handles user authentication with routes for:
        * `/Login`: GET request to serve the login page.
        * `/Register`: GET request to serve the registration page.
        * `/Reset/Submit/Email`: GET request for initiating password reset by providing an email.
        * `/Reset/Submit/OTP`: GET request for OTP verification during password reset.
        * `/Reset/Password`: GET request to serve the page for setting a new password.
    * **`shop.js`:** Handles the main shop page (`/`) with GET requests.
    * **`info.js`:** Handles informational pages:
        * `/About`: GET request for the "About Us" page.
        * `/Contact`: GET request for the "Contact Us" page.
    * **`cart.js`:** Manages the shopping cart:
        * `/`: GET request for displaying the cart.
        * `/checkout`: GET request for the checkout page.
    * **`Collection.js`:** Handles product collections and categories:
        * `/`: GET request for a generic collection page (likely the main collection page).
        * `/Mens`, `/Womens`, `/Accessories`, `/Wearables`: GET requests for specific category pages.
    * **`User.js`:** Handles user-related actions:
        * `/`: GET request for the user profile page.
        * `/Wishlist`: GET request for the user's wishlist page.
    * **`Product.js`:** Serves individual product pages:
        * `/Product1/`: GET request (likely a placeholder for dynamically generated product routes).
    * **`Orders.js`:** Manages order information:
        * `/`: GET request for the order history page.
        * `/Track`: GET request for the order tracking page.
    * **`Payments.js`:** Handles checkout and payment:
        * `/Checkout/`: GET request for the checkout/payment page.

### Frontend

* **`templates/*`:**
    * **`LandingPage.html`:**
        * The website's homepage.
        * Uses Tailwind CSS classes for styling and layout.
        * Includes navigation, hero banners, featured categories, product previews, and a footer.
        * Employs CSS animations for visual effects (typing text).
        * JavaScript file (`LandingPage.js`) handles button clicks and redirects. 
    * **`Shop.html`:**
        * The main shop interface. 
        * Features a navbar, a placeholder for a hero image, product card display, promotional sections, and a footer.
        * Uses Tailwind CSS for styling.
        * `Shop.js` manages interactions (likely category navigation).
    * **`Collection.html`:**
        * A template for displaying product collections.
        * Includes filtering and sorting options, a featured product section, and tabbed navigation for categories.
        * Leverages Tailwind CSS for styling.
        * `Collection.js` handles product filtering, display, and interaction with the backend (likely fetching products).
    * **`Product.html`:**
        * Displays detailed information for a single product. 
        * Features an image carousel, product description, reviews, recommendations, and add to cart/buy buttons.
        * Utilizes Tailwind CSS for styling.
        * `Product.js` manages the carousel, tab functionality (for details/reviews), and button interactions.
    * **Category Pages (`AccessoriesCollection.html`, etc.):**
        * Templates for displaying products of specific categories.
        * Include sidebars for filtering (categories, material, color, price range) and a product grid.
        * `CategoriesCollection.js` is likely used for filtering and potentially interacting with the backend.
    * **`Payment.html`:**
        * The checkout page.
        * Contains steps for address information and payment.
        * Offers multiple payment options: Google Pay, PhonePe, Paytm, credit card, debit card, net banking, and UPI.
        * Uses Tailwind CSS for styling. 
        * `Payment.js` handles form validation, payment selection, processing (simulated), and order summary generation.
    * **`Orders.html`:**
        * Displays the user's order history.
        * Uses Tailwind CSS and custom CSS for styling.
        * `Orders.js` fetches order data (likely from a JSON file for now), displays it, and handles interactions like expanding order details and tracking.
    * **`TrackOrders.html`:**
        * Presents detailed tracking information for a specific order. 
        * Includes order information, shipping details, a timeline, and a list of ordered items.
        * `TrackOrders.js` fetches tracking data (likely from a JSON file) and populates the page.
    * **`About.html`, `Contact.html`:**
        * Static pages providing information about the store and contact details.
        * Tailwind CSS for styling.
    * **`cart.html`:**
        * Displays the user's shopping cart.
        * Allows for changing item quantity and proceeding to checkout.
        * `cart.js` manages cart display, quantity updates, order summary, and local storage interactions.
    * **`checkout.html`:**
        * Implements a multi-step checkout process. 
        * Includes steps for shipping, payment, and order review.
        * `checkout.js` manages the steps, form validation, payment method selection, and final order placement.
    * **Auth Pages (`Reset-Password.html`, etc.):**
        * Pages for user registration, login, and password reset.
        * Include form validation and input handling.
        * JS files (`Reset-Password.js`, `Submit-Email.js`, `SubmitOTP.js`) manage form submissions, validation, and redirection.

* **`static/CSS/output.css`:**
    * Likely generated from Tailwind CSS configuration. 
    * Provides utility classes for styling. 
    * Some HTML files also include inline styles or `<style>` tags for specific adjustments. 

* **`static/JS/*`:**
    * **`CategoriesCollection.js`:** Handles filtering and interactions on category pages.
    * **Auth JS Files:** 
        * `Submit-Email.js`: Manages email submission for password reset.
        * `Reset-Password.js`: Handles new password submission and validation.
        * `SubmitOTP.js`: Manages OTP submission and verification.
    * **`cart.js`:** Manages the shopping cart page logic (item display, quantity updates, order summary).
    * **`checkout.js`:**  Handles the checkout process, including form validation, payment method selection, and order placement.
    * **`Orders.js`:** Manages the order history page (fetching, displaying, and interactions).
    * **`TrackOrders.js`:**  Handles the order tracking page, fetching and displaying tracking details.
    * **`Payment.js`:** Manages the payment page, including form validation, payment method selection, and simulated payment processing.
    * **`Shop.js`:**  Likely handles interactions on the main shop page, potentially category navigation.
    * **`Collection.js`:**  Manages product filtering, display, and interaction with the backend on the collections page.
    * **`Product.js`:** Manages interactions on individual product pages (carousel, tabs, buttons).
    * **`Profile.js`:** Handles user profile page interactions (editing, saving information).
    * **`LandingPage.js`:**  Manages button clicks and redirects on the homepage. 
    * **`Wishlist.js`:** Manages the user's wishlist page (item display, removal, search functionality).

## Conclusion

This detailed explanation provides a comprehensive understanding of the codebase. While the current state indicates a work in progress, the foundation is solid. By implementing the suggested next steps, "The Wardrobe" can become a fully functional and feature-rich e-commerce platform. 