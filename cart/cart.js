document.addEventListener("DOMContentLoaded", function() {
    const prices = document.querySelectorAll('.price');
    let totalCost = 0;
    let itemCount = 0;

    prices.forEach(price => {
        if (itemCount < 3) {
            const productCard = price.parentElement;
            const quantityElement = productCard.querySelector('.quantity');
            if (quantityElement) {
                const quantity = parseInt(quantityElement.textContent.replace(/\D/g, ''));
                const priceValue = parseFloat(price.textContent.replace('$', ''));

                if (!isNaN(quantity) && !isNaN(priceValue)) {
                    totalCost += priceValue * quantity;
                    itemCount++;
                    console.log(`Proceed: Item ${itemCount}, Price - $${priceValue}, Quantity - ${quantity}`);
                } else {
                    console.error("Invalid quantity or price value");
                }
            } else {
                console.error("Quantity element not found");
            }
        }
    });

    const totalCostElement = document.getElementById('total-cost');
    if (totalCostElement) {
        totalCostElement.textContent = `${totalCost.toFixed(2)}`;
    } else {
        console.error("Total cost element not found");
    }
    console.log(`Total Cost: $${totalCost.toFixed(2)}`);
});
