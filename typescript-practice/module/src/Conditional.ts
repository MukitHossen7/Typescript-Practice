{
  type isString<T> = T extends string ? "Yes" : "No";
  type A = isString<string>;
  type B = isString<number>;
  type C = isString<boolean>;
}
