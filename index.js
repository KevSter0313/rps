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
  console.log(`${playerChoice} vs ${computerChoice}`);
  if (playerChoice == "rock" && computerChoice == "scissors")
    console.log("Player wins");
  else if (playerChoice == "rock" && computerChoice == "paper")
    console.log("Computer wins");
  else if (playerChoice == "paper" && computerChoice == "rock")
    console.log("Player wins");
  else if (playerChoice == "paper" && computerChoice == "scissors")
    console.log("Computer wins");
  else if (playerChoice == "scissors" && computerChoice == "paper")
    console.log("Player wins");
  else if (playerChoice == "scissors" && computerChoice == "rock")
    console.log("Computer wins");
  else {
    console.log("It's a draw");
  }
}

function playOneRound() {
  let playerChoice;
  let computerChoice = getComputerChoice();
  do {
    playerChoice = prompt("Rock, Paper or Scissors?: ").toLowerCase();
  } while (
    playerChoice != "rock" &&
    playerChoice != "paper" &&
    playerChoice != "scissors"
  );
  decideWinner(playerChoice, computerChoice);
}

playOneRound();
