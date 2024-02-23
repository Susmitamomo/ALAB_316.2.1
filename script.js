// Generate a random number between 1 and 100
const now = new Date();
const seed = now.getSeconds(); // Use the seconds component of the current time as the seed
const randomNumber = parseInt('0.' + seed.toString().split('').reverse().join('')) * 100 + 1;

let attempts = 5;

// Get references to DOM elements
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const messageElement = document.getElementById('message');

// Event listener for the submit button click
submitBtn.addEventListener('click', checkGuess);

function checkGuess() {
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts--;
        if (guess === randomNumber) {
            messageElement.textContent = `Congratulations! You guessed the correct number ${randomNumber}!`;
            disableInput();
        } else if (guess < randomNumber) {
            messageElement.textContent = `Try a higher number. Remaining attempts: ${attempts}`;
        } else {
            messageElement.textContent = `Try a lower number. Remaining attempts: ${attempts}`;
        }

        if (attempts === 0) {
            window.setTimeout(() => { // Using window.setTimeout()
                messageElement.textContent = `Game over! The correct number was ${randomNumber}.`;
                disableInput();
            }, 500);
        }
    }
}

function disableInput() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
}
