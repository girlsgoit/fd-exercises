const totalRounds = 3;
let currentRound = 0;
const score = {
  player: 0,
  pc: 0,
};

let pcMove = 0;

let choiseToNameMap = ['rock', 'paper', 'scissors'];

function makePcMove() {
  pcMove = Math.round(Math.random() * 2);
}

function incrementRound() {
  currentRound++;
  playedRounds.innerText = currentRound + 1;
}

document.querySelector('.rock-btn').addEventListener('click', function() {
  fight(0);
});
document.querySelector('.paper-btn').addEventListener('click', function() {
  fight(1);
});
document.querySelector('.scissors-btn').addEventListener('click', function() {
  fight(2);
});

function fight(playerChoice) {
  makePcMove();
  
  if (playerChoice === pcMove) {
    alert(`It is a draw! You both chose ${choiseToNameMap[playerChoice]}.`);
  } else if (playerChoice === 0) {
    handleRockScenario();
    incrementRound();
  } else if (playerChoice === 1) {
    handlePaperScenario();
    incrementRound();
  } else if (playerChoice === 2) {
    handleScissorsScenario();
    incrementRound();
  }
  
  if (currentRound === totalRounds) {
    announceOverwallWinner();
  }
}

function handleRockScenario() {
  if (pcMove === 1) {
    announcePCWin(pcMove);
  } else {
    announcePlayerWin(pcMove);
  }
}

function handlePaperScenario() {
  if (pcMove === 0) {
    announcePlayerWin(pcMove);
  } else {
    announcePCWin(pcMove);
  }
}

function handleScissorsScenario() {
  if (pcMove === 0) {
    announcePCWin(pcMove);
  } else {
    announcePlayerWin(pcMove);
  }
}

function getMoveDescription(n) {
  return choiseToNameMap[n];
}

function announcePCWin() {
  score.pc++;
  let moveText = getMoveDescription(pcMove);
  
  alert('PC won! It chose ' + moveText + '!');
}

function announcePlayerWin() {
  score.player++;
  let moveText = getMoveDescription(pcMove);
  
  alert('You won! PC chose ' + moveText + '!');
}

function announceOverwallWinner() {
  if (score.pc > score.player) {
    alert('PC wins this game with a score of ' + score.pc + ' to ' + score.player + '!');
  } else {
    alert('You win this game with a score of ' + score.player + ' to ' + score.pc + '!');
  }
  
  score.pc = 0;
  score.player = 0;
  currentRound = 0;
  playedRounds.innerText = 1;
}
