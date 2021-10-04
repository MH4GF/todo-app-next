import React from "react";
import { signIn, useSession } from "next-auth/react";
import { NextPageWithConfig } from "~/types/layout";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 8em;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button``;
const Link = styled.a``;

const Page: NextPageWithConfig = () => {
  const { data: session } = useSession();

  return (
    <Container>
      <Title>todo-app-next</Title>
      {session ? (
        <Button>
          <Link href="/todos">show todos</Link>
        </Button>
      ) : (
        <Button onClick={() => signIn()}>Sign in with Google</Button>
      )}
    </Container>
  );
};

Page.requireAuth = false;

export default Page;
