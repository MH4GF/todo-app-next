import { NextComponentType, NextPageContext } from "next";

export type NextPageWithConfig<P = {}, IP = P> = NextComponentType<
  NextPageContext,
  IP,
  P
> & {
  requireAuth?: boolean;
};
