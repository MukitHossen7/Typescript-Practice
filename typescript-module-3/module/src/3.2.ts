{
  //Inheritance In Opp
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    sleep(numOfSleep: number): void {
      console.log(`${this.name} is sleeping ${numOfSleep}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const mukitStudent = new Student("Muikit", 28, "Naogaon");
  console.log(mukitStudent);
  console.log(mukitStudent.address);
  mukitStudent.sleep(7);

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(getOfClass: number): void {
      console.log(
        `${this.name} take class ${getOfClass}.He is ${this.designation} Teacher`
      );
    }
  }
  const teacher1 = new Teacher("Joy", 35, "Joypurhat", "Math");
  console.log(teacher1);
  console.log(teacher1.designation);
  teacher1.takeClass(4);
  teacher1.sleep(10);
  //
}
