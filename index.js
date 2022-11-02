// computer's play: randomly return ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  let moves = ["rock", "paper", "scissors"];
  var play = moves[Math.floor(Math.random() * moves.length)];
  console.log("Computer selects: " + play);
  return play;
}

// plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // uncomment below to check values of playerSelection and computerSelection
  // console.log(playerSelection, computerSelection);

  if (playerSelection == '') {
    computerScore++;
    addComputerPoints(computerScore);
    addHumanPoints(playerScore);
    return 'You lost!';
  }

  if (computerSelection === playerSelection) {
    playerScore++;
    computerScore++;
    addComputerPoints(computerScore);
    addHumanPoints(playerScore);
    return "Its a tie!";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      addComputerPoints(computerScore);
      addHumanPoints(playerScore);
      return "You won! Rock beats scissors";
    } else if (computerSelection === "paper") {
      computerScore++;
      addComputerPoints(computerScore);
      addHumanPoints(playerScore);
      return "You lost! Paper beats rock";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      addComputerPoints(computerScore);
      addHumanPoints(playerScore);
      return "You lost! Rock beats scissors";
    } else if (computerSelection === "paper") {
      playerScore++;
      addComputerPoints(computerScore);
      addHumanPoints(playerScore);
      return "You won! Scissors beats paper";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      addComputerPoints(computerScore);
      addHumanPoints(playerScore);
      return "You won! Paper beats rock";
    } else if (computerSelection === "scissors") {
      computerScore++;
      addComputerPoints(computerScore);
      addHumanPoints(playerScore);
      return "You lost! Scissors beats paper";
    }
  }
  // addComputerPoints(computerScore);
  // addHumanPoints(playerScore);
}

var playerScore = 0;
var computerScore = 0;
var round = 1;
var playerWeapon = '';
var scoreTable = [
  {
    Player: playerScore,
    Computer: computerScore
  }
];

const play = document.getElementById('playBtn');

play.addEventListener('click', () => {
  play.classList.add('disabled');
  play.disabled = true;
  toggleWeapons('enable');
  const game = () => {
    // update round status
    toggleStatus('show', round);

    // get user's weapon
    playerWeapon = '';
    const weapons = document.getElementById('weapons');
    let weaponsItem = weapons.children;
    Object.values(weaponsItem).forEach(val => {
      let element = document.getElementById(val.id);
      // reset weapon selection style
      element.classList.remove('selected');
      element.addEventListener('click', () => {
        playerWeapon = val.id;
        element.classList.add('selected');
      })
    });

    // 10 second countdown for user to choose weapon
    let countdown = 5;
    let countdownTimer = setInterval(() => {
      if (countdown <= 0) {
        if (playerWeapon === '') {
          alert('No selection \nPoints added to robot');
          // document.location.reload(true);
        }

        // remove hidden
        const winner = document.getElementById('winner');
        winner.hidden = false;
        // get robot's weapon
        var computerWeapon = getComputerChoice();
        // compute and display result
        let result = playRound(playerWeapon, computerWeapon);
        endRound(result);
        // next round
        round++;
        if (round !== 6) {
          game();
        } else {
          checkWinner();
        }


        clearInterval(countdownTimer);
      }
      document.getElementById("progressBar").value = 5 - countdown;
      countdown -= 1;
    }, 1000)
  }
  game();
})

function toggleStatus(display, roundNumber) {
  const roundStatus = document.getElementById('roundStatus');
  const round = document.getElementById('round');
  round.textContent = `Round ${roundNumber}`;
  roundStatus.appendChild(round);
  if (display === 'show') {
    roundStatus.style.visibility = 'visible';
  } else if (display === 'hide') {
    roundStatus.style.visibility = 'hidden';
  } else {
    alert('Error');
  }

}

function toggleWeapons(display) {
  const weapons = document.getElementById('weapons');
  let weaponsItem = weapons.children;
  if (display === 'disable') {
    Object.values(weaponsItem).forEach(val => {
      let element = document.getElementById(val.id);
      element.disabled = true;
      element.classList.remove('active');
    });
  } else if (display === 'enable') {
    Object.values(weaponsItem).forEach(val => {
      let element = document.getElementById(val.id);
      element.disabled = false;
      element.classList.add('active');
    });
  } else {
    alert('Error');
  }
}

function addHumanPoints(points) {
  console.log('Player: ' + points)
  const humanPanel = document.getElementById('humanPanel');
  humanPanel.textContent = `${points}`;
}

function addComputerPoints(points) {
  const robotsPanel = document.getElementById('robotsPanel');
  robotsPanel.textContent = `${points}`;
}

// end round and display winner
function endRound(result) {
  const roundStatus = document.getElementById('roundStatus');
  const winner = document.getElementById('winner');
  winner.innerHTML = result;
  roundStatus.appendChild(winner);
}

function reset() {
  toggleStatus('hide');
  toggleWeapons('disable');
  play.classList.remove('disabled');
  play.disabled = false;
}

function checkWinner() {
  if (playerScore > computerScore) {
    alert('Player: ' + playerScore + ' Robot: ' + computerScore + '\nPlayer wins!');
    // console.log("%cPlayer wins!", "color:green;");
  } else if (playerScore < computerScore) {
    alert('Player: ' + playerScore + ' Robot: ' + computerScore + '\nPlayer lost! Better luck next time 😁!');
    // console.log("%cPlayer lost! Better luck next time 😁", "color:red;");
  } else {
    alert('Player: ' + playerScore + ' Robot: ' + computerScore + '\nIts a tie! Better luck next time 😁!');
    // console.log("%cIts a tie! Better luck next time", "color:yellow;");
  }
  document.location.reload(true);
}