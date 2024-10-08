
//write a function that return rock paper scissors
function getComputerChoice() {
  let value = '';
  let randomNumber = Math.random();
  console.log(randomNumber);
  //sepeate the number in 3 parts to get the random value
  if (randomNumber >= 0 && randomNumber <= 1/3) {
    value = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
    value = 'paper';  
  } else {
    value = 'scissor';
  }

  return value;
}

console.log(getComputerChoice());

//create a function that takes choice
function getHumanChoice() {
  //ask the user to put the choice
  let choice = prompt('Enter your choice here. "scissor, paper ,rock"').toLowerCase();

  //check if the user has put the correct choice
  if (choice === '') {
    console.log('Please enter, HINT: *scissor, paper, rock*')
  } else if (choice !== "paper" || choice !== "scissor" || choise !== "rock") {
    console.log("Allowed words: HINT: *scissor, paper, rock*")
  }

  return choice;
}

console.log(getHumanChoice());


//to keep the values of the score player and computer
let humanScore = 0;
let computerScore = 0;

