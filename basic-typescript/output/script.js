// type userInfo = {
//   name: string;
//   age: number | string;
//   email: string;
// };
// let add: (a: number, b: number) => number;
// add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3)); // Output: 5"));
// const person: userInfo = {
//   name: "John",
//   age: 30,
//   email: "mim@gmail.com",
// };
// console.log(person);
const objectFunction = (obj) => {
    const output = `Name: ${obj.name}, Age: ${obj.age}, Is Student: ${obj.isStudent}, Hobbies: ${obj.hobbies.join(", ")}, Address: ${obj.address.street}, ${obj.address.city}`;
    console.log(output);
};
objectFunction({
    name: "John",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming"],
    address: {
        street: "123 Main St",
        city: "New York",
    },
});
console.log("Hello World");
export {};
