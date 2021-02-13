const sumInputNumbers = () => {
    let inputNumber = 0;
    const numbers = [];

    while (!(inputNumber == null || isNaN(inputNumber))) {
        let inputText = prompt("give number");
        inputNumber = parseInt(inputText);

        if (!isNaN(inputNumber)) {
            numbers.push(inputNumber);
        }
    }

    return numbers.reduce((accumulator, value) => {
        return accumulator + value;
    })
};

console.log(sumInputNumbers());