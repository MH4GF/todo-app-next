import prisma from "~/lib/prisma";
import { Todo } from "~/types/Todo";
import TodoMapper from "./TodoMapper";

export default class TodoInterector {
  private readonly userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  findMany = async (): Promise<Todo[]> => {
    const user = await prisma.user.findUnique({ where: { id: this.userId } });
    const results = await prisma.todo.findMany({
      where: {
        userId: this.userId,
      },
    });

    return results.map((result) => {
      return TodoMapper.QueryResultToTodo(result, user);
    });
  };

  create = async (input: Todo): Promise<Todo> => {
    const user = await prisma.user.findUnique({
      where: { id: this.userId },
    });
    const result = await prisma.todo.create({
      data: {
        content: input.content,
        phase: input.phase,
        user: {
          connect: {
            id: this.userId,
          },
        },
      },
    });

    return TodoMapper.QueryResultToTodo(result, user);
  };

  update = async (input: Todo): Promise<Todo> => {
    const user = await prisma.user.findUnique({
      where: { id: this.userId },
    });
    const result = await prisma.todo.update({
      where: {
        id: input.id,
      },
      data: {
        content: input.content,
        phase: input.phase,
      },
    });

    return TodoMapper.QueryResultToTodo(result, user);
  };
}
