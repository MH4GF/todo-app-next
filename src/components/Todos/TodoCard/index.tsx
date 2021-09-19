import React, { ChangeEvent, useState } from "react";
import {
  Card,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Todo } from "~/types/Todo";
import { useUpdateTodo } from "~/hooks/usecases/Todo/useUpdateTodo";

const useStyles = makeStyles({
  contentForm: {
    fontSize: 20,
  },
  phase: {
    fontSize: 14,
  },
});
export type Props = {
  todo: Todo;
};
export const TodoCard: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [todo, setTodo] = useState(props.todo);
  const { actions } = useUpdateTodo(todo);
  const changeContentValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      content: e.target.value,
      id: todo.id,
      phase: todo.phase,
    });
    // TODO: なんか古いtodoが渡されてる
    actions.updateTodo(todo);
  };

  return (
    <Card>
      <CardContent>
        <TextField
          className={classes.contentForm}
          value={todo.content}
          InputProps={{ disableUnderline: true }}
          onChange={changeContentValue}
        />
        <Typography className={classes.phase} color="textSecondary">
          {props.todo.phase}
        </Typography>
      </CardContent>
    </Card>
  );
};
