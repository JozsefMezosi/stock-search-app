export type KeysMap<T extends string | number | symbol> = {
  [K in T]: K;
};
