export type ApiState<T> =
  | {
      type: "loading";
    }
  | {
      type: "error";
      errorMessage: string | null;
    }
  | {
      type: "success";
      result: T;
    };
