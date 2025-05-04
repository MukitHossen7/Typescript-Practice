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
  type PartialPerson = Partial<Person>;
  const partialPerson: PartialPerson = {
    name: "Mukit",
  };
  console.log(partialPerson);
  console.log(requiredPerson.age);
  type ReadOnlyPerson = Readonly<Person>;
  const readOnlyPerson: ReadOnlyPerson = {
    name: "Hello",
    age: 22,
    isSingle: true,
    contactNo: "4455555",
    email: "he@gmail.com",
  };
  console.log(readOnlyPerson.age);
  // readOnlyPerson.age = 50

  type Obj = {
    a: string;
    b: string;
  };

  type RecordType = Record<string, string>;
  const obj: RecordType = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
  const myObject: Record<string, unknown> = {};
  myObject.name = "Mukit";
  myObject.age = 12;
  myObject.isMarried = true;

  console.log(myObject);
}
