// home.js

import { quizCard } from "./cards.js";

// Protect home page
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!loggedInUser) {
    // Not logged in → redirect to login
    window.location.replace('./login.html');
}

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.replace('../index.html'); // Go back to landing page
}

// Attach logout function to logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}

// create quiz btn
const createBtn = document.querySelector('.create-quiz'); 
createBtn.addEventListener('click', () => {
    window.location.href = './quiz.html';
    console.log("s");
    
});

//load quiz data to make cards
quizCard();