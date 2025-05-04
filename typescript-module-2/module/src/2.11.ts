{
  // Pick   Omit  Required Partial  ReadOnly Record

  type Person = {
    name: string;
    age: number;
    email?: string;
    isSingle: boolean;
    contactNo?: string;
  };

  type PickPerson = Pick<Person, "contactNo" | "isSingle">;
  const pickObj: PickPerson = {
    contactNo: "0123458966",
    isSingle: true,
  };
  console.log(pickObj);

  type OmitPerson = Omit<Person, "email">;
  const omitPerson: OmitPerson = {
    name: "Hello",
    age: 22,
    isSingle: true,
    contactNo: "4455555",
  };
  console.log(omitPerson);

  type RequiredPerson = Required<Person>;
  const requiredPerson: RequiredPerson = {
    name: "Hello",
    age: 22,
    isSingle: true,
    contactNo: "4455555",
    email: "he@gmail.com",
  };
  console.log(requiredPerson);
}
