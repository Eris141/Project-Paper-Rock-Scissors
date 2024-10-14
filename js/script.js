
//write a function that return rock paper scissors
function getComputerChoice() {
  let value = '';
  let randomNumber = Math.random();
  //sepeate the number in 3 parts to get the random value
  if (randomNumber >= 0 && randomNumber <= 1/3) {
    value = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
    value = 'paper';  
  } else {
    value = 'scissor';
  }
  // console.log(value);
  return value;
}


//create a function that takes choice
function getHumanChoice(choice) {
  //ask the user to put the choice
  // let choice = prompt("Enter your choice here.", "");

  if (choice !== null) {
    choice = choice.toLowerCase()
  } else { 
    alert("Input cancel. Try again pls.");
  }
  // console.log(choice);
  //check if the user has put the correct choice
  if (choice === "") {
    console.log('Please enter, HINT: *scissor, paper, rock*');
    return;
  } else if (choice !== "paper" && choice !== "scissor" && choice !== "rock") {
    console.log("Wrong words: HINT: *scissor, paper, rock*")
  }

  return choice;
}

//to keep the values of the score player and computer
let humanScore = 0;
let computerScore = 0;

//create a function for the game play
function playRound(humanChoice, computerChoice) {
  //must have 2 parameters
  let result = "";
  //write the code to compare the values
  if (humanChoice === computerChoice) {
    result = (`You chose:${humanChoice}, Computer choose: ${computerChoice}: Tie. `);
  }
  
  //incment the score of th winner
  //human win
  if (humanChoice === "rock" && computerChoice === "scissor") {
    result = (`You chose:${humanChoice}, Computer choose: ${computerChoice}: You Win. `)
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = (`You chose:${humanChoice}, Computer choose: ${computerChoice}: You Win. `)
    humanScore++;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    result = (`You chose:${humanChoice}, Computer choose: ${computerChoice}: You Win. `)
    humanScore++;
  }

  //computer win
  if (humanChoice === "rock" && computerChoice === "paper") {
    result = (`You chose:${humanChoice}, Computer choose: ${computerChoice}: You lose. `)
    computerScore++;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    result = (`You chose:${humanChoice}, Computer choose: ${computerChoice}: You lose. `)
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    result = (`You chose:${humanChoice}, Computer choose: ${computerChoice}: You lose. `)
    computerScore++;
  } 

  return result;
}


function playGame(choise) {
  // let rounds = 5;
  // while (rounds > 0) {
    const humanSelection = choise;
    const computerSelection = getComputerChoice();
    
    
    displayResults.textContent = playRound(humanSelection, computerSelection);
    let gameScore = `Score: player: ${humanScore} , computer: ${computerScore}`;
    displayScore.textContent = gameScore;
    
    if (humanScore === 5) {
      displayWiner.textContent = `Computer Score:${humanScore}: Computer WIINN!!!`;
    } else if (computerScore === 5) {
      displayWiner.textContent = `Computer Score:${computerScore}: Computer WIINN!!!`;

    }
  //   rounds--;
  // }
}

const button = document.querySelectorAll("button");
const displayResults = document.createElement('div');
const displayScore = document.createElement('div');
const displayWiner = document.createElement('div');

const divContainer = document.querySelector('.button-container');
divContainer.appendChild(displayResults);
divContainer.appendChild(displayScore);
divContainer.appendChild(displayWiner);




button.forEach((button) => {
  button.addEventListener('click',() => {
    // console.log(button.id)
    if (button.if === 'paper') {
      playGame('paper');
    } else if (button.id === 'rock') {
      playGame('rock');
    } else {
      playGame('scissor');
    }
  })
})