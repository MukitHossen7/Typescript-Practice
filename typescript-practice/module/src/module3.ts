{
  //Class
  class Person {
    name: string;
    age: number;
    address: {
      capital: string;
      district: string;
    };
    isMarried: boolean;
    constructor(
      name: string,
      age: number,
      address: {
        capital: string;
        district: string;
      },
      isMarried: boolean
    ) {
      this.name = name;
      this.age = age;
      (this.address = {
        capital: address.capital,
        district: address.district,
      }),
        (this.isMarried = isMarried);
    }
    sleep(value: number): void {
      console.log(`${this.name} is sleeping ${value} hour per day`);
    }
  }
  const raju = new Person(
    "Raju",
    26,
    { capital: "Dhaka", district: "Nohakhali" },
    false
  );
  raju.sleep(8);

  //Inheritance
  class Student extends Person {
    constructor(
      name: string,
      age: number,
      address: {
        capital: string;
        district: string;
      },
      isMarried: boolean,
      public email: string,
      public role: string
    ) {
      super(name, age, address, isMarried);
    }
    identity() {
      console.log(
        `My Name is ${this.name}. I am a student. I am learning ${this.role}. I am ${this.isMarried} person`
      );
    }
  }

  const mim = new Student(
    "Min",
    25,
    { capital: "Dhaka", district: "Narsingdi" },
    false,
    "mim@gmail.com",
    "Frontend Developer"
  );
  mim.sleep(10);
  mim.identity();
}
