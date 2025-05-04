{
  // Pick   Omit  Required Partial  ReadOnly Record

  type Person = {
    name: string;
    age: number;
    email?: string;
    isSingle: boolean;
    contactNo: string;
  };

  type PickPerson = Pick<Person, "contactNo" | "isSingle">;
  const pickObj: PickPerson = {
    contactNo: "0123458966",
    isSingle: true,
  };
  console.log(pickObj);
}
