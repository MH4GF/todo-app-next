import { drive_v3 } from "googleapis";
import { useCreateSpreadSheetId } from "~/hooks/usecases/api/drive/useCreateSpreadSheet";

const getFiles = async (drive: drive_v3.Drive, query: string) => {
  let nextPageToken: null | string = null;
  let files: drive_v3.Schema$File[] | [] = [];

  const params = {
    q: query,
    pageToken: nextPageToken,
  };

  for (;;) {
    const listFiles = await drive.files.list(params);
    files = [...files, ...listFiles.data.files];
    nextPageToken = listFiles.data.nextPageToken;

    if (!nextPageToken) break;
  }

  return files;
};

type IUseSpreadSheetId = (drive: drive_v3.Drive) => Promise<string>;
export const useFindOrCreateSpreadSheetId: IUseSpreadSheetId = async (
  drive
) => {
  const query =
    "name contains 'todo-app-next' and mimeType='application/vnd.google-apps.spreadsheet'";
  const files = await getFiles(drive, query);
  if (files && files[0].id) {
    return files[0].id;
  } else {
    const file = await useCreateSpreadSheetId(drive);
    return file.data.id;
  }
};
