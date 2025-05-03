{
  //function with generic

  const createArray = <T>(para: T): T[] => {
    return [para];
  };
  const value = createArray<string>("John Doe");
  console.log(value);
  const value1 = createArray<number>(12345);
  console.log(value1);
  const value2 = createArray<boolean>(true);
  console.log(value2);
  type User = {
    name: string;
    age: number;
  };
  const value3 = createArray<User>({
    name: "John Doe",
    age: 30,
  });
  console.log(value3);

  //   const add = <T extends number, Y extends number>(
  //     num1: T,
  //     num2: Y
  //   ): number => {
  //     return num1 * num2;
  //   };
  //   console.log(add<number, number>(10, 5));

  const add = <T>(num1: T) => {
    return num1;
  };
  const add1 = add<number>(10);
  console.log(add1);
  const add2 = add<string>("John Doe");
  console.log(add2);

  const doubleArray = <T extends number>(arr: T[]) => {
    const result = arr.map((item) => item * 2);
    console.log(result);
  };
  doubleArray<number>([1, 2, 3, 4, 5]);

  const logItems = <T>(item: T[]): void => {
    item.forEach((item) => {
      console.log(item + " hello");
    });
  };
  logItems<string>(["apple", "banana", "cherry"]);

  const addCourse = <T>(student: T) => {
    const courseName = "Next Level Web Development";
    return {
      ...student,
      courseName,
    };
  };
  interface Student1 {
    name: string;
    email: string;
  }
  const student1 = addCourse<Student1>({
    name: "Mukit Hossen",
    email: "mukit@gmail.com",
  });
  console.log(student1);

  interface Student2 {
    name: string;
    email: string;
    role: string;
  }

  const student2 = addCourse<Student2>({
    name: "Raju Hossain",
    email: "raju@gamil.com",
    role: "junior developer",
  });
  console.log(student2);
}
