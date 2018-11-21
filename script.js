let computerScore = 0;
let userScore = 0;
let div = document.querySelector("#result");
let winner = document.createElement('p');
let result = document.createElement('p');
div.appendChild(winner);
div.appendChild(result);

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  game(rock.getAttribute('id'));
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  game(paper.getAttribute('id'));
});

let scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
  game(scissor.getAttribute('id'));
});

function game(choice) {
  let computerSelection = computerPlay();
  let gameResult = playRound(choice, computerSelection);
  switch(gameResult) {
    case "draw":
      break;
    case "computer":
      computerScore++;
      break;
    case "user":
      userScore++;
      break;
  }
  addResult();
}

function computerPlay() {
  let choices = ["rock", "paper", "scissor"];
  let rand = Math.random() * 3;
  return choices[Math.floor(rand)];
}

function playRound(playerSelection, computerSelection) {
  if (checkValid(playerSelection) == true) {
    //checks for a draw
    if (checkDraw(playerSelection, computerSelection) == true) {
      winner.textContent = "It was a draw!";
      return "draw";
    //checks if computer won
    } else if (checkComputerWins(playerSelection, computerSelection) == true) {
      winner.textContent = "Computer won with " + computerSelection;
      return "computer";
    //otherwise user won
    } else {
      winner.textContent = "User won with " + playerSelection;
      return "user";
    }
  //returns false if the users input isn't rock, paper or scissors
  } else {
    return false;
  }
}

//checks if the users input is either rock, paper or scissors and is case insensitive
function checkValid(selection) {
  selection = selection.toLowerCase();
  switch(selection) {
    case "rock":
      return true;
      break;
    case "paper":
      return true;
      break;
    case "scissor":
      return true;
      break;
    default:
      false;
  }
}
//checks if the users input and computers input is the same
function checkDraw(playerSelection, computerSelection) {
  if(playerSelection == computerSelection) {
    return true;
  } else {
    return false;
  }
}
//checks if the computer wins
function checkComputerWins(playerSelection, computerSelection) {
  if (computerSelection == "rock" && playerSelection == "scissor") {
    return true;
  } else if (computerSelection == "scissor" && playerSelection == "paper") {
    return true;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return true;
  } else {
    return false;
  }
}

function reset() {
  computerScore = 0;
  userScore = 0;
  winner.textContent = " ";
  result.textContent = " ";
}

function addResult() {
  result.textContent = ("Comuter Score is: " + computerScore + " and the User Score is " + userScore);
}
