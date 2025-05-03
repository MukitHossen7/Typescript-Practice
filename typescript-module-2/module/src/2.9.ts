{
  //
  type checkString<T> = T extends string ? "Yes" : "No";
  type A = checkString<string>;
  type B = checkString<boolean>;

  //
}
