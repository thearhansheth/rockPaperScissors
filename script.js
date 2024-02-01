//Game Elements
let playerScore = 0;
let computerScore = 0;

function playRound(userInputChoice, computerChoice) {
  console.log(userInputChoice.toLowerCase());
  console.log(computerChoice);
  if (
    userInputChoice.toLowerCase() != "rock" &&
    userInputChoice.toLowerCase() != "paper" &&
    userInputChoice.toLowerCase() != "scissors"
  ) {
    return "Invalid Choice!";
  }
  if (userInputChoice.toLowerCase() === computerChoice.toLowerCase()) {
    return "No winner, try again!";
  } else if (computerChoice.toLowerCase() === "rock") {
    if (userInputChoice.toLowerCase() === "paper") {
      playerScore++;
      return "You win! Paper beats Rock!";
    } else {
      computerScore++;
      return "You lose! Rock beats Scissors!";
    }
  } else if (computerChoice.toLowerCase() === "paper") {
    if (userInputChoice.toLowerCase() === "scissors") {
      playerScore++;
      return "You win! Scissors beats Paper!";
    } else {
      computerScore++;
      return "You lose! Paper beats Rock!";
    }
  } else if (computerChoice.toLowerCase() === "scissors") {
    if (userInputChoice.toLowerCase() === "rock") {
      playerScore++;
      return "You win! Rock beats Scissors!";
    } else {
      computerScore++;
      return "You lose! Scissors beats Paper";
    }
  }
}

//UI Elements
const rockBtn = document.getElementById("Rockbtn");
const paperBtn = document.getElementById("Paperbtn");
const scissorsBtn = document.getElementById("Scissorsbtn");

console.log(rockBtn, paperBtn, scissorsBtn);

if (rockBtn) {
  rockBtn.addEventListener("click", playRound("rock", getComputerChoice()));
}

if (paperBtn) {
  paperBtn.addEventListener("click", playRound("paper", getComputerChoice()));
}

if (scissorsBtn) {
  scissorsBtn.addEventListener(
    "click",
    playRound("scissors", getComputerChoice())
  );
}

//functions

function buttonClicked(playerSelection) {
  console.log(`Player selected ${playerSelection}`);
  computerSelection = getComputerChoice();
}
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let selectedChoice = Math.floor(Math.random() * choice.length);
  return choice[selectedChoice];
}

// function playGame() {
//   let userWinCounter = 0;
//   let compWinCounter = 0;
//   for (let i = 0; i <= 4; i++) {
//     userSelection = prompt("Select Rock, Paper or Scissors");
//     computerSelection = getComputerChoice();
//     result = playRound(userSelection, computerSelection);
//     console.log(result);
//     if (result.includes("You win")) {
//       userWinCounter++;
//     } else if (result.includes("You lose")) {
//       compWinCounter++;
//     }
//   }
//
//   if (userWinCounter > compWinCounter) {
//     return "You Win";
//   } else if (userWinCounter < compWinCounter) {
//     return "GAME OVER. Try Again";
//   } else {
//     return "Close One. It was a draw";
//   }
// }
//
// finalResult = playGame();
// console.log(finalResult);
