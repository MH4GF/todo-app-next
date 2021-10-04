import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Todo } from "~/types/Todo";
import { useUpdateTodo } from "~/hooks/usecases/Todo/useUpdateTodo";

export type Props = {
  todo: Todo;
};
export const TodoCard: React.FC<Props> = (props: Props) => {
  const [todo, setTodo] = useState(props.todo);
  const { actions } = useUpdateTodo(todo);
  const changeContentValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      content: e.target.value,
      id: todo.id,
      phase: todo.phase,
      user: todo.user,
    });
  };

  // TODO: 送信が終わっていない場合はアラートを出す
  const updateTodo = () => {
    actions.updateTodo(todo);
  };

  const Card = styled.div``;
  const TextField = styled.input``;
  const Typography = styled.p``;

  return (
    <Card>
      <TextField
        value={todo.content}
        onChange={changeContentValue}
        onBlur={updateTodo}
      />
      <Typography>{props.todo.phase}</Typography>
    </Card>
  );
};
