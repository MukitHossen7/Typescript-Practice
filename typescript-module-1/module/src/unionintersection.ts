{
  type MixArray = (string | number)[];
  type Person = {
    name: string;
    age: number | string;
    phoneNumber?: string;
    gender: "Male" | "Female" | "Other";
  };

  // Union
  const mixArray: MixArray = [
    "John",
    25,
    "Doe",
    30,
    "Alice",
    22,
    "Bob",
    28,
    "Charlie",
    35,
    "David",
    40,
  ];

  console.log(mixArray);

  let name: string | number = "John Doe";
  name = 20;
  console.log(name);
  const person: Person = {
    name: "John Doe",
    age: 25,
    phoneNumber: "123-456-7890",
    gender: "Male",
  };
  console.log(person);
}
