// Problem 1
// function formatString(input: string, toUpper?: boolean): string {
//   if (input && toUpper === false) {
//     return input.toLocaleLowerCase();
//   } else {
//     return input.toLocaleUpperCase();
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
