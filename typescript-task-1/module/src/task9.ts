{
  type Employee = {
    name: string;
    address?: {
      city?: string;
      street?: string;
    };
  };
  const emp1: Employee = {
    name: "Mukit",
    address: {
      city: "Dhaka",
      street: "Main Road",
    },
  };

  const emp2: Employee = {
    name: "Raju", // এখানে address নেই
  };

  function getEmployeeCity(employee: Employee): string | undefined {
    return employee?.address?.city;
  }
  console.log(getEmployeeCity(emp1));
  console.log(getEmployeeCity(emp2));
}
