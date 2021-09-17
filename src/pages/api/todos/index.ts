import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import { getGoogleJWTToken } from "~/util/getGoogleJWTToken";
import { useTodoItems } from "~/hooks/usecases/api/spreadSheets/useTodoItems";
import nextConnect from "next-connect";
import { requireLogin } from "~/util/requireLogin";
import { useSpreadSheetClient } from "~/hooks/usecases/api/spreadSheets/useSpreadSheetClient";
import { getSpreadSheetIdBySession } from "~/util/getSpreadSheetIdBySession";

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(requireLogin)
  .get(async (req, res: NextApiResponse<ApiResponse<Todo[]>>) => {
    const token = await getGoogleJWTToken(req);
    const sheets = await useSpreadSheetClient(token.accessToken);
    const spreadSheetId = await getSpreadSheetIdBySession(req);

    // TODO: エラーハンドリング
    const todoItems = spreadSheetId
      ? await useTodoItems(sheets, spreadSheetId)
      : [];

    res.status(200).json({ result: todoItems });
  })
  .post(async (req, res: NextApiResponse<ApiResponse<Todo>>) => {
    const todoItem: Todo = {
      id: 100,
      content: "ふわーお",
      phase: "InProgress",
    };
    res.status(200).json({ result: todoItem });
  });

export default handler;
