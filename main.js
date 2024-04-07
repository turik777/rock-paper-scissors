function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}. Score: ${playerScore}:${computerScore}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}. Score: ${playerScore}:${computerScore}`;
    } else {
        results.textContent = `Tie! Score: ${playerScore}:${computerScore}`;
    }
    if (playerScore === 5) {
        results.textContent = `Player Win! ${playerScore}:${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        results.textContent = `Computer Win! ${playerScore}:${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));