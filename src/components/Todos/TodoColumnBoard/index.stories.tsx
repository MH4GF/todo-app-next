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
        id: "cktr5gihl00082pjvaxmm9nfw",
        content: "waowao",
        phase: "InProgress",
        user: {
          id: "cktr5gihl00082pjvaxmm9nfd",
        },
      },
      {
        id: "cktr5gihl00082pjvaxmm9nf2",
        content: "hogehoge",
        phase: "NotStarted",
        user: {
          id: "cktr5gihl00082pjvaxmm9nfd",
        },
      },
      {
        id: "cktr5gihl00082pjvaxmm9nf3",
        content: "ponpoko",
        phase: "Completed",
        user: {
          id: "cktr5gihl00082pjvaxmm9nfd",
        },
      },
      {
        id: "cktr5gihl00082pjvaxmm9nf4",
        content: "ebichiri",
        phase: "Completed",
        user: {
          id: "cktr5gihl00082pjvaxmm9nfd",
        },
      },
    ],
  };

  return <TodoColumnBoard {...mockProps} />;
};
