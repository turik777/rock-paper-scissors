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
    let result = "";
    computerSelection = getComputerChoice();
    if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        result = `You Lose! ${computerSelection} beats ${playerSelection}. Score: ${playerScore}:${computerScore}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        result = `You Win! ${playerSelection} beats ${computerSelection}. Score: ${playerScore}:${computerScore}`;
    } else {
        result = `Tie! Score: ${playerScore}:${computerScore}`;
    }
    console.log(result);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));