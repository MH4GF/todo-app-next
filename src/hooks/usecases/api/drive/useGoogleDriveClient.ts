import useGoogleOAuthClient from "~/hooks/usecases/useGoogleOAuthClient";
import { drive_v3, google } from "googleapis";

export const useGoogleDriveClient = async (
  accessToken: string
): Promise<drive_v3.Drive> => {
  const client = await useGoogleOAuthClient;
  client.setCredentials({ access_token: accessToken });
  return google.drive({ version: "v3", auth: client });
};
