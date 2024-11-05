 // Get references to buttons and cards
 const newArrivalBtn = document.getElementById("new-arrival-btn");
 const bestSellersBtn = document.getElementById("best-sellers-btn");
 const newArrivalCard = document.getElementById("card-new-arrival");
 const bestSellersCard = document.getElementById("card-best-sellers");
 
 // Add click event listeners to buttons
 newArrivalBtn.addEventListener("click", () => {
   // Show the New Arrival card and hide the Best Sellers card
   newArrivalCard.style.display = "block",opacity="1";
   bestSellersCard.style.display = "none",opacity="0";
 });
 
 bestSellersBtn.addEventListener("click", () => {
   // Show the Best Sellers card and hide the New Arrival card
   bestSellersCard.style.display = "block",opacity="1";
   newArrivalCard.style.display = "none",opacity="0";
 });
