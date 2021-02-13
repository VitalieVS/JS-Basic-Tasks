const square = value => Math.pow(2, value);

const convert = (square, array)  => {
    const arr = [];
    for (const value of array) {
        arr.push(square(value));
    }
    return arr;
};

let arr = [1, 2, 3];
console.log(convert(square, arr)); // [1, Objects, 9]
console.log(arr); // [1, SyntaxJS, Arrays]
