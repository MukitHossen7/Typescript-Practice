{
  //
  type Name = string;
  const name: Name = "John Doe";
  console.log(name);

  type Person1 = {
    name: string;
    age: number;
    isMarried: boolean;
  };

  interface Person2 {
    name: string;
    age: number;
    isMarried: boolean;
  }
  const person1: Person2 = {
    name: "Alice",
    age: 30,
    isMarried: true,
  };
  console.log(person1);

  type MixArray = (string | number)[];
  interface MixArray2 {
    [index: number]: string | number;
  }
  const mixArray: MixArray2 = ["apple", "banana", "cherry", 1, 2, 3];
  console.log(mixArray);
  //
}
