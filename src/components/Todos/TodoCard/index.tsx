import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Todo } from "~/types/Todo";

const useStyles = makeStyles({
  content: {
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
  return (
    <Card>
      <CardContent>
        <Typography className={classes.content}>
          {props.todo.content}
        </Typography>
        <Typography className={classes.phase} color="textSecondary">
          {props.todo.phase}
        </Typography>
      </CardContent>
    </Card>
  );
};
