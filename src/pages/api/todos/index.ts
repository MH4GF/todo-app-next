import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import { getGoogleJWTToken } from "~/util/getGoogleJWTToken";
import { useTodoItems } from "~/hooks/usecases/api/spreadSheets/useTodoItems";
import nextConnect from "next-connect";
import { requireLogin } from "~/util/requireLogin";
import { useSpreadSheetClient } from "~/hooks/usecases/api/spreadSheets/useSpreadSheetClient";
import { getSpreadSheetIdBySession } from "~/util/getSpreadSheetIdBySession";

const handler = nextConnect<
  NextApiRequest,
  NextApiResponse<ApiResponse<Todo[]>>
>()
  .use(requireLogin)
  .get(async (req, res) => {
    const token = await getGoogleJWTToken(req);
    const sheets = await useSpreadSheetClient(token.accessToken);
    const spreadSheetId = await getSpreadSheetIdBySession(req);

    // TODO: エラーハンドリング
    const todoItems = spreadSheetId
      ? await useTodoItems(sheets, spreadSheetId)
      : [];

    res.status(200).json({ result: todoItems });
  });

export default handler;
