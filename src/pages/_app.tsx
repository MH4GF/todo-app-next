import React, { useEffect } from "react";
import { getSession, Provider } from "next-auth/client";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { NextPageWithConfig } from "~/types/layout";

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
    <Provider session={appProps.pageProps.session}>
      <Component {...appProps.pageProps} />
    </Provider>
  );
};

export default MyApp;
