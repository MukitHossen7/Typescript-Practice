export class Person {
  private name: string;
  private age: number | string;
  private country: string;
  constructor(name: string, age: number | string, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  user(): string {
    return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
  }
}
