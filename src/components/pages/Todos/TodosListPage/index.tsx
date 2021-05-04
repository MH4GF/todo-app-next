import React, { Fragment } from "react";
import { useTodosList } from "~/hooks/usecases/Todo/useTodosList";
import Skeleton from "react-loading-skeleton";
import { TodoColumnBoard } from "~/components/Todos/TodoColumnBoard";

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
        <TodoColumnBoard todos={state.result} />
      )}
      {}
    </Fragment>
  );
};
