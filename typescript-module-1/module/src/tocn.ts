{
  //Ternary Operator
  let age: number = 17;
  const checkAge = age >= 18 ? "Adult" : "Minor";
  console.log(checkAge);

  // Nullish Coalescing Operator
  const isUser: null | undefined | string = "Leonardo";
  const checkValid = isUser ?? "He is Hacker";
  console.log(checkValid);
  type Person = {
    name: string;
    age: number | string;
    email?: string;
    phoneNumber?: string;
  };
  const person: Person = {
    name: "John Doe",
    age: 25,
    email: "john@gmail.com",
  };
  console.log(person);
}
