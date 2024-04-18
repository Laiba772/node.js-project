#! /usr/bin/env node.

import inquirer from "inquirer";

const ramdomNumber = Math.floor(Math.random() * 5 + 1);
const answer= await inquirer.prompt([
    {
name: "userGuessdNumber",
type: "number",
"message": "Please guess a number between 1 - 5:"
    },
]);

if(answer.userGuessdNumber === ramdomNumber){
    console.log("Congratulation you guessed right number.");
}else{
    console.log("You guessed wrong number.");
}