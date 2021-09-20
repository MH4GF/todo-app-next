import { Todo as QueryResult, User } from ".prisma/client";
import { Todo } from "~/types/Todo";

export default class TodoMapper {
  static QueryResultToTodo = (result: QueryResult, user: User): Todo => ({
    id: result.id,
    phase: result.phase,
    content: result.content,
    user: user,
  });
}
