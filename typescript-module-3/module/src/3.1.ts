{
  //   class Person {
  //     name: string;
  //     age: number;
  //     playGame: string;

  //     constructor(name: string, age: number, playGame: string) {
  //       this.name = name;
  //       this.age = age;
  //       this.playGame = playGame;
  //     }
  //     play() {
  //       return `My name is ${this.name}. My age is ${this.age}.I am playing ${this.playGame}`;
  //     }
  //   }
  class Person {
    constructor(
      public name: string,
      public age: number,
      public playGame: string
    ) {}
    play() {
      return `My name is ${this.name}. My age is ${this.age}.I am playing ${this.playGame}`;
    }
  }

  const raju = new Person("Raju", 25, "football");
  console.log(raju);

  console.log(raju.age);
  console.log(raju.play());

  const ranju = new Person("Ranju", 22, "cricket");
  console.log(ranju);
  console.log(ranju.name);
  console.log(ranju.play());
}
