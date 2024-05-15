#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "UserGuessdNumber",
        type: "number",
        message: "Please guess a number between 1 -10: ",
    }
]);
if (answers.UserGuessdNumber === randomNumber) {
    console.log("congratulation! You guessed the correct number");
}
else {
    console.log("Sorry! You guessed the wrong number");
}
;
