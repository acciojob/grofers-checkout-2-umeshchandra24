//your code here
let value = document.querySelectorAll('[data-ns-test="prices"]')
let totalValue = 0;
value.forEach(ele =>{
    totalValue += parseFloat(ele.textContent);
})

const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
grandTotal.textContent = totalValue.toFixed(2);