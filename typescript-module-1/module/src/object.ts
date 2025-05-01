const individual: {
  position: "Full Stack Developer"; //literal type
  firstName: string;
  middleName?: string; // optional type type
  lastName: string;
  age: number;
  isMarried: boolean;
} = {
  position: "Full Stack Developer",
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isMarried: false,
};

console.log(individual);
console.log(individual.position);
