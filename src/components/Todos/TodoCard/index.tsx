import React from "react";
import { Card } from "@material-ui/core";
import { Todo } from "~/types/Todo";

export type Props = {
  todo: Todo;
};
export const TodoCard: React.FC<Props> = (props: Props) => {
  return <Card>{props.todo.content}</Card>;
};
