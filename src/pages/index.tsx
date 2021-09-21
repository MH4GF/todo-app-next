import React from "react";
import { signIn, useSession } from "next-auth/react";
import { NextPageWithConfig } from "~/types/layout";
import { Button, Grid, Link, Typography } from "@material-ui/core";

const Page: NextPageWithConfig = () => {
  const { data: session } = useSession();

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        todo-app-next
      </Typography>
      <Grid container justifyContent="center">
        {session ? (
          <Button variant="contained" color="default">
            <Link href="/todos">show todos</Link>
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={() => signIn()}>
            Sign in with Google
          </Button>
        )}
      </Grid>
    </>
  );
};

Page.requireAuth = false;

export default Page;
