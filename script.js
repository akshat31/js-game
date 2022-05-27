// Game section elem get
const gameOne = document.getElementById("gameOne");
const gameTwo = document.getElementById("gameTwo");
const gameThree = document.getElementById("gameThree");
const gameFour = document.getElementById("gameFour");
const gameFive = document.getElementById("gameFive");

// Game status elem get
const g1Status = document.getElementById("g1Status");
const g2Status = document.getElementById("g2Status");
const g3Status = document.getElementById("g3Status");
const g4Status = document.getElementById("g4Status");
const g5Status = document.getElementById("g5Status");

// Player elem get
const statusG1P1 = document.getElementById("statusG1P1");
const statusG1P2 = document.getElementById("statusG1P2");

const statusG2P1 = document.getElementById("statusG2P1");
const statusG2P2 = document.getElementById("statusG2P2");

const statusG3P1 = document.getElementById("statusG3P1");
const statusG3P2 = document.getElementById("statusG3P2");

const statusG4P1 = document.getElementById("statusG4P1");
const statusG4P2 = document.getElementById("statusG4P2");

const statusG5P1 = document.getElementById("statusG5P1");
const statusG5P2 = document.getElementById("statusG5P2");

// Status won elem get
const wonStatus1 = document.getElementById("wonStatus1");
const wonStatus2 = document.getElementById("wonStatus2");
const wonStatus3 = document.getElementById("wonStatus3");
const whoWon1 = document.getElementById("whoWon1");
const whoWon2 = document.getElementById("whoWon2");
const whoWon3 = document.getElementById("whoWon3");

const gameStatus = {
  game1: {
    completed: false,
    p1: null,
    p2: null,
    totalP1Won: 0,
    totalP2Won: 0,
  },
  game2: {
    completed: false,
    p1: null,
    p2: null,
    totalP1Won: 0,
    totalP2Won: 0,
  },
  game3: {
    completed: false,
    p1: null,
    p2: null,
    totalP1Won: 0,
    totalP2Won: 0,
  },
  game4: {
    completed: false,
    p1: null,
    p2: null,
    totalP1Won: 0,
    totalP2Won: 0,
  },
  game5: {
    completed: false,
    p1: null,
    p2: null,
    totalP1Won: 0,
    totalP2Won: 0,
  },
};

g1Status.style.display = "none";
g2Status.style.display = "none";
g3Status.style.display = "none";
g4Status.style.display = "none";
g5Status.style.display = "none";

gameTwo.style.display = "none";
gameThree.style.display = "none";
gameFour.style.display = "none";
gameFive.style.display = "none";

wonStatus1.style.display = 'none'
wonStatus2.style.display = 'none'
wonStatus3.style.display = 'none'
whoWon1.style.display = 'none'
whoWon2.style.display = 'none'
whoWon3.style.display = 'none'

function wonStatus (p1) {
    return p1 === 3 ? 'Player 1' : 'Player 2';
}

function finalWonStatus (p1, p2) {
    return p1 > p2 ? 'Player 1' : 'Player 2';
}

function StartGame1() {
  g1Status.style.display = "block";
  gameStatus.game1.p1 = Math.round(Math.random());
  gameStatus.game1.p2 = gameStatus.game1.p1 === 0 ? 1 : 0;
  gameStatus.game1.totalP1Won = gameStatus.game1.p1;
  gameStatus.game1.totalP2Won = gameStatus.game1.p1;
  statusG1P1.innerText = gameStatus.game1.p1;
  statusG1P2.innerText = gameStatus.game1.p2;
  gameTwo.style.display = "block";
}

function StartGame2() {
  g2Status.style.display = "block";
  gameStatus.game2.p1 = Math.round(Math.random());
  gameStatus.game2.p2 = gameStatus.game2.p1 === 0 ? 1 : 0;
  gameStatus.game2.totalP1Won = gameStatus.game2.p1 + gameStatus.game1.p1;
  gameStatus.game2.totalP2Won = gameStatus.game2.p2 + gameStatus.game1.p2;
  statusG2P1.innerText = gameStatus.game2.totalP1Won;
  statusG2P2.innerText = gameStatus.game2.totalP2Won;
  gameThree.style.display = "block";
}

function StartGame3() {
  g3Status.style.display = "block";
  gameStatus.game3.p1 = Math.round(Math.random());
  gameStatus.game3.p2 = gameStatus.game3.p1 === 0 ? 1 : 0;
  gameStatus.game3.totalP1Won =
    gameStatus.game3.p1 + gameStatus.game2.p1 + gameStatus.game1.p1;
  gameStatus.game3.totalP2Won =
    gameStatus.game3.p2 + gameStatus.game2.p2 + gameStatus.game1.p2;
  statusG3P1.innerText = gameStatus.game3.totalP1Won;
  statusG3P2.innerText = gameStatus.game3.totalP2Won;
  if (gameStatus.game3.totalP1Won === 3 || gameStatus.game3.totalP2Won === 3) {
    wonStatus1.style.display = 'block'
    whoWon1.innerText = `${wonStatus(gameStatus.game3.totalP1Won)} won the match !!`
    whoWon1.style.display = 'block'
  } else {
    gameFour.style.display = "block";
  }
}

function StartGame4() {
  g4Status.style.display = "block";
  gameStatus.game4.p1 = Math.round(Math.random());
  gameStatus.game4.p2 = gameStatus.game4.p1 === 0 ? 1 : 0;
  gameStatus.game4.totalP1Won =
    gameStatus.game4.p1 +
    gameStatus.game3.p1 +
    gameStatus.game2.p1 +
    gameStatus.game1.p1;
  gameStatus.game4.totalP2Won =
    gameStatus.game4.p2 +
    gameStatus.game3.p2 +
    gameStatus.game2.p2 +
    gameStatus.game1.p2;
  statusG4P1.innerText = gameStatus.game4.totalP1Won;
  statusG4P2.innerText = gameStatus.game4.totalP2Won;
  if (gameStatus.game4.totalP1Won === 3 || gameStatus.game4.totalP2Won === 3) {
    wonStatus2.style.display = 'block'
    whoWon2.innerText = `${wonStatus(gameStatus.game4.totalP1Won)} won the match !!`
    whoWon2.style.display = 'block'
  } else {
    gameFive.style.display = "block";
  }
}

function StartGame5() {
  g5Status.style.display = "block";
  gameStatus.game5.p1 = Math.round(Math.random());
  gameStatus.game5.p2 = gameStatus.game5.p1 === 0 ? 1 : 0;
  gameStatus.game5.totalP1Won =
    gameStatus.game5.p1 +
    gameStatus.game4.p1 +
    gameStatus.game3.p1 +
    gameStatus.game2.p1 +
    gameStatus.game1.p1;
  gameStatus.game5.totalP2Won =
    gameStatus.game5.p2 +
    gameStatus.game4.p2 +
    gameStatus.game3.p2 +
    gameStatus.game2.p2 +
    gameStatus.game1.p2;
  statusG5P1.innerText = gameStatus.game5.totalP1Won;
  statusG5P2.innerText = gameStatus.game5.totalP2Won;
  wonStatus3.style.display = 'block'
  whoWon3.innerText = `${finalWonStatus(gameStatus.game5.totalP1Won, gameStatus.game5.totalP2Won)} won the match !!`
  whoWon3.style.display = 'block'
}
