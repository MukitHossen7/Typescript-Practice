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

  // Intersection

  type Student1 = {
    name: string;
    age: number;
  };
  type Student2 = {
    studentId: number;
    gender: "Male" | "Female" | "Other";
  };
  type Student = Student1 & Student2;
  const student: Student = {
    name: "Alice",
    age: 20,
    studentId: 12345,
    gender: "Female",
  };
  console.log(student);
  type Employee = {
    name: string;
    age: number;
    position: string;
  };
  type Manager = {
    name: string;
    skills: string[];
  };
  type ManagerEmployee = Employee & Manager;
  const managerEmployee: ManagerEmployee = {
    name: "John Doe",
    age: 30,
    position: "Manager",
    skills: ["Leadership", "Communication"],
  };
  console.log(managerEmployee);
}
