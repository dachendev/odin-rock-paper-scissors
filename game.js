// store emojis as constants for easier use
const ROCK_EMOJI = "\u{270A}";
const PAPER_EMOJI = "\u{270B}";
const SCISSORS_EMOJI = "\u{270C}";

// get DOM elements
const playerDisplay = document.getElementById("player");
const playerScoreDisplay = document.querySelector("#player .team-score");
const playerChoiceDisplay = document.querySelector("#player .team-choice");

const computerDisplay = document.getElementById("computer");
const computerScoreDisplay = document.querySelector("#computer .team-score");
const computerChoiceDisplay = document.querySelector("#computer .team-choice");

const buttons = document.querySelectorAll(".choices button");

const message = document.getElementById("message");

let playerScore = 0;
let computerScore = 0;

// helper fn to get random element from array
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerChoice() {
  return random([ROCK_EMOJI, PAPER_EMOJI, SCISSORS_EMOJI]);
}

// Generate random win/loss messages to create personality
function getWinMessage() {
  const messages = [
    "You were born for this!",
    "You lucky duck!",
    "Hey look at you!",
    "Keep it up!",
  ];

  return random(messages);
}

function getLossMessage() {
  const messages = [
    "Might as well give up now.",
    "You're bad at this.",
    "Yikes.",
    "Oops.",
  ];

  return random(messages);
}

function playRound(playerChoice) {
  // clean up from last round
  playerDisplay.classList.remove("round-win");
  computerDisplay.classList.remove("round-win");

  const computerChoice = getComputerChoice();

  playerChoiceDisplay.innerHTML = playerChoice;
  computerChoiceDisplay.innerHTML = computerChoice;

  if (playerChoice == computerChoice) {
    message.innerText = "It's a tie?";
  }
  else if (
    (playerChoice == ROCK_EMOJI && computerChoice == SCISSORS_EMOJI)
    || (playerChoice == PAPER_EMOJI && computerChoice == ROCK_EMOJI)
    || (playerChoice == SCISSORS_EMOJI && computerChoice == PAPER_EMOJI)
  ) {
    // player wins
    playerScore++;

    playerDisplay.classList.add("round-win");
    playerScoreDisplay.innerText = String(playerScore).padStart(2, '0');
    message.innerText = getWinMessage();
  }
  else {
    // computer wins
    computerScore++;

    computerDisplay.classList.add("round-win");
    computerScoreDisplay.innerText = String(computerScore).padStart(2, '0');
    message.innerText = getLossMessage();
  }
}

function handleClick(e) {
  playRound(e.target.value);
}

// register event listeners
buttons.forEach(button => button.addEventListener("click", handleClick));