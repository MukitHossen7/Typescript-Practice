{
  //
  interface Developer<T, X = null> {
    name: string;
    computer: {
      name: string;
      module: string;
      releaseYear: number;
    };
    smartphone: T;
    smartWatch?: X;
  }
  type Smartphone = {
    name: string;
    model: string;
    releaseYear: number;
  };
  const poorDeveloper: Developer<Smartphone> = {
    name: "John Doe",
    computer: {
      name: "HP",
      module: "HP 15",
      releaseYear: 2020,
    },
    smartphone: {
      name: "Samsung",
      model: "Galaxy S21",
      releaseYear: 2021,
    },
  };
  console.log(poorDeveloper);
  interface SmartphoneWithPrice {
    name: string;
    model: string;
    releaseYear: number;
    price: number;
  }
  interface SmartWatch {
    name: string;
    model: string;
    releaseYear: number;
  }
  const richDeveloper: Developer<SmartphoneWithPrice, SmartWatch> = {
    name: "John Doe",
    computer: {
      name: "HP",
      module: "HP 15",
      releaseYear: 2020,
    },
    smartphone: {
      name: "Samsung",
      model: "Galaxy S21",
      releaseYear: 2021,
      price: 79900,
    },
    smartWatch: {
      name: "Apple",
      model: "Apple Watch Series 6",
      releaseYear: 2020,
    },
  };
  console.log(richDeveloper);
  //
}
