import React, { Fragment } from "react";
import { useTodosList } from "~/hooks/usecases/useTodosList";

export const TodosListPage: React.FC = () => {
  const { state } = useTodosList();

  return (
    <Fragment>
      {state.type === "loading" ? (
        <div>TODO: loading画面をいい感じにする</div>
      ) : state.type === "error" ? (
        <div>
          error: {state.errorMessage} TODO: エラーメッセージ表示をいい感じにする
        </div>
      ) : (
        state.result.map((todo) => <div key={todo.id}>{todo.content}</div>)
      )}
      {}
    </Fragment>
  );
};
