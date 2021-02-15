const user1 = {
    name: "User1",
    age: 123
};

const user2 = Object.assign({}, user1);
user2.name = "User2";
user2.age = 321;
console.log("first:");
console.log(user1);
console.log("Second:");
console.log(user2);

