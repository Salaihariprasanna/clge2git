// Get elements
const cardFlip = document.getElementById('cardflip');

// Add event listeners
cardFlip.addEventListener('click', () => {
    .classList.add('flipped');
});

toLoginBtn.addEventListener('click', () => {
    formWrapper.classList.remove('flipped');
});
