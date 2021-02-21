const input = document.getElementById("input");

const checkNumber = () => {
    input.addEventListener("focusout", () => {
        const value = input.value;
        if (isNaN(value)) input.value = '';
    })
};

checkNumber();