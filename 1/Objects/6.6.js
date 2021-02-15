const person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts : {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
};
console.log("Initial");
console.log(person);
person.contacts.phone = "+37312345678";

delete person.address;

console.log(person);