function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let selectedChoice = Math.floor(Math.random * choice.length);
  return choice[selectedChoice];
}

for (let i = 0; i <= 4; i++) {
  console.log(getComputerChoice());
}
