sumInputNumbers = (numbers = [],  inputNumber = 0) => {
    while (!(inputNumber == null || isNaN(inputNumber))) {
        let inputText = prompt("give number");
        inputNumber = parseInt(inputText);

        if (!isNaN(inputNumber)) {
            numbers.push(inputNumber);
        }
    }

    return numbers.reduce((accumulator, value) => {
        return accumulator + value;
    });
};

console.log(sumInputNumbers());