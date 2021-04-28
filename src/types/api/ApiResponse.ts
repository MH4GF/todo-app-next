export type ApiResponse<T> =
  | {
      result: T;
    }
  | {
      errors: string[];
    };
