let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const sum = Object.keys(salaries).length === 0 ? 0 : Object.values(salaries).reduce((accumulator, value) => {
    return accumulator + value;
});

console.log(sum);
