export class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    user() {
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
    }
}
console.log("hello");
