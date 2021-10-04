import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "~/types/Todo";
import { TodoCard } from "~/components/Todos/TodoCard";
import { Phase } from "~/types/Phase";
import { TodoAddButton } from "~/components/Todos/TodoAddButton";
import { useCreateTodo } from "~/hooks/usecases/Todo/useCreateTodo";

export type Props = {
  todos: Todo[];
  phase: Phase;
};
export const TodoColumn: React.FC<Props> = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>(props.todos);
  // addNewbuttonは別コンポーネントにしなきゃあかんそう
  const { state, actions } = useCreateTodo();
  // todoボタンを追加したら入力待機状態になる
  // 入力が終わったら非同期で保存する
  // 保存が終わるまではブラウザを閉じようとするとええんか？を出す
  const addNewTodo = () => {
    const todo = { id: "", content: "", phase: props.phase, user: { id: "" } };
    setTodos([...todos, todo]);
    if (state.type !== "loading") {
      actions.createTodo(todo);
    }
  };

  const Typography = styled.p``;

  return (
    <>
      <Typography>{props.phase}</Typography>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
      <TodoAddButton onClick={addNewTodo} />
    </>
  );
};
