// NODE JS Installed!
// FILE PATH FOR: Node C:\Users\youse\OneDrive\Dokumenter\Skole\SEMESTER_2.1\APP2000\PersonligProjekter\WEBDEV\LESSON_5\RockPaperScissors\RockPaperScissors.js

const prompt  = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while(true){
    console.log("");
    const playerChoice = prompt("Enter rock, paper or scissors (or q to quit):  ");
    //Quit Logic
    if (playerChoice.toLowerCase() === "q"){
        break;
    }
    //Player choice Logic
    if (playerChoice !== "rock" && 
        playerChoice !== "paper" && 
        playerChoice !== "scissors") {

        console.log("Please enter a valid choice.");
        continue;
    }

    //Computer Logic
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];
    console.log("The computer chose: ", computerChoice);

    //Game Logic
    if (computerChoice === playerChoice){
        console.log("Draw!");
        ties++;
    }else if(
            (playerChoice === "paper" && computerChoice === "rock") || 
            (playerChoice === "rock" && computerChoice === "scissors")  ||
            (playerChoice === "scissors" && computerChoice === "paper")){
        console.log("Won!");
        wins++;
    }else{
        console.log("Lost!")
        losses++;
    }
}
//Showing your stats
console.log("");
console.log("Wins: ",wins);
console.log("Losses: ", losses);
console.log("Ties: ",ties);
