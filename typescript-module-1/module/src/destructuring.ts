{
  const person: {
    name: string;
    age: number;
    address: string;
    phone: string;
  } = {
    name: "Mukit",
    age: 25,
    address: "Dhaka",
    phone: "01700000000",
  };
  //   const { name, phone } = person;
  //   console.log(name);
  //   console.log(phone);

  const person2: {
    name: string;
    address: {
      city: string;
      country: string;
      zip: number;
      job: {
        role: string;
        company: string;
      };
    };
    age: number;
    phone: string;
  } = {
    name: "Mim",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      zip: 1212,
      job: {
        role: "Developer",
        company: "ABC",
      },
    },
    age: 25,
    phone: "01700000000",
  };

  const {
    name,
    address: {
      country,
      job: { role },
    },
  } = person2;
  console.log(name);
  console.log(country);
  console.log(role);
  const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [, , , ...a] = numberArray;
  console.log(a); // 5
}
