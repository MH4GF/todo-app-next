import React from "react";
import { TodoColumn, Props } from ".";

export default {
  title: "Todo/TodoColumn",
  component: TodoColumn,
};

export const Default = (): JSX.Element => {
  const mockProps: Props = {
    todos: [
      {
        id: "cktr5gihl00082pjvaxmm9nfw",
        content: "waowao",
        phase: "InProgress",
      },
      {
        id: "cktr5gihl00082pjvaxmm9nf2",
        content: "hogehoge",
        phase: "NotStarted",
      },
      {
        id: "cktr5gihl00082pjvaxmm9nf3",
        content: "ponpoko",
        phase: "Completed",
      },
    ],
    phase: "InProgress",
  };

  return <TodoColumn {...mockProps} />;
};
