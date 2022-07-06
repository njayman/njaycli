#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCliInfo_1 = require("./commands/getCliInfo");
const p = require("./utils/config");
async function main() {
    console.log("Hello Njayman!");
    const getArgs = () => {
        const args = process.argv.slice(2);
        console.log(args, "args");
        return args;
    };
    const symbols = getArgs();
    if (symbols.length === 0) {
        console.log("No arguments provided");
        const availableCommands = "--help, --version";
        console.log(`Usage: njayman ${availableCommands}`);
        // Print warning for not adding any args
        process.exit(0);
    }
    else {
        if (symbols[0] === "--help") {
            // Print help message
            const helpMessage = `
                Usage: njayman list                         # lists all todos
                Usage: njayman add "Title for a todo"       # adds a todo
    `;
            console.log(helpMessage);
            process.exit(0);
        }
        else if (symbols[0] === "--version") {
            // Print version message
            const cliInfo = (0, getCliInfo_1.default)();
            const versionMessage = `
                njayman

                version     ${cliInfo.version}

                author      ${cliInfo.author.name}
                            ${cliInfo.author.email}

                repository  ${cliInfo.repository}
    `;
            console.log(versionMessage);
            process.exit(0);
        }
        else if (symbols[0] === "list") {
            // Print list of todos
            console.log("list of all todos");
            const todos = await p.getTodos();
            if (todos.length === 0) {
                console.log("No todos found");
                process.exit(0);
            }
            console.log("#ID | Title | Completed");
            todos.forEach((todo) => {
                console.log(`${todo.id} : ${todo.title}       : ${todo.completed ? "Completed" : "Not Completed"}`);
            });
            process.exit(0);
        }
        else if (symbols[0] === "add") {
            // Add a todo
            if (symbols[1]) {
                if (symbols.length > 2) {
                    // Warn about too many arguments
                    console.log("Too many arguments provided");
                    process.exit(1);
                }
                // Add a todo
                const newTodo = await p.addTodos(symbols[1]);
                console.log(`Added todo: ${newTodo.title}`);
                process.exit(0);
            }
            // Warn about missing argument
            console.log("No arguments provided");
            process.exit(1);
        }
        else if (symbols[0] === "update") {
            // Update a todo
            if (symbols[1]) {
                if (symbols.length > 2) {
                    // Warn about too many arguments
                    console.log("Too many arguments provided");
                    process.exit(1);
                }
                if (parseInt(symbols[1]) === NaN) {
                    // Warn about invalid argument
                    console.log("Invalid argument");
                    process.exit(1);
                }
                // Update a todo
                const updatedTodo = await p.updateTodoStatus(parseInt(symbols[1]));
                console.log(`Updated todo: ${updatedTodo.title}`);
                process.exit(0);
            }
            // Warn about missing argument
            console.log("No arguments provided");
            process.exit(1);
        }
        else if (symbols[0] === "delete") {
            // Delete a todo
            if (symbols[1]) {
                if (symbols.length > 2) {
                    // Warn about too many arguments
                    console.log("Too many arguments provided");
                    process.exit(1);
                }
                if (parseInt(symbols[1]) === NaN) {
                    // Warn about invalid argument
                    console.log("Invalid argument");
                    process.exit(1);
                }
                // Delete a todo
                const deletedTodo = await p.deleteTodo(parseInt(symbols[1]));
                console.log(`Deleted todo: ${deletedTodo.title}`);
                process.exit(0);
            }
        }
    }
}
main()
    .catch((err) => {
    console.error(err);
    process.exit(1);
})
    .finally(async () => {
    await p.disconnect();
});
//# sourceMappingURL=index.js.map