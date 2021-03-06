// create a function that returns a random answer
function computerPlay() {
  //  create an array with the values
  let roShamBo = ["Rock", "Paper", "Scissors"];
  //   randomly return rock paper or scissors
  let random =
    roShamBo[Math.floor(Math.random() * roShamBo.length)].toLowerCase();
  return random;
}
// create a function with user input and return it
function userPlay() {
  let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
  return playerChoice;
}

//   create a function playRound() with two parameters: playerSelection and computerSelection that returns who wins, loses, or draw
function playRound(playerSelection, computerSelection) {
  playerSelection = userPlay();
  computerSelection = computerPlay();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "you win";
  } else if (playerSelection === computerSelection) {
    return "draw";
  } else {
    return "you lost";
  }
}
// create a function that goes 5 rounds using a for loop, that updates the score after each round and determines winner at the end of 5 rounds
function game() {
  let userScore = 0;
  let pcScore = 0;

  for (let i = 0; i < 5; i++) {
    let match = playRound();
    if (match === "you win") {
      userScore += 1;
      console.log(match);
      console.log(`your score is ${userScore}`, `robot score is ${pcScore}`);
    } else if (match === "you lost") {
      pcScore += 1;
      console.log(match);
      console.log(`your score is ${userScore}`, `robot score is ${pcScore}`);
    } else {
      console.log(match);
      console.log(`your score is ${userScore}`, `robot score is ${pcScore}`);
    }
  }
  if (userScore > pcScore) {
    return "Winner, you beat the robot";
  } else if (userScore === pcScore) {
    return "Draw, same as robot";
  } else {
    return "Loser, better luck next time";
  }
}

console.log(game());
