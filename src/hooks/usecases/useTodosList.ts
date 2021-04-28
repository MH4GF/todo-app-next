import { Todo } from "~/types/Todo";
import axios from "axios";
import { useEffect, useState } from "react";

type IUseTodosList = () => {
  state: {
    result: Todo[];
  };
};
export const useTodosList: IUseTodosList = () => {
  const [result, setResult] = useState<Todo[]>([]);
  const fetchTodosData = async () => {
    // TODO: エラーハンドリング
    // TODO: ローディング
    const res = await axios.get<{ result: Todo[] }>("/api/todos");
    setResult(res.data.result);
  };

  useEffect(() => {
    fetchTodosData();
  }, []);

  return {
    state: {
      result: result,
    },
  };
};
