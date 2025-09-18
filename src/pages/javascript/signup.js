// Redirect logged-in users to home
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (loggedInUser) {
    window.location.replace('home.html');
}

// Signup function
const saveUser = (name, email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = savedUsers.some(u => u.email === email);

    if (userExists) {
        alert("User already exists!");
        return false;
    }

    const newUser = { id: Date.now(), name, email, password };
    savedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(savedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    // alert("Signup successful!");
    window.location.replace('home.html');
    return true;
};

// Handle signup form
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        saveUser(name, email, password);
    });
}
