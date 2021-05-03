import React from "react";
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
  return (
    <Grid>
      <Typography>{props.phase}</Typography>
      <Grid container spacing={2} direction="column">
        {props.todos.map((todo) => (
          <Grid key={todo.id} item>
            <TodoCard todo={todo} />
          </Grid>
        ))}
        <Grid item>
          <TodoAddButton />
        </Grid>
      </Grid>
    </Grid>
  );
};
