export type Todo = {
  id: number;
  content: string;
  phase: "NotStarted" | "InProgress" | "Completed";
};
