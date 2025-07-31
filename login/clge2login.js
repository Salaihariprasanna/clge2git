// Get elements
const formWrapper = document.getElementById('form-wrapper');
const toSignupBtn = document.getElementById('to-signup');
const toLoginBtn = document.getElementById('to-login');

// Add event listeners
toSignupBtn.addEventListener('click', () => {
    formWrapper.classList.add('flipped');
});

toLoginBtn.addEventListener('click', () => {
    formWrapper.classList.remove('flipped');
});
