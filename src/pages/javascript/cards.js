export const quizCard = () => {
    // Get the container where the quiz cards will be displayed.
    // Assuming you have a div with the class 'card-container' in your HTML.
    const cardContainer = document.querySelector('.card-container');
    if (!cardContainer) {
        console.error("Error: The .card-container element was not found.");
        return;
    }

    // Retrieve quiz data from local storage.
    const savedQuizData = JSON.parse(localStorage.getItem('quizzes')) || [];
    
    // Clear any existing cards to prevent duplicates when reloading.
    cardContainer.innerHTML = '';

    // Loop through each saved quiz and create a card for it.
    savedQuizData.forEach(quiz => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <h3>${quiz.quizTitle}</h3>
            <p>📄 ${quiz.numQuestions} Questions · ⏱️ ${quiz.quizTimer} min</p>
            <p class="difficulty">Difficulty: ${quiz.difficultyLevel}</p>
            <p class="status">Published</p>

            <div class="btn-group">
                <button class="delete">Delete</button>
                <button class="view">View</button>
            </div>
        `;

        cardContainer.appendChild(div);
    });
};