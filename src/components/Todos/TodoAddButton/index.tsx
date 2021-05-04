import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  text: {
    fontSize: 14,
  },
});

type Props = {
  onClick: () => void;
};

export const TodoAddButton = (props: Props) => {
  const classes = useStyles();

  // TODO: +ボタンのベースラインが高すぎる気がする
  return (
    <Paper elevation={0}>
      <Button onClick={props.onClick}>
        <Typography className={classes.text} color="textSecondary">
          <AddIcon className={classes.text} />
          new
        </Typography>
      </Button>
    </Paper>
  );
};
