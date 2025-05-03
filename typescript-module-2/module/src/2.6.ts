{
  //Constraint Generics
  const addCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const courseName = "Next Level Web Development";
    return {
      ...student,
      courseName,
    };
  };
  //   interface Student1 {
  //     name: string;
  //     email: string;
  //   }
  const student1 = addCourse({
    id: 1,
    name: "Mukit Hossen",
    email: "mukit@gmail.com",
  });
  console.log(student1);

  const student2 = addCourse({
    id: 2,
    name: "Raju Hossain",
    email: "raju@gmail.com",
    hobby: "cricket",
  });
  console.log(student2);
  interface Student3 {
    id: number;
    name: string;
    email: string;
    role: string;
  }

  const student3 = addCourse<Student3>({
    id: 3,
    name: "Raju Hossain",
    email: "raju@gamil.com",
    role: "junior developer",
  });
  console.log(student3);
}
