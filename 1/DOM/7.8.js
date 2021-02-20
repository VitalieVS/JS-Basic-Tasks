const orderedList = document.querySelector("ol");
const text = document.getElementById("myInput");
const submit = document.getElementById("submit");

const resetInput = () => {
    submit.setAttribute("disabled", "disabled");
    text.value = "";
};

const inputHandler = () => {
    text.addEventListener("input", () => {
        (!text.value) ?
            submit.setAttribute("disabled", "disabled")
            : submit.removeAttribute("disabled");
    })
};

const buttonHandler = () => {
    submit.addEventListener("click", () => {
        const li = document.createElement("li");
        li.innerText = text.value;
        li.addEventListener("click", ev => {
            alert(ev.target.innerText);
        });
        orderedList.appendChild(li);
        resetInput();
    })
};

document.addEventListener('DOMContentLoaded', () => {
    resetInput();
    buttonHandler();
    inputHandler();
});
