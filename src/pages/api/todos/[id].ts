import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import { requireLogin } from "~/util/requireLogin";
import { getSession } from "next-auth/react";
import { Todo } from "~/types/Todo";
import { onError } from "~/util/onError";
import TodoInterector from "~/interactors/Todo/TodoInteractor";

// TODO: paramsのidを使った方が良さそう
const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError })
  .use(requireLogin)
  .patch(async (req, res: NextApiResponse<ApiResponse<Todo>>) => {
    const session = await getSession({ req });
    // TODO: validateして型を確定、失敗は400を返すミドルウェアを作る
    const input = req.body as Todo;

    // TODO: updateに失敗した際に400を返す
    const todo = await new TodoInterector(session.user.id).update(input);
    res.status(200).json({ result: todo });
  });

export default handler;
