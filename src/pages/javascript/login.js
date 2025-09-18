// Redirect logged-in users to home
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (loggedInUser) {
    window.location.replace('home.html');
}

// Login function
const loginUser = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = savedUsers.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        // alert("Login successful!");
        window.location.replace('home.html');
        return true;
    } else {
        alert("Invalid email or password!");
        return false;
    }
};

// Handle login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        loginUser(email, password);
    });
}
