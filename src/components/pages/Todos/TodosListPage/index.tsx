import React, { Fragment } from "react";
import { useTodosList } from "~/hooks/usecases/useTodosList";

export type Props = {};
export const TodosListPage: React.FC<Props> = (props: Props) => {
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
