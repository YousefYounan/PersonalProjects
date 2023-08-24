// NODE JS Installed!
// FILE PATH FOR: Node C:\Users\youse\OneDrive\Dokumenter\Skole\SEMESTER_2.1\APP2000\PersonligProjekter\WEBDEV\LESSON_5\Adventure\Adventure.js

const prompt  = require("prompt-sync")();
console.log("welcome to the Computer Hardware Quiz!");

const answer = prompt("would like to play (y/n)? ");

if (answer.toLowerCase() === "y") {
    const answer2 = prompt("would like to go left or right (right/left)? ");

    if (answer2.toLowerCase() === "left"){
        console.log("Oops,, you go left and die:/ you lost")
    } else{
        //right
        console.log("Nice, you went right and found a golden apple")
        const answer3 = prompt("Would you like to cross the bridge, or turn around another way (cross/turn)? ");
        if (answer3 === "cross"){
            console.log("you dead");
        } else{
            console.log("You not dead yet...")
        }

    }

} else{
    console.log("Thats too bad");
}

