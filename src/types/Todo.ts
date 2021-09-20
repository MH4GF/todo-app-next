import { Phase } from "~/types/Phase";
import { User } from "~/types/User";

export type Todo = {
  id: string;
  content: string;
  phase: Phase;
  user: User;
};
