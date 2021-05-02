import React from "react";
import { TodoCard, Props } from ".";

export default {
  title: "Todo/TodoCard",
  component: TodoCard,
};

export const Default = (): JSX.Element => {
  const mockProps: Props = {
    todo: {
      id: 1,
      content: "waowao",
      phase: "InProgress",
    },
  };

  return <TodoCard {...mockProps} />;
};
