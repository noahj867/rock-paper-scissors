// The player has three potential inputs: rock, paper, scissors

let userChoice = prompt("Please select rock, paper, or scissors");
console.log(userChoice)

// Randomize computer selection and associates with rock, paper, or scissors
let options = ["rock","paper","scissors"];

let getComputerChoice = Math.floor(Math.random() * options.length);
console.log(getComputerChoice) 

// Passes user's and computer's choices as inputs through a function that determines the outcome of the game
function outcome(userChoice, getComputerChoice){
    if (userChoice === "rock" && getComputerChoice === 0) {
      console.log("it's a tie! Rock ties with Rock");
    } else if (userchoice === "rock" && getComputerchoice === 1) {
    console.log("You win! Rock beats paper");
    } else {
    console.log("oops haven't gotten there yet");
    }
}

console.log(outcome)
// Return text based on outcome

// There are three different potential outcomes: win, lose, draw

// Paper beats rock, rock beats scissors, scissors beats paper
// If both players throw the same input it's a draw










// const rock = "rock";
// const paper = "paper";
// const scissors = "scissors";
// answer.addEventListener("input",  ) 
