function updateCartSummary() {
    let subtotal = 0;
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const priceText = item.querySelector('.cart-item-price').innerText;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, '')); // Remove "RS." or other non-digits
        const quantity = parseInt(item.querySelector('.quantity-control span').innerText);

        subtotal += price * quantity;
    });

    document.getElementById('subtotal').innerText = 'RS.' + subtotal.toFixed(2);
    document.getElementById('total').innerText = 'RS.' + subtotal.toFixed(2); // You can add tax/coupon logic here if needed
}

function increaseQuantity(button) {
    const span = button.previousElementSibling;
    span.innerText = parseInt(span.innerText) + 1;
    updateCartSummary();
}

function decreaseQuantity(button) {
    const span = button.nextElementSibling;
    let qty = parseInt(span.innerText);
    if (qty > 1) {
        span.innerText = qty - 1;
        updateCartSummary();
    }
}

function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateCartSummary();
}

// Initialize on load
window.onload = updateCartSummary;