// computer's play: randomly return ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  let moves = ["Rock", "Paper", "Scissors"];
  var play = moves[Math.floor(Math.random() * moves.length)];
  console.log("Computer selects: " + play);
  return play;
}

// plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // uncomment below to check values of playerSelection and computerSelection
  // console.log(playerSelection, computerSelection);
  let computerInput = computerSelection.toLowerCase();
  let playerInput = playerSelection.toLowerCase();

  if (computerInput === playerInput) {
    playerScore++;
    computerScore++;
    return "Its a tie!";
  }

  if (playerInput === "rock") {
    if (computerInput === "scissors") {
      playerScore++;
      return "You won! Rock beats scissors";
    } else if (computerInput === "paper") {
      computerScore++;
      return "You lost! Paper beats rock";
    }
  }

  if (playerInput === "scissors") {
    if (computerInput === "rock") {
      computerScore++;
      return "You lost! Rock beats scissors";
    } else if (computerInput === "paper") {
      playerScore++;
      return "You won! Scissors beats paper";
    }
  }

  if (playerInput === "paper") {
    if (computerInput === "rock") {
      playerScore++;
      return "You won! Paper beats rock";
    } else if (computerInput === "scissors") {
      computerScore++;
      return "You lost! Scissors beats paper";
    }
  }
}

function game() {
  // 5 round game
  for (let i = 0; i < 5; i++) {
    let count = i + 1;
    console.info(`%cRound ${count}`, "font-size: 700;font-weight: bold;");
    // get user input
    let playerSelection = prompt("Choose between 'Rock', 'Paper', 'Scissors'");
    console.log("You have chosen: " + playerSelection);
    // get computer input
    const computerSelection = getComputerChoice();
    // play round
    console.log(playRound(playerSelection, computerSelection));
    let scoreTable = [
      {
        Player: playerScore,
        Computer: computerScore
      }
    ];
    console.table(scoreTable);
  }

  // who is the winner?
  if (playerScore > computerScore) {
    console.log("%cPlayer wins!", "color:green;");
  } else if (playerScore < computerScore) {
    console.log("%cPlayer lost! Better luck next time 😁", "color:red;");
  } else {
    console.log("%cIts a tie! Better luck next time", "color:yellow;");
  }
}

var playerScore = 0;
var computerScore = 0;
game();
