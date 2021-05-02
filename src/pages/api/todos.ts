import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import { getGoogleJWTToken } from "~/util/getGoogleJWTToken";
import { useTodoItems } from "~/hooks/usecases/api/spreadSheets/useTodoItems";
import nextConnect from "next-connect";
import { requireLogin } from "~/util/requireLogin";

const handler = nextConnect<
  NextApiRequest,
  NextApiResponse<ApiResponse<Todo[]>>
>()
  .use(requireLogin)
  .get(async (req, res) => {
    const token = await getGoogleJWTToken(req);
    // TODO: エラーハンドリング
    const todoItems = await useTodoItems(token.accessToken);

    res.status(200).json({ result: todoItems });
  });

export default handler;
