import useGoogleOAuthClient from "~/hooks/usecases/useGoogleOAuthClient";
import { google, sheets_v4 } from "googleapis";

export const useSpreadSheetClient = async (
  accessToken: string
): Promise<sheets_v4.Sheets> => {
  const client = await useGoogleOAuthClient;
  client.setCredentials({ access_token: accessToken });
  return google.sheets({ version: "v4", auth: client });
};
