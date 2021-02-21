const input = document.getElementById("input");

const inputHandler = () => {
    input.addEventListener("keyup", () => {
        input.value =
            input.value.replace(/[^0-9\.\/]/g, '');
    })};

inputHandler();
