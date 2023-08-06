let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // randomly return rock, paper, or scissors
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // make sure inputs are case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // return a string that declares the winner of the round
    // eg. "You Lose! Paper beats Rock"
    let result = "";

    if (playerSelection === computerSelection) {
        result = `It's a tie! You both chose ${playerSelection}`;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper")) {

        playerScore++;
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

function game() {
    // call playRound() 5 times
    const numRounds = 5;
    for (let i = 0; i < numRounds; i++) {
        // use prompt to take input from the player
        let playerSelection = prompt("Choose rock, paper, or scissors");
        let computerSelection = getComputerChoice();

        // use console.log to display the results, and the overall winner
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (i === numRounds - 1) {
            if (playerScore === computerScore) {
                console.log("It's a tie!");
            } else if (playerScore > computerScore) {
                console.log("Player wins!");
            } else {
                console.log("Computer wins!");
            }
        }
    }
}
