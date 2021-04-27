import { Todo } from "~/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "~/types/api/ApiResponse";

export default (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Todo[]>>
) => {
  res.status(200).json({ result: DummyTodoData });
};

const DummyTodoData: Todo[] = [
  { id: 1, content: "hogehoge", phase: "NotStarted" },
  { id: 2, content: "fuga", phase: "InProgress" },
  { id: 3, content: "piyo", phase: "Completed" },
];
