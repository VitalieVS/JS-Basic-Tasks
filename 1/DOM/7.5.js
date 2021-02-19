let input;
let incBtn;
let decBtn;

const addElements = () => {
    const elements = [
        {
            id: "decBtn",
            type: "button",
            text: "-"
        },
        {
            id: "myInput",
            type: "input",
            text: ""
        },
        {
            id: "incBtn",
            type: "button",
            text: "+"
        }
    ];
    const curryingID = (tag, id) => text => `<${tag} id="${id}">${text}</${tag}>`;
    const out = document.getElementsByTagName("body")[0];

    elements.forEach((elementsItem) => {
        const elem = curryingID(elementsItem.type, elementsItem.id);
        const text = elem(elementsItem.text);
        out.innerHTML += text;
    });
    input = document.getElementById("myInput");
    input.setAttribute("readonly", "readonly");
    input.setAttribute("min", "0");
    input.setAttribute("max", "9");
    input.setAttribute("value", "0");
    input.setAttribute("type", "number");
    incBtn = document.getElementById("incBtn");
    decBtn = document.getElementById("decBtn");
};

const implementLogic = () => {
    const buttons = ["decBtn", "incBtn"];

    buttons.forEach((button) => {
        const currentBtn = document.getElementById(`${button}`);
        currentBtn.addEventListener("click", (evt) => {
            clickHandler(evt);
        })
    });
};

const clickHandler = evt => {
    (evt.target.innerText === "+") ? document.getElementById("myInput").stepUp() :
        document.getElementById("myInput").stepDown();
    checkValue();
};

const checkValue = () => {
    (input.value === "9") ? incBtn.disabled = true : incBtn.disabled = false;
    (input.value === "0") ? decBtn.disabled = true : decBtn.disabled = false;
};

window.addEventListener("DOMContentLoaded", () => {
    addElements();
    implementLogic();
});


