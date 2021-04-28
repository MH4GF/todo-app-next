import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { NextPage } from "next";

const Page: NextPage = () => {
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

export default Page;
