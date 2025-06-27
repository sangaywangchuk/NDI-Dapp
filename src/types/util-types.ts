export type Nullable = null | undefined;

export type Maybe<T> = T | Nullable;

export type Definite<T> = Exclude<T, Nullable>;

// complete the type defition DefiniteObject to accept a generic object T with values of Maybe and convert it to a Definite
export type DefiniteObject<T> = {
  [K in keyof T]: Definite<T[K]>;
};
