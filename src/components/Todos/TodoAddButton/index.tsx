import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

const Container = styled.div``;
const Button = styled.button``;
const Typography = styled.p``;

export const TodoAddButton = (props: Props) => {
  return (
    <Container>
      <Button onClick={props.onClick}>
        <Typography>new</Typography>
      </Button>
    </Container>
  );
};
