import { NextApiRequest, NextApiResponse } from "next";

export const onError = (err, _req: NextApiRequest, res: NextApiResponse) => {
  console.error(err);

  res.status(500).json({ error: err.toString() });
};
