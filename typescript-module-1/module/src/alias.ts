{
  type Student = {
    name: string;
    age: number;
    major?: string;
    gender: "Male" | "Female" | "Other";
  };

  const student1: Student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    gender: "Male",
  };

  const student2: Student = {
    name: "Jane Smith",
    age: 22,
    gender: "Female",
  };

  type Name = string;
  const studentName: Name = "Alice";

  type Add = (a: number, b: number) => number;

  const add: Add = (a, b) => {
    return a + b;
  };
  console.log(add(5, 10)); // 15
}
