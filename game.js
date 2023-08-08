const buttons = document.querySelectorAll("button");
const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");
const messageContainer = document.getElementById("message");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // randomly return rock, paper, or scissors
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
  // make sure inputs are case insensitive
  playerChoice = playerChoice.toLowerCase();

  // computer picks a random choice
  const computerChoice = getComputerChoice();

  // return a string that declares the winner of the round
  // eg. "You Lose! Paper beats Rock"
  let message = "";

  if (playerChoice === computerChoice) {
    message = `It's a tie! You both chose ${playerChoice}`;
  }
  else if ((playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper")) {

    playerScore++;
    message = `You win! ${playerChoice} beats ${computerChoice}`;
  }
  else {
    computerScore++;
    message = `You lose! ${computerChoice} beats ${playerChoice}`;
  }

  // display results using DOM methods
  playerScoreContainer.innerText = playerScore;
  computerScoreContainer.innerText = computerScore;
  messageContainer.innerText = message;
}

function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button =>
  button.addEventListener("click", function (e) {
    playRound(e.target.value);

    if (playerScore == 5) {
      messageContainer.innerText = "Player wins!";
      disableButtons();
    }
    else if (computerScore == 5) {
      messageContainer.innerText = "Computer wins!";
      disableButtons();
    }
  }));