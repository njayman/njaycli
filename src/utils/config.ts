import { PrismaClient } from ".prisma/client";

const pc = new PrismaClient();

export const getTodos = async () => {
  const todos = await pc.todo.findMany();
  return todos;
};

export const addTodos = async (title: string) => {
  const todo = await pc.todo.create({
    data: {
      title,
    },
  });
  return todo;
};

export const updateTodoStatus = async (id: number) => {
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

export const deleteTodo = async (id: number) => {
  const todo = await pc.todo.delete({
    where: {
      id,
    },
  });
  return todo;
};

export const disconnect = async () => {
  await pc.$disconnect();
};
