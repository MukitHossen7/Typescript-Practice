// Define a type for a user
type User = {
  name: string;
  age: number;
  isPremium: boolean;
};

// Create an object of type User
const user1: User = {
  name: "Mukit",
  age: 24,
  isPremium: true,
};
// Create a function that takes a User object and returns a greeting
const greetUser = (user: User): string => {
  const status = user.isPremium ? "a premium user" : "a regular user";
  return `Hello, ${user.name}! You are ${status} and your age is ${user.age}.`;
};

// Call the function and log the result
console.log(greetUser(user1));
