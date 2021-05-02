import React from "react";
import { TodoColumnBoard, Props } from ".";

export default {
  title: "Todo/TodoColumnBoard",
  component: TodoColumnBoard,
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
      {
        id: 4,
        content: "ebichiri",
        phase: "Completed",
      },
    ],
  };

  return <TodoColumnBoard {...mockProps} />;
};
