{
  //Example: 1

  //   const getName = <T extends { name: string }>(person: T) => {
  //     console.log(person.name);
  //     if ("age" in person) {
  //       console.log(person.age);
  //     }
  //   };

  //   getName<{ name: string; age: number }>({ name: "Mukit Hossen", age: 25 });
  //   getName<{ name: string; age: number }>({ name: "Developer", age: 25 });

  //Example : 2
  //   interface HasName {
  //     role: string;
  //   }
  //   const getName = <T extends HasName>(person: T) => {
  //     console.log(person.role);
  //     if ("age" in person) {
  //       console.log(person.age);
  //     }
  //   };

  //   getName<{ role: string; age: number }>({ role: "Mukit Hossen", age: 25 });

  type Student = {
    name: string;
    age: number;
    email: string;
    isMarried: boolean;
    address: {
      present: string;
      permanent: string;
    };
  };
  const students = <T, Y extends keyof T>(studentsObj: T, key: Y) => {
    console.log(studentsObj);
    console.log(studentsObj[key]);
  };
  const student1 = {
    name: "Mukit Hossen",
    age: 25,
    email: "mukit@example.com",
    isMarried: true,
    address: {
      present: "Dhaka, Bangladesh",
      permanent: "Kushtia, Bangladesh",
    },
  };
  students(student1, "name");
}
