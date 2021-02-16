const person1 = {
    name: "Person1",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
};

const person2 = {
    name: "Person2",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
};

intersection = (firstObj, secondObj, uniqueValues = {}) => {
    for (const key of Object.keys(firstObj)) {
        if (firstObj[key] === secondObj[key]) {
            result[key] = firstObj[key];
        }
    }
    return uniqueValues;
};

console.log(intersection(person1, person2));