// Check if user is already logged in
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (loggedInUser) {
    // Redirect logged-in users to home page
    window.location.replace('./pages/home.html');
}

// Redirect to login page when login button is clicked
const loginBtn = document.getElementById("login");
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.replace('./pages/login.html');
    });
}

// Redirect to signup page when signup button is clicked (if you have one)
const signupBtn = document.getElementById("signup");
if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        window.location.replace('./pages/signup.html');
    });
}
