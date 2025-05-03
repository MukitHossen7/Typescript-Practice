{
  type Person = {
    name: string;
    address: string;
    hairAndEyeColor: "Black" | "Brown" | "Blue" | "Gray";
    incomeExpense: {
      income: number;
      expense: number;
    };
    hobbies: string;
    familyMembers: number;
    job: string;
    skills: string[];
    maritalStatus: boolean;
    friends: string[];
  };
  const person: Person = {
    name: "Raju Islam",
    address: "Dhaka",
    hairAndEyeColor: "Black",
    incomeExpense: {
      income: 25000,
      expense: 20000,
    },
    hobbies: "Football",
    familyMembers: 4,
    job: "MERN Developer",
    skills: ["JavaScript", "Typescript", "Next.js"],
    maritalStatus: false,
    friends: ["joy", "ranje", "sifat"],
  };
  console.log(person);
}
