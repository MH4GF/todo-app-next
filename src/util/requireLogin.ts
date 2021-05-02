import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { NextHandler } from "next-connect";

export const requireLogin = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const session = await getSession({ req });
  if (session) {
    next();
  } else {
    res.status(401).json({ errors: ["Not Authorized"] });
    res.end();
  }
};
