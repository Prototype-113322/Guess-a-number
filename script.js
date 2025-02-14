"use strict";
// SELECTING ELEMENTS
let submitButton = document.querySelector(".submit-btn");
let resetButton = document.querySelector(".reset-btn");
let selectScore = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
let validMessage = document.querySelector(".valid-message");
let selectingGuessInput = document.querySelector("#guess");

// Random Number Generator

let finalRandomNumber = Math.floor(Math.random() * 20) + 1;
console.log(finalRandomNumber); // Debug Purpose

// Default Score
let score = 5;
let highscore = 0;

function submitButtonFunctionality() {
  submitButton.addEventListener("click", function () {
    // If score is zero then the submit button must be disable to prevent more inputs
    if (score <= 0) {
      validMessage.innerText = "Game Over! ❌";
      submitButton.disabled = true;
      selectingGuessInput.disabled = true;
      return;
    }

    let hScore = Number(highScore.innerText);
    let guessInput = Number(selectingGuessInput.value);

    // If user tries to add value greater than 20 or lesser than 0 or no value then it will give us appropriate answer
    if (!guessInput || guessInput > 20 || guessInput < 0) {
      validMessage.innerText =
        "Invalid Input! ❗ (Enter a number between 1-20)";
      return;
    }

    if (finalRandomNumber === guessInput) {
      validMessage.innerText = "Correct! 💯";
      if (score > hScore) {
        highScore.innerText = score;
      }
      submitButton.disabled = true;
      selectingGuessInput.disabled = true;
    }
    // console.log("Correct");
    else if (finalRandomNumber > guessInput) {
      validMessage.innerText = "Too Low 📉";
      score--;
      selectScore.innerText = score;
    } else {
      validMessage.innerText = "Too High 📈";
      score--;
      selectScore.innerText = score;
    }
  });
}

// Reset Button

function resetButtonFunctionality() {
  resetButton.addEventListener("click", function () {
    validMessage.innerText = "Start Guessing ....";
    submitButton.disabled = false;
    selectingGuessInput.disabled = false;
    selectingGuessInput.value = "";
    score = 5;
    selectScore.textContent = score;

    // To Generate Random Number
    finalRandomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(finalRandomNumber); // Debug Purpose
  });
}

function initializeGame() {
  resetButtonFunctionality();
  submitButtonFunctionality();
}

initializeGame();
