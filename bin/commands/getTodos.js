"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../utils/config");
const getTodos = async () => {
    const todos = await config_1.pc.todo.findMany();
    return todos;
};
exports.default = getTodos;
//# sourceMappingURL=getTodos.js.map