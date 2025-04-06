let names: any = "John Doe";
console.log(names);
names = 12345;
console.log(names);
names = true;
console.log(names);

const arr: any[] = [1, 2, 3, 4, 5];
arr.push("Hello");
arr.push(true);
console.log(arr);

const obj: { name: any; age: any; isActive: any } = {
  name: "John Doe",
  age: 30,
  isActive: true,
};
obj.name = 25;
console.log(obj);
