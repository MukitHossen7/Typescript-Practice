// Problem 1
// function formatString(input: string, toUpper?: boolean): string {
//   if (input && toUpper === false) {
//     return input.toLowerCase();
//   } else {
//     return input.toUpperCase();
//   }
// }
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

// Problem 2:
// function filterByRating(
//   items: { title: string; rating: number }[]
// ): { title: string; rating: number }[] {
//   const filterRating = items.filter((item) => item.rating >= 4);
//   return filterRating;
// }
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "Book D", rating: 5.5 },
//   { title: "Book E", rating: 3.9 },
//   { title: "Book F", rating: 4.0 },
//   { title: "Book G", rating: 4.1 },
// ];
// console.log(filterByRating(books));

// Problem 3:
// function concatenateArrays<T>(...arrays: T[][]): T[] {
//   let concatenatesArrays: T[] = [];
//   for (let array of arrays) {
//     concatenatesArrays.push(...array);
//   }
//   return concatenatesArrays;
// }
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// console.log(concatenateArrays(["a", "b"], ["c"]));

// Problem 4:

// class Vehicle {
//   private make: string;
//   private year: number;
//   constructor(make: string, year: number) {
//     this.make = make;
//     this.year = year;
//   }
//   getInfo(): string {
//     return `Make: ${this.make}, Year: ${this.year}`;
//   }
// }
// class Car extends Vehicle {
//   private model: string;
//   constructor(make: string, year: number, model: string) {
//     super(make, year);
//     this.model = model;
//   }
//   getModel(): string {
//     return `Model: ${this.model}`;
//   }
// }
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

//Problem 5:
// function processValue(value: string | number): number {
//   if (typeof value === "string") {
//     return value.length;
//   } else {
//     return value * 2;
//   }
// }
// console.log(processValue("hello"));
// console.log(processValue(10));

// Problem 6:
// interface Product {
//   name: string;
//   price: number;
// }

// function getMostExpensiveProduct(products: Product[]): Product | null {
//   if (products.length > 0) {
//     const sorted = products.sort((a, b) => b.price - a.price);
//     return sorted[0];
//   }
//   return null;
// }

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
//   { name: "MaceBook", price: 5000000 },
//   { name: "Laptop", price: 50000 },
//   { name: "Mobile", price: 150000 },
// ];

// console.log(getMostExpensiveProduct(products));
// console.log(getMostExpensiveProduct([]));

//Problem 7:

// enum Day {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }
// function getDayType(day: Day): string {
//   if (day === Day.Sunday || day === Day.Saturday) {
//     return "Weekend";
//   } else {
//     return "Weekday";
//   }
// }

// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Tuesday));
// console.log(getDayType(Day.Wednesday));
// console.log(getDayType(Day.Thursday));
// console.log(getDayType(Day.Friday));
// console.log(getDayType(Day.Saturday));

// console.log(getDayType(Day.Sunday));

//Problem 8:
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n >= 0) {
        resolve(n * n);
      } else {
        reject("Error : Negative number not allowed");
      }
    }, 1000);
  });
}
// squareAsync(3).then(console.log);
squareAsync(-2).catch(console.error);
