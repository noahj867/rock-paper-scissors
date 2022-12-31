// Player has three potential choices: rock, paper, or scissors

let rock = "rock" 
let paper = "paper"
let scissors = "scissors"

let tie = 0 
let win = 0 
let lose = 0

// Computer also has three choices, determined by a randomized number from 0-2
let options = [rock,paper,scissors];

// Convert randomized number to rock, paper, or scissors

function convertComputerChoice(getComputerChoice){
    if (getComputerChoice === 0){
        return rock;
    } else if (getComputerChoice === 1){
        return paper;
    } else {
        return scissors;
    }
}
// Pass user's and computer's choices as inputs through a function that determines the outcome of the game
function playRound () {
    let userChoice = prompt("Please select rock, paper, or scissors")
    console.log(userChoice)
    let getComputerChoice = Math.floor(Math.random() * options.length);
    let computerChoice = convertComputerChoice(getComputerChoice)
    console.log(computerChoice)
// If user chooses rock
    if (userChoice.toLowerCase() === "rock" && computerChoice === rock) {
        console.log("it's a tie! Rock vs Rock")
        return "tie";
    } else if (userChoice.toLowerCase() === "rock" && computerChoice === paper) {
        console.log("You lose! Paper beats rock")
        return "loss";
    } else if (userChoice.toLowerCase() === "rock" && computerChoice === scissors) {
        console.log("You win! Rock beats Scissors")
        return "win"; 

// If user chooses paper
    } else if (userChoice.toLowerCase() === "paper" && computerChoice === rock) {
        console.log("You win! Paper beats rock")
        return "win";
    } else if (userChoice.toLowerCase() === "paper" && computerChoice === paper) {
        console.log("It's a tie! Paper ties paper")
        return "tie";
    } else if (userChoice.toLowerCase() === "paper" && computerChoice === scissors) {
        console.log("You lose! Scissors beats paper")
        return "loss";

// If user chooses scissors
    } else if (userChoice.toLowerCase() === "scissors" && computerChoice === rock) {
        console.log("You lose! Rock beats scissors")
        return "loss";
    } else if (userChoice.toLowerCase() === "scissors" && computerChoice === paper) {
        console.log("You win! Scissors beats paper")
        return "win";
    } else (userChoice.toLowerCase() === "scissors" && computerChoice === scissors)
        console.log("It's a tie! Scissors ties Scissors")
        return "tie";
}

// Play a 5 round game that keeps score and reports winner 

function game() {
    for (i=0; i<5; i++){
        let roundResult = playRound()
        console.log(roundResult)
        if (roundResult === "tie"){
            tie++;
        } else if (roundResult === "win"){
            win++;
        } else {
            lose++ 
        }
        console.log("Game score = ", win, "|", lose, "|", tie)
    }
    printResult()
} 
game()

function printResult() {
    if (win > lose ) {
        console.log("Congrats! You win bud")
    } 
    else if (lose > win) {
        console.log("Yikes! You lost pal")
    }
    else {
        console.log("Snoozefest! You tied")
    }
}

