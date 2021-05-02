import { drive_v3 } from "googleapis";
import { GaxiosPromise } from "googleapis-common";

type IUseSpreadSheetId = (
  drive: drive_v3.Drive
) => GaxiosPromise<drive_v3.Schema$File>;

export const useCreateSpreadSheetId: IUseSpreadSheetId = async (drive) => {
  const params: drive_v3.Params$Resource$Files$Create = {
    requestBody: {
      name: "todo-app-next", // ドメインといえばドメインなので外から注入すべき
      mimeType: "application/vnd.google-apps.spreadsheet",
    },
    media: {
      mimeType: "application/vnd.google-apps.spreadsheet",
      body: "",
    },
  };
  return await drive.files.create(params);
};
