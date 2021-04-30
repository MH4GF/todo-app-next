import { Todo } from "~/types/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiState } from "~/types/api/ApiState";

type IUseTodosList = () => {
  state: ApiState<Todo[]>;
};
export const useTodosList: IUseTodosList = () => {
  const [result, setResult] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodosData = async () => {
    setLoading(true);

    try {
      const res = await axios.get<{ result: Todo[] }>("/api/todos");
      setResult(res.data.result);
    } catch (e) {
      setHasError(true);
      setErrorMessage(e.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodosData();
  }, []);

  return {
    state: loading
      ? { type: "loading" }
      : hasError
      ? { type: "error", errorMessage: errorMessage }
      : { type: "success", result: result },
  };
};
