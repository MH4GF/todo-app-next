import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import nextConnect from "next-connect";
import { requireLogin } from "~/util/requireLogin";
import { getSession } from "next-auth/react";
import { onError } from "~/util/onError";
import TodoInterector from "~/interactors/Todo/TodoInteractor";

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError })
  .use(requireLogin)
  .get(async (req, res: NextApiResponse<ApiResponse<Todo[]>>) => {
    const session = await getSession({ req }); // TODO: requireLoginでもgetSessionしてるけど1回でまとめられないの
    const todos = await new TodoInterector(session.user.id).findMany();

    res.status(200).json({ result: todos });
  })
  .post(async (req, res: NextApiResponse<ApiResponse<Todo>>) => {
    const session = await getSession({ req });
    // TODO: validateして型を確定、失敗は400を返すミドルウェアを作る
    const input = req.body as Todo;

    // TODO: createに失敗した際に400を返す
    const todo = await new TodoInterector(session.user.id).create(input);
    res.status(200).json({ result: todo });
  });

export default handler;
