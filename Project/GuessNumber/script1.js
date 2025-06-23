const randomNumber= parseInt(Math.random()* 100) + 1;
console.log(randomNumber)

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");
const attemptsList = document.getElementById("attemptsList");
const RemainGuesss = document.getElementById("RemainGuess");
let attempts = [];
let remainingGuesses = 10;


function checkGuess(myGuess) { 
    if (guessInput.value === "") {
    alert("Please enter a number between 1 and 100.");
    return;
    }
    else if (isNaN(guessInput.value) || guessInput.value < 1 || guessInput.value > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    myGuess = parseInt(guessInput.value);
    if (myGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the number!";
        endGame();
    }
    else if (myGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
        remainingGuesses--;
        attempts.push(myGuess);
        updateAttempts();
    } else {
        result.textContent = "Too high! Try again.";
        remainingGuesses--;
        attempts.push(myGuess);
        updateAttempts();
    }

}
function updateAttempts() {
    const listItem = document.createElement("li");
    listItem.textContent = `Guess: ${attempts[attempts.length - 1]}, Remaining Guesses: ${remainingGuesses}`;
    attemptsList.appendChild(listItem);
}
function displayMessage() {
    if (remainingGuesses <= 0) {
        result.textContent = `Game over! The number was ${randomNumber}.`;
        endGame();
    } else {
        RemainGuesss.textContent = `Remaining Guesses: ${remainingGuesses}`;
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
    RemainGuesss.textContent = `Remaining Guesses: ${remainingGuesses}`;
    
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    displayMessage();
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.addEventListener("click", resetGame);
    document.body.appendChild(resetButton);   

}

function startGame() {
    guessButton.addEventListener("click", function() {
        checkGuess();
        displayMessage();
    });
    guessInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkGuess();
            displayMessage();
        }
    });
    RemainGuesss.textContent = `Remaining Guesses: ${remainingGuesses}`;
    

}