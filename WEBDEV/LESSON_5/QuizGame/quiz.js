// NODE JS Installed!
// FILE PATH FOR: Node C:\Users\youse\OneDrive\Dokumenter\Skole\SEMESTER_2.1\APP2000\PersonligProjekter\LESSON_5\QuizGame\quiz.js

console.log("welcome to the Computer Hardware Quiz!");

//Gir tilgang til å bruke prompt funksjonen 
const prompt  = require("prompt-sync")();

let correctAnswers = 0;

const totalQuestions = 3;

// SPØRSMÅL 1
//En const som heter value tar inn prompt fra brukeren
const answer1 = prompt("What is the brain of the computer?: ");
const correctAnswer1 = "CPU";

//Boolean True or False
//Er answe1 samme som correct_answer1 ?
if (answer1.toUpperCase() === correctAnswer1) {
    console.log("Correct Answer, Great job!");
    correctAnswers++;
}else{
    console.log("Wrong answer..");
}


// SPØRSMÅL 2
//En const som heter value tar inn prompt fra brukeren
const answer2 = prompt("What is better a 3090ti or 4060 ?: ");
const correctAnswer2 = "3090TI";

//Boolean True or False
//Er answe1 samme som correct_answer1 ?
if (answer2.toUpperCase() === correctAnswer2) {
    console.log("Correct Answer, Great job!");
    correctAnswers++;
}else{
    console.log("Wrong answer..");
}


// SPØRSMÅL 3
//En const som heter value tar inn prompt fra brukeren
const answer3 = prompt("What is recommended amount of RAM in 2023?: ");
const correctAnswer3 = "16GB";

//Boolean True or False
//Er answe1 samme som correct_answer1 ?
if (answer3.toUpperCase() === correctAnswer3) {
    console.log("Correct Answer, Great job!");
    correctAnswers++;
}else{
    console.log("Wrong answer..");
}

const precent = Math.round((correctAnswers/totalQuestions) * 100);

console.log("You got",correctAnswers,"questions correct!")
console.log("You scored",precent.toString() + "%")

//Printer ut hva enn som blir skrevet inn i value som da bruker prompt
//console.log(value)