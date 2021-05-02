import React from "react";
import { Grid } from "@material-ui/core";
import { Todo } from "~/types/Todo";
import { TodoColumn } from "~/components/Todos/TodoColumn";
import { Phase } from "~/types/Phase";
export type Props = {
  todos: Todo[];
};

type groupedTodos = {
  NotStarted: Todo[] | [];
  InProgress: Todo[] | [];
  Completed: Todo[] | [];
};

export const TodoColumnBoard: React.FC<Props> = (props: Props) => {
  // TODO: groupByを実装したい Objectに直した後Object.entriesしてるのが気持ち悪いからいつかreduceを完全理解したい
  const groupedByTodos = props.todos.reduce<groupedTodos>(
    (result, current) => {
      return Object.assign(result, {
        [current.phase]: (result[current.phase] || []).concat(current),
      });
    },
    { NotStarted: [], InProgress: [], Completed: [] }
  );

  return (
    <Grid container spacing={2}>
      {Object.entries(groupedByTodos).map((ary) => {
        return (
          <Grid item xs={3} key={ary[0]}>
            <TodoColumn phase={ary[0] as Phase} todos={ary[1]} />
          </Grid>
        );
      })}
    </Grid>
  );
};
