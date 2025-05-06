{
  //   interface User {
  //     name: string;
  //     age: number;
  //     address: {
  //       district: string;
  //     };
  //   }
  //   const user: User = {
  //     name: "Mukit",
  //     age: 25,
  //     address: {
  //       district: "Dhaka",
  //     },
  //   };
  //   type User1 = {
  //     name: string;
  //     age: number;
  //   };
  //   type Address = {
  //     address: {
  //       district: string;
  //       capital: string;
  //     };
  //   };
  //   type User = User1 & Address;
  //   const user: User = {
  //     name: "Mukit",
  //     age: 25,
  //     address: {
  //       district: "Dhaka",
  //       capital: "Dhaka",
  //     },
  //   };

  interface User1 {
    name: string;
    age: number;
  }
  //   type Address = {
  //     address: {
  //       district: string;
  //       capital: string;
  //     };
  //   };
  interface User extends User1 {
    address: {
      district: string;
      capital: string;
    };
  }
  const user: User = {
    name: "Mukit",
    age: 25,
    address: {
      district: "Dhaka",
      capital: "Dhaka",
    },
  };
  console.log(user);
}
