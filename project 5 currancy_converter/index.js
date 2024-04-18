#! /usr/bin/env node
import inquirer from "inquirer";
const Currancy = {
    USD: 1,
    PKR: 278.40,
    UAE: 3.67,
    EUR: 0.91,
    GBD: 0.76,
    INR: 74.57
};
let user_ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Enter From Currancy",
        choices: ["USD", "PKR", "UAE", "EUR", "GBD", "INR"],
    },
    {
        type: "list",
        name: "to",
        message: "Enter to Currency",
        choices: ["USD", "PKR", "UAE", "EUR", "GBD", "INR"],
    },
    {
        type: "number",
        name: "amount",
        message: " Enter Your Amount",
    },
]);
let fromAmount = Currancy[user_ans.from];
let toAmount = Currancy[user_ans.to];
let amount = user_ans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
