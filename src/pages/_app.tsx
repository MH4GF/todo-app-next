import React, { useEffect } from "react";
import { getSession, Provider } from "next-auth/client";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { NextPageWithConfig } from "~/types/layout";
import { ThemeProvider } from "@material-ui/styles";
import theme from "~/styles/theme";

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
      <ThemeProvider theme={theme}>
        <Component {...appProps.pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
