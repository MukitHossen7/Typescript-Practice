{
  interface Book {
    bookName: string;
    author: string;
  }

  interface Magazine {
    price: number;
    publishedYear: number;
  }

  type TUnion = Book | Magazine;
  type TIntersection = Book & Magazine;

  const obj1: TUnion = {
    bookName: "Action",
    author: "Mukit",
  };

  const obj2: TIntersection = {
    bookName: "Romantic",
    author: "Raju",
    price: 1200,
    publishedYear: 2020,
  };
  console.log(obj1);
  console.log(obj2);
}
