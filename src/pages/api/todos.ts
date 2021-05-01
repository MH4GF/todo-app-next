import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import { getSession } from "next-auth/client";
import { getGoogleJWTToken } from "~/util/getGoogleJWTToken";
import { useTodoItems } from "~/hooks/usecases/api/spreadSheets/useTodoItems";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Todo[]>>
) => {
  const token = await getGoogleJWTToken(req);
  // TODO: エラーハンドリング
  const todoItems = await useTodoItems(token.accessToken);

  // TODO: requireLogin的なミドルウェアを作って汎用的にする
  const session = await getSession({ req });
  if (session) {
    res.status(200).json({ result: todoItems });
  } else {
    res.status(401).json({ errors: ["Not Authorized"] });
  }
};
