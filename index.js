const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    decideWinner(playerChoice, computerChoice);
  })
);

function getComputerChoice() {
  // Generates a number between 1 and 3
  let number = Math.floor(Math.random() * (3 - 1) + 1);
  switch (number) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";
  }
}

function decideWinner(playerChoice, computerChoice) {
  alert(`${playerChoice} vs ${computerChoice}`);
  if (playerChoice == "rock" && computerChoice == "scissors")
    alert("Player wins");
  else if (playerChoice == "rock" && computerChoice == "paper")
    alert("Computer wins");
  else if (playerChoice == "paper" && computerChoice == "rock")
    alert("Player wins");
  else if (playerChoice == "paper" && computerChoice == "scissors")
    alert("Computer wins");
  else if (playerChoice == "scissors" && computerChoice == "paper")
    alert("Player wins");
  else if (playerChoice == "scissors" && computerChoice == "rock")
    alert("Computer wins");
  else {
    alert("It's a draw");
  }
}
