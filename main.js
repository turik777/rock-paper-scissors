function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = (prompt("Please select rock, paper or scissors.")).toLowerCase();
    computerSelection = (getComputerChoice()).toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}. Score: ${playerScore}:${computerScore}`
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}. Score: ${playerScore}:${computerScore}`
    } else {
        return `Tie! Score: ${playerScore}:${computerScore}`
    }
}
