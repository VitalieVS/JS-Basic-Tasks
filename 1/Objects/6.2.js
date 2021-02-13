let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

if (Object.keys(salaries).length === 0) {
    console.log(0);
} else {
    console.log(Object.values(salaries).reduce((accumulator, value) => {
        return accumulator + value;
    }));
}

