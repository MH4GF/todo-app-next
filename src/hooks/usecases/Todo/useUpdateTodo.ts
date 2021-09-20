import { Todo } from "~/types/Todo";
import axios from "axios";
import { useState } from "react";
import { ApiState } from "~/types/api/ApiState";

type IUseUpdateTodo = (todo: Todo) => {
  state: ApiState<Todo>;
  actions: { updateTodo: (value: Todo) => void };
};
export const useUpdateTodo: IUseUpdateTodo = (todo) => {
  const [result, setResult] = useState<Todo>(todo);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateTodo = async (params: Todo) => {
    if (result === params) {
      console.log("resultとrequestが同じ");
      return;
    }
    setLoading(true);

    try {
      const res = await axios.patch<Todo>(`/api/todos/${params.id}`, params);
      setResult(res.data);
    } catch (e) {
      setHasError(true);
      setErrorMessage(e.errorMessage);
    } finally {
      console.log("called");
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
      updateTodo: async (todo) => {
        console.dir(todo);
        console.dir(loading);
        if (loading) return;

        updateTodo(todo);
      },
    },
  };
};
