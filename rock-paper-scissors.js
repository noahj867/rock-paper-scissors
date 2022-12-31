// Player has three potential choices: rock, paper, or scissors

let rock = "rock" 
let paper = "paper"
let scissors = "scissors"

let userChoice = prompt("Please select rock, paper, or scissors");
console.log(userChoice)

// Computer also has same three choices, determined by a randomized number from 0-2
let options = [rock,paper,scissors];

let getComputerChoice = Math.floor(Math.random() * options.length);
console.log(getComputerChoice)

// Convert randomized number to rock, paper, or scissors

function convertComputerChoice(getComputerChoice){
    if (getComputerChoice === 0){
        // console.log(rock)
        return rock;
    } else if (getComputerChoice === 1){
        // console.log(paper)
        return paper;
    } else {
        // console.log(scissors)
        return scissors;
    }
}
convertComputerChoice(getComputerChoice)

// Store computer's choice as a variable

let computerChoice = convertComputerChoice(getComputerChoice)

// Pass user's and computer's choices as inputs through a function that determines the outcome of the game

// If user chooses rock
function playRound(userChoice, computerChoice){
    if (userChoice.toLowerCase() === "rock" && computerChoice === rock) {
        console.log("it's a tie! Rock ties with Rock")
        return "It's a tie! Rock vs Rock";
    } else if (userChoice.toLowerCase() === "rock" && computerChoice === paper) {
        console.log("You lose! Paper beats rock")
        return "You lose :(. Paper beats rock";
    } else if (userChoice.toLowerCase() === "rock" && computerChoice === scissors) {
        console.log("You win! Rock beats Scissors")
        return "oops haven't gotten there yet"; 

// If user chooses paper
    } else if (userChoice.toLowerCase() === "paper" && computerChoice === rock) {
        console.log("You win! Paper beats rock")
        return "You win! Paper beats rock";
    } else if (userChoice.toLowerCase() === "paper" && computerChoice === paper) {
        console.log("It's a tie! Paper ties paper")
        return "It's a tie! Paper vs paper";
    } else if (userChoice.toLowerCase() === "paper" && computerChoice === scissors) {
        console.log("You lose! Scissors beats paper")
        return "You lose! Scissors beats paper";

// If user chooses scissors
    } else if (userChoice.toLowerCase() === "scissors" && computerChoice === rock) {
        console.log("You lose! Rock beats scissors")
        return "You lose! Rock beats scissors";
    } else if (userChoice.toLowerCase() === "scissors" && computerChoice === paper) {
        console.log("You win! Scissors beats paper")
        return "You win! Scissors beats paper";
    } else (userChoice.toLowerCase() === "scissors" && computerChoice === scissors)
        console.log("It's a tie! Scissors ties Scissors")
        return "It's a tie! Scissors vs scissors";
}
playRound(userChoice, computerChoice)

// Play a 5 round game that keeps score and reports winner 