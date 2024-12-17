// Generate the random computer choice
function getComputerChoice(r, p, s) {
  r = "rock";
  p = "paper";
  s = "scissors";
  const randomValue = Math.floor(Math.random() * 100) + 1;

  if (randomValue <= 33) {
    return r;
  } else if (randomValue <= 66) {
    return p;
  } else {
    return s;
  }
}

//Get the human choice from prompt and set it to lowercase
function getHumanChoice() {
  let choose = prompt("Rock, Paper, Scissors?");
  return choose.toLowerCase();
}

// Setting scores
let humanScore = 0;
let computerScore = 0;

// Playing a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice == "paper" && computerChoice === "rock") ||
    (humanChoice == "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
  }
}

playGame();
