let randomNumber = parseInt(Math.random() * 100) + 1;
console.log(randomNumber);

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");
const attemptsList = document.getElementById("attemptsList");
const remainGuess = document.getElementById("RemainGuess");
let attempts = [];
let remainingGuesses = 10;

function checkGuess() {
    if (guessInput.value === "") {
        alert("Please enter a number.");
        return;
    }
    const myGuess = parseInt(guessInput.value);

    if (isNaN(myGuess) || myGuess < 1 || myGuess > 100) {
        alert("Enter a valid number between 1 and 100.");
        return;
    }

    attempts.push(myGuess);
    remainingGuesses--;

    if (myGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the number!";
        endGame();
    } else if (myGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } else {
        result.textContent = "Too high! Try again.";
    }
    updateAttempts();
    displayMessage();
}

function updateAttempts() {
    const listItem = document.createElement("li");
    listItem.textContent = `Guess: ${attempts[attempts.length - 1]}, Remaining: ${remainingGuesses}`;
    attemptsList.appendChild(listItem);
}

function displayMessage() {
    if (remainingGuesses <= 0) {
        result.textContent = `💀 Game over! The number was ${randomNumber}.`;
        endGame();
    } else {
        remainGuess.textContent = `Remain Attempts: ${remainingGuesses}`;
    }
}

function resetGame() {
    randomNumber = parseInt(Math.random() * 100) + 1;
    console.log(randomNumber);
    guessInput.value = "";
    result.textContent = "";
    attempts = [];
    remainingGuesses = 10;
    attemptsList.innerHTML = "";
    remainGuess.textContent = `Remain Attempts: ${remainingGuesses}`;
    guessInput.disabled = false;
    guessButton.disabled = false;

    const existingResetBtn = document.getElementById("resetBtn");
    if (existingResetBtn) {
        existingResetBtn.remove();
    }
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.id = "resetBtn";
    resetButton.addEventListener("click", resetGame);
    document.body.appendChild(resetButton);
}

function startGame() {
    guessButton.addEventListener("click", checkGuess);
    guessInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });
    remainGuess.textContent = `Remain Attempts: ${remainingGuesses}`;
}

startGame();
// Add event listener to the guess button
guessButton.addEventListener("click", checkGuess);