const dividers = number => {
    const result = [];
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    return result;
};

console.log(dividers(8));