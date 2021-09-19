import React from "react";
import { TodoCard, Props } from ".";

export default {
  title: "Todo/TodoCard",
  component: TodoCard,
};

export const Default = (): JSX.Element => {
  const mockProps: Props = {
    todo: {
      id: "cktr5gihl00082pjvaxmm9nfw",
      content: "waowao",
      phase: "InProgress",
    },
  };

  return <TodoCard {...mockProps} />;
};
