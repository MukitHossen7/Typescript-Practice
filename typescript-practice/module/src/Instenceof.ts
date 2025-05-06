{
  class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number,
      public color: string
    ) {}
    startEngine() {
      console.log("Engine started!");
    }
    stopEngine() {
      console.log("Engine stopped!");
    }
  }
  class Person {
    constructor(
      public name: string,
      public age: number,
      public gender: "Male" | "Female",
      public isMarried: boolean
    ) {}
    greet() {
      console.log(`Hi, my name is ${this.name}.`);
    }
    celebrateBirthday() {
      this.age += 1;
      console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
  }
  const handleCheckInstance = (value: Car | Person) => {
    if (value instanceof Car) {
      value.startEngine();
      value.stopEngine();
    } else {
      value.greet();
      value.celebrateBirthday();
    }
  };
  const john = new Person("John Doe", 30, "Male", false);
  const car = new Car("Toyota", "Corolla", 2022, "Blue");

  handleCheckInstance(car);
}
