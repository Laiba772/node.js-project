#! /usr/bin/env node

import inquirer from 'inquirer';


const answer = await inquirer.prompt([
    { message:"enter first number", type:"number", name:"firstNumber"},
    { message:"enter second number", type:"number", name:"secondNumber"},
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]); 
//    Conditional Statement.
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else {
    console.log("Please select a valid operators");
}