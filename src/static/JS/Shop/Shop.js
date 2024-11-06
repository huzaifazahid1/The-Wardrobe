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
 //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
