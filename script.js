//your code here
// Get the prices elements
const pricesElements = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the total price
let totalPrice = 0;
pricesElements.forEach(element => {
  const price = parseFloat(element.textContent);
  if (!isNaN(price)) {
    totalPrice += price;
  }
});

// Display the total price
const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
grandTotalElement.textContent = totalPrice.toFixed(2);

// Assertion check
const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

// Verify if the calculated total matches the grand total displayed
const displayedTotal = parseFloat(grandTotalElement.textContent);
assert(totalPrice === displayedTotal, "Total price mismatch!");

console.log("Total price calculation and grand total match.");
