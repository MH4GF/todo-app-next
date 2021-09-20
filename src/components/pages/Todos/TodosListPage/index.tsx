import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import { TodoColumnBoard } from "~/components/Todos/TodoColumnBoard";
import axios from "axios";
import useSWR from "swr";
import { Todo } from "~/types/Todo";

export const TodosListPage: React.FC = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR<{ result: Todo[] }>("/api/todos", fetcher);

  return (
    <Fragment>
      {!data ? (
        <Skeleton height={300} />
      ) : error ? (
        <div>
          error: {error.message} TODO: エラーメッセージ表示をいい感じにする
        </div>
      ) : (
        <TodoColumnBoard todos={data.result} />
      )}
      {}
    </Fragment>
  );
};
