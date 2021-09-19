import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import nextConnect from "next-connect";
import { requireLogin } from "~/util/requireLogin";
import { getSession } from "next-auth/react";
import prisma from "~/lib/prisma";

const onError = (err, _req: NextApiRequest, res: NextApiResponse) => {
  console.error(err);

  res.status(500).json({ error: err.toString() });
};

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError })
  .use(requireLogin)
  .get(async (req, res: NextApiResponse<ApiResponse<Todo[]>>) => {
    const session = await getSession({ req }); // TODO: requireLoginでもgetSessionしてるけど1回でまとめられないの

    const todos = await prisma.todo.findMany({
      where: {
        userId: session.user.id,
      },
    });

    res.status(200).json({ result: todos });
  });
// .post(async (req, res: NextApiResponse<ApiResponse<Todo>>) => {
//   const todoItem: Todo = {
//     id: 100,
//     content: "ふわーお",
//     phase: "InProgress",
//   };
//   res.status(200).json({ result: todoItem });
// });

export default handler;
