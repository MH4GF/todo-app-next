import React from "react";
import { TodoAddButton } from ".";

export default {
  title: "Todo/TodoAddButton",
  component: TodoAddButton,
};

export const Default = (): JSX.Element => {
  return <TodoAddButton onClick={() => {}} />;
};
