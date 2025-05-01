"use strict";
//Spread Operators
{
    const schoolFriend = ["John", "Jane", "Jim"];
    const collageFriend = ["Jack", "Jill", "Joe"];
    schoolFriend.push(...collageFriend);
    console.log(schoolFriend);
    const allFriends = [...schoolFriend, ...collageFriend];
    console.log(allFriends);
    // Rest Operators
    const myFriends = (name1, name2, ...name3) => {
        console.log(`My friends are ${name1} and ${name2}`);
        console.log(`My other friends are ${name3}`);
    };
    myFriends("John", "Jane", "Jim", "Jack", "Jill", "Joe");
    const myFriends2 = (...name) => {
        console.log(name);
        name.forEach((friend) => {
            console.log(`My friend is ${friend}`);
        });
    };
    myFriends2("John", "Jane", "Jim", "Jack", "Jill", "Joe");
    //spread operator with object
    const user = {
        name: "Mukit",
        age: 25,
    };
    const copyUser = Object.assign(Object.assign({}, user), { age: 30, address: "Dhaka" });
    console.log(copyUser);
    console.log(user);
    const person = {
        name: "Mukit",
    };
    const job = {
        role: "Developer",
        company: "ABC",
    };
    const personWithJob = Object.assign(Object.assign({}, person), job);
    console.log(personWithJob);
}
