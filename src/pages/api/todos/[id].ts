import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { requireLogin } from "~/util/requireLogin";
// import { ApiResponse } from "~/types/api/ApiResponse";
// import { Todo } from "~/types/Todo";
// import { sheets_v4 } from "googleapis";
// import { getGoogleJWTToken } from "~/util/getGoogleJWTToken";
// import { useSpreadSheetClient } from "~/hooks/usecases/api/spreadSheets/useSpreadSheetClient";
// import { getSpreadSheetIdBySession } from "~/util/getSpreadSheetIdBySession";

// type IUpdateTodoItem = (
//   sheets: sheets_v4.Sheets,
//   spreadSheetId: string,
//   todo: Todo
// ) => Promise<Todo>;
// const updateTodoItem: IUpdateTodoItem = async (sheets, spreadSheetId, todo) => {
//   const spreadSheet = await sheets.spreadsheets.get({
//     spreadsheetId: spreadSheetId,
//     includeGridData: true,
//   });
//   if (!spreadSheet?.data?.sheets) {
//     throw new Error("No spreadsheet data");
//   }
//   const requestBody: sheets_v4.Schema$BatchUpdateSpreadsheetRequest = {
//     requests: [
//       {
//         updateCells: {
//           range: {
//             sheetId: 0,
//             startRowIndex: todo.id,
//             startColumnIndex: 0,
//           },
//           rows: [
//             {
//               values: [
//                 {
//                   userEnteredValue: {
//                     stringValue: todo.id,
//                   },
//                 },
//                 {
//                   userEnteredValue: {
//                     stringValue: todo.content,
//                   },
//                 },
//                 {
//                   userEnteredValue: {
//                     stringValue: todo.phase,
//                   },
//                 },
//               ],
//             },
//           ],
//           fields: "userEnteredValue",
//         },
//       },
//     ],
//   };

//   await sheets.spreadsheets.values.update({
//     spreadsheetId: spreadSheetId,
//     requestBody: requestBody,
//   });

//   return todo;
// };

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(requireLogin)
  .patch(async (req, res: NextApiResponse) => {
    res.status(200).json({});
  });

export default handler;
