//UI Elements
const rockBtn = document.getElementById("Rockbtn");
const paperBtn = document.getElementById("Paperbtn");
const scissorsBtn = document.getElementById("Scissorsbtn");

rockBtn.addEventListener("click", playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener(
  "click",
  playRound("scissors", getComputerChoice())
);

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let selectedChoice = Math.floor(Math.random() * choice.length);
  return choice[selectedChoice];
}

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
      return "You win! Paper beats Rock!";
    } else {
      return "You lose! Rock beats Scissors!";
    }
  } else if (computerChoice.toLowerCase() === "paper") {
    if (userInputChoice.toLowerCase() === "scissors") {
      return "You win! Scissors beats Paper!";
    } else {
      return "You lose! Paper beats Rock!";
    }
  } else if (computerChoice.toLowerCase() === "scissors") {
    if (userInputChoice.toLowerCase() === "rock") {
      return "You win! Rock beats Scissors!";
    } else {
      return "You lose! Scissors beats Paper";
    }
  }
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

finalResult = playGame();
console.log(finalResult);
