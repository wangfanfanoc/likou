type Pick_fc<T, P extends keyof T> = {
  [p in P]: T[p];
};

type bb = {
  a: 1;
  b: 2;
  c: 3;
};
type aa = Pick_fc<bb, "a" | "b">;
