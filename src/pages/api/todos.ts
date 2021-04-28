import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";
import { getSession } from "next-auth/client";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Todo[]>>
) => {
  const session = await getSession({ req });
  if (session) {
    res.status(200).json({ result: DummyTodoData });
  } else {
    res.status(401).json({ errors: ["Not Authorized"] });
  }
};

const DummyTodoData: Todo[] = [
  { id: 1, content: "hogehoge", phase: "NotStarted" },
  { id: 2, content: "fuga", phase: "InProgress" },
  { id: 3, content: "piyo", phase: "Completed" },
];
