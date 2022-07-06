"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.deleteTodo = exports.updateTodoStatus = exports.addTodos = exports.getTodos = void 0;
const client_1 = require("@prisma/client");
const pc = new client_1.PrismaClient();
const getTodos = async () => {
    const todos = await pc.todo.findMany();
    return todos;
};
exports.getTodos = getTodos;
const addTodos = async (title) => {
    const todo = await pc.todo.create({
        data: {
            title,
        },
    });
    return todo;
};
exports.addTodos = addTodos;
const updateTodoStatus = async (id) => {
    const todo = await pc.todo.update({
        where: {
            id,
        },
        data: {
            completed: true,
        },
    });
    return todo;
};
exports.updateTodoStatus = updateTodoStatus;
const deleteTodo = async (id) => {
    const todo = await pc.todo.delete({
        where: {
            id,
        },
    });
    return todo;
};
exports.deleteTodo = deleteTodo;
const disconnect = async () => {
    await pc.$disconnect();
};
exports.disconnect = disconnect;
//# sourceMappingURL=config.js.map