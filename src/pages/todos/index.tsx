import React from "react";
import { TodosListPage } from "~/components/pages/Todos/TodosListPage";
import { NextPageWithConfig } from "~/types/layout";

// TODO: セッション切れたらエラーのトースト出してログイン画面に遷移する
const Page: NextPageWithConfig = () => {
  return <TodosListPage />;
};

export default Page;
