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
        id: 1,
        content: "waowao",
        phase: "InProgress",
      },
      {
        id: 2,
        content: "hogehoge",
        phase: "NotStarted",
      },
      {
        id: 3,
        content: "ponpoko",
        phase: "Completed",
      },
    ],
    phase: "InProgress",
  };

  return <TodoColumn {...mockProps} />;
};
