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

function playRound(playerSelection, computerSelection) {
    playerSelection = (prompt("Please select rock, paper or scissors.")).toLowerCase();
    computerSelection = (getComputerChoice()).toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return "Tie!"
    }
}