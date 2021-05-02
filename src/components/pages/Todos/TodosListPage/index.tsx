import React, { Fragment } from "react";
import { useTodosList } from "~/hooks/usecases/useTodosList";
import { TodoCard } from "~/components/Todos/TodoCard";
import Skeleton from "react-loading-skeleton";

export const TodosListPage: React.FC = () => {
  const { state } = useTodosList();

  return (
    <Fragment>
      {state.type === "loading" ? (
        <Skeleton height={300} />
      ) : state.type === "error" ? (
        <div>
          error: {state.errorMessage} TODO: エラーメッセージ表示をいい感じにする
        </div>
      ) : (
        state.result.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      )}
      {}
    </Fragment>
  );
};
