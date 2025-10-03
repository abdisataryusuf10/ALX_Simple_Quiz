// Function to check the user's answer
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";
    
    // Retrieve the User's Answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        
        // Compare the User's Answer with the Correct Answer
        if (userAnswer === correctAnswer) {
            // Correct answer
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Incorrect answer
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // No answer selected
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
