// script.js

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TO DO: Add authentication logic here
    // For now, just check if the username and password are not empty
    if (username && password) {
        console.log('Login successful!');
        // Redirect to dashboard or next page
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});