{
  //Example Polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping 8 hour per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping 7 hour per day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping 6 hour per day`);
    }
  }
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  //   person1.getSleep();
  //   person2.getSleep();
  //   person3.getSleep();

  const checkGetSleep = (obj: Person) => {
    obj.getSleep();
  };
  checkGetSleep(person1);
  checkGetSleep(person2);
  checkGetSleep(person2);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * (this.radius * this.radius);
    }
  }
  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width + this.height;
    }
  }
  const shape = new Shape();
  const circle = new Circle(20);
  const rectangle = new Rectangle(200, 100);

  const showShape = (obj: Shape) => {
    console.log(obj.getArea());
  };
  showShape(rectangle);

  class Animal {
    makeSound() {
      console.log("some animale create sound");
    }
  }
  class Dog extends Animal {
    makeSound() {
      console.log("barking the dog");
    }
  }
  class Cat extends Animal {
    makeSound() {
      console.log("Meaow the Cat");
    }
  }
  const animale1 = new Animal();
  const animale2 = new Dog();
  const animale3 = new Cat();
  const createSound = (sound: Animal) => {
    sound.makeSound();
  };
  createSound(animale3);

  //
}
