{
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("i am making sound");
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`${this.species} is Barking`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log(`${this.species} is meowing`);
    }
  }
  const dog = new Dog("Dog Bhai", "Dog");
  const cat = new Cat("Cat Bhai", "Cat");

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Cat | Dog) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    }
  };
  getAnimal(dog);
}
