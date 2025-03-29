const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

submitGuess.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess === randomNumber) {
    feedback.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    submitGuess.disabled = true;
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }

  guessInput.value = "";
});
