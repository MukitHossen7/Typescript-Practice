//Spread Operators
{
  const schoolFriend: string[] = ["John", "Jane", "Jim"];
  const collageFriend: string[] = ["Jack", "Jill", "Joe"];
  schoolFriend.push(...collageFriend);
  console.log(schoolFriend);
  const allFriends: string[] = [...schoolFriend, ...collageFriend];
  console.log(allFriends);

  // Rest Operators
  const myFriends = (
    name1: string,
    name2: string,
    ...name3: string[]
  ): void => {
    console.log(`My friends are ${name1} and ${name2}`);
    console.log(`My other friends are ${name3}`);
  };
  myFriends("John", "Jane", "Jim", "Jack", "Jill", "Joe");

  const myFriends2 = (...name: string[]): void => {
    console.log(name);
    name.forEach((friend: string) => {
      console.log(`My friend is ${friend}`);
    });
  };
  myFriends2("John", "Jane", "Jim", "Jack", "Jill", "Joe");

  //spread operator with object
  const user: {
    name: string;
    age: number;
  } = {
    name: "Mukit",
    age: 25,
  };
  const copyUser = {
    ...user,
    age: 30,
    address: "Dhaka",
  };
  console.log(copyUser);
  console.log(user);

  const person: { name: string } = {
    name: "Mukit",
  };
  const job: {
    role: string;
    company: string;
  } = {
    role: "Developer",
    company: "ABC",
  };
  const personWithJob = {
    ...person,
    ...job,
  };
  console.log(personWithJob);
}
