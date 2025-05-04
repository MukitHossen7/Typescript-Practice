{
  //use typeof guard
  const typeofFunction = (value: string | number): string | number => {
    if (typeof value === "string") {
      return value.toLocaleUpperCase();
    } else {
      return value * value;
    }
  };
  console.log(typeofFunction("Hello"));
  console.log(typeofFunction(5));

  type CheckValue = string | number;
  const typeofFunction2 = (
    value1: CheckValue,
    value2: CheckValue
  ): CheckValue => {
    if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 + value2;
    } else {
      return value1.toString() + value2.toString();
    }
  };
  console.log(typeofFunction2(2, 8));
  console.log(typeofFunction2(2, "8"));

  // in Guard
  type Student = {
    name: string;
    age: number;
    studentId: number;
  };
  type Teacher = {
    name: string;
    age: number;
    role: string;
  };
  const identifyPerson = (obj: Student | Teacher): string => {
    if ("studentId" in obj) {
      return `${obj.name} is a student.Her/Him student Id ${obj.studentId}`;
    } else {
      return `${obj.name} is a Teacher.He/she is a ${obj.role} Teacher`;
    }
  };
  console.log(identifyPerson({ name: "Mim", age: 24, studentId: 5213 }));
  console.log(identifyPerson({ name: "Titly", age: 28, role: "Math" }));

  //
}
