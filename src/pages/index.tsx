import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { NextPageWithConfig } from "~/types/layout";

const Page: NextPageWithConfig = () => {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

Page.requireAuth = false;

export default Page;
