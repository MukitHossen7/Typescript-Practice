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
  interface HasName {
    role: string;
  }
  const getName = <T extends HasName>(person: T) => {
    console.log(person.role);
    if ("age" in person) {
      console.log(person.age);
    }
  };

  getName<{ role: string; age: number }>({ role: "Mukit Hossen", age: 25 });
}
