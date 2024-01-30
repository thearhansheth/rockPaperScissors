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

userSelection = prompt("Select Rock, Paper or Scissors");
computerSelection = getComputerChoice();
result = playRound(userSelection, computerSelection);
console.log(result);
