import { sheets_v4 } from "googleapis";
import { Todo } from "~/types/Todo";
import { Phase } from "~/types/Phase";

type IUseTodoItems = (
  sheets: sheets_v4.Sheets,
  spreadSheetId: string
) => Promise<Todo[]>;

// TODO: テスト書きたいですね
// というかこのロジックhooksじゃなくない？？
export const useTodoItems: IUseTodoItems = async (sheets, spreadSheetId) => {
  const spreadSheet = await sheets.spreadsheets.get({
    spreadsheetId: spreadSheetId,
    includeGridData: true,
  });
  if (!spreadSheet?.data?.sheets) {
    throw new Error("500: No spreadsheet data");
  }
  const todoAllCells = spreadSheet.data.sheets[0].data[0].rowData;
  const todoItems: Todo[] = todoAllCells
    .filter((row) => {
      const values = row.values;
      return (
        values?.[0].userEnteredValue?.numberValue &&
        values?.[1].userEnteredValue?.stringValue &&
        values?.[2].userEnteredValue?.stringValue &&
        ["NotStarted", "InProgress", "Completed"].includes(
          values?.[2].userEnteredValue?.stringValue
        )
      );
    })
    ?.map((row) => {
      const values = row.values;
      const id = values?.[0]?.userEnteredValue?.numberValue;
      const content = values?.[1]?.userEnteredValue?.stringValue;
      const phase = values?.[2]?.userEnteredValue?.stringValue as Phase;
      return {
        id: id,
        content: content,
        phase: phase,
      };
    });

  return todoItems;
};
