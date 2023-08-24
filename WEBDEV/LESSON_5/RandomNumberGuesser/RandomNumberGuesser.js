// NODE JS Installed!
// FILE PATH FOR: Node C:\Users\youse\OneDrive\Dokumenter\Skole\SEMESTER_2.1\APP2000\PersonligProjekter\LESSON_5\RandomNumberGuesser\RandomNumberGuesser.js



const prompt  = require("prompt-sync")();

//Lager en tilfeldig tall 
const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) { //Starter Loopen fordi while = true
    guesses++; // +1 for hver gang mann gjetter

    //console.log(target);

    //Tar inn prompt fra brukeren som da blir sammenlignet med guess > target
    const guess = Number(prompt("Guess the number (0-100): "));
    if (guess > target){//kravet for at denne delen av programmet skal kjøres
        console.log("Your guess is to high!");

    }else if (guess < target){//kravet for at denne delen av programmet skal kjøres
        console.log("Your guess is to low!");
    }else {//Om ingen av kravene er oppfyllt da må denne være riktig!
        console.log("Your guess is correct!");
        break;// Stopper Loopen
    }
}


console.log("You guessed the number in", guesses,"tries!");