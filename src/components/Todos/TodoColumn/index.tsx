import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Todo } from "~/types/Todo";
import { TodoCard } from "~/components/Todos/TodoCard";
import { Phase } from "~/types/Phase";
import { TodoAddButton } from "~/components/Todos/TodoAddButton";

export type Props = {
  todos: Todo[];
  phase: Phase;
};
export const TodoColumn: React.FC<Props> = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>(props.todos);
  // todoボタンを追加したら入力待機状態になる
  // 入力が終わったら非同期で保存する
  // 保存が終わるまではブラウザを閉じようとするとええんか？を出す
  const addNewTodo = () => {
    setTodos([...todos, { id: 5, content: "", phase: props.phase }]);
  };

  return (
    <Grid>
      <Typography>{props.phase}</Typography>
      <Grid container spacing={2} direction="column">
        {todos.map((todo) => (
          <Grid key={todo.id} item>
            <TodoCard todo={todo} />
          </Grid>
        ))}
        <Grid item>
          <TodoAddButton onClick={addNewTodo} />
        </Grid>
      </Grid>
    </Grid>
  );
};
