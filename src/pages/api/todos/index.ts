import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import { getGoogleJWTToken } from "~/util/getGoogleJWTToken";
import { useTodoItems } from "~/hooks/usecases/api/spreadSheets/useTodoItems";
import nextConnect from "next-connect";
import { requireLogin } from "~/util/requireLogin";
import { useSpreadSheetClient } from "~/hooks/usecases/api/spreadSheets/useSpreadSheetClient";
import { getSession } from "next-auth/client";

const handler = nextConnect<
  NextApiRequest,
  NextApiResponse<ApiResponse<Todo[]>>
>()
  .use(requireLogin)
  .get(async (req, res) => {
    const token = await getGoogleJWTToken(req);
    const sheets = await useSpreadSheetClient(token.accessToken);
    const session = await getSession({ req });

    // TODO: エラーハンドリング
    const todoItems =
      session && session.spreadSheetId
        ? await useTodoItems(sheets, session.spreadSheetId)
        : [];

    res.status(200).json({ result: todoItems });
  });

export default handler;
