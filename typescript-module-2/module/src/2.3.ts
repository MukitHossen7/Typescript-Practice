{
  // Generic type

  type Generic<T> = Array<T>;
  // const numbers: number[] = [1, 2, 3, 4, 5];
  const numbers: Generic<number> = [1, 2, 3, 4, 5];
  console.log(numbers);
  //   const strings: string[] = ["apple", "banana", "cherry"];
  const strings: Generic<string> = ["apple", "banana", "cherry"];
  console.log(strings);
  //   const booleans: boolean[] = [true, false, true];
  const booleans: Generic<boolean> = [true, false, true];
  console.log(booleans);

  //// Generic type with multiple types
  type GenericArrayOfObjects<T> = Array<T>;
  const user: Generic<{
    name: string;
    age: number;
    isMarried: boolean;
  }> = [
    {
      name: "John",
      age: 30,
      isMarried: true,
    },
    {
      name: "Alice",
      age: 25,
      isMarried: false,
    },
  ];
  console.log(user);

  //Generic Tuple
  type GenericTuple<T, U> = [T, U];
  const names: GenericTuple<string, string> = ["John", "Doe"];
  console.log(names);
  const mixTuple: GenericTuple<number, { name: string; email: string }> = [
    1245,
    { name: "John", email: "john@gmail.com" },
  ];
  console.log(mixTuple);
  //
}
