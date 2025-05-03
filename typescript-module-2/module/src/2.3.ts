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

  type MixArray<T, X, Y> = Array<T | X | Y>;
  const mixArray: MixArray<string, number, boolean> = [
    1,
    "apple",
    true,
    2,
    "banana",
    false,
  ];
  console.log(mixArray);

  //// Generic type with multiple types
  type User = {
    name: string;
    age: number;
    isMarried: boolean;
  };
  const user: Generic<User> = [
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
  interface GenericObj {
    name: string;
    email: string;
  }
  const mixTuple: GenericTuple<number, GenericObj> = [
    1245,
    { name: "John", email: "john@gmail.com" },
  ];
  console.log(mixTuple);

  type String<T> = T;
  const str: String<string> = "Hello World";
  console.log(str);

  //
}
