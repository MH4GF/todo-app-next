import React, { Fragment } from "react";
import { useTodosList } from "~/hooks/usecases/useTodosList";

export type Props = {};
export const TodosListPage: React.FC<Props> = (props: Props) => {
  const { state } = useTodosList();

  return (
    <Fragment>
      {state.result.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </Fragment>
  );
};
