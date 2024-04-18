#! /usr/bin/env node

import inquirer from "inquirer";

let todo_list: string[] = [];

let while_condition: boolean = true;

while (while_condition === true) {
    let option = await inquirer.prompt([{
        type: "list",
        name: "user_option",
        message: "\nSelect An Option",
        choices: ["Add", "Remove"]
    }])

    if(option.user_option === "Add"){
        let ans = await inquirer.prompt([{
            type: "input",
            name: "usr_ans",
            message: "\nwrite something to add in the task list.",
        }]) 
        if(ans.usr_ans !== ''){
            todo_list.push(ans.usr_ans);
            console.log(todo_list)
        }else{
            console.log('\nPlease write something to add in the todo list');
        }
    }
    else if(option.user_option === "Remove"){
        let removeChoice = await inquirer.prompt([{
            type: "list",
            name: "remove_item",
            message: "\nSelect item to remove",
            choices: todo_list
        }]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);

        if(index_to_remove >= 0){
            todo_list.splice(index_to_remove, 1);
            console.log('\nYou removed: ', removeChoice.remove_item);
            console.log(todo_list);
        }
    }
    let user_ans = await inquirer.prompt([{
        type: "confirm",
        name: "selection",
        message: "\nDo you want to continue?",
        default: true,
    }])
    if(user_ans.selection === false){
        while_condition = false;
    }
}
console.log(`\nThank You For Using Todo List`);