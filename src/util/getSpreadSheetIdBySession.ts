import { NextApiRequest } from "next";
import { getSession } from "next-auth/client";

export const getSpreadSheetIdBySession = async (
  req: NextApiRequest
): Promise<string | null> => {
  const session = await getSession({ req });
  return session?.spreadSheetId;
};
