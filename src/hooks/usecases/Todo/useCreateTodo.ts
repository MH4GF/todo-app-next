import { Todo } from "~/types/Todo";
import axios from "axios";
import { useState } from "react";
import { ApiState } from "~/types/api/ApiState";

type IUseCreateTodo = () => {
  state: ApiState<Todo>;
  actions: { createTodo: (params: Todo) => void };
};
export const useCreateTodo: IUseCreateTodo = () => {
  const [result, setResult] = useState<Todo>({
    id: "",
    content: "",
    phase: "NotStarted",
    user: {
      id: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const createTodo = async (params: Todo) => {
    setLoading(true);
    console.dir(params);

    try {
      const res = await axios.post<Todo>(`/api/todos`, params);
      setResult(res.data);
    } catch (e) {
      setHasError(true);
      setErrorMessage(e.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    state: loading
      ? { type: "loading" }
      : hasError
      ? { type: "error", errorMessage: errorMessage }
      : { type: "success", result: result },
    actions: {
      createTodo: async (params: Todo) => {
        if (loading) return;

        createTodo(params);
      },
    },
  };
};
