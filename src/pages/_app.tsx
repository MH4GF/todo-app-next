import React, { useEffect } from "react";
import { getSession, SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { NextPageWithConfig } from "~/types/layout";
import { GlobalStyle } from "~/styles/globalStyle";

const MyApp = (appProps: AppProps) => {
  const router = useRouter();
  const Component: NextPageWithConfig = appProps.Component;
  Component.requireAuth = true;

  useEffect(() => {
    if (Component.requireAuth) {
      const f = async () => {
        const session = await getSession();
        if (!session || !session.user) {
          await router.push("/");
        }
      };
      f();
    }
  }, []);

  return (
    <SessionProvider session={appProps.pageProps.session}>
      <GlobalStyle />
      <Component {...appProps.pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
