// quiz.js

// Protect quiz page
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

// Handle form submission
const createQuizForm = document.getElementById("createQuizForm");
createQuizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Create a FormData object to easily get form values
    const formData = new FormData(createQuizForm);
    const quizData = {};
    for (const [key, value] of formData.entries()) {
        quizData[key] = value;
    }

    // Generate a unique ID for the new quiz
    const quizId = 'quiz_' + Date.now();
    quizData.id = quizId;

    // Get existing quizzes from local storage or initialize an empty array
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    quizzes.push(quizData);

    // Save the updated quizzes list to local storage
    localStorage.setItem('quizzes', JSON.stringify(quizzes));

    // Redirect to the home page after saving the quiz
    window.location.href = './home.html';
});