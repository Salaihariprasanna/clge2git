document.addEventListener("DOMContentLoaded", function() {
    const prices = document.querySelectorAll('.price');
    let totalCost = 0;

    prices.forEach(price => {
        const productCard = price.parentElement;
        const quantityElement = productCard.querySelector('.quantity');
        const quantity = parseInt(quantityElement.textContent.replace(/\D/g, '')); 
        const priceValue = parseFloat(price.textContent.replace('$', '')); 
        totalCost += priceValue * quantity;
    });

    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
});
